import React from "react";
import Search from "../../molecules/search/search";
import { Link } from "react-router-dom";
import "./searchSection.css";

interface SearchSectionProps {
    onChange: () => any;
    onSubmit: () => any;
}
export default function SearchSection ({onChange, onSubmit}: SearchSectionProps): React.JSX.Element {
    return (
        <section className="search-section">
            <Search onChange={onChange} onSubmit={onSubmit}/>
            <nav className="categories">
                <ul>
                    <li><Link to="news">News</Link></li>
                    <li><Link to="astronomy">Astronomy</Link></li>
                    <li><Link to="science">Science</Link></li>
                    <li><Link to="health">Health</Link></li>
                    <li><Link to="technology">Technology</Link></li>
                </ul>
            </nav>
        </section>
    )
}