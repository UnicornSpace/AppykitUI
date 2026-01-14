"use client";

import { BsLink45Deg, BsCheck2 } from "react-icons/bs";
import { useState } from "react";

export function CopyUrlButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
        >
            {copied ? <BsCheck2 size={18} className="text-green-500" /> : <BsLink45Deg size={18} />}
            <span>{copied ? "Copied!" : "Copy URL"}</span>
        </button>
    );
}
