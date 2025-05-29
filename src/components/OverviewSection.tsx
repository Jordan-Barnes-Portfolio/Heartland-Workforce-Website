import React from 'react';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Field Service Management Simplified
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Heartland Workforce is a comprehensive Field Service Management (FSM) platform built to streamline operations, 
            enhance communication, and improve accountability across teams. From managing leads to creating invoices, 
            our platform provides the tools you need to efficiently run your field service business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="bg-blue-50 rounded-lg p-5 text-center w-40">
              <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
              <p className="text-gray-700">Visibility</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center w-40">
              <p className="text-3xl font-bold text-blue-600 mb-1">60%</p>
              <p className="text-gray-700">Time Saved</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center w-40">
              <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
              <p className="text-gray-700">Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;