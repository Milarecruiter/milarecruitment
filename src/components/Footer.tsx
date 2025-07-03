import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the website footer.`,
        to_name: 'WRLDS Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer 
      id="contact" 
      className="bg-white text-gray-900 pt-16 pb-8 w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
              alt="WRLDS Technologies Logo" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-700 mb-6">
              WRLDS Technologies provides an end-to-end platform for the creation and deployment of AI-powered smart sensor devices, giving customers 100% ownership while handling the complete technological development.
            </p>
            <p className="text-gray-700 mb-6">
              Hornsgatan 110<br />
              117 26, Stockholm Sweden
            </p>
            <div className="flex flex-col space-y-3">
              <span className="text-gray-600 text-sm">Follow Mila:</span>
              <div className="flex items-center">
                <a 
                  href="https://www.linkedin.com/in/milarecruiter/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg"
                  title="Mila's LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WRLDS Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
