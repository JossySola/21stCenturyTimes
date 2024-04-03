import React from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Lupa from "../../../assets/search.svg"
import "./search.css";

interface SearchProps {
    onChange: () => any;
    onSubmit: () => any;
}
export default function Search ({ onSubmit, onChange, ...props }: SearchProps): React.JSX.Element {
    return (
        <form className="search-bar">
            <img src={Lupa} alt="search icon"/>
            <Input type="search" placeholder="Search" onChange={onChange}/>
            <Submit text="Go!" onSubmit={onSubmit}/>
        </form>
    )
}
