
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

// Form schema validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot be longer than 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    // Here you would usually send this data to your backend
    console.log("Form submitted:", data);
    
    // Show success message
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you shortly.",
    });
    
    // Reset form and close modal
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get in touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you soon.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form data-netlify="true" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@company.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto vtrend-button">
                <span className="relative z-10 text-white">Submit</span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
