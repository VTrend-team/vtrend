import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-vtrend-dark-accent py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/lovable-uploads/1e8e37f5-a254-4538-83c3-24fd25fc0883.png"
                alt="VTrend Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-vtrend-light-text mb-6">
              {/* Leading the way in advanced analytics and trend forecasting technologies. */}
              Leading the way in results-driven Digital Solutions and Brand Growth Strategies.
            </p>
            <div className="flex space-x-4 cursor-pointer">
              <a href="https://www.linkedin.com/company/vtrend-global/" target="_blank" rel="noopener noreferrer" className="text-vtrend-light-text hover:text-vtrend-green transition-colors z-10">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 30 30">
                  <path fillRule="evenodd" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-vtrend-light-text hover:text-vtrend-green transition-colors z-10">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-vtrend-light-text hover:text-vtrend-green transition-colors z-10">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-vtrend-light-text hover:text-vtrend-green transition-colors z-10">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Paid Traffic Campaigns</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Web Design & Development</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-vtrend-light-text hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-vtrend-light-text mb-4">Join forward-thinking marketers receiving our bi-weekly insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-vtrend-dark/50 mr-3 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-vtrend-green"
              />
              <Button className="vtrend-button rounded-l-none">
                <span>Subscribe</span>
              </Button>
            </div>
            <p className="text-vtrend-light-text mt-5"><strong>CONTACT</strong>: info@vtrend.co.in</p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-vtrend-light-text text-sm">© {new Date().getFullYear()} VTrend. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-vtrend-light-text text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-vtrend-light-text text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-vtrend-light-text text-sm hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 -z-1">
        <div className="absolute top-40 left-0 w-72 h-72 bg-vtrend-green rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-vtrend-yellow rounded-full filter blur-[100px]"></div>
      </div>
    </footer>
  );
};

export default FooterSection;
