import React from 'react';
import styles from './Post.module.css';

const post = (props) => (
    <article className={styles.Post} onClick = { props.clicked }>
        <h1 className = "Title">{ props.title }</h1>
        <div className="Info">
            <div className="Author">{ props.author }</div>
        </div>
    </article>
);

export default post; 