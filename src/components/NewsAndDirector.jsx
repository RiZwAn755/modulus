import React from 'react';

const NewsAndDirector = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Latest News Container */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)] border-l-4 border-[var(--primary-color)] pl-4">Latest News</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                             {/* News Card 1 */}
                             <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 hover:shadow-xl transition-all duration-300 group">
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src="admission.png" 
                                        alt="News 1" 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 right-0 bg-[var(--primary-color)] text-white text-xs font-bold px-3 py-1 m-2 rounded">
                                        Feb 2026
                                    </div>
                                </div>
                                <div className="p-4">
                                     <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                        Admission for Academic year 2026-2027 Started.
                                     </h3>
                                     <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                                        <span>📅 15 Nov 2025</span>
                                        <span>👤 Admin</span>
                                     </div>
                                     <p className="text-gray-500 text-sm line-clamp-3">
                                        Enroll Early to Avoid Last Minute Struggle to get Admission. We take limited Admissions so our Admission are Mostly Completed by March.
                                     </p>
                                </div>
                             </div>

                             {/* News Card 2 */}
                             <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 hover:shadow-xl transition-all duration-300 group">
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src="iit_foundation.png" 
                                        alt="News 2" 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 right-0 bg-[var(--primary-color)] text-white text-xs font-bold px-3 py-1 m-2 rounded">
                                        Dec 2025
                                    </div>
                                </div>
                                <div className="p-4">
                                     <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                        Admission open for IIT Foundation Programs
                                     </h3>
                                     <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                                        <span>📅 10 Dec 2025</span>
                                        <span>👤 Admin</span>
                                     </div>
                                     <p className="text-gray-500 text-sm line-clamp-3">
                                        Admission for IIT Foundation are also in Process and we are Offering Scholarship upto 100 Percent on Variable Fees.
                                     </p>
                                </div>
                             </div>
                        </div>
                    </div>

                     {/* Director's Message */}
                    <div>
                         <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)] border-l-4 border-[var(--primary-color)] pl-4">Director,s Messages</h2>
                         <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
                            <div className="absolute -top-6 -right-6 text-9xl text-blue-100 font-serif opacity-50 select-none">"</div>
                            
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                     <img 
                                        src="https://www.modulushyd.com/images/director-img.png" 
                                        alt="Director" 
                                        className="w-full h-full object-cover"
                                     />
                                </div>
                                <p className="text-center mt-2 font-bold text-[var(--primary-color)]">Mr. Nitin Kumar</p>
                                <p className="text-center text-xs text-gray-500">Director</p>
                            </div>

                            <div className="flex-grow z-10">
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    <span className="font-bold text-red-500">Mr. Nitin Kumar</span> was a MBIPC student during his intermediate and was able to crack JEE ADVANCED as well as NEET exam and finally decided to join IIT DELHI.
                                </p>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    After Graduating from IIT DELHI in Electrical Engineering, he worked in Software companies /Startups. Parallelly he continued to teach since his intermediate...
                                </p>
                                <button className="text-[var(--primary-color)] font-semibold text-sm hover:underline flex items-center">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndDirector;
