import React from 'react';

const Announcements = () => {
  const announcements = [
    "Admission Open for Academic Year 2026",
    "Admission Test Details",
    "Enroll Early to Get extra fees concession",
    "IIT FOUNDATION Admission",
    "Modulus Campus",
  ];

  return (
    <section className="py-12 bg-white container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Announcements Column */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-[var(--text-dark)] border-b-2 border-dashed border-gray-300 pb-2">
            Announcements
          </h3>
          <ul className="space-y-4">
            {announcements.map((item, index) => (
              <li key={index} className="flex items-start group cursor-pointer">
                <span className="text-red-500 mr-2 mt-1 transform group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-gray-700 hover:text-[var(--primary-color)] transition-colors font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Online CTA */}
        <div className="bg-red-600 rounded-lg shadow-lg overflow-hidden relative group cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
            <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="bg-white text-red-600 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-wider">Apply Online</h3>
                <p className="mt-2 text-red-100/90 text-sm">Join Modulus Today</p>
            </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
            <div className="absolute inset-0">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Testimonial Background" className="w-full h-full object-cover opacity-40"/>
            </div>
             <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-[var(--accent-color)] pl-3">Testimonials</h3>
                
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                     <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                             <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm">Sandeep Kumar</h4>
                            <p className="text-[var(--accent-color)] text-xs">IIT Ranker 2024</p>
                        </div>
                     </div>
                     <p className="text-gray-200 text-sm italic">"Modulus helped me achieve my dream with their excellent guidance and support."</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                     <button className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                     </button>
                     <button className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                     </button>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
