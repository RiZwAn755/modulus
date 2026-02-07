import React from 'react';

const CourseCategories = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h4 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">Course Categories</h4>
                     <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)]">Explore our top Categories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border-t-4 border-red-500">
                         <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                         </div>
                         <h3 className="text-xl font-bold mb-2">IIT Foundation</h3>
                         <p className="text-gray-500 text-sm mb-4">Strong foundation for future success</p>
                         <span className="text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">3 Courses</span>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border-t-4 border-blue-500">
                         <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                         </div>
                         <h3 className="text-xl font-bold mb-2">Intermediate with JEE</h3>
                         <p className="text-gray-500 text-sm mb-4">Complete preparation for Mains & Advanced</p>
                         <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">2 Courses</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border-t-4 border-green-500">
                         <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                         </div>
                         <h3 className="text-xl font-bold mb-2">CRASH Course</h3>
                         <p className="text-gray-500 text-sm mb-4">Intensive revision and practice</p>
                         <span className="text-xs font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">2 Courses</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCategories;
