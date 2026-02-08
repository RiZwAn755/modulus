import React from 'react';

const Announcements = () => {
    const announcements = [
        "Admission Open for Academic Year 2026",
        "Admission Test Details",
        "Enrol Early to Get extra fees consession",
        "IIT FOUNDATION Admission",
        "Modulus Campus",
    ];

    return (
        <section className="py-12 bg-white container mx-auto px-4">
            {/* Main Container with shadow and rounded corners */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                
                {/* 1. Announcements Column (Left) */}
                <div className="md:w-1/3 p-6 border-r border-gray-100">
                    <h3 className="text-2xl font-normal mb-6 text-black border-b border-gray-200 pb-2">
                        Announcements
                    </h3>
                    <ul className="space-y-4">
                        {announcements.map((item, index) => (
                            <li key={index} className="flex items-start group cursor-pointer">
                                <span className="text-red-500 mr-2 mt-1 min-w-[20px]">
                                    →
                                </span>
                                <span className="text-gray-800 text-sm hover:text-red-600 transition-colors">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Apply Online Column (Center) - Red Background */}
                <div className="md:w-1/3 bg-[#E30613] p-8 flex flex-col items-center justify-center text-center text-white relative group cursor-pointer hover:bg-red-700 transition-colors duration-300">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                         {/* Using an icon similar to the screenshot */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {/* Hand icon overlay - simplified representation */}
                        <div className="absolute top-1/2 left-1/2 transform translate-x-2 translate-y-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-white stroke-red-600" viewBox="0 0 24 24">
                                <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                             </svg>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold mt-4">Apply Online</h3>
                </div>

                {/* 3. Testimonials Column (Right) */}
                <div className="md:w-1/3 p-6 bg-white">
                     <h3 className="text-2xl font-normal mb-4 text-black border-b border-gray-200 pb-2">
                        Testimonials
                    </h3>
                    
                    {/* Video Player Card */}
                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group">
                        {/* Thumbnail Image */}
                        <img 
                            src="https://i.ytimg.com/vi/7zPEuD-g_JQ/sd2.jpg?sqp=-oaymwEoCIAFEOAD8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYEyA5KH8wDw==&rs=AOn4CLCtW_txLP8kAkElxRLBBxmfRgfehA" 
                            alt="Student Testimonial" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Top Overlay: Profile & Date */}
                        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/50">
                                    <img src="abc.png" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-white text-xs font-medium drop-shadow-md">4 September 2025</span>
                            </div>
                            <button className="text-white hover:bg-white/20 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Side Navigation Arrows */}
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black shadow-md transition-colors z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center text-black shadow-md transition-colors z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcements;
