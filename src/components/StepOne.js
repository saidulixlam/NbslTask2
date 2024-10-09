import React from 'react';

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center bg-blue-500 rounded-tl-md rounded-r-full p-4 px-8">
          <div className="flex items-center justify-center w-8 h-8 bg-white text-blue rounded-full">1</div>
          <p className="ml-2 text-white">Your Profile</p>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">2</div>
          <p className="ml-2 text-gray-300">Business Information</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">3</div>
          <p className="ml-2 text-gray-300">Additional Users</p>
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-2 text-gray-500">Step 1</h4>
      <h1 className="text-2xl font-bold text-center mb-2">Your Profile</h1>
      <p className="text-center mb-2">Please fill in your details below:</p>

      <div className="w-full max-w-lg my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
          <div>
            <label className="block mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Enter Your First Name'
              className={`w-full border rounded-md p-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder='Enter Your Last Name'
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder='Enter Your Email'
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder='Enter Your Phone number'
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter Your Password'
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirm Your Pasoword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
