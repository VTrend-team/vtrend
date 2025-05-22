import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Globe = ({ size = 1.5, opacity = 0.8, speed = 0.003 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const connectionsRef = useRef<THREE.Group>(null);
  const [earthTexture, setEarthTexture] = useState<THREE.Texture | null>(null);
  const connectionsArrayRef = useRef<{ from: THREE.Vector3, to: THREE.Vector3 }[]>([]);
  
  // Set maximum number of connections to prevent performance issues
  const MAX_CONNECTIONS = 25;
  
  // Load Earth texture
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg', 
      (texture) => {
        setEarthTexture(texture);
      }
    );
    
    // Generate connection points every 2-4 seconds
    const interval = setInterval(() => {
      // Store connections in the ref to ensure we're always working with the latest data
      if (connectionsArrayRef.current.length >= MAX_CONNECTIONS) {
        // Remove the oldest connection
        connectionsArrayRef.current = connectionsArrayRef.current.slice(1);
      }
      
      // Generate random points on the sphere surface
      const from = randomSpherePoint(size);
      const to = randomSpherePoint(size);
      
      // Add new connection to our ref
      connectionsArrayRef.current = [...connectionsArrayRef.current, { from, to }];
      
      // Trigger visual update by updating connections
      updateConnections();
    }, Math.random() * 2000 + 2000);
    
    return () => {
      clearInterval(interval);
      // Clean up any remaining connections on unmount
      if (connectionsArrayRef.current) {
        connectionsArrayRef.current = [];
      }
      if (connectionsRef.current) {
        cleanupScene();
      }
    };
  }, [size]);
  
  // Helper function to get random points on sphere surface
  const randomSpherePoint = (radius: number) => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    
    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  };
  
  // Cleanup function to remove old objects from the scene
  const cleanupScene = () => {
    if (!connectionsRef.current) return;
    
    while (connectionsRef.current.children.length > 0) {
      const child = connectionsRef.current.children[0];
      
      // Properly dispose of geometries and materials to prevent memory leaks
      if (child instanceof THREE.Line) {
        const geometry = child.geometry;
        const material = child.material as THREE.Material;
        
        if (geometry) geometry.dispose();
        if (material) material.dispose();
      } else if (child instanceof THREE.Mesh) {
        const geometry = child.geometry;
        const material = child.material as THREE.Material;
        
        if (geometry) geometry.dispose();
        if (material) material.dispose();
      }
      connectionsRef.current.remove(child);
    }
  };
  
  // Function to update visual connections based on our ref data
  const updateConnections = () => {
    if (!connectionsRef.current) return;
    
    // Clean up existing connections
    cleanupScene();
    
    // Create new connections based on the data in our ref
    connectionsArrayRef.current.forEach(({ from, to }, index) => {
      const points = [];
      points.push(from);
      
      // Create a slightly curved line by adding a control point
      const mid = from.clone().add(to).divideScalar(2);
      const distance = from.distanceTo(to);
      // Push the midpoint outward to create an arc
      mid.normalize().multiplyScalar(size + distance * 0.2);
      points.push(mid);
      points.push(to);
      
      const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      
      // Calculate animation progress (newer lines are shorter)
      const age = index / connectionsArrayRef.current.length;
      const progress = Math.min(1, age * 3);
      
      // Create a shader material that animates the line growth
      const material = new THREE.LineBasicMaterial({ 
        color: new THREE.Color(0.3, 0.8, 1),
        opacity: 0.6 * progress,
        transparent: true,
      });
      
      // Create a mesh for the start and end points (small spheres)
      const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const pointMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xEAFF00,
        transparent: true,
        opacity: progress
      });
      
      const startPoint = new THREE.Mesh(pointGeometry, pointMaterial);
      startPoint.position.copy(from);
      
      const endPoint = new THREE.Mesh(pointGeometry, pointMaterial);
      endPoint.position.copy(to);
      
      const line = new THREE.Line(geometry, material);
      connectionsRef.current.add(line);
      connectionsRef.current.add(startPoint);
      connectionsRef.current.add(endPoint);
    });
  };
  
  // Rotate the globe with a tilted axis
  useFrame(() => {
    if (meshRef.current) {
      // Rotate around the y-axis (tilted upward)
      meshRef.current.rotation.y += speed;
    }
    
    if (connectionsRef.current) {
      // Make connections follow the globe rotation
      connectionsRef.current.rotation.y += speed;
    }
  });
  
  return (
    // Rotate the group by -90 degrees on the X axis to tilt the globe to the left
    <group rotation={[0, -Math.PI/2, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          ref={materialRef}
          transparent
          opacity={opacity}
          emissiveIntensity={0.1}
          color="#ffffff"
          map={earthTexture || new THREE.CanvasTexture(createGlobeTexture())}
        />
      </mesh>
      <group ref={connectionsRef} />
    </group>
  );
};

// Helper function to create the globe texture on a canvas (used as fallback)
function createGlobeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  if (context) {
    context.fillStyle = "#121212";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    context.strokeStyle = "#ffffff";  // Changed from green to white
    context.lineWidth = 0.5;
    
    // Draw latitude lines
    for (let i = 0; i < 19; i++) {
      const y = i * (canvas.height / 18);
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.globalAlpha = i % 6 === 0 ? 0.4 : 0.1;
      context.stroke();
    }
    
    // Draw longitude lines
    for (let i = 0; i < 37; i++) {
      const x = i * (canvas.width / 36);
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.globalAlpha = i % 6 === 0 ? 0.4 : 0.1;
      context.stroke();
    }
    
    // Random dots for "cities" or "points of interest"
    context.fillStyle = "#ffffff";  // Changed from yellow to white
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1 + 0.5;
      context.globalAlpha = Math.random() * 0.5 + 0.3;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }
  }
  
  return canvas;
}

export default Globe;
