"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Smartphone,
    Share2,
    LayoutDashboard,
    Bot,
    BarChart3,
    Zap,
    ShieldCheck,
    TrendingUp,
    Target
} from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Magnetic from "@/components/Magnetic";

const serviceData: Record<string, any> = {
    "web-design-development": {
        title: "Web Design & Development",
        subtitle: "High-performance digital flagship for your brand.",
        description: "We don't just build websites; we engineer high-conversion engines that position your brand as an industry leader through surgical precision in design and code.",
        icon: <Globe size={48} />,
        features: [
            { title: "Custom Next.js Architecture", desc: "Blazing fast performance with 100/100 Core Web Vitals and SEO-first structure." },
            { title: "Conversion focus", desc: "Strategically architected user journeys that transform visitors into long-term partners." },
            { title: "Responsive & Adaptive", desc: "Pixel-perfect experience engineered for mobile, tablet, and executive desktop views." },
            { title: "Scalable Infrastructure", desc: "Atomic design principles and scalable backend systems built for global traffic." }
        ],
        process: [
            "Operational Audit & Strategic Mapping",
            "Technical Architecture & Prototyping",
            "High-Performance Engineering",
            "Security & QA stress Testing",
            "Global Deployment & Optimization"
        ]
    },
    "app-design-development": {
        title: "App Design & Development",
        subtitle: "Solving complex problems with intuitive mobile architecture.",
        description: "Native-performance applications that solve deep business bottlenecks. We focus on structural integrity and seamless user experience.",
        icon: <Smartphone size={48} />,
        features: [
            { title: "Cross-Platform Engineering", desc: "High-performance React Native architecture built once for iOS and Android." },
            { title: "User-Centric flow", desc: "Intuitive interfaces that reduce operational friction and maximize retention." },
            { title: "Enterprise API Integration", desc: "Seamless orchestration between your app and existing legacy systems." },
            { title: "Real-time sync", desc: "Always up-to-date data delivery using robust web-socket protocols." }
        ],
        process: [
            "Discovery & Structural Definition",
            "UI/UX Engineering & Mockups",
            "Full-Stack Development Sprint",
            "End-to-End System Testing",
            "Multi-Store Global Rollout"
        ]
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        subtitle: "Data-driven storytelling for modern authority.",
        description: "Moving beyond superficial metrics to focus on brand authority and predictable lead generation through technical content strategies.",
        icon: <Share2 size={48} />,
        features: [
            { title: "Paid Ad Optimization", desc: "High-ROI campaigns built on Meta, LinkedIn, and Google with surgical targeting." },
            { title: "Content Architecture", desc: "Thought-leadership content loops that establish permanent brand authority." },
            { title: "Audience Analytics", desc: "Deep programmatic insights into customer behavior and conversion triggers." },
            { title: "Growth Experiments", desc: "Continuous iteration to lower acquisition costs and maximize lifetime value." }
        ],
        process: [
            "Persona Mapping & Market Analysis",
            "Strategic Creative Production",
            "Multi-Channel Campaign Launch",
            "Surgical Performance Analysis",
            "Winning Strategy Scaling"
        ]
    },
    "social-media-management": {
        title: "Social Media Management",
        subtitle: "Professional brand consistency across all hubs.",
        description: "Sovereign management of your digital reputation. We ensure every interaction reflects your corporate standards and strategic goals.",
        icon: <Share2 size={48} />,
        features: [
            { title: "Brand Voice Alignment", desc: "Consistent, professional communication that builds generational trust." },
            { title: "Sovereign Engagement", desc: "Active management of inquiries and brand mentions with executive tone." },
            { title: "Scheduling & Automation", desc: "Reliable posting cycles using premium enterprise-grade automation tools." },
            { title: "Reputation Monitoring", desc: "Proactive crisis monitoring to protect your digital brand equity." }
        ],
        process: [
            "Corporate Voice Definition",
            "Advanced Content Calendaring",
            "Strategic Hub Engagement",
            "Global Sentiment Tracking",
            "Impact Performance Reporting"
        ]
    },
    "business-management-systems": {
        title: "Business Management Systems",
        subtitle: "Custom operational infrastructure for serious scale.",
        description: "Architecting your business's central nervous system. We replace fragmented tools with a single, unified source of truth.",
        icon: <LayoutDashboard size={48} />,
        features: [
            { title: "Custom ERP/CRM", desc: "Surgical digital solutions built for your unique operational DNA." },
            { title: "Inventory & Logistics", desc: "Track every asset and movement with real-time digital transparency." },
            { title: "Analytics Command", desc: "Clear, actionable data hubs for executive decision makers." },
            { title: "Team Collaboration Hubs", desc: "Centralized digital architecture for seamless project execution." }
        ],
        process: [
            "Operational Friction Audit",
            "Structural System Design",
            "Modular Engineering Sprints",
            "Legacy Data Migration",
            "Team Integration & Support"
        ]
    }
};

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const data = serviceData[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 60, 0],
                            opacity: [0.1, 0.25, 0.1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-40 -left-40 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-20 blur-[150px]"
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
                            <div className="mb-6 w-16 h-16 glass bg-white/5 border-white/10 rounded-2xl flex items-center justify-center">
                                {data.icon}
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                {data.title.split(' ')[0]} <br />
                                <span className="opacity-40 italic">{data.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl font-heading tracking-tight">
                                {data.subtitle}
                            </p>
                            <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-3xl text-white font-medium">
                                {data.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Grid */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {data.features.map((feature: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group glass p-10 md:p-14 rounded-[3rem] border-transparent hover:border-foreground/30 transition-all light-sweep overflow-hidden relative"
                            >
                                <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <Target size={120} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-heading tracking-tight relative z-10">{feature.title}</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-medium relative z-10">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Roadmap */}
            <section className="section-padding bg-surface border-y border-border relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center font-heading tracking-tight">Transformation Protocol</h2>
                    <div className="max-w-4xl mx-auto space-y-16">
                        {data.process.map((step: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start space-x-10 group"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 font-bold text-2xl font-heading group-hover:bg-foreground group-hover:text-background transition-all">
                                    {i + 1}
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-2xl md:text-3xl font-bold mb-4 font-heading tracking-tight">{step}</h4>
                                    <p className="text-lg opacity-70 leading-relaxed font-medium">
                                        Architectural phase {i + 1} focused on delivering structural integrity and operational excellence for your {data.title.toLowerCase()} ecosystem.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Values */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
                        {[
                            { icon: <ShieldCheck size={32} />, title: "Structural Security", desc: "Every line of code is architected to eliminate technical debt and future-proof your growth." },
                            { icon: <Zap size={32} />, title: "Sovereign Execution", desc: "Uncompromising speed and efficiency in delivery through our proprietary development protocol." },
                            { icon: <TrendingUp size={32} />, title: "Impact Engineering", desc: "We measure success through operational impact and bottom-line growth, not just vanity metrics." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center space-y-6"
                            >
                                <div className="w-20 h-20 bg-foreground/5 rounded-3xl flex items-center justify-center mx-auto mb-10 hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-bold font-heading tracking-tight">{item.title}</h4>
                                <p className="text-lg opacity-70 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-10 font-heading tracking-tighter">Ready for the <span className="opacity-50 italic">Shift?</span></h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl mx-auto font-medium">
                            Initialize a discovery session for your {data.title.toLowerCase()} requirements today.
                        </p>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-4 bg-background text-foreground px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all light-sweep font-heading uppercase tracking-tight"
                            >
                                <span>Start Technical Discovery</span>
                                <ArrowRight size={24} />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
