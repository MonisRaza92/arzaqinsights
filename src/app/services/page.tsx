"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Share2,
    LayoutDashboard,
    Bot,
    BarChart3,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

const serviceList = [
    {
        title: "Web Design & Development",
        icon: <Globe size={40} />,
        desc: "We build modern, responsive, and high-performance websites. Our focus is on clean architecture, lightning-fast load times, and conversion-optimized design.",
        features: ["Custom React/Next.js Apps", "E-commerce Solutions", "Performance Optimization", "SEO-First Architecture"],
        href: "/services/web-design-development"
    },
    {
        title: "App Design & Development",
        icon: <Smartphone size={40} />,
        desc: "Cross-platform mobile applications that deliver native-like performance. From concept to App Store/Play Store deployment.",
        features: ["iOS & Android Development", "UI/UX Prototyping", "External API Integration", "Real-time Functionality"],
        href: "/services/app-design-development"
    },
    {
        title: "AI Automation & Workflow",
        icon: <Bot size={40} />,
        desc: "Intelligent automation that frees your team from repetitive tasks. We use AI to streamline operations and enhance decision-making.",
        features: ["Custom GPT Solutions", "Process Automation (Zapier/Make)", "Data Extraction Systems", "Automated Reporting"],
        href: "/ai-automation"
    },
    {
        title: "Business Management Systems",
        icon: <LayoutDashboard size={40} />,
        desc: "Custom ERP, CRM, and dashboard solutions tailored to your unique business processes.",
        features: ["Inventory Management", "Client Relationship Portals", "Custom Analytics Dashboards", "Team Collaboration Tools"],
        href: "/services/business-management-systems"
    },
    {
        title: "Social Media Strategy & Management",
        icon: <Share2 size={40} />,
        desc: "End-to-end management of your digital presence. We combine creative storytelling with data-driven marketing.",
        features: ["Content Strategy", "Community Management", "Paid Ad Optimization", "Brand Voice Alignment"],
        href: "/services/social-media-marketing"
    },
    {
        title: "Scale & Growth Consulting",
        icon: <BarChart3 size={40} />,
        desc: "Technical and strategic consulting for businesses ready to scale their operations globally.",
        features: ["Infrastructure Audits", "Growth Hacking Strategy", "Conversion Rate Optimization", "Scalability Roadmaps"],
        href: "/services/social-media-management"
    }
];

export default function Services() {
    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, -90, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-20 blur-[150px]"
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
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Solutions Architecture</span>
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                Precision <br />
                                <span className="opacity-40 italic">Engineering.</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl">
                                We provide surgical technical solutions for complex digital challenges. Every service is architected for permanent scale and operational impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-16 md:gap-24">
                        {serviceList.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`flex flex-col lg:flex-row gap-12 md:gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="lg:w-1/2 space-y-10">
                                    <div className="w-20 h-20 bg-foreground/5 rounded-3xl flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                                            {service.title}
                                        </h2>
                                        <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium">
                                            {service.desc}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
                                        {service.features.map((f) => (
                                            <li key={f} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider">
                                                <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                <span className="opacity-70">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-8">
                                        <Magnetic>
                                            <Link
                                                href={service.href}
                                                className="group relative inline-flex items-center space-x-4 bg-primary text-background px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 light-sweep font-heading"
                                            >
                                                <span>Explore Expertise</span>
                                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                            </Link>
                                        </Magnetic>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full aspect-[4/3] bg-surface rounded-[4rem] border border-border flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 premium-grid opacity-5 group-hover:opacity-10 transition-opacity" />
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-20">
                                        <div className="w-full h-full border border-foreground/10 rounded-[3rem] glass flex items-center justify-center">
                                            <span className="font-heading font-black text-6xl md:text-8xl opacity-5 select-none text-center leading-none">
                                                {service.title.split(' ')[0]} <br /> {service.title.split(' ').slice(1).join(' ')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="section-padding bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-5" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-10 font-heading tracking-tighter">
                            Ready for the <span className="opacity-50 italic">Transformation?</span>
                        </h2>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-3 bg-background text-foreground px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all light-sweep font-heading uppercase tracking-tight"
                            >
                                <span>Initialize Strategy</span>
                                <ArrowRight size={24} />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
