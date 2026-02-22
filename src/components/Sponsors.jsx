const sponsors = {
    title: [
        { name: 'NASA', display: 'NASA' },
        { name: 'SpaceX', display: 'SPACEX' },
    ],
    associate: [
        { name: 'ISRO', display: 'ISRO' },
        { name: 'Boeing', display: 'BOEING' },
        { name: 'Airbus', display: 'AIRBUS' },
    ],
    silver: [
        { name: 'ESA', display: 'ESA' },
        { name: 'Lockheed', display: 'LOCKHEED' },
        { name: 'Northrop', display: 'NORTHROP' },
        { name: 'Blue Origin', display: 'BLUE ORIGIN' },
    ],
};

function SponsorCard({ name, display, tier }) {
    const tierStyles = {
        title: 'text-2xl md:text-3xl border-brand-green/15 hover:border-brand-green/30',
        associate: 'text-xl md:text-2xl border-white/5 hover:border-brand-green/20',
        silver: 'text-base md:text-lg border-white/5 hover:border-white/10',
    };

    return (
        <div className={`flex items-center justify-center p-5 sm:p-6 md:p-10 rounded-lg border transition-all duration-500 bg-dark-card/30 hover:bg-dark-card/60 cursor-default ${tierStyles[tier]}`}>
            <span className="font-inter font-bold tracking-[0.2em] uppercase text-white/25 hover:text-white/50 transition-colors duration-300">
                {display}
            </span>
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
            // Backed by the best
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        SPONSORS
                    </h2>
                </div>

                {/* Platinum */}
                <div className="mb-8">
                    <span className="text-brand-green/40 text-[9px] font-semibold tracking-[0.3em] uppercase mb-4 block">
                        Platinum Partners
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sponsors.title.map((s) => (
                            <SponsorCard key={s.name} {...s} tier="title" />
                        ))}
                    </div>
                </div>

                {/* associate */}
                <div className="mb-8">
                    <span className="text-white/15 text-[9px] font-semibold tracking-[0.3em] uppercase mb-4 block">
                        associate Partners
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {sponsors.associate.map((s) => (
                            <SponsorCard key={s.name} {...s} tier="associate" />
                        ))}
                    </div>
                </div>

                {/* Silver */}
                <div>
                    <span className="text-white/10 text-[9px] font-semibold tracking-[0.3em] uppercase mb-4 block">
                        Silver Partners
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {sponsors.silver.map((s) => (
                            <SponsorCard key={s.name} {...s} tier="silver" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
