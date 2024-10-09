import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center bg-blue-500 py-4 px-2 sm:px-8">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">1</div>
           <p className="ml-2 text-gray-300">Your Profile</p>/         </div>

        <div className="flex items-center bg-blue-500 rounded-tl-md rounded-r-full p-4 px-2 sm:px-8">
           <div className="flex items-center justify-center w-8 h-8 bg-white text-blue rounded-full">2</div>
         <p className="ml-2 text-white">Business Information</p>
         </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">3</div>
           <p className="ml-2 text-gray-300">Additional Users</p>
        </div>
      </div>
      <h4 className="text-lg font-semibold mt-4 text-gray-500">Step 2</h4>
      <h1 className="text-2xl font-bold text-center my-2">General Information</h1>
      <p className="text-center mb-4">Please provide additional details:</p>

      <div className="w-full max-w-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
          {['brandName', 'brandType', 'streetAddress', 'city', 'zipCode', 'taxId'].map((field, index) => (
            <div key={index}>
              <label className="block mb-1" htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field] || ''}
                onChange={handleChange}
                placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                className={`w-full border rounded-md p-2 ${errors[field] ? 'border-red-500' : ''}`}
                required
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>
        <div className='w-full px-4'>
          <h2 className='text-blue-600'>DOCUMENTS</h2>
          <p className='text-gray-600 text-sm mt-1'>Once the documents are signed you'll be ready to get started</p>

          <div className='flex justify-between items-center my-2'>
            <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
              <span>Electronically sign the agreements</span>
              <div className="flex">
                <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center mb-2'>
            <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
              <span>Non adult market supplier waiver and release</span>
              <div className="flex">
                <FaTimesCircle className="text-red-500 mr-2 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full px-4'>
          <h2 className='text-blue-600'>COI PDF UPLOAD</h2>
          <p className='text-gray-600 text-sm mt-1'>Once the documents are signed you'll be ready to get started</p>

          <div className='flex justify-between items-center my-2'>
            <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
              <span>Electronically sign the agreements</span>
              <div className="flex">
                <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;


// import React from 'react';
// import { FaCheckCircle, FaTimesCircle, FaArrowRight } from 'react-icons/fa';
// const Step2 = ({ formData, handleChange }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex justify-between items-center w-full mb-4">
//         <div className="flex items-center bg-blue-500 p-4 px-8">
//           <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">1</div>
//           <p className="ml-2 text-gray-300">Your Profile</p>
//         </div>

//         <div className="flex items-center bg-blue-500 rounded-tl-md rounded-r-full p-4 px-8">
//           <div className="flex items-center justify-center w-8 h-8 bg-white text-blue rounded-full">2</div>
//           <p className="ml-2 text-white">Business Information</p>
//         </div>
//         <div className="flex items-center">
//           <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full">3</div>
//           <p className="ml-2 text-gray-300">Additional Users</p>
//         </div>
//       </div>
//       <h4 className="text-lg font-semibold mt-4 text-gray-500">Step 2</h4>
//       <h1 className="text-2xl font-bold text-center my-2">General Information</h1>
//       <p className="text-center mb-4">Please provide additional details:</p>

//       <div className="w-full max-w-lg mb-6">
//         {/* General Information Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
//           <div>
//             <label className="block mb-1" htmlFor="brandName">Brand Name</label>
//             <input
//               type="text"
//               id="brandName"
//               name="brandName"
//               value={formData.brandName || ''}
//               onChange={handleChange}
//               placeholder="Enter Brand Name"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1" htmlFor="brandType">Brand Type</label>
//             <input
//               type="text"
//               id="brandType"
//               name="brandType"
//               value={formData.brandType || ''}
//               onChange={handleChange}
//               placeholder="Enter Brand Type"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1" htmlFor="streetAddress">Street Address</label>
//             <input
//               type="text"
//               id="streetAddress"
//               name="streetAddress"
//               value={formData.streetAddress || ''}
//               onChange={handleChange}
//               placeholder="Enter Street Address"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1" htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city || ''}
//               onChange={handleChange}
//               placeholder="Enter City"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1" htmlFor="zipCode">Zip Code</label>
//             <input
//               type="text"
//               id="zipCode"
//               name="zipCode"
//               value={formData.zipCode || ''}
//               onChange={handleChange}
//               placeholder="Enter Zip Code"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1" htmlFor="taxId">Tax ID Number</label>
//             <input
//               type="text"
//               id="taxId"
//               name="taxId"
//               value={formData.taxId || ''}
//               onChange={handleChange}
//               placeholder="Enter Tax ID Number"
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>
//         </div>
//         <div className='w-full px-4'>
//         <h2 className='text-blue-600'>DOCUMENTS</h2>
//         <p className='text-gray-600 text-sm mt-1'>Once the documents are signed you'll be ready to get started</p>
//         <div className='flex justify-between items-center my-2'>
//           <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
//             <span>Electronically sign the agreements</span>
//             <div className="flex">
//               <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
//             </div>
//           </div>
//           <button className=' p-2 bg-violet-600  rounded-md ml-4'>
//             <FaArrowRight className='text-white text-2xl' />
//           </button>
//         </div>
//         <div className='flex justify-between items-center mb-2'>
//           <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
//             <span>Non adult  market supplier waiver and release</span>
//             <div className="flex">
//               <FaTimesCircle className="text-red-500 mr-2 text-2xl" />
//             </div>
//           </div>
//           <button className=' p-2 bg-violet-600  rounded-md ml-4'>
//             <FaArrowRight className='text-white text-2xl' />
//           </button>
//         </div>
        
//       </div>
//       <div className='w-full px-4'>
//         <h2 className='text-blue-600'>COI PDF UPLOAD</h2>
//         <p className='text-gray-600 text-sm mt-1'>Once the documents are signed you'll be ready to get started</p>
//         <div className='flex justify-between items-center my-2'>
//           <div className='border border-gray-800 flex justify-between rounded-md w-full p-2 my-2'>
//             <span>Electronically sign the agreements</span>
//             <div className="flex">
//               <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
//             </div>
//           </div>
//           <button className=' p-2 bg-violet-600  rounded-md ml-4'>
//             <FaArrowRight className='text-white text-2xl' />
//           </button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Step2;
