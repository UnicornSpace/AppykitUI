import { LuBrainCircuit } from "react-icons/lu";

export const coursesRegistry = [
    {
        title: 'Learn Flutter Development — Build Cross-Platform Apps',
        description: `This is a hands-on course where you'll learn to build apps using GenAI APIs with OpenAI, Claude Anthropic. We’ll explore how to use prompts, manage context, build chatbots, and connect LLMs to your own data using tools like LangChain, LangGraph, Mem0, Qdrant, Neo4j, MongoDB. No AI background required — just basic Python and curiosity.`,
        slug: 'flutter-development',
        seo: {
            description: "Learn Flutter development with clear, written guides. Build cross-platform mobile apps using Flutter, widgets, layouts, and best practices."
        },
        isPublished: true,
        icon: LuBrainCircuit,
        // brain        tags: ['GenAI', 'AI', "RAG", "LangChain", "MCP"],
        label: "New",
        thumbnail: "/flutter-thumnail1.png"
    },
    {
        title: 'Learn Dart Programming — Beginner to Advanced Guide',
        description: `This is a hands-on course where you'll learn to build apps using GenAI APIs with OpenAI, Claude Anthropic. We’ll explore how to use prompts, manage context, build chatbots, and connect LLMs to your own data using tools like LangChain, LangGraph, Mem0, Qdrant, Neo4j, MongoDB. No AI background required — just basic Python and curiosity.`,
        seo: {
            description: "Learn Dart programming from scratch with structured, written guides. Covers fundamentals, async, OOP, and real-world Dart usage for beginners."
        },
        slug: 'dart-programming',
        isPublished: true,
        icon: LuBrainCircuit,
        // brain        tags: ['GenAI', 'AI', "RAG", "LangChain", "MCP"],
        label: "New",
        thumbnail: "/dart-thumnail.png"
    },
    // {
    //     title: 'Design 101',
    //     description: 'Deep dive in understanding how changing words change the complete responses and quality of the output',
    //     slug: 'prompt-engineering',
    //     isPublished: false,
    //     tags: [
    //         'AI', "System Prompts", "Prompting Techniques"
    //     ]
    // },
    // {
    //     title: 'AI SDK - Vercel',
    //     description: 'Learn Typescript with fun and example from scratch',
    //     slug: 'typescript',
    //     isPublished: false,
    //     tags: ['android']
    // },
    // {
    //     title: 'TypeScript',
    //     description: 'Learn Typescript with fun and example from scratch',
    //     slug: 'typescript',
    //     isPublished: false,
    //     tags: ['android']
    // },
]