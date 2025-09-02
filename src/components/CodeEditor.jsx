import { useEffect } from "react";
import Editor from "react-simple-code-editor";
import highlight from "highlight.js/lib/core";
// import 'highlight.js/styles/github.css'; // Import a default style

import "../code.css";

// Import languages
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import c from "highlight.js/lib/languages/c";
import java from "highlight.js/lib/languages/java";
import go from "highlight.js/lib/languages/go";
import json from "highlight.js/lib/languages/json";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import php from "highlight.js/lib/languages/php";
import typescript from "highlight.js/lib/languages/typescript";

// Register languages
highlight.registerLanguage("javascript", javascript);
highlight.registerLanguage("python", python);
highlight.registerLanguage("c++", cpp);
highlight.registerLanguage("c#", csharp);
highlight.registerLanguage("c", c);
highlight.registerLanguage("java", java);
highlight.registerLanguage("go", go);
highlight.registerLanguage("json", json);
highlight.registerLanguage("html", html);
highlight.registerLanguage("css", css);
highlight.registerLanguage("php", php);
highlight.registerLanguage("typescript", typescript);

const CodeEditor = ({ theme, language, font, code, setCode }) => {
  useEffect(() => {
    if (theme) {
      const link = document.createElement("link");
      link.href = theme;
      link.rel = "stylesheet";
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [theme]);

  useEffect(() => {
    if (font) {
      const link = document.createElement("link");
      link.href = font.src;
      link.rel = "stylesheet";
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [font]);

  return (
    <pre
      className="hljs focus-visible:outline-none"
      style={{ background: "transparent" }}
      onFocus={(e) => (e.target.style.outline = "none")}
    >
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => {
          if (language && highlight.getLanguage(language)) {
            try {
              return highlight.highlight(code, {
                language,
                ignoreIllegals: true,
              }).value;
            } catch (error) {
              console.error(error);
              return code;
            }
          }
          return code;
        }}
        padding={10}
        style={{
          fontFamily: font ? font.name : '"Fira Mono", "Fira Code", monospace',
          fontSize: 18,
          outline: "none",
          border: "none",
          height: "100%",
          width: "100%",
          overflowY: "auto",
        }}
      />
    </pre>
  );
};

export default CodeEditor;
