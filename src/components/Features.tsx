import React from 'react';
import { Shield, Zap, Smartphone, RefreshCw } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll"
      data-animation="slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="heading-sm text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience unparalleled speed and performance with our cutting-edge technology.",
      delay: 0
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security and encryption.",
      delay: 150
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Smart Integration",
      description: "Seamlessly connects with all your devices and favorite applications.",
      delay: 300
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Always Updated",
      description: "Regular updates ensure you always have the latest features and improvements.",
      delay: 450
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-wider animate-on-scroll" data-animation="slide-up">Features</span>
          <h2 className="heading-lg mt-2 animate-on-scroll" data-animation="fade-in">
            Designed for Excellence
          </h2>
          <p className="paragraph mt-4 animate-on-scroll" data-animation="slide-up">
            Our product combines innovation with practicality, offering features that make a real difference in your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;