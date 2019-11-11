import React, { Component } from 'react';
import styles from './FullPost.module.css';
import Axios from 'axios';

class FullPost extends Component {
    state = {
        currentPost : null
    }   
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.currentPost || this.state.currentPost.id !== this.props.id) {
                Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({ currentPost: response.data
                    })  
                });
            }
            
        }
    }

    render () {
        let post = null;
        if (!this.props.id) {
            post = <p style = {{ textAlign: 'center' }}>Please select a Post!</p>;
        } else if (!this.state.currentPost) {
            post = <p style = {{ textAlign: 'center' }}>Loading...</p>;
        } 
        else {
            post = (
                <div className={styles.FullPost}>
                    <h1>{ this.state.currentPost.title }</h1>
                    <p>{ this.state.currentPost.body }</p>
                    <div className={styles.Edit}>
                        <button
                         className={styles.Delete}
                         onClick = { this.deleteHandler }>Delete</button>
                    </div>
                </div>    
            );          
        }
    
        return post;
    }
}

export default FullPost;