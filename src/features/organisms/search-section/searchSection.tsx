import React from "react";
import Search from "../../molecules/search/search";
import "./searchSection.css";

interface SearchSectionProps {
    onChange: () => {};
    onSubmit: () => {};
}
export default function SearchSection ({onChange, onSubmit}: SearchSectionProps): React.JSX.Element {
    return (
        <section className="search-section">
            <Search onChange={onChange} onSubmit={onSubmit}/>
            <nav className="categories">
                <ul>
                    <li><a href="#home">News</a></li>
                    <li><a href="#home">Astronomy</a></li>
                    <li><a href="#home">Economics</a></li>
                    <li><a href="#home">Health</a></li>
                    <li><a href="#home">Technology</a></li>
                </ul>
            </nav>
        </section>
    )
}