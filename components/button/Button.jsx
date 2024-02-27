import React from "react";

function Button({text, style, iconLeft, iconRight, children}) {
    return (
        <button className={"transition-all duration-300 bg-opacity-80 hover:bg-opacity-100 " + style}>
            {iconLeft}
            {children ? children : text}
            {iconRight}
        </button>
    );
}

export default Button;
