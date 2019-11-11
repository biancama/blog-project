import React, {Component} from 'react';
import classes from './NewPost.module.css';

class NewPost extends Component {
    render() {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text"/>
                
                <label>Content</label>
                <textarea rows="4"/>

                <label>Author</label>
                <select >
                    <option value="Max">Max</option>
                    <option value="Pippo">Pippo</option>
                </select>

                <button onClick={() => console.log('pippo')}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;