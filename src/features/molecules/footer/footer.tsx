import React from "react";
import Wordmark from "../../../assets/Reddit_Lockup_Bubble.svg"
import Typescript from "../../../assets/ts-logo-128.svg";
import Github from "../../../assets/github-mark-white.png";
import Storybook from "../../../assets/icon-storybook-inverse.svg";
import React_logo from "../../../assets/react.svg";
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <h3>Powered with  <img src={Wordmark} className="reddit-trademark" alt="Reddit logo" title="Reddit"/></h3>
            <p>Technologies used:</p>
            <ul>
                <li><img src={Typescript} className="tm-32" alt="Typescript trademark" title="TypeScript" /></li>
                <li><img src={Github} className="tm-32" alt="Github trademark" title="Github"/></li>
                <li><img src={Storybook} className="tm-32" alt="Storybook JS trademark" title="Storybook JS"/></li>
                <li><img src={React_logo} className="tm-32" alt="React JS trademark" title="React JS"/></li>
            </ul>
        </footer>
    )
}