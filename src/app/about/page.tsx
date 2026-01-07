"use client";

import { motion } from "framer-motion";
import { Shield, Rocket, Target, Globe, Zap, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function About() {
    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 45, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-20 blur-[120px]"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Corporate Foundation</span>
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                Beyond the <br />
                                <span className="opacity-40 italic">Ordinary.</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl">
                                ARZAQ INSIGHTS is a strategic technology architecture firm. We don't just build systems; we engineer the foundations of business growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-heading">Our Structural Core</h2>
                            <p className="text-lg opacity-80 leading-relaxed font-medium">
                                In a world of digital noise, we focus on structural integrity. We believe that technology should be a silent, powerful engine that propels your business forward without friction.
                            </p>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                Our team consists of architects, engineers, and strategists who see the digital landscape through the lens of long-term scalability and operational impact.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Performance", val: "100%" },
                                { label: "Retention", val: "94%" },
                                { label: "Automation", val: "∞" },
                                { label: "Partnership", val: "Expert" }
                            ].map((stat, i) => (
                                <Magnetic key={i}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass p-10 rounded-[2.5rem] text-center hover:border-foreground/30 transition-all light-sweep"
                                    >
                                        <div className="text-3xl md:text-4xl font-bold mb-2 font-heading">{stat.val}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-50">{stat.label}</div>
                                    </motion.div>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Framework */}
            <section className="section-padding bg-surface border-y border-border relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center font-heading">The Arzaq Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Shield size={40} className="text-foreground" />,
                                title: "Security First",
                                desc: "Architecting systems with zero-compromise security protocols from day one."
                            },
                            {
                                icon: <Rocket size={40} className="text-foreground" />,
                                title: "Growth Engine",
                                desc: "Every line of code is written to support 10x scale without technical debt."
                            },
                            {
                                icon: <Target size={40} className="text-foreground" />,
                                title: "Precision Driven",
                                desc: "Data-led decision making that removes guesswork from the growth process."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group p-10 glass rounded-[3rem] border-transparent hover:border-border hover:bg-background/80 transition-all text-center light-sweep"
                            >
                                <div className="w-20 s-20 bg-foreground/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-foreground group-hover:text-background transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
                                <p className="opacity-70 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="glass p-12 rounded-[3rem] space-y-8 hover:border-foreground/20 transition-all">
                            <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-3xl font-bold font-heading">Global Vision</h3>
                            <p className="text-xl opacity-80 leading-relaxed italic font-medium">
                                "To become the architectural standard for modern business growth, empowering organizations worldwide through technical excellence and strategic clarity."
                            </p>
                        </div>
                        <div className="glass p-12 rounded-[3rem] space-y-8 hover:border-foreground/20 transition-all">
                            <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-3xl font-bold font-heading">Operational Mission</h3>
                            <p className="text-lg opacity-80 leading-relaxed font-medium text-muted-premium">
                                We bridge the gap between complex digital requirements and real-world business results. Our mission is to engineer high-performance systems that act as a permanent competitive advantage for our partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="section-padding bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-9xl font-bold mb-10 font-heading tracking-tighter leading-none">
                            Ready to <br /> <span className="opacity-50 italic">Engineer Growth?</span>
                        </h2>
                        <p className="text-xl md:text-3xl mb-16 opacity-80 max-w-2xl mx-auto font-medium tracking-tight">
                            Initialize your technical audit and discovery session.
                        </p>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-4 bg-background text-foreground px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all light-sweep font-heading tracking-tight uppercase"
                            >
                                <span>Initialize Strategy</span>
                                <ArrowRight size={32} />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
