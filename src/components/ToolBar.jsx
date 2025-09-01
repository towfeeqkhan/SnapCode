import { useState } from "react";
import CustomSelect from "./CustomSelect";
import { themes, languages, fonts } from "../store";

import ThemeIcon from "../assets/icons/theme.png";
import CodeIcon from "../assets/icons/coding.png";
import FontIcon from "../assets/icons/font.png";
import ExportIcon from "../assets/icons/download.png";

function ToolBar({ theme, font, language, setTheme, setLanguage, setFont, exportImage }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (setter) => (option) => {
    setter(option);
    setOpenDropdown(null);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-16 w-2/3 max-w-4xl max-md:w-[90%] max-sm:w-[96%] border border-[#1E2939] rounded-t-md p-4">
      <CustomSelect
        icon={ThemeIcon}
        label="Theme"
        options={Object.keys(themes).map(theme => ({ value: theme, name: theme }))}
        selected={{ value: Object.keys(themes).find(key => themes[key] === theme), name: Object.keys(themes).find(key => themes[key] === theme) }}
        isOpen={openDropdown === 'theme'}
        onToggle={() => handleToggle('theme')}
        onSelect={handleSelect((value) => setTheme(themes[value.value]))}
        className="flex-grow"
      />

      <CustomSelect
        icon={CodeIcon}
        label="Language"
        options={Object.entries(languages).map(([lang, name]) => ({ value: lang, name: name }))}
        selected={{ value: language, name: languages[language] }}
        isOpen={openDropdown === 'language'}
        onToggle={() => handleToggle('language')}
        onSelect={handleSelect((value) => setLanguage(value.value))}
        className="flex-grow"
      />

      <CustomSelect
        icon={FontIcon}
        label="Font"
        options={Object.entries(fonts).map(([font, fontObj]) => ({ value: font, name: fontObj.name }))}
        selected={{ value: Object.keys(fonts).find(key => fonts[key] === font), name: font.name.split(/(?=[A-Z])/).join(" ") }}
        isOpen={openDropdown === 'font'}
        onToggle={() => handleToggle('font')}
        onSelect={handleSelect((value) => setFont(fonts[value.value]))}
        className="flex-grow"
      />

      <button onClick={exportImage} className="flex items-center justify-center text-white font-[Roboto] px-3 py-1.5 text-md rounded-md border border-[#334155] flex-grow">
        Export
        <img src={ExportIcon} alt="Export Icon" className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}

export default ToolBar;