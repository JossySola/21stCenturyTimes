import React from 'react';
import './input.css';

interface InputProps {
    type: string;
    placeholder: string;
    required?: boolean;
    onChange?: () => any;
}
export const Input = ({ type, placeholder, required, onChange, ...props }: InputProps): React.JSX.Element => (
    <input 
    className={`input ${type}`} 
    name="search field"
    id='01'
    placeholder={placeholder}
    type={type} 
    aria-label={type} 
    onChange={onChange}
    {...props}
    />
)