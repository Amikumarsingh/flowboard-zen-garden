
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-zen-purple mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl">FlowBoard</span>
            </div>
            <p className="text-gray-600 mb-4">
              Find your flow with our mindful productivity app designed for focus and calm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-zen-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-zen-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-zen-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-zen-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-zen-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-zen-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-zen-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zen-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} FlowBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
