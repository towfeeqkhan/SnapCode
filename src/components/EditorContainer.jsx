import { useState, useEffect, useRef } from "react";
import { toPng } from 'html-to-image';
import toast from 'react-hot-toast';

import { themes, languages, codeSnippets, fonts } from "../store";
import ToolBar from "./ToolBar";
import CodeWindow from "./CodeWindow";
import EditorHint from "./EditorHint";
import SocialIcons from "./SocialIcons";

function EditorContainer() {
  const [theme, setTheme] = useState(themes.Hyper);
  const [language, setLanguage] = useState('javascript');
  const [font, setFont] = useState(fonts.JetBrainsMono);
  const [code, setCode] = useState(codeSnippets[language]);

  const editorRef = useRef(null);

  const exportImage = () => {
    if (editorRef.current) {
      toast.promise(
        toPng(editorRef.current, { cacheBust: true, }),
        {
          loading: 'Exporting...',
          success: (dataUrl) => {
            const link = document.createElement('a')
            link.download = 'snapcode.png'
            link.href = dataUrl
            link.click()
            return 'Image exported successfully!'
          },
          error: 'Something went wrong!',
        }
      );
    }
  }

  useEffect(() => {
    setCode(codeSnippets[language]);
  }, [language]);

  return (
    <>
      <ToolBar theme={theme} font={font} language={language} setTheme={setTheme} setLanguage={setLanguage} setFont={setFont} exportImage={exportImage} />
      <CodeWindow ref={editorRef} theme={theme} language={language} font={font} code={code} setCode={setCode} />
      <EditorHint />
      <SocialIcons />
    </>
  );
}

export default EditorContainer;