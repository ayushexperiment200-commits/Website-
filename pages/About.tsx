import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
       <div className="max-w-7xl mx-auto px-4 text-center">
         <h1 className="text-4xl font-serif font-bold text-royal-900 mb-8">About Us</h1>
         <p className="text-gray-600">This section will contain the History, Mission, and Vision of St. Joseph's School.</p>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-xl">
               <h2 className="text-2xl font-bold mb-4 text-gold-500">Our Mission</h2>
               <p className="text-gray-600">To provide holistic education that fosters intellectual, social, and spiritual growth.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-xl">
               <h2 className="text-2xl font-bold mb-4 text-gold-500">Our Vision</h2>
               <p className="text-gray-600">To be a beacon of light in the field of education, creating responsible global citizens.</p>
            </div>
         </div>
       </div>
    </div>
  );
};
export default About;