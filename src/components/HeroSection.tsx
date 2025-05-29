import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 fade-in">
            The Future of Field Service Management is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 slide-up">
            Heartland Workforce empowers contractors, adjusters, and partners with one unified tool 
            to manage fieldwork — from leads to invoices.
          </p>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#beta" 
              className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl"
            >
              Join the Free Beta
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;