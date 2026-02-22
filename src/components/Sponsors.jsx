import bazarBakers from '../assets/sponsors_logos/Bazar_Bakers.png';
import decathlon from '../assets/sponsors_logos/Decathlon-Logo.png';
import aai from '../assets/sponsors_logos/aai.png';
import cultees from '../assets/sponsors_logos/cultees.png';
import pakhtunBiriyani from '../assets/sponsors_logos/pakhtun_biriyani.png';
import robopixel from '../assets/sponsors_logos/robopixel.png';
import rollsMania from '../assets/sponsors_logos/rolls_mania.png';
import safarTravels from '../assets/sponsors_logos/safar_travels.png';

const sponsors = [
    { name: 'Bazar Bakers', logo: bazarBakers },
    { name: 'Decathlon', logo: decathlon },
    { name: 'AAI', logo: aai },
    { name: 'Cultees', logo: cultees },
    { name: 'Pakhtun Biriyani', logo: pakhtunBiriyani },
    { name: 'Robopixel', logo: robopixel },
    { name: 'Rolls Mania', logo: rollsMania },
    { name: 'Safar Travels', logo: safarTravels },
];

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

                {/* Sponsor logos grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {sponsors.map((s) => (
                        <div
                            key={s.name}
                            className="flex items-center justify-center p-6 md:p-8 rounded-lg border border-white/5 hover:border-brand-green/30 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-500 cursor-default group"
                        >
                            <img
                                src={s.logo}
                                alt={s.name}
                                className="max-h-16 md:max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
