import { useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        event: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset after 3s
        setTimeout(() => setSubmitted(false), 3000);
    };

    const inputClass =
        'w-full bg-transparent border-b border-white/10 py-3 text-white text-sm font-inter placeholder:text-white/20 focus:border-brand-green focus:outline-none transition-colors duration-300';

    return (
        <section id="registration" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
            // Join the mission
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        REGISTER
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className={inputClass}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={inputClass}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 XXXXX XXXXX"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">College / Organization</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                placeholder="Your institution"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mb-1">Preferred Event</label>
                            <select
                                name="event"
                                value={formData.event}
                                onChange={handleChange}
                                className={`${inputClass} cursor-pointer appearance-none`}
                                style={{ backgroundImage: 'none' }}
                            >
                                <option value="" className="bg-dark">Select an event</option>
                                <option value="rocket" className="bg-dark">Rocket Design Challenge</option>
                                <option value="drone" className="bg-dark">Drone Racing League</option>
                                <option value="talks" className="bg-dark">Aero Innovation Talks</option>
                                <option value="simulator" className="bg-dark">Flight Simulator Showdown</option>
                                <option value="paper" className="bg-dark">Paper Plane Engineering</option>
                                <option value="quiz" className="bg-dark">Aerospace Quiz Bowl</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={submitted}
                            className={`group flex items-center gap-4 mt-4 transition-all duration-300 ${submitted ? 'opacity-60' : ''
                                }`}
                        >
                            <span className="text-white text-sm font-medium tracking-[0.2em] uppercase group-hover:text-brand-green transition-colors">
                                {submitted ? 'REGISTERED ✓' : 'SUBMIT'}
                            </span>
                            {!submitted && (
                                <span className="w-10 h-10 rounded-full border border-brand-green/30 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                                    <svg className="w-4 h-4 text-brand-green group-hover:text-dark transition-colors duration-300 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Info panel */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-2">Venue</p>
                            <p className="text-white/70 text-sm font-inter leading-relaxed">
                                Main Auditorium & Open Grounds<br />
                                Engineering Campus, Block A
                            </p>
                        </div>
                        <div>
                            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-2">Date</p>
                            <p className="text-white/70 text-sm font-inter">
                                February 28 — March 2, 2026
                            </p>
                        </div>
                        <div>
                            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-2">Entry Fee</p>
                            <p className="text-white/70 text-sm font-inter">
                                ₹199 per participant<br />
                                <span className="text-brand-green/60">Free for first 100 registrations</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-2">Contact</p>
                            <p className="text-white/70 text-sm font-inter">
                                aerotech@college.edu<br />
                                +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
