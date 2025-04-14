
import { 
  CheckCircle, 
  Clock, 
  Cloud, 
  Coffee, 
  FileText, 
  LayoutDashboard, 
  Leaf, 
  MessageSquare, 
  Moon, 
  Sun, 
  Zap 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="glass-card p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-12 w-12 rounded-full bg-zen-purple/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const featuresList = [
    {
      icon: <LayoutDashboard className="h-6 w-6 text-zen-purple" />,
      title: "Intuitive Kanban Boards",
      description: "Organize your tasks with our beautiful drag-and-drop interface that keeps your projects flowing smoothly."
    },
    {
      icon: <Leaf className="h-6 w-6 text-zen-purple" />,
      title: "Zen Focus Mode",
      description: "Eliminate distractions and enter a state of flow with our calming focus environment."
    },
    {
      icon: <Zap className="h-6 w-6 text-zen-purple" />,
      title: "Smart Automation",
      description: "Let FlowBoard handle repetitive tasks while you focus on what truly matters."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-zen-purple" />,
      title: "Intelligent Task Sorting",
      description: "Our AI prioritizes your tasks based on deadlines, importance, and your work patterns."
    },
    {
      icon: <Cloud className="h-6 w-6 text-zen-purple" />,
      title: "Seamless Cloud Sync",
      description: "Access your boards from any device with real-time synchronization across all platforms."
    },
    {
      icon: <Coffee className="h-6 w-6 text-zen-purple" />,
      title: "Break Reminders",
      description: "Stay refreshed with gentle reminders to take breaks, stretch, and reset your mind."
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-zen-green opacity-20"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-zen-blue opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Find your flow with powerful features</h2>
          <p className="text-gray-600">
            FlowBoard combines productivity tools with mindfulness practices to help you achieve more while maintaining balance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="neumorphic-sm p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mindful Productivity</h3>
                <p className="text-gray-600 mb-6">
                  FlowBoard helps you stay present and focused by combining task management with mindfulness techniques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Sun className="h-5 w-5 text-zen-purple mr-2 mt-1 flex-shrink-0" />
                    <span>Ambient sounds to enhance focus</span>
                  </li>
                  <li className="flex items-start">
                    <Moon className="h-5 w-5 text-zen-purple mr-2 mt-1 flex-shrink-0" />
                    <span>Dark mode to reduce eye strain</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-zen-purple mr-2 mt-1 flex-shrink-0" />
                    <span>Pomodoro timer with gentle notifications</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-zen-purple mr-2 mt-1 flex-shrink-0" />
                    <span>Gratitude journaling for daily reflection</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-zen-purple mr-2 mt-1 flex-shrink-0" />
                    <span>Team collaboration with mindful communication tools</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="glass-card p-5 rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80" 
                    alt="Zen workspace with sunlight through trees" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-lg neumorphic-sm p-4 flex items-center justify-center animate-float">
                  <Leaf className="h-12 w-12 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
