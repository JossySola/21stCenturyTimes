import React from 'react';
import './comment.css';
import avatar from '../../../assets/avatar_default_5.png';

interface Comment {
    IMAGE_SRC: string;
    USER_NAME: string;
    TEXT: string;
    id: string;
}
export default function Comment({
    USER_NAME = 'Loading User...',
    TEXT = 'Loading comment...',
    IMAGE_SRC='./src/assets/avatar_default_5.png',
    ...props
}: Comment): React.JSX.Element {
    return (
        <section className='horizontal-flex'>
            <img className='user-profile' src={IMAGE_SRC}/>
            <div className='comment'>
                <p style={{color: '#08a59d', fontWeight: 'bold'}}>{USER_NAME}</p>
                <p>{TEXT}</p>
            </div>
        </section>
        
    )
}