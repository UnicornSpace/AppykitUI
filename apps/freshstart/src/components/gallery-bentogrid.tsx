import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs"
// import AnimatedListDemo from "@/registry/example/animated-list-demo"
import { Marquee } from "./ui/marquee"
import { BentoCard, BentoGrid } from "./ui/bento-grid"

const files = [
    {
        name: "Feel in control daily",
        body: "Quick logging helps you stay aware of your spending without overthinking every purchase.",
    },
    {
        name: "Spend with intention",
        body: "Visual patterns help you notice what matters and cut the spending that does not align with your goals.",
    },
    {
        name: "Stay private by default",
        body: "Your financial information remains on your phone, so managing money feels safer and less stressful.",
    },
    {
        name: "Track anywhere",
        body: "Works without internet, so you can keep your momentum while traveling, commuting, or in low-signal areas.",
    },
    {
        name: "Build mindful habits",
        body: "Small daily entries compound into clear money awareness and better long-term decisions.",
    },
]

const features = [
    {
        Icon: FileTextIcon,
        name: "Build mindful money habits",
        description: "Log income and expenses in seconds, then see where your money goes so you can make calmer, smarter decisions.",
        href: "/gallery/paisalogr",
        cta: "See how it works",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: BellIcon,
        name: "Spend with intention, not stress",
        description: "Clear categories, notes, and visual insights help you spot patterns early and avoid overspending before it happens.",
        href: "/gallery/paisalogr",
        cta: "Explore benefits",
        className: "col-span-3 lg:col-span-2",
        background: <div />,
        // background: (
        //     <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
        // ),
    },
    {
        Icon: Share2Icon,
        name: "Your data stays yours",
        description: "No account, no cloud, no tracking. Paisa Logr keeps your financial life private and fully on-device.",
        href: "/gallery/paisalogr",
        cta: "See privacy promise",
        className: "col-span-3 lg:col-span-2",
        background: <div />,
        // background: (
        //     // <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
        // ),
    },
    {
        Icon: CalendarIcon,
        name: "Stay consistent anywhere",
        description: "Offline-first tracking works daily, even without internet, so your money journal never breaks your momentum.",
        className: "col-span-3 lg:col-span-1",
        href: "/gallery/paisalogr",
        cta: "Start tracking",
        background: <div />,
        // background: (
        // <AnimatedBeamMultipleOutputDemo
        //     mode="single"
        //     selected={new Date(2022, 4, 11, 0, 0, 0)}
        //     className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
        // />
        // <Calendar
        //     mode="single"
        //     selected={new Date(2022, 4, 11, 0, 0, 0)}
        //     className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
        // />
        // ),
    },
]

export const paisaLogrFaqData = [
    {
        question: "Is Paisa Logr really private?",
        answer:
            "Yes. Paisa Logr is designed for local-first use: no account, no cloud sync, and no tracking by default. Your financial entries stay on your device.",
        category: "privacy",
    },
    {
        question: "Can I use it without internet?",
        answer:
            "Yes. Paisa Logr is offline-first, so you can add and review transactions even when you do not have a data connection.",
        category: "offline",
    },
    {
        question: "How lightweight is the app?",
        answer:
            "Current app size is around 52MB on stable release v1.0, keeping it quick to install and practical for daily use.",
        category: "app-details",
    },
    {
        question: "How does Paisa Logr help with mindful finances?",
        answer:
            "It helps you build awareness through fast logging, clear categories, and visual spending insights so you can make intentional decisions instead of reactive ones.",
        category: "benefits",
    },
    {
        question: "What kind of insights do I get?",
        answer:
            "You can view spending patterns through charts and summaries that make it easier to identify habits, recurring costs, and improvement opportunities.",
        category: "insights",
    },
    {
        question: "Can I organize money for different contexts?",
        answer:
            "Yes. You can separate finances into spaces or events, such as trips, home expenses, or freelance work, to keep records clear.",
        category: "organization",
    },
    {
        question: "Does it support budget tracking?",
        answer:
            "Yes. You can track monthly budgets and monitor progress to avoid overspending before it becomes a problem.",
        category: "budgeting",
    },
    {
        question: "Is Paisa Logr open source?",
        answer:
            "Yes. Paisa Logr is open source, which improves transparency and lets users review how data handling works.",
        category: "trust",
    },
    {
        question: "What does the 5.0 GitHub rating indicate?",
        answer:
            "It reflects strong early user sentiment around ease of use, privacy-first design, and practical day-to-day value.",
        category: "social-proof",
    },
]

export function BentoDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto pb-6 -mt-64 px-3">
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    )
}
