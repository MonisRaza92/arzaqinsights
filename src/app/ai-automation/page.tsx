"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Cpu,
    Clock,
    TrendingUp,
    Zap,
    Layers,
    Target,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

const useCases = [
    {
        title: "CRM Automation",
        desc: "Automatically handle lead intake, follow-ups, and data synchronization across your sales stack.",
        benefit: "Saves 10+ hours/week per agent"
    },
    {
        title: "Intelligent Reporting",
        desc: "AI-powered data extraction and summarized reporting for executive stakeholders.",
        benefit: "Near-instant insights"
    },
    {
        title: "Automated Workflows",
        desc: "Bridge the gap between siloed tools like Slack, Email, and Project Management software.",
        benefit: "Zero manual data entry"
    },
    {
        title: "Customer Support Bots",
        desc: "Context-aware AI agents that handle 80% of routine inquiries with high accuracy.",
        benefit: "24/7 instant response"
    }
];

export default function AIAutomation() {
    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh & Tech Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                            y: [0, -50, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-1/4 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-10 blur-[130px]"
                    />
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-1/2 w-full"
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
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Intelligence Systems</span>
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                Autonomous <br />
                                <span className="opacity-40 italic">Efficiency.</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl">
                                We eliminate operational friction through intelligent automation layers. Architecting the future where scale is limited only by your vision, not your headcount.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Scanning Effect Placeholder */}
                <motion.div
                    animate={{ y: ["0%", "100%", "0%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-1/2 h-[2px] bg-background/20 blur-sm pointer-events-none"
                />
            </section>

            {/* Philosophy Section */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {[
                            {
                                icon: <Clock size={40} />,
                                title: "Save Time",
                                desc: "Reclaim hundreds of hours lost to repetitive, manual data entry and fragmented processes."
                            },
                            {
                                icon: <TrendingUp size={40} />,
                                title: "Scale Faster",
                                desc: "Handle 10x the workload with the same team by automating core operational loops."
                            },
                            {
                                icon: <Cpu size={40} />,
                                title: "Eliminate Errors",
                                desc: "Remove human fatigue from the equation with consistent, logic-driven systems."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-20 h-20 bg-foreground/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
                                <p className="text-lg opacity-80 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-surface border-y border-border relative overflow-hidden">
                <div className="absolute inset-0 premium-grid opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center font-heading">Structural AI Integrations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative glass p-10 rounded-[3rem] hover:border-foreground/40 transition-all flex flex-col items-start overflow-hidden light-sweep"
                            >
                                <div className="bg-foreground/5 p-4 rounded-2xl mb-8 group-hover:bg-foreground group-hover:text-background transition-colors">
                                    <Bot size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading">{useCase.title}</h3>
                                <p className="text-lg opacity-80 mb-10 flex-grow font-medium">{useCase.desc}</p>
                                <div className="w-full glass bg-background/50 p-6 rounded-2xl flex items-center justify-between border-transparent group-hover:border-border transition-all">
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-40">Impact Metrics</span>
                                    <span className="text-sm font-bold opacity-100">{useCase.benefit}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding text-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-10 font-heading tracking-tighter">Automate the <span className="opacity-50 italic">Bottleneck.</span></h2>
                        <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">
                            The future of scale isn't more people; it's better architecture. Let's build your intelligent workflow engine.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Magnetic>
                                <Link
                                    href="/contact"
                                    className="group relative bg-primary text-background px-12 py-6 rounded-full font-black text-xl overflow-hidden hover:scale-105 transition-all light-sweep font-heading uppercase tracking-tight"
                                >
                                    Initialize AI Audit
                                </Link>
                            </Magnetic>
                            <Link
                                href="/services"
                                className="text-lg font-bold border-b-2 border-foreground/20 hover:border-foreground transition-all pb-1 font-heading"
                            >
                                Explore Capabilities
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
