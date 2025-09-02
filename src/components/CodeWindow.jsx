import { forwardRef } from "react";
import CodeEditor from "./CodeEditor";

const CodeWindow = forwardRef(function CodeWindow(
  { theme, language, font, code, setCode },
  ref
) {
  return (
    <div
      ref={ref}
      className={`outer-div-background  rounded-b-md w-2/3 max-w-4xl max-md:w-[90%] max-sm:w-[96%] mt-2 py-8 px-15 max-sm:px-8 ${theme.background}`}
    >
      <div className="code-window w-full h-full rounded-xl overflow-hidden shadow-lg border border-[#333]">
        <div className="flex items-center gap-2 px-2 pt-4 ">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <CodeEditor
          theme={theme.theme}
          language={language}
          font={font}
          code={code}
          setCode={setCode}
        />
      </div>
    </div>
  );
});

export default CodeWindow;
