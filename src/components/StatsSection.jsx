import React from 'react';

const StatsSection = () => {
    const stats = [
        {
            icon: "✏️",
            title: "WHO CAN CRACK IT?",
            content: "Any student having strong mindset and determination to work hard necessarily and guided by Passionate, Friendly and well qualified Teachers."
        },
        {
            icon: "🏫",
            title: "HOW MANY IITs and NITs ARE THERE RIGHT NOW",
            content: "Right now we have 23 IITs offering 10500 seats in different programs and departments. we have 31 NITs offering 22000 seats undergradute courses."
        },
        {
            icon: "📝",
            title: "DOES MODULUS FOCUS ONLY ON IIT teaching ?",
            content: "Modulus expects every student to give their best and prepares for IIT exam simultaneously prepares students for JEE MAINS, BITSAT, EAMCET and state level engineering entrance examination."
        },
        {
            icon: "🏃",
            title: "DOES MODULUS FOCUS EQUALLY WELL ON IIT FOUNDATION ?",
            content: "Yes, We focus on each and every course. IIT FOUNDATION Course is run and taught by senior teachers exactly IIT level and structure/material is also prepared to help student prepare for NTSE, NSO-JS, OLYMPIADS along with IIT FOUNDATION."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                {stat.icon}
                            </div>
                            <h3 className="text-sm font-bold text-[var(--text-dark)] mb-4 text-center uppercase leading-relaxed tracking-wide min-h-[50px] flex items-center justify-center">
                                {stat.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed text-center">
                                {stat.content}
                            </p>
                             {index === 3 && (
                                <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 transform rotate-90 translate-x-4 translate-y-8 hidden">
                                    Enquire Now
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
