import { useState } from "react";
const Input = ({
  label,
  type,
  id,
  placeholder,
  value,
  onValueChange,
  icon,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div>
      <label className="block mt-5 text-[#9B9B9B]">{label}</label>
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`w-full rounded-[8px] h-[48px] mt-2 bg-input border-none pl-3 text-[#161616] text-base font-normal placeholder:text-[#161616] ${
            focus ? "border-2 border-[#9A9FBF]" : ""
          }`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          required
        />
        <div className="absolute right-[5px] top-[10px]">{icon}</div>
      </div>
    </div>
  );
};

export default Input;
