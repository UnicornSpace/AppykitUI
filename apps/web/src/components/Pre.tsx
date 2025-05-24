import { Code as BrightCode } from "bright";
import React from "react";

interface PreProps {
    children: React.ReactNode;
    className?: string;
}

interface CodeProps {
    children: string;
    className?: string;
    'data-meta'?: string;
}

// Simple parser to replace parse-number-range
// function parseLineRange(range: string): number[] {
//     const highlights: number[] = [];
//     const ranges = range.split(',').map(r => r.trim());

//     for (const r of ranges) {
//         if (r.includes('-')) {
//             const [start, end] = r.split('-').map(Number);
//             for (let i = start; i <= end; i++) {
//                 highlights.push(i);
//             }
//         } else {
//             highlights.push(Number(r));
//         }
//     }

//     return highlights;
// }

export const Pre: React.FC<PreProps> = ({ children }) => {
    // Ensure it's a valid single code element
    if (
        React.isValidElement(children) &&
        children.type === 'code'
    ) {
        const codeElement = children as React.ReactElement<CodeProps>;
        const { className, children: codeText,  } = codeElement.props;
        const language = className?.replace(/language-/, '') || '';

        // let title = '';
        // let lineNumbers = false;
        // // let highlights: number[] = [];

        // if (meta) {
        //     lineNumbers = meta.includes('showLineNumbers');

        //     const titleMatch =
        //         meta.match(/title=["']([^"']+)["']/) ||
        //         meta.match(/^["']?([^"'\s]+)["']?/);



        //     if (titleMatch) {
        //         title = titleMatch[1];
        //     }

        //     // const rangeMatch = meta.match(/{([^}]*)}/);
        //     // if (rangeMatch) {
        //     //     highlights = parseLineRange(rangeMatch[1]);
        //     // }
        // }
        // return <SyntaxHighlighter language="javascript" style={tomorrowNight} >
        //     {codeText}
        // </SyntaxHighlighter>
        return (
            <BrightCode
                lang={language}
                // title={title}
                // lineNumbers={lineNumbers ? true : false}
                code={codeText}
            />
        );
    }

    // Fallback: return null or just render the children as-is
    return null;
};
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
