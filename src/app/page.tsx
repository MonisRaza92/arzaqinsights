"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Layers,
  Bot,
  Briefcase,
  Building2,
  Users,
  Star,
  Quote,
  Globe,
  Smartphone,
  BarChart3,
  LayoutDashboard,
  Share2
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

const services = [
  {
    title: "Web Architecture",
    icon: <Globe size={24} />,
    desc: "High-performance digital products engineered for global scale.",
    href: "/services/web-design-development"
  },
  {
    title: "App Engineering",
    icon: <Smartphone size={24} />,
    desc: "Bespoke mobile ecosystems with native-level structural integrity.",
    href: "/services/app-design-development"
  },
  {
    title: "AI & Workflow",
    icon: <Bot size={24} />,
    desc: "Intelligent automation layers that eliminate operational friction.",
    href: "/ai-automation"
  },
  {
    title: "Enterprise Systems",
    icon: <LayoutDashboard size={24} />,
    desc: "Custom ERP and structural management for business intelligence.",
    href: "/services/business-management-systems"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-grid pt-20">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-30 blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Architecting Growth Ecosystems</span>
              </div>

              <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter leading-[0.85] text-balance-premium">
                Engineering <br />
                <span className="opacity-40 italic">Global Impact.</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed text-muted-premium">
                We don't just build systems; we engineer the foundations of business growth through surgical precision and technological excellence.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group relative bg-primary text-background px-12 py-6 rounded-full font-black text-xl overflow-hidden hover:scale-105 transition-all light-sweep font-heading"
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>Initialize Transformation</span>
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </Magnetic>
                <Link
                  href="/services"
                  className="text-lg font-bold border-b-2 border-foreground/20 hover:border-foreground transition-all pb-1 font-heading"
                >
                  Explore Architecture
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Minimal Element */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-12 h-[1px] bg-foreground" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Established 2024</span>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass p-10 rounded-[3rem] hover:border-foreground/30 transition-all flex flex-col justify-between h-[400px] overflow-hidden light-sweep"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-heading tracking-tight leading-tight">{service.title}</h3>
                  <p className="opacity-70 font-medium leading-relaxed">{service.desc}</p>
                </div>
                <Link
                  href={service.href}
                  className="flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform"
                >
                  <span>Define</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="section-padding bg-surface border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tighter leading-none">
                Structural <br /> Integrity First.
              </h2>
              <p className="text-xl md:text-2xl opacity-80 font-medium leading-relaxed">
                Most agencies deliver features. We deliver architecture. Every line of code is written to support 10x scale without technical debt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {[
                  { icon: <ShieldCheck size={20} />, title: "Zero-Trust Security", desc: "Hardened digital foundations." },
                  { icon: <Zap size={20} />, title: "Hyper-Performance", desc: "Engineered for pure speed." },
                  { icon: <Layers size={20} />, title: "Modular Design", desc: "Built for future adaptability." },
                  { icon: <Target size={20} />, title: "Data Precision", desc: "Results-led development." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-3 text-foreground">
                      {item.icon}
                      <span className="font-bold text-sm uppercase tracking-widest">{item.title}</span>
                    </div>
                    <p className="opacity-60 text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-foreground/5 rounded-[4rem] border border-foreground/10 glass light-sweep" />
              <div className="absolute inset-20 border border-foreground/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
              <div className="absolute inset-40 border border-foreground/5 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading font-black text-9xl opacity-5 select-none tracking-tighter">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Metrics */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight">Vetted by Industry Leaders</h2>
            <div className="w-20 h-1 bg-foreground mx-auto opacity-20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Arzaq transformed our fragmented legacy systems into a unified operational ecosystem. They are tactical partners, not just developers.",
                author: "Director of Operations",
                role: "Regional SME"
              },
              {
                text: "The architectural depth they brought to our fintech platform was unparalleled. Security and scalability weren't afterthoughts.",
                author: "CTO",
                role: "Global Logistics"
              },
              {
                text: "Rarely do you find a team that understands both high-end design aesthetics and rigid technical engineering so well.",
                author: "Founder",
                role: "Scaling Tech Academy"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[3.5rem] border-transparent hover:border-border transition-all flex flex-col justify-between group light-sweep"
              >
                <Quote size={40} className="mb-8 opacity-10 group-hover:opacity-100 transition-opacity" />
                <p className="text-xl italic opacity-80 leading-relaxed font-serif mb-10">"{item.text}"</p>
                <div>
                  <div className="font-bold font-heading text-lg">{item.author}</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-40">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-padding bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 premium-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-bold mb-10 font-heading tracking-tighter leading-none">
              Ready for the <br /> <span className="opacity-50 italic">New Standard?</span>
            </h2>
            <p className="text-xl md:text-3xl mb-16 opacity-80 max-w-2xl mx-auto font-medium tracking-tight">
              Initialize your technical audit and discovery session.
            </p>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-4 bg-background text-foreground px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all light-sweep font-heading tracking-tight"
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

function ShieldCheck({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
