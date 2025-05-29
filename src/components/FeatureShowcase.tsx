import React from 'react';
import { Check, Play, ArrowRight } from 'lucide-react';
import { featureCategories } from '../data/featureData';

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Field Service Excellence
            <span className="block gradient-text mt-2">Made Simple</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of tools helps you manage every aspect of your field service business, 
            from lead generation to invoicing and everything in between.
          </p>
        </div>
        
        <div className="space-y-32">
          {featureCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            const { title, icon: Icon, description, features, image, video, isVideo } = category;
            const animationDelay = 0.1 + (index * 0.1);
            
            return (
              <div 
                key={category.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-20 stagger-item relative`}
                style={{ animationDelay: `${animationDelay}s` }}
              >
                {/* Decorative line connector */}
                <div className={`hidden lg:block absolute top-1/2 ${isEven ? 'left-1/2' : 'right-1/2'} w-24 h-px bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1/2 ${isEven ? '-translate-x-12' : 'translate-x-12'}`}></div>
                
                {/* Content Section */}
                <div className="flex-1 max-w-xl">
                  <div className="relative">
                    {/* Feature number badge */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg feature-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden feature-card">
                      {/* Background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
                      
                      <div className="flex items-center mb-6 relative">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl mr-5 shadow-sm">
                          <Icon className="h-7 w-7 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{title}</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed relative">{description}</p>
                      
                      <ul className="space-y-4 mb-6">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="mr-4 mt-1 flex-shrink-0">
                              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                            </span>
                            <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-blue-600 font-medium cursor-pointer group">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media Section */}
                <div className="flex-1 max-w-xl">
                  <div className="relative">
                    {/* Simplified floating elements - only on odd features */}
                    {index % 2 === 0 && (
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                    )}
                    
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300">
                      {isVideo && video ? (
                        <div className="relative aspect-video">
                          <img 
                            src={image} 
                            alt={`${title} preview`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-center justify-center">
                            <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                              <Play className="h-10 w-10 text-blue-600 ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video group overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${title} interface preview`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      
                      {/* Enhanced branding overlay */}
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                          Heartland Workforce
                        </span>
                      </div>
                      
                      {/* Feature highlight badge */}
                      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        ✨ Live Demo Available
                      </div>
                    </div>
                    
                    {/* Simplified caption */}
                    <div className="text-center mt-6">
                      <p className="text-gray-500 text-sm italic">
                        *Interface preview - Actual software screenshots coming soon
                      </p>
                      <div className="flex items-center justify-center mt-2 space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-full"></div>
          </div>
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Field Service?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of field service professionals who are already using Heartland Workforce to streamline their operations.
            </p>
            <a 
              href="#beta" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 btn-enhanced"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;