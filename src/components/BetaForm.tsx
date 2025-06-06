// Replace everything in your BetaForm.tsx file with this:
import React, { useEffect } from 'react';

interface Props {
  onSuccess: () => void;
}

const BetaForm: React.FC<Props> = ({ onSuccess }) => {
  useEffect(() => {
    // Add the HubSpot script to the page
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/242567651.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="js-na2.hsforms.net"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [onSuccess]);

  return (
    <div className="w-full">
      <div 
        className="hs-form-frame" 
        data-region="na2" 
        data-form-id="785e3f42-f273-4354-855d-d36cfe4cdd0d" 
        data-portal-id="242567651"
      ></div>
      
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
        We'll never share your information with third parties.
      </p>
    </div>
  );
};

export default BetaForm;