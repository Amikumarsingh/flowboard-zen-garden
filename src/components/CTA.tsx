
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Wind } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Wind className="h-6 w-6 text-zen-purple mr-2" />
                <Leaf className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Find your flow today</h2>
              <p className="text-gray-700 mb-6">
                Join thousands of mindful professionals who have transformed their productivity while maintaining balance and calm.
              </p>
              <Button className="rounded-full px-8 py-6 bg-zen-purple hover:bg-zen-purple/90 text-white">
                <span>Get started for free</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="neumorphic-sm p-4 rounded-xl relative z-10">
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4 animate-float" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-zen-blue flex items-center justify-center mr-3">
                          <span className="text-white font-bold">T</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Today's Focus</p>
                          <p className="text-sm text-gray-600">3 tasks remaining</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs">
                        75% Done
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zen-purple/10 rounded-lg p-4 animate-float" style={{ animationDelay: '0.4s' }}>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 mb-1">Daily Quote</p>
                      <p className="font-medium italic">
                        "The calm and balanced mind is the strong and great mind."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-zen-green opacity-30 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-zen-blue opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
