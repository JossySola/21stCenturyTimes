import React from 'react';
import './input.css';

interface InputProps {
    type: string;
    placeholder: string;
    required?: boolean;
    onChange?: () => void;
}
export const Input = ({ type, placeholder, required, onChange, ...props }: InputProps): React.JSX.Element => (
    <input 
    className={`input ${type}`} 
    placeholder={placeholder} 
    aria-label={type} 
    onChange={onChange}
    {...props}
    />
)