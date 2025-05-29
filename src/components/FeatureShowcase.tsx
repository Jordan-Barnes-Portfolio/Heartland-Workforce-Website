import React from 'react';
import FeatureCategory from './FeatureCategory';
import { featureCategories } from '../data/featureData';

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Field Service Excellence
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you manage every aspect of your field service business, 
            from lead generation to invoicing and everything in between.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featureCategories.map((category, index) => (
            <FeatureCategory 
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;