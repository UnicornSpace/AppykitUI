import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import type { PrismTheme } from 'prism-react-renderer';
// import oceanicTheme from 'prism-react-renderer/themes/oceanicNext';

interface CodeBlockProps {
  className?: string;
  metastring?: string;
  children: React.ReactNode;
}

// Custom range parser replacement for parse-number-range
const parseRange = (rangeString: string): number[] => {
  const result: number[] = [];
  const ranges = rangeString.split(',');
  
  ranges.forEach(range => {
    const [start, end] = range.split('-').map(Number);
    if (!isNaN(start) && !isNaN(end)) {
      for (let i = start; i <= end; i++) result.push(i);
    } else if (!isNaN(start)) {
      result.push(start);
    }
  });

  return result;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  metastring = '',
}) => {
  const language = (className?.replace(/language-/, '') || 'text') as Language;
  const code = String(children).trim();

  // Parse metastring
  const [title, highlightLines, showLineNumbers] = (() => {
    let title = '';
    let lines: number[] = [];
    let showLines = false;

    // Extract title
    const titleMatch = metastring.match(/title="([^"]*)"/);
    if (titleMatch) {
      title = titleMatch[1];
      metastring = metastring.replace(titleMatch[0], '').trim();
    }

    // Extract line ranges
    const rangeMatch = metastring.match(/{([^}]*)}/);
    if (rangeMatch) {
      lines = parseRange(rangeMatch[1]);
      metastring = metastring.replace(rangeMatch[0], '').trim();
    }

    // Check for line numbers
    showLines = metastring.includes('showLineNumbers');

    return [title, lines, showLines];
  })();

  return (
    <div className="code-block">
      {title && <div className="code-title">{title}</div>}
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        // theme={oceanicTheme as PrismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, i) => {
                const lineNumber = i + 1;
                const isHighlighted = highlightLines.includes(lineNumber);
                
                return (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    style={{
                      ...(isHighlighted && { backgroundColor: 'rgba(255,255,0,0.1)' }),
                      display: 'flex',
                    }}
                  >
                    {showLineNumbers && (
                      <span
                        style={{
                          minWidth: '2em',
                          paddingRight: '1em',
                          userSelect: 'none',
                          opacity: 0.5,
                        }}
                      >
                        {lineNumber}
                      </span>
                    )}
                    <span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};