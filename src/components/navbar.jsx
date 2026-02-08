import React, { useState, useEffect } from 'react';

const navItems = [
    {
        label: 'ABOUT US',
        href: '#about-us',
        dropdown: [
            { label: 'Our Story', href: '#story' },
            { label: 'Vision & Mission', href: '#vision' },
            { label: 'Leadership', href: '#leadership' }
        ]
    },
    {
        label: 'PROGRAMMES',
        href: '#programmes',
        dropdown: [
            { label: 'Long Term - IIT JEE', href: '#long-term-iit' },
            { label: 'Long Term - NEET', href: '#long-term-neet' },
            { label: 'Short Term', href: '#short-term' },
            { label: 'Foundation', href: '#foundation' }
        ]
    },
    {
        label: 'ADMISSIONS',
        href: '#admissions',
        dropdown: [
            { label: 'Procedure', href: '#procedure' },
            { label: 'Syllabus', href: '#syllabus' },
            { label: 'Sample Papers', href: '#sample-papers' },
            { label: 'Apply Online', href: '#apply-online' },
            { label: 'Enquiry', href: '#enquiry' }
        ]
    },
    {
        label: 'FACILITIES',
        href: '#facilities',
        dropdown: [
            { label: 'Campus', href: '#campus' },
            { label: 'Library', href: '#library' },
            { label: 'Labs', href: '#labs' },
            { label: 'Hostel', href: '#hostel' }
        ]
    },
    {
        label: 'ACTIVITIES',
        href: '#activities',
        dropdown: [
            { label: 'Events', href: '#events' },
            { label: 'Sports', href: '#sports' },
            { label: 'Cultural', href: '#cultural' }
        ]
    },
    {
        label: 'DOWNLOADS',
        href: '#downloads',
        dropdown: [
            { label: 'Brochures', href: '#brochures' },
            { label: 'Application Forms', href: '#forms' }
        ]
    },
    {
        label: 'RESULTS',
        href: '#results',
        dropdown: [
            { label: 'JEE Advanced', href: '#jee-adv' },
            { label: 'NEET', href: '#neet' },
            { label: 'Olympiads', href: '#olympiads' }
        ]
    },
    { label: 'CAREER', href: '#career' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg'
                : 'bg-gradient-to-b from-black/50 to-transparent'
                }`}
        >
            {/* Top Bar - Notice & Links */}
            <div className={`w-full border-b border-white/10 hidden lg:block ${scrolled ? 'bg-gray-50/90 text-gray-800' : 'bg-black/40 text-white'}`}>
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-[11px] font-medium leading-tight">
                    {/* Left: Contact Info */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            <span>Madhapur: VIP Hills, Jai Hind Enclave, Beside GST Bhavan</span>
                        </div>
                        <div className="flex items-center gap-1.5 border-l border-gray-400/30 pl-6">
                            <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                            <span>+91 80193 70707, 80191 70707</span>
                        </div>
                    </div>

                    <div id="scroll-container" className="flex-1 mx-10 relative flex">
                        <div id="scroll-text" className="whitespace-nowrap text-red-500 font-bold flex items-center min-w-full w-max">
                            <a href="#results" className="px-4">MODULUS New campus at GACHIBOWLI • ADMISSIONS OPEN FOR 2025-26 • JOIN TODAY</a>
                        </div>
                    </div>

                    {/* Right: Login */}
                    <div className="flex items-center gap-6">
                        <a href="#login" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                            Login
                        </a>
                    </div>
                </div>
            </div>

            <div className={`max-w-7xl mx-auto px-6 w-full flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                        <img
                            src="/newlogo.jpeg"
                            alt="Modulus Logo"
                            className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                        />
                    </a>


                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-5">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            <a
                                href={item.href}
                                className={`text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-colors duration-300 hover:text-blue-500 flex items-center gap-1 ${scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                                    }`}
                            >
                                {item.icon && (
                                    <svg className="w-4 h-4 mb-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                )}
                                {item.label}
                                {item.dropdown && (
                                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </a>

                            {/* Dropdown Menu */}
                            {item.dropdown && (
                                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                                    <div className="bg-white rounded-lg shadow-xl border-t-2 border-blue-600 overflow-hidden w-56 py-2">
                                        {item.dropdown.map((subItem) => (
                                            <a
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-50 last:border-0"
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 whitespace-nowrap ${scrolled
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-blue-900 hover:bg-gray-100 shadow-lg'
                        }`}>
                        Get Started
                    </button>
                </div>

                {/* - [x] Fix Mobile Hamburger Menu <!-- id: 14 --> */}
                {/* - [ ] Add Header Top Bar & Address <!-- id: 15 --> */}
                {/* - [x] Style for "minimal and attracting" look <!-- id: 5 --> */}
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className={`p-2 transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white drop-shadow-md'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="p-6 flex flex-col space-y-4 overflow-y-auto max-h-[80vh]">
                    {navItems.map((item) => (
                        <div key={item.label} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                            {item.dropdown ? (
                                <details className="group">
                                    <summary className="list-none flex justify-between items-center text-gray-800 font-bold text-sm uppercase tracking-wide cursor-pointer py-1">
                                        {item.label}
                                        <svg className="w-4 h-4 text-blue-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-blue-100 ml-1">
                                        {item.dropdown.map((subItem) => (
                                            <a
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <a
                                    href={item.href}
                                    className="block text-gray-800 font-bold text-sm uppercase tracking-wide hover:text-blue-600 py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 mt-2">
                        <button className="w-full py-3 rounded-full bg-blue-600 text-white font-bold uppercase shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
