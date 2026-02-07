import React from 'react';

const ContactEvents = () => {
    const events = [
        { date: "21", month: "Jan", year: "2026", title: "Topper's Talk" },
        { date: "26", month: "Dec", year: "2025", title: "MSET Exam" },
        { date: "31", month: "Dec", year: "2025", title: "Special Motivation Talk" },
        { date: "25", month: "Sep", year: "2025", title: "Candle March" },
    ];

    return (
        <section className="py-16 bg-gray-50">
             <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Contact Form */}
                     <div>
                        <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)] border-l-4 border-yellow-400 pl-4">Leave Us a Message</h2>
                        <form className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[var(--primary-color)]">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input type="text" placeholder="Name *" className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all text-sm"/>
                                </div>
                                <div>
                                     <select className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] text-gray-500 text-sm">
                                         <option>Please Select Campus *</option>
                                         <option>Madhapur</option>
                                         <option>Gachibowli</option>
                                         <option>KPHB</option>
                                     </select>
                                </div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input type="text" placeholder="Mobile No *" className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] text-sm"/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] text-sm"/>
                                </div>
                             </div>
                             <div className="mb-6">
                                <textarea placeholder="Type a Message *" rows="4" className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] text-sm"></textarea>
                             </div>
                             <button type="button" className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/30 uppercase tracking-widest text-sm">
                                 Submit
                             </button>
                        </form>
                     </div>

                     {/* Upcoming Events */}
                     <div>
                         <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)] border-l-4 border-[var(--primary-color)] pl-4">Upcoming Events</h2>
                         <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                             <div className="space-y-6">
                                {events.map((event, index) => (
                                    <div key={index} className="flex items-center group cursor-pointer">
                                        <div className="bg-red-600 text-white p-2 rounded text-center w-16 h-16 flex flex-col justify-center mr-4 group-hover:bg-[var(--primary-color)] transition-colors shadow-md">
                                            <span className="text-xl font-bold leading-none">{event.date}</span>
                                            <span className="text-xs uppercase font-medium">{event.month}</span>
                                        </div>
                                        <div className="flex-grow border-b border-gray-100 pb-4 group-hover:border-gray-200 transition-colors">
                                            <div className="text-xs text-gray-400 mb-1">{event.date} {event.month} {event.year}</div>
                                            <h3 className="font-bold text-gray-700 group-hover:text-[var(--primary-color)] transition-colors text-lg">
                                                {event.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                             </div>
                             <div className="mt-4 text-right">
                                <button className="text-xs text-gray-400 hover:text-[var(--primary-color)]">View all events &rarr;</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};

export default ContactEvents;
