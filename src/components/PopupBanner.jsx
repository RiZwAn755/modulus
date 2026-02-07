import React, { useState, useEffect } from 'react';

const PopupBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop with blur effect */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={closePopup}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-sm transform transition-all duration-300 scale-100 animate-fade-in-up">
                <button
                    onClick={closePopup}
                    className="absolute -top-2 -right-2 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none z-20"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <img
                        src="https://www.modulushyd.com/images/modulus-pop-img.jpg"
                        alt="Special Announcement"
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
                        <div className="text-white text-center sm:text-left">
                            <p className="font-bold text-sm">Admissions Open 2025</p>
                            <p className="text-[10px] opacity-90">Join the league of toppers!</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm text-[10px] whitespace-nowrap">
                                Apply
                            </button>
                            <button className="px-3 py-1 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors shadow-sm text-[10px] whitespace-nowrap">
                                Results
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupBanner;
