"use client";

import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import Link from "next/link";
import Image from "next/image";
import {
  LuDownload,
  LuGithub,
  LuChartBar,
  LuArrowRight,
  LuDatabase,
  LuShare2,
  LuStar,
  LuTrendingUp,
  LuShield,
  LuZap,
  LuWallet,
  LuChartPie,
  LuArrowUpRight,
  LuCheck,
  LuSparkle,
} from "react-icons/lu";
import { IconBrandFlutter } from "@tabler/icons-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── data ─── */

const techStack = [
  {
    icon: <IconBrandFlutter className="w-8 h-8 text-sky-400" />,
    title: "Flutter",
    desc: "Cross-platform excellence",
  },
  {
    icon: <LuDatabase className="w-8 h-8 text-amber-500" />,
    title: "Hive",
    desc: "Fast local storage",
  },
  {
    icon: <LuShare2 className="w-8 h-8 text-violet-500" />,
    title: "Provider",
    desc: "State management",
  },
  {
    icon: <LuChartBar className="w-8 h-8 text-emerald-500" />,
    title: "fl_chart",
    desc: "Beautiful analytics",
  },
];

const stats = [
  { value: "100%", label: "Offline First" },
  { value: "0", label: "Data Shared" },
  { value: "52MB", label: "App Size" },
  { value: "v1.0", label: "Stable Release" },
];

const features = [
  {
    icon: <LuWallet className="w-6 h-6" />,
    title: "Smart Transaction Logging",
    desc: "Capture income and expenses in seconds. Tag, categorize, and add notes — all locally on your device.",
    color: "from-sky-500/10 to-blue-500/5",
    accent: "sky",
  },
  {
    icon: <LuChartPie className="w-6 h-6" />,
    title: "Visual Spending Insights",
    desc: "Beautiful charts that reveal your patterns. Know exactly where every rupee goes at a glance.",
    color: "from-emerald-500/10 to-teal-500/5",
    accent: "emerald",
  },
  {
    icon: <LuShare2 className="w-6 h-6" />,
    title: "Spaces & Events",
    desc: "Organize finances into separate spaces — trips, household, freelance. Each with its own ledger.",
    color: "from-violet-500/10 to-purple-500/5",
    accent: "violet",
  },
  {
    icon: <LuShield className="w-6 h-6" />,
    title: "100% Private",
    desc: "No account. No cloud. No tracking. Your financial data lives only on your phone.",
    color: "from-amber-500/10 to-orange-500/5",
    accent: "amber",
  },
  {
    icon: <LuTrendingUp className="w-6 h-6" />,
    title: "Budget Tracking",
    desc: "Set monthly budgets and watch them in real-time. Get warned before you overspend.",
    color: "from-rose-500/10 to-pink-500/5",
    accent: "rose",
  },
  {
    icon: <LuZap className="w-6 h-6" />,
    title: "Instant & Offline",
    desc: "No internet, no lag. Paisa Logr works instantly — even on a flight at 35,000 feet.",
    color: "from-yellow-500/10 to-amber-500/5",
    accent: "yellow",
  },
];

const steps = [
  {
    num: "01",
    title: "Download & Open",
    desc: "Install the APK in seconds. No signup, no email, no password. Just open and start.",
  },
  {
    num: "02",
    title: "Log Your First Entry",
    desc: "Tap +, pick income or expense, type the amount and category. Done in under 5 seconds.",
  },
  {
    num: "03",
    title: "Watch Patterns Emerge",
    desc: "After a week, the charts reveal the story of your spending you never saw before.",
  },
];

const reviews = [
  {
    name: "Rohan M.",
    role: "Freelance Designer",
    text: "Finally a finance app that doesn't spy on me. Clean, fast, does exactly what I need.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "Student",
    text: "The Spaces feature is genius for splitting trip expenses. Zero clutter.",
    stars: 5,
  },
  {
    name: "Dev K.",
    role: "Software Engineer",
    text: "Open source, offline, Flutter — this is how apps should be built.",
    stars: 5,
  },
];

/* ─── page ─── */

export default function PaisaLogrPage() {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      className="relative min-h-screen bg-transparent overflow-x-hidden"
    >
      {/* Subtle grain overlay for depth */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── SOCIAL PROOF BAR ── */}
      <SocialProofBar />

      {/* ── SCROLL FAN-OUT ── */}
      <FanOutFeatures />

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── FEATURES GRID ── */}
      <FeaturesSection />

      {/* ── HOW IT WORKS ── */}
      <HowItWorksSection />

      {/* ── REVIEWS ── */}
      <ReviewsSection />

      {/* ── TECH STACK ── */}
      <TechStackSection />

      {/* ── CTA FOOTER ── */}
      <CtaSection />
    </HomeLayout>
  );
}
function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-4 pt-24 pb-20 z-10">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/paisaLogr/logo.png"
          alt="Paisa Logr"
          width={80}
          height={80}
          className="rounded-2xl mb-8 shadow-lg relative z-10 mx-auto"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-none mb-4"
      >
        PAISA LOGR
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-xl mx-auto tracking-wide"
      >
        Financial clarity, zero clutter.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-10 mx-auto"
      >
        A beautifully designed personal finance tracker built with Flutter,
        helping you take control of your daily spending and income with ease.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <a href="https://github.com/likithanagaraj/PaisaLogr/releases/latest/download/app-release.apk" className="relative z-10 group inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground shadow-xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 mb-3">
          <LuDownload className="h-5 w-5 mr-3" />
          <span className="text-lg">Download APK (v1.0)</span>
        </a>  
        <p className="relative z-10 text-xs text-muted-foreground font-mono">
          For Android • 52 MB
        </p>
      </motion.div>
    </section>
  );
}
/* ─── HERO ─── */


/* ─── SOCIAL PROOF BAR ─── */
function SocialProofBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 mx-auto max-w-3xl px-4 mb-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 backdrop-blur-sm">
        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <LuStar
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-sm font-semibold">5.0</span>
          <span className="text-xs text-muted-foreground">on GitHub</span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-white/10" />

        {/* Open source */}
        <div className="flex items-center gap-2 text-sm">
          <LuGithub className="w-4 h-4 text-foreground/60" />
          <span className="text-foreground/60">
            <span className="text-foreground font-semibold">100%</span>{" "}
            Open Source
          </span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-white/10" />

        {/* Privacy */}
        <div className="flex items-center gap-2 text-sm">
          <LuShield className="w-4 h-4 text-emerald-400" />
          <span className="text-foreground/60">
            <span className="text-emerald-400 font-semibold">Zero</span> cloud
            sync
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── FAN-OUT (unchanged logic, refined visuals) ─── */
function FanOutFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const spring = { stiffness: 60, damping: 20, mass: 1 };

  const rawXLeft = useTransform(scrollYProgress, [0, 0.6], [0, -340]);
  const rawRotateLeft = useTransform(scrollYProgress, [0, 0.6], [0, -14]);
  const rawXRight = useTransform(scrollYProgress, [0, 0.6], [0, 340]);
  const rawRotateRight = useTransform(scrollYProgress, [0, 0.6], [0, 14]);
  const rawYCenter = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const rawScaleCenter = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  const xLeft = useSpring(rawXLeft, spring);
  const rotateLeft = useSpring(rawRotateLeft, spring);
  const xRight = useSpring(rawXRight, spring);
  const rotateRight = useSpring(rawRotateRight, spring);
  const yCenter = useSpring(rawYCenter, spring);
  const scaleCenter = useSpring(rawScaleCenter, spring);

  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.05, 0.25],
    [0, 1, 0]
  );
  const opacityScene = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  // Label badges fade in as cards spread
  const labelOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);

  return (
    <section ref={containerRef} className="h-[150vh] relative z-10">
      <motion.div
        style={{ opacity: opacityScene }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: opacityText }}
          className="absolute top-16 text-center z-10 pointer-events-none"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
            Three screens · One truth
          </p>
          <h2 className="text-3xl font-bold">Your Financial Life</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Scroll to explore ↓
          </p>
        </motion.div>

        <div className="relative w-[300px] h-[640px] flex items-center justify-center mt-10">
          {/* Left */}
          <motion.div
            style={{ x: xLeft, rotate: rotateLeft, zIndex: 1 }}
            className="absolute"
          >
            <motion.div style={{ opacity: labelOpacity }} className="absolute -top-10 left-0 w-full text-center z-20">
              <span className="bg-zinc-900/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-foreground/70">
                📋 Transactions
              </span>
            </motion.div>
            <AndroidMockup
              src="/paisaLogr/TranscationScreen.jpeg"
              alt="Transactions"
              className="brightness-70 hover:brightness-100 transition-all duration-500"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            style={{ x: xRight, rotate: rotateRight, zIndex: 1 }}
            className="absolute"
          >
            <motion.div style={{ opacity: labelOpacity }} className="absolute -top-10 left-0 w-full text-center z-20">
              <span className="bg-zinc-900/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-foreground/70">
                🗂️ Spaces
              </span>
            </motion.div>
            <AndroidMockup
              src="/paisaLogr/EventScreen.jpeg"
              alt="Events"
              className="brightness-70 hover:brightness-100 transition-all duration-500"
            />
          </motion.div>

          {/* Center */}
          <motion.div
            style={{ y: yCenter, scale: scaleCenter, zIndex: 10 }}
            className="absolute shadow-2xl"
          >
            <motion.div style={{ opacity: labelOpacity }} className="absolute -top-10 left-0 w-full text-center z-20">
              <span className="bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1 rounded-full text-xs font-medium text-primary">
                🏠 Home
              </span>
            </motion.div>
            <AndroidMockup src="/paisaLogr/HomeScreen.jpeg" alt="Home" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── STATS ─── */
function AnimatedNumber({ target }: { target: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-black tracking-tight"
    >
      {target}
    </motion.span>
  );
}

function StatsSection() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
          >
            <AnimatedNumber target={stat.value} />
            <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function FeaturesSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-8 pb-24">
      <div className="text-center mb-12">
        <SectionLabel>Features</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Everything you need.
          <br />
          <span className="text-muted-foreground font-light">
            Nothing you don't.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${f.color} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden`}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02]" />

            <div className="relative z-10">
              <div className={`mb-4 inline-flex p-2.5 rounded-xl bg-white/5 text-${f.accent}-400`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 py-16 pb-28">
      <div className="text-center mb-14">
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold">Up in 30 seconds.</h2>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 md:gap-10"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10">
                <span className="text-primary font-black text-sm font-mono">
                  {step.num}
                </span>
              </div>
              <div className="pt-3">
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
function ReviewsSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 pb-24">
      <div className="text-center mb-12">
        <SectionLabel>Love</SectionLabel>
        <h2 className="text-3xl font-bold">People are talking.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col gap-4"
          >
            <div className="flex">
              {[...Array(r.stars)].map((_, j) => (
                <LuStar
                  key={j}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">
              "{r.text}"
            </p>
            <div>
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── TECH STACK ─── */
function TechStackSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 pb-24">
      <div className="text-center mb-12">
        <SectionLabel>Powered By</SectionLabel>
        <h2 className="text-3xl font-bold mb-3">Built with Modern Tech</h2>
        <p className="text-muted-foreground text-sm">
          Leveraging the best of the Flutter ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-primary/20 transition-all text-center flex flex-col items-center"
          >
            <div className="mb-4 bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <h3 className="font-bold text-sm mb-1">{tech.title}</h3>
            <p className="text-xs text-muted-foreground">{tech.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="https://github.com/likithanagaraj/PaisaLogr"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors border border-white/[0.08] px-6 py-3 rounded-full hover:bg-white/5 hover:border-primary/20"
        >
          <LuGithub className="w-4 h-4" />
          View Source on GitHub
          <LuArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 text-center px-4 py-28 border-t border-white/[0.05] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          Free · Open Source · Forever
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Ready to own
          <br />
          your finances?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-sm mx-auto">
          No subscription. No account. No excuses.
          Just download and start.
        </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
         <a
            href="https://github.com/likithanagaraj/PaisaLogr/releases/latest/download/app-release.apk"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-12 font-semibold text-primary-foreground shadow-xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95">
            <LuDownload className="h-5 w-5 group-hover:animate-bounce" />
            Download APK (v1.0)
        </a>

          <Link
            href="https://github.com/likithanagaraj/PaisaLogr"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-white/10 px-8 text-sm font-medium text-foreground/60 transition-all hover:bg-white/5 hover:text-foreground"
          >
            <LuGithub className="w-4 h-4" />
            Star on GitHub
            <LuArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground/50">
          {["No account needed", "Works offline", "Open source"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <LuCheck className="w-3 h-3 text-emerald-500" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Shared Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3"
    >
      {children}
    </motion.p>
  );
}

function AndroidMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[280px] aspect-[9/19] rounded-[2rem] border-[4px] border-zinc-800 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 rounded-full z-20 ring-1 ring-zinc-700/50" />
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}