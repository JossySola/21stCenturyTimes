import React from "react";
import Wordmark from "../../../assets/Reddit_Lockup_Bubble.svg"
import Typescript from "../../../assets/ts-logo-128.svg";
import Github from "../../../assets/github-mark-white.png";
import Storybook from "../../../assets/icon-storybook-inverse.svg";
import React_logo from "../../../assets/react.svg";
import React_Router from "../../../assets/react-router-mark-color-inverted.svg";
import Inkscape from "../../../assets/inkscape-flat-w-transp-white.svg"
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <h3>Powered with  <img src={Wordmark} className="reddit-trademark" alt="Reddit logo" title="Reddit"/></h3>
            <p>Technologies used:</p>
            <ul aria-label="Technologies list">
                <li><img src={Typescript} className="tm-32" alt="Typescript trademark" title="TypeScript" /></li>
                <li><img src={Github} className="tm-32" alt="Github trademark" title="Github"/></li>
                <li><img src={Storybook} className="tm-32" alt="Storybook JS trademark" title="Storybook JS"/></li>
                <li><img src={React_logo} className="tm-32" alt="React JS trademark" title="React JS"/></li>
                <li><img src={React_Router} className="tm-32" alt="React Router trademark" title="React Router"/></li>
                <li><img src={Inkscape} className="tm-32" alt="Inkscape trademark" title="Inkscape"/></li>
            </ul>
            <details>
                <summary>Privacy Policy & Terms of Use</summary>
                <br></br>
                These Terms of Use and Privacy Policy (or "Terms") govern your use of this website, (hereafter, "Web Application" which refers to the URI: <a href="https://jossysola.com/21stCenturyTimes">https://jossysola.com/21stCenturyTimes</a>). You (hereafter, "the User") agree with these Terms by accessing and using the Web Application's features.
                <br></br>

                <details>
                <summary>Privacy Policy</summary>
                <br></br>
                The collection and usage of data will always be for the Reddit platform communication purpose, if applicable.
                <br></br><br></br>
                No personal information is required by this Web Application, unless the User decides to write a comment in a post, which will direct them to the Reddit's Authorization page. The User may be asked for their Reddit username and password in order to give the Web Application permission to take actions (i.e. write and post a comment) in their behalf. However, any Authentication and/or Authorization process that requires sensitive data from the User will always take place on Reddit's official platform.
                <br></br><br></br>
                The Web Application does not store any data either externally (as it is not connected to any database) or locally. There may be interaction with the local cache by the Web Application's coding toolkit, targeting the performance of the Web Application and its functionality.
            </details>
            <details>
                <summary>Terms of Use</summary>
                <br></br>
                As the Web Application main feature is the display and usage of the Reddit Services (Reddit API, "Application Programming Interface", which establishes the interaction between Reddit and third party developers who wish to use Reddit's data/features in their own applications), the User of this Web Application is bound by the <a href="https://www.redditinc.com/policies/user-agreement" target="_blank">Reddit User Agreement</a>.
            </details>
            </details>
        </footer>
    )
}