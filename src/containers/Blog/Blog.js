import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Axios from 'axios';
import styles from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map (p => { 
                return {
                    ...p,
                    author: 'Massimo'
                };      
            })
            this.setState( {posts : updatedPost});
        });
    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
    const posts = this.state.posts.map (p => {
            return <Post 
            key={p.id} 
            title={p.title} 
            author={p.author} 
            clicked={() => {
                this.postSelectedHandler(p.id);
            }} />;
        });
        return (
            <div>
               <section className={styles.Posts}>
                   {posts}  
                </section>   
                <section>
                    <FullPost id={this.state.selectedPostId} /> 
                </section>  
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;