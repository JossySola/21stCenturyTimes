import React from 'react';
import './comment.css';

interface Comment {
    IMAGE_SRC: string;
    author: string;
    body: string;
    id: string;
}
export default function Comment({
    author = 'Loading User...',
    body = 'Loading comment...',
    IMAGE_SRC='./src/assets/avatar_default_5.png',
    ...props
}: Comment): React.JSX.Element {
    return (
        <section className='horizontal-flex'>
            <img className='user-profile' src={IMAGE_SRC}/>
            <div className='comment'>
                <p style={{color: '#08a59d', fontWeight: 'bold'}}>{author}</p>
                <p>{body}</p>
            </div>
        </section>
        
    )
}