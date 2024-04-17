import React from "react";
import "./user.css";

interface UserProps {
    src: string;
    user: string;
    author?: string;
}

export default function User({
    src = "./src/assets/avatar_default_5.png",
    user = "Loading User...",
    author,
    ...props
}: UserProps): React.JSX.Element {
    return (
        <div className="user-badge">
            <img src={src} />
            <div style={{
                display: "inline-flex",
                alignContent: "center",
                justifyContent: "center",
                flexFlow: "column wrap",
                margin: "0.5rem"
            }}>
                <span className="user">{user}</span>
                {author && <span className="author">Loading Author...</span>}
            </div>
            
        </div>
    )
}