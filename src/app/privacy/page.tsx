"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-background text-foreground">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-20 blur-[120px]"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                            <Shield size={14} className="text-white opacity-60" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Legal Framework</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tighter leading-tight text-white mb-8">
                            Privacy <span className="opacity-40 italic">Protocols.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl mx-auto">
                            Our commitment to data integrity and strategic confidentiality. Technical transparency defined for our partners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        {/* Section 1 */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading italic">01. Data Collection Architecture</h2>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                We collect only the surgical data necessary to execute our technical mandates. This includes information provided through inquiry forms, strategic discovery sessions, and technical audits. Our architecture prioritizes data minimization—collecting only what is essential for project success.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading italic">02. Strategic Utilization</h2>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                Collected data is utilized exclusively to:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Architect technical solutions",
                                    "Optimize operational workflows",
                                    "Faciliate secure communication",
                                    "Monitor system performance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 p-4 glass rounded-xl border-border/50">
                                        <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                        <span className="text-sm font-bold opacity-80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading italic">03. Security Infrastructure</h2>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                We implement redundant security protocols to protect your strategic assets. This includes enterprise-grade encryption at rest and in transit, multi-factor authentication for all system access, and regular technical audits of our internal infrastructure.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading italic">04. Partner Rights</h2>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                You maintain full sovereign rights over your technical data. At any time, our partners may request a full archival export or permanent deletion of their data from our primary systems, subject to legal retention mandates.
                            </p>
                        </div>

                        {/* Footer Note */}
                        <div className="pt-16 border-t border-border text-center">
                            <p className="text-xs font-black uppercase tracking-[0.4em] opacity-30">
                                SYSTEM_PRIVACY_VER_1.0 • AUTO_UPDATE_2026
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
