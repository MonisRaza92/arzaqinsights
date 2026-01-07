"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "AI Automation", href: "/ai-automation" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-border/50 py-4"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-background font-bold text-xl font-heading">A</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight font-heading group-hover:opacity-100 transition-opacity">
                        ARZAQ <span className="opacity-40 font-medium">INSIGHTS</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all hover:translate-y-px"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Magnetic>
                        <Link
                            href="/contact"
                            className="group relative bg-foreground text-background px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 light-sweep font-heading"
                        >
                            <span className="relative z-10">Initialize Project</span>
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2 hover:bg-foreground/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-bold font-heading hover:opacity-100 opacity-40 transition-opacity tracking-tighter"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-foreground text-background px-8 py-6 rounded-3xl text-center font-black font-heading text-xl uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                Initialize Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
