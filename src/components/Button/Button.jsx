import React from "react";
import './button.css';

const Button = ({onClick,...props}) => {
    return (
        <button onClick={onClick} {...props}>{props.children}</button>
    )
}

export default Button;