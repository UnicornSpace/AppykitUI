"use client";

import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  LuArrowUpRight,
  LuBrain,
  LuCheck,
  LuClock3,
  LuGithub,
  LuListTodo,
  LuPlay,
  LuSparkles,
  LuTarget,
} from "react-icons/lu";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.redefai.app&pcampaignid=web_share";
const githubUrl = "https://github.com/UnicornSpace/AppykitUI";

const stats = [
  { value: "AI", label: "Powered Guidance" },
  { value: "4", label: "Core Screens" },
  { value: "Daily", label: "Habit Loops" },
  { value: "Focus", label: "Built Around Progress" },
];

const features = [
  {
    icon: <LuBrain className="h-5 w-5" />,
    title: "Voice-First Planning",
    desc: "Speak naturally and let Redef.ai turn your thoughts into structured plans without the usual app juggling.",
  },
  {
    icon: <LuListTodo className="h-5 w-5" />,
    title: "Task Clarity",
    desc: "Replace scattered notes and messy to-do lists with one clear system that helps you decide the next move fast.",
  },
  {
    icon: <LuTarget className="h-5 w-5" />,
    title: "Reflective Insights",
    desc: "Track your time and understand where your week really went with feedback that brings more control to your routine.",
  },
  {
    icon: <LuClock3 className="h-5 w-5" />,
    title: "Deep Work Support",
    desc: "Protect focus blocks and build a calmer system for work, study, or everyday planning.",
  },
];

const screens = [
  {
    src: "/redef/HomeScreen.png",
    alt: "RedefAI home screen",
    label: "Home",
  },
  {
    src: "/redef/Habits.png",
    alt: "RedefAI habits screen",
    label: "Habits",
  },
  {
    src: "/redef/Tasks.png",
    alt: "RedefAI tasks screen",
    label: "Tasks",
  },
  {
    src: "/redef/Deep-work.png",
    alt: "RedefAI deep work screen",
    label: "Deep Work",
  },
];

export default function RedefAIPage() {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      className="relative min-h-screen overflow-x-hidden bg-white text-zinc-950"
    >
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%270 0 160 160%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

      <HeroSection />
      <StatsSection />
      <PreviewSection />
      <FeaturesSection />
      <VideoSection />
      <CtaSection />
    </HomeLayout>
  );
}

function HeroSection() {
  return (
    <section className="relative z-10 px-4 pb-10 pt-14">
      <div className="absolute left-1/2 top-6 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            <Image
              src="/redef/redef-logo.webp"
              alt="RedefAI logo"
              width={32}
              height={32}
              className="rounded-xl"
            />
            RedefAI
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            Redefining the way you work, plan, and reflect.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            Redef.ai is a voice-first productivity system built to help you
            plan, track, and reflect effortlessly. Speak your thoughts, let the
            app organize your day, and stay focused without bouncing between
            calendars, notes, and task lists.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Link
              href={playStoreUrl}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#d23b3b] px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#bc3434]"
            >
              <LuPlay className="h-5 w-5" />
              View on Play Store
            </Link>
            <Link
              href={githubUrl}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-200 px-7 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
            >
              <LuGithub className="h-4 w-4" />
              View on GitHub
              <LuArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 lg:justify-start">
            {["Voice-first", "Time tracking", "Weekly insights", "Deep work"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <LuCheck className="h-4 w-4 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="absolute inset-x-8 bottom-0 top-20 rounded-full bg-red-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-950 p-3 shadow-2xl">
            <div className="absolute left-1/2 top-5 z-20 h-2 w-20 -translate-x-1/2 rounded-full bg-zinc-700" />
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/redef/redef.png"
                alt="RedefAI app preview"
                width={720}
                height={1440}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative z-10 px-4 py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-semibold tracking-tight text-zinc-950">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section className="relative z-10 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Inside the App</SectionLabel>
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Built for fast-paced days that still need clarity.
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Created by founders who have lived through the same productivity
              chaos, Redef.ai helps turn spoken thoughts into structured plans,
              makes time visible, and keeps your routine from feeling scattered.
            </p>
            <p className="mt-4 max-w-2xl text-zinc-600">
              Whether you are building a startup, studying, or simply managing
              your daily routine, the goal is the same: stay focused, not
              overwhelmed.
            </p>
          </div>
          <div className="rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
              Redef.ai
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
              Speak. Plan. Reflect. Redefine your day.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Instead of spreading your workflow across multiple tools, Redef.ai
              brings planning, tracking, and reflection into one voice-led
              experience that feels lighter and easier to keep up with.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-900">
                  {screen.label}
                </span>
                <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                  RedefAI
                </span>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-black">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={700}
                  height={1400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="relative z-10 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <SectionLabel>What It Helps With</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Less drift. More direction.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Redef.ai is designed for the places where productivity usually
            breaks down: too many tools, too much mental overhead, and not
            enough visibility into what your time is actually doing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-red-50 p-3 text-red-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative z-10 px-4 py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-4 shadow-2xl">
        <div className="mb-4 flex items-center gap-2 text-sm text-zinc-300">
          <LuSparkles className="h-4 w-4 text-red-400" />
          Product walkthrough
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-black">
          <video
            className="h-auto w-full"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/redef/HomeScreen.png"
          >
            <source src="/redef/redef-app.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-gradient-to-br from-red-50 via-white to-zinc-50 px-6 py-14 text-center shadow-sm md:px-12">
        <SectionLabel>Try RedefAI</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Explore the app on Play Store.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
          Redef.ai is built to give you clarity, control, and data-backed
          insight into your day. The page now has a real home, and the main
          action takes you straight to Play Store.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={playStoreUrl}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#d23b3b] px-10 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#bc3434]"
          >
            <LuPlay className="h-5 w-5" />
            Open Play Store
          </Link>
          <Link
            href={githubUrl}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
          >
            <LuGithub className="h-4 w-4" />
            View Source
            <LuArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-600"
    >
      {children}
    </motion.p>
  );
}
