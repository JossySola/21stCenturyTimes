import React from "react";
import "./user.css";

import avatar1 from "../../../assets/avatar/avatar_default_1.png";
import avatar2 from "../../../assets/avatar/avatar_default_2.png";
import avatar3 from "../../../assets/avatar/avatar_default_3.png";
import avatar4 from "../../../assets/avatar/avatar_default_4.png";
import avatar5 from "../../../assets/avatar/avatar_default_5.png";
import avatar6 from "../../../assets/avatar/avatar_default_6.png";
import avatar7 from "../../../assets/avatar/avatar_default_7.png";

interface UserProps {
    src: string;
    user: string;
    author?: string;
}

export default function User({
    src,
    user = "Loading User...",
    author,
    ...props
}: UserProps): React.JSX.Element {
    const getRandomAvatar = (src: string) => {
        if (!src) {
            const random = Math.floor(Math.random()*7);
            switch (random) {
                case 1:
                    return avatar1;
                    break;
                case 2:
                    return avatar2;
                    break;
                case 3:
                    return avatar3;
                    break;
                case 4:
                    return avatar4;
                    break;
                case 5:
                    return avatar5;
                    break;
                case 6:
                    return avatar6;
                    break;
                case 7:
                    return avatar7;
                    break;
                default:
                    return avatar1;
            }
        }
        return src;
    }
    return (
        <div className="user-badge">
            <img src={getRandomAvatar(src)} />
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