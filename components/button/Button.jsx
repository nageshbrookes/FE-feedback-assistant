import React from "react";

function Button({text, style, iconLeft, iconRight, children}) {
    return (
        <div>
            <button className={"transition-all duration-300 bg-opacity-80 hover:bg-opacity-100 " + style}>
                {iconLeft}
                {children ? children : text}
                {iconRight}
            </button>
        </div>

    );
}

export default Button;
