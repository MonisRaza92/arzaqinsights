"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate server action
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="flex flex-col w-full">
            {/* Header / Hero */}
            <section className="relative pt-44 pb-32 flex items-center overflow-hidden premium-grid">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 z-0 bg-primary">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-20 blur-[140px]"
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
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-60">Strategic Inquiry Hub</span>
                            </div>
                            <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-white">
                                Bridge the <br />
                                <span className="opacity-40 italic">Gap.</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-white opacity-80 leading-relaxed max-w-2xl">
                                Let's architect your business's central nervous system. Every inquiry is handled with the same technical rigor we apply to our engineering.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Left side - Info */}
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading tracking-tight">Technical Audit & Discovery</h2>
                                <p className="text-lg opacity-80 font-medium leading-relaxed mb-10">
                                    Our process begins with a surgical audit of your existing infrastructure. We don't just "take orders"—we partner with you to engineer the most efficient path forward.
                                </p>
                            </div>

                            <div className="space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-8 group"
                                >
                                    <div className="w-16 h-16 bg-foreground/5 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-xl font-bold mb-1 font-heading uppercase tracking-widest opacity-50">Email Inquiry</h4>
                                        <p className="text-2xl font-bold font-heading">hello@arzaqinsights.com</p>
                                        <div className="flex items-center space-x-2 mt-4 text-sm font-bold opacity-40">
                                            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                            <span>GLOBAL RESPONSE UNIT</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-start space-x-8 group"
                                >
                                    <div className="w-16 h-16 bg-foreground/5 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-all">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-xl font-bold mb-1 font-heading uppercase tracking-widest opacity-50">Strategy session</h4>
                                        <p className="text-2xl font-bold font-heading">Book Technical Discovery</p>
                                        <button className="flex items-center space-x-2 font-bold mt-4 hover:opacity-100 opacity-60 transition-opacity">
                                            <span>VIEW CALENDAR</span>
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-start space-x-8 group"
                                >
                                    <div className="w-16 h-16 bg-foreground/5 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-xl font-bold mb-1 font-heading uppercase tracking-widest opacity-50">Global Hubs</h4>
                                        <p className="text-lg font-bold font-heading opacity-80 leading-relaxed">United Arab Emirates <br /> United Kingdom</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="contact-form"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        onSubmit={handleSubmit}
                                        className="glass p-10 md:p-14 rounded-[3rem] border border-border space-y-8 relative overflow-hidden light-sweep"
                                    >
                                        <div className="absolute inset-0 premium-grid opacity-[0.03] pointer-events-none" />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                            <div className="space-y-4">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40 ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-background/50 border border-border px-8 py-5 rounded-2xl focus:outline-none focus:ring-0 focus:border-foreground transition-all font-medium text-lg placeholder:opacity-20"
                                                    placeholder="e.g. Alexander Knight"
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40 ml-1">Business Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-background/50 border border-border px-8 py-5 rounded-2xl focus:outline-none focus:ring-0 focus:border-foreground transition-all font-medium text-lg placeholder:opacity-20"
                                                    placeholder="alex@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4 relative z-10">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40 ml-1">Strategic Interest</label>
                                            <div className="relative">
                                                <select className="w-full bg-background/50 border border-border px-8 py-5 rounded-2xl focus:outline-none focus:ring-0 focus:border-foreground transition-all font-medium text-lg appearance-none cursor-pointer">
                                                    <option>Full Digital Transformation</option>
                                                    <option>Enterprise AI & Workflow</option>
                                                    <option>Custom Technical Architecture</option>
                                                    <option>Advanced Web Ecosystem</option>
                                                    <option>Mobile Engineering</option>
                                                </select>
                                                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <ArrowRight size={20} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 relative z-10">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40 ml-1">Initial Project Architecture</label>
                                            <textarea
                                                required
                                                rows={5}
                                                className="w-full bg-background/50 border border-border px-8 py-5 rounded-2xl focus:outline-none focus:ring-0 focus:border-foreground transition-all font-medium text-lg placeholder:opacity-20 flex-resize-none"
                                                placeholder="Briefly describe your current technical landscape and growth objectives..."
                                            />
                                        </div>

                                        <Magnetic>
                                            <button
                                                disabled={loading}
                                                className="group relative w-full bg-primary text-background py-6 rounded-4xl font-black text-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 font-heading tracking-tight"
                                            >
                                                <span className="relative z-10 flex items-center justify-center space-x-3">
                                                    <span>{loading ? "INITIALIZING..." : "SEND BUSINESS INQUIRY"}</span>
                                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                                </span>
                                            </button>
                                        </Magnetic>
                                        <p className="text-center text-[10px] font-bold uppercase tracking-widest opacity-30 relative z-10">
                                            ARZAQ INSIGHTS SECURE COMMUNICATION PROTOCOL
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="glass p-16 rounded-[4rem] border-border text-center space-y-10 relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 premium-grid opacity-[0.03] pointer-events-none" />
                                        <div className="w-24 h-24 bg-foreground/5 rounded-full flex items-center justify-center mx-auto relative">
                                            <CheckCircle2 size={48} className="text-foreground" />
                                            <div className="absolute inset-[-4px] border border-foreground/10 rounded-full animate-ping" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-bold font-heading tracking-tighter">Transmission Successful</h3>
                                            <p className="text-xl opacity-80 font-medium max-w-sm mx-auto leading-relaxed">
                                                Your inquiry has been routed to our strategy department. A partner will contact you within 24 business hours.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="font-black text-xs uppercase tracking-[0.3em] hover:opacity-100 opacity-40 transition-opacity"
                                        >
                                            [ SEND NEW INQUIRY ]
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
