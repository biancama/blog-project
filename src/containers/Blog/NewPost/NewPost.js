import React, {Component} from 'react';
import classes from './NewPost.module.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '' ,
        author: 'Massimo',
        submitted: false
    }
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        Axios.post('/posts', post)
        .then(response => {
            //this.setState ({ submitted: true });
            console.log(response);
            this.props.history.replace('/posts');
        });
    }
    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;

        }
        return (
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} type="text"/>
                
                <label>Content</label>
                <textarea value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} rows="4"/>

                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Pippo">Pippo</option>
                </select>

                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;