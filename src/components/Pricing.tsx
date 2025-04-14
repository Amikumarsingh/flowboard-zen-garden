
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started",
    price: "Free",
    features: [
      "3 Kanban boards",
      "Basic task management",
      "1 GB storage",
      "Single user",
      "Mobile app access"
    ],
    buttonText: "Start for free"
  },
  {
    name: "Pro",
    description: "Ideal for freelancers and professionals",
    price: "$9/month",
    features: [
      "Unlimited Kanban boards",
      "Advanced task automation",
      "10 GB storage",
      "Up to 3 team members",
      "Focus timer & analytics",
      "Priority support"
    ],
    highlighted: true,
    buttonText: "Start 14-day free trial"
  },
  {
    name: "Teams",
    description: "For teams and growing businesses",
    price: "$19/month",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "50 GB storage",
      "Team analytics & insights",
      "Advanced integrations",
      "Custom workflows",
      "24/7 priority support"
    ],
    buttonText: "Contact sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zen-purple via-zen-blue to-zen-purple"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600">
            Choose the plan that fits your workflow. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl p-6 
                ${tier.highlighted 
                  ? 'bg-gradient-to-b from-zen-purple/10 to-zen-blue/10 border-2 border-zen-purple shadow-lg relative overflow-hidden' 
                  : 'border border-gray-200'}
              `}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-zen-purple text-white text-xs px-3 py-1 rounded-bl-lg shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Free" && (
                  <span className="text-gray-600 ml-1">per user</span>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 ${tier.highlighted ? 'text-zen-purple' : 'text-gray-500'} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-lg py-6 ${
                  tier.highlighted 
                    ? 'bg-zen-purple hover:bg-zen-purple/90 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200'
                }`}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
