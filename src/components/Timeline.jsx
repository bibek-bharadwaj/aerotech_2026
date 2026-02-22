const timelineItems = [
    {
        time: '10:00 AM',
        title: 'Opening Ceremony',
        description: 'Welcome address and official inauguration of Aerotech 2026.',
        day: 'DAY 1 — FEB 25',
    },
    {
        time: '10:30 AM',
        title: 'Aero Modeling Workshop',
        description: 'Hands-on workshop covering the fundamentals of aero modeling, aerodynamics, and aircraft design.',
        day: 'DAY 1 — FEB 25',
    },
    {
        time: '11:30 AM',
        title: 'Materials & Kit Distribution',
        description: 'Teams receive their building materials and kits to begin constructing their aircraft.',
        day: 'DAY 1 — FEB 25',
    },
    {
        time: '12:00 PM',
        title: 'Build Phase Begins',
        description: 'Students start designing and building their model airplanes using the provided kits.',
        day: 'DAY 1 — FEB 25',
    },
    {
        time: '10:00 AM',
        title: 'Flight Testing',
        description: 'Teams test-fly their built aircraft. Performance is evaluated on distance, stability, and design.',
        day: 'DAY 2 — FEB 26',
    },
    {
        time: '01:00 PM',
        title: 'Top Teams Competition',
        description: 'The best-performing teams compete head-to-head for the top positions.',
        day: 'DAY 2 — FEB 26',
    },
    {
        time: '03:00 PM',
        title: 'Results & Awards Ceremony',
        description: 'Winners are announced and prizes are distributed. Closing of Aerotech 2026.',
        day: 'DAY 2 — FEB 26',
    },
];

export default function Timeline() {
    const grouped = timelineItems.reduce((acc, item) => {
        if (!acc[item.day]) acc[item.day] = [];
        acc[item.day].push(item);
        return acc;
    }, {});

    return (
        <section id="timeline" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
            // Schedule
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        EVENT TIMELINE
                    </h2>
                    <p className="text-white/30 text-sm font-inter mt-4 max-w-lg">
                        Aero Modeling Workshop & Competition — two days of learning, building, and flying.
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {Object.entries(grouped).map(([day, items]) => (
                        <div key={day}>
                            {/* Day header */}
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-brand-green text-[10px] font-semibold tracking-[0.3em] uppercase">
                                    {day}
                                </span>
                                <div className="flex-1 h-px bg-white/5" />
                            </div>

                            {/* Items */}
                            <div className="space-y-1">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-4 md:gap-10 py-4 md:py-5 px-3 md:px-4 -mx-3 md:-mx-4 rounded-lg hover:bg-white/[0.02] transition-all duration-300"
                                    >
                                        {/* Time */}
                                        <span className="text-white/20 text-xs sm:text-sm md:text-base font-inter font-medium tracking-wider min-w-[65px] sm:min-w-[80px] md:min-w-[100px] pt-0.5 group-hover:text-brand-green/60 transition-colors">
                                            {item.time}
                                        </span>

                                        {/* Dot */}
                                        <div className="flex flex-col items-center pt-2">
                                            <div className="w-2 h-2 rounded-full border border-white/15 group-hover:border-brand-green group-hover:bg-brand-green/30 transition-all duration-300" />
                                            {index < items.length - 1 && (
                                                <div className="w-px h-8 bg-white/5 mt-1" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 -mt-0.5">
                                            <h3 className="text-white text-base md:text-lg font-inter font-medium mb-1 group-hover:text-brand-green-light transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/30 text-sm font-inter">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
