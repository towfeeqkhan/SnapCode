import { useEffect, useRef } from 'react';

function CustomSelect({ options, selected, onSelect, icon, label, className, isOpen, onToggle }) {
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && selectRef.current && !selectRef.current.contains(event.target)) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className={`relative w-full md:w-auto ${className || ''}`} ref={selectRef}>
      <button
          className="flex items-center text-white font-[Roboto] text-md px-2 py-2 rounded-md border border-[#334155] w-full"
          onClick={onToggle}
        >
        <img src={icon} alt={`${label} Icon`} className="w-5 h-5 mr-3" />
        <span>{selected.name}</span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full text-white bg-black border border-[#334155] rounded-md mt-1">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-[#334155]"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;