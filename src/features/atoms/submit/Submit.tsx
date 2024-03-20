import * as React from 'react';
import './submit.css';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    color?: string;
    text: string;
    onClick?: () => void;
}

export default function Submit({
    primary = false,
    backgroundColor,
    color,
    text,
    ...props
} : ButtonProps): React.JSX.Element {
    const mode = primary ? 'submit-primary' : 'submit-secondary';

    return ( 
    <button 
        aria-label="submit button" 
        type="submit"
        style={{backgroundColor, color}}
        className={`submit ${mode}`}
        {...props}
        >{text}</button> 
    )
}