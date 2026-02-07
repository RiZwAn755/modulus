import React from 'react';

const StickyEnquire = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
            <a
                href="#enquire"
                className="block bg-[var(--accent-color)] text-black font-bold py-6 px-2 rounded-l-lg shadow-lg hover:bg-yellow-400 transition-colors writing-vertical-rl text-orientation-mixed tracking-wider uppercase text-sm border-l-2 border-white/20"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
                Enquire Now
            </a>
        </div>
    );
};

export default StickyEnquire;
