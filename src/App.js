import React, { useState, useEffect } from 'react';
import Step1 from './components/StepOne';
// import Step2 from './Step2';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { IoLogoPlaystation } from 'react-icons/io';
import './App.css';
import Step2 from './components/StepTwo';

const App = () => {
  const savedStep = parseInt(localStorage.getItem('currentStep')) || 1;
  const [currentStep, setCurrentStep] = useState(savedStep);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Handle final submission if needed
      console.log('Final Submission:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined })); // Clear error for the field being changed
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} errors={errors} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} errors={errors} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2">
      <div className="flex text-white justify-between items-center py-4 px-1 w-full max-w-2xl rounded-lg mx-4 md:mx-auto bg-transparent">
        <IoLogoPlaystation size={30} className="mr-2" />
        <p className="text-sm md:text-base">Create New Account</p>
        <p className="text-sm md:text-base">Contact Us</p>
      </div>

      <div className="w-full max-w-2xl rounded-lg shadow-lg mx-4 md:mx-auto bg-white">
        <div className="w-full flex-1 bg-white rounded-md">
          {renderStep()}
        </div>
      </div>

      <div className="flex text-white justify-between items-center py-4 px-1 w-full max-w-2xl rounded-lg mx-4 md:mx-auto">
        <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))} className="flex items-center text-sm md:text-base">
          <MdArrowBackIos size={20} className="mr-1" />
          <p>Back to Login</p>
        </button>

        <div className="flex items-center ml-auto space-x-2">
          {currentStep > 1 && (
            <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))} className="flex items-center text-sm md:text-base border border-gray-700 rounded-md px-3 py-2">
              <MdArrowBackIos size={20} className="mr-1" />
              <p>Previous</p>
            </button>
          )}
          <button onClick={nextStep} className="flex items-center text-sm md:text-base bg-violet-500 hover:bg-violet-800 py-2 px-4 rounded-md">
            <p>Next Step</p>
            <MdArrowForwardIos size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
