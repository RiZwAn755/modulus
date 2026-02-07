import React from 'react';

const AboutModulus = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Side - Image/Video */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-[var(--primary-color)] transform translate-x-3 translate-y-3 rounded-xl"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="About Modulus" 
                                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2">
                         <div className="flex items-center mb-4">
                            <span className="w-12 h-1 bg-[var(--accent-color)] mr-3"></span>
                            <span className="text-[var(--primary-color)] font-bold tracking-wider uppercase">About Us</span>
                         </div>
                         <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-6">
                            About <span className="text-[var(--primary-color)]">MODULUS</span>
                         </h2>
                         <p className="text-gray-600 mb-6 leading-relaxed">
                            Team MODULUS strongly believes in inculcating positive attitude in each and every MODULUS student. We believe once the attitude of student is positive, half of the work is already done.
                         </p>
                         <div className="bg-blue-50 p-4 border-l-4 border-blue-500 mb-8 rounded-r-lg">
                             <p className="text-blue-800 font-medium italic">
                                "Most of MODULUS TEACHING MEMBERS are IITians themselves and understand the process much better."
                             </p>
                         </div>
                         <p className="text-gray-600 mb-8">
                             Born dream in MODULUS is very rigorous process and only the one with JEE ADVANCED skills along...
                         </p>
                         <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30">
                             About More
                         </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutModulus;
