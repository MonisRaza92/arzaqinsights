"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Rocket,
    Building2,
    ShoppingCart,
    Stethoscope,
    BadgeDollarSign,
    Target,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

const industries = [
    {
        title: "Schools & Academies",
        icon: <GraduationCap size={40} />,
        desc: "Comprehensive LMS architecture and automated administrative ecosystems tailored for modern education.",
        stats: "40% Efficiency Gain"
    },
    {
        title: "Scaling Startups",
        icon: <Rocket size={40} />,
        desc: "Rapid deployment of MVP and technical infrastructure designed for hyper-growth ventures.",
        stats: "Time-to-Market Focus"
    },
    {
        title: "Corporate SMEs",
        icon: <Building2 size={40} />,
        desc: "Modernizing legacy operations through intelligent cloud and AI integration for better scalability.",
        stats: "30% OpEx Reduction"
    },
    {
        title: "E-commerce Platforms",
        icon: <ShoppingCart size={40} />,
        desc: "High-performance checkout engines and automated supply chain tracking for global reach.",
        stats: "Zero-Downtime Architecture"
    },
    {
        title: "Healthcare Systems",
        icon: <Stethoscope size={40} />,
        desc: "Secure, GDPR-ready data management and patient workflow automation for clinical excellence.",
        stats: "Patient Trust Centered"
    },
    {
        title: "Financial Services",
        icon: <BadgeDollarSign size={40} />,
        desc: "Secure fintech platforms with rigorous compliance, real-time processing, and advanced security.",
        stats: "Enterprise-Grade Security"
    }
];

export default function Industries() {
    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 right-1/4 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-20 blur-[180px]"
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
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Global Reach</span>
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                Industry <br />
                                <span className="opacity-40 italic">Mastery.</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl">
                                We apply architectural precision across diverse sectors. From fintech to logistics, we engineer the digital infrastructure that defines market leaders.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative glass p-10 rounded-[3rem] hover:border-foreground/40 transition-all flex flex-col justify-between overflow-hidden light-sweep"
                            >
                                <div>
                                    <div className="w-20 h-20 bg-foreground/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-foreground group-hover:text-background transition-colors">
                                        {industry.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 font-heading">{industry.title}</h3>
                                    <p className="text-lg opacity-80 leading-relaxed mb-10 font-medium">
                                        {industry.desc}
                                    </p>
                                </div>
                                <div className="text-sm font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
                                    <Target size={14} />
                                    <span>{industry.stats}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Callout */}
            <section className="section-padding bg-surface border-y border-border relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-5" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 font-heading">Don't See Your Industry?</h2>
                        <p className="text-xl opacity-80 mb-12 font-medium">
                            Our architectural principles of <strong>Precision, Scale, and Impact</strong> are universal. We specialize in solving unique technical challenges regardless of the sector.
                        </p>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-3 bg-primary text-background px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all light-sweep font-heading uppercase tracking-tight"
                            >
                                <span>Discuss Your Sector</span>
                                <ArrowRight size={24} />
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </section>
        </div>
    );
}
