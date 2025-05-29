import React, { useState } from 'react';
import BetaForm from './BetaForm';
import { betaFAQs } from '../data/featureData';

const BetaSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  return (
    <section id="beta" className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Free Beta Program
              </h2>
              <p className="text-lg md:text-xl mb-6 text-blue-100">
                Heartland Workforce is currently in beta. Join now for early access and help shape 
                the future of field service.
              </p>
              
              <div className="space-y-6 mt-8">
                <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {betaFAQs.map((faq, index) => (
                    <div key={index} className="bg-blue-700 bg-opacity-30 rounded-lg p-5">
                      <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
                      <p className="text-blue-100">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-xl shadow-xl p-6 md:p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                    <svg className="w-8 h-8 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your request to join the Heartland Workforce beta has been received. We'll be in touch shortly with next steps.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Get Early Access</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below to join our beta program and be among the first to 
                    experience Heartland Workforce.
                  </p>
                  <BetaForm onSuccess={() => setFormSubmitted(true)} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;