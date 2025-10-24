import React from 'react';
import { Home, Star, Settings, Rocket } from 'lucide-react';
import FeatureCard from './FeatureCard.jsx';

const features = [
  {
    icon: Home,
    title: 'Instant Start',
    description: 'Spin up a polished Hello World in seconds with sensible defaults.'
  },
  {
    icon: Rocket,
    title: 'Modern Stack',
    description: 'Vite, React, Tailwind, and animations ready out of the box.'
  },
  {
    icon: Settings,
    title: 'Composable',
    description: 'Clean, focused components that are easy to extend and maintain.'
  },
  {
    icon: Star,
    title: 'Beautiful by Default',
    description: 'Thoughtful spacing, typography, and micro-interactions built in.'
  },
];

const FeaturesGrid = () => {
  return (
    <div id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
