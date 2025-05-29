import React from 'react';
import { Check } from 'lucide-react';
import { FeatureCategory as FeatureCategoryType } from '../data/featureData';

interface Props {
  category: FeatureCategoryType;
  index: number;
}

const FeatureCategory: React.FC<Props> = ({ category, index }) => {
  const { title, icon: Icon, description, features } = category;
  const animationDelay = 0.1 + (index * 0.1);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 stagger-item"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCategory;