import React, { Component } from 'react';
import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        currentPost : {
            title: "title",
            body: "Body"
        }
    }

    render () {
        return (
            <div className={classes.FullPost}>
                    <h1>{ this.state.currentPost.title }</h1>
                    <p>{ this.state.currentPost.body }</p>
                    <div className={classes.Edit}>
                        <button
                         className={classes.Delete}
                         onClick = { this.deleteHandler }>Delete</button>
                    </div>
                </div>    
        );
    }
}

export default FullPost;