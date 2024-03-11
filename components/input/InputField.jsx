import React from "react";

function InputField({ placeholder, style, value, onChange }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={style}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
