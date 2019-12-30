import React, { Component } from 'react';
import styles from './FullPost.module.css';
import Axios from 'axios';

class FullPost extends Component {
    state = {
        currentPost : null,
        loading: false
    }   
    componentDidMount() {
        console.log(this.props);
        this.setState({ loading: true });
        if (this.props.match.params.id) {
            if (!this.state.currentPost || Number(this.state.currentPost.id) !== this.props.match.params.id) {
                Axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ currentPost: response.data
                    })  
                });
            }
            
        }
    }
    deleteHandler = () => {
        if (this.props.match.params.id) {
            Axios.delete('/posts/' + this.props.match.params.id)
            .then(response => console.log(response));
        } 
    }
    render () {
        let post = null;
        if (!this.props.match.params.id) {
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