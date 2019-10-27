import React from 'react';
import classes from './Post.module.css';

const post = (props) => (
    <div className={classes.Post}>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
    </div>    
);

export default post; 