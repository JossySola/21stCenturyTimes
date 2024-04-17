import React from "react";
import Search from "../../molecules/search/search";
import { Link } from "react-router-dom";
import "./searchSection.css";

interface SearchSectionProps {
    link?: {
        news: string,
        astronomy: string,
        science: string,
        health: string,
        tech: string
    },
    onChange: () => any;
    onSubmit: () => any;
}
export default function SearchSection ({onChange, onSubmit, link}: SearchSectionProps): React.JSX.Element {
    return (
        <section className="search-section">
            <Search onChange={onChange} onSubmit={onSubmit}/>
            <nav className="categories">
                <ul>
                    {
                        link ?
                        <>
                            <li><a href={link.news}>News</a></li>
                            <li><a href={link.astronomy}>Astronomy</a></li>
                            <li><a href={link.science}>Science</a></li>
                            <li><a href={link.health}>Health</a></li>
                            <li><a href={link.tech}>Technology</a></li>
                        </>
                        :
                        <>
                            <li><Link to="news">News</Link></li>
                            <li><Link to="astronomy">Astronomy</Link></li>
                            <li><Link to="science">Science</Link></li>
                            <li><Link to="health">Health</Link></li>
                            <li><Link to="technology">Technology</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </section>
    )
}