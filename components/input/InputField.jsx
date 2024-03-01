import React from "react";

function InputField({placeholder, style}) {
    return (
        <div>
            <input placeholder={placeholder} className={style}/>
        </div>
    );
}

export default InputField;
