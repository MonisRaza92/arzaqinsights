"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground border-t border-border relative overflow-hidden">
            <div className="absolute inset-0 premium-grid opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                    {/* Brand & Mission */}
                    <div className="md:col-span-5 space-y-10">
                        <Link href="/" className="flex items-center space-x-3 group w-fit">
                            <div className="w-12 h-12 bg-foreground rounded-[1.25rem] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-background font-bold text-2xl font-heading">A</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter font-heading">
                                ARZAQ <span className="opacity-40 italic">INSIGHTS</span>
                            </span>
                        </Link>
                        <p className="text-xl font-medium opacity-60 leading-relaxed max-w-sm">
                            Architecting the foundations of digital growth through surgical technical precision and strategic clarity.
                        </p>
                        <div className="flex space-x-6">
                            {[
                                { icon: <Linkedin size={22} />, href: "#" },
                                { icon: <Twitter size={22} />, href: "#" },
                                { icon: <Github size={22} />, href: "#" }
                            ].map((social, i) => (
                                <Magnetic key={i}>
                                    <Link href={social.href} className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                                        {social.icon}
                                    </Link>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Architecture</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Web Systems", href: "/services/web-design-development" },
                                { name: "App Ecosystems", href: "/services/app-design-development" },
                                { name: "AI Automation", href: "/ai-automation" },
                                { name: "ERP Solutions", href: "/services/business-management-systems" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center group">
                                        <span>{item.name}</span>
                                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Foundation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Our Core", href: "/about" },
                                { name: "Industries", href: "/industries" },
                                { name: "Partner Hub", href: "/contact" },
                                { name: "Privacy", href: "#" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Hub */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Hub</h4>
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <div className="text-[10px] font-black opacity-30 group-hover:opacity-100 transition-opacity mb-1">SECURE_MAIL</div>
                                <div className="text-sm font-bold">hello@arzaqinsights.com</div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="text-[10px] font-black opacity-30 group-hover:opacity-100 transition-opacity mb-1">REGION_CONTROL</div>
                                <div className="text-sm font-bold">Global Strategic HQ<br />London • Dubai</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">
                        © {new Date().getFullYear()} ARZAQ INSIGHTS • SYSTEM_VER_4.0
                    </p>
                    <div className="flex space-x-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-10">Architecting Generational Value</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
