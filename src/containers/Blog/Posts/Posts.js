import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import Axios from '../../../axios';
import styles from './Posts.module.css';
import { withRouter } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push(`/posts/${ id }`);
        }

    componentDidMount() {
        Axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map (p => { 
                return {
                    ...p,
                    author: 'Massimo'
                };      
            })
            this.setState( {posts : updatedPost});
        })
        .catch(error => {
            console.log(error);
            //this.setState({error: true});
        });
    }
    render() {
        let posts = <p>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map (p => {
                return (
                    //<Link key={p.id}  to={'/' + p.id} className={styles.Posts_a}>                
                    <Post key={p.id}                        
                        title={p.title} 
                        author={p.author} 
                        clicked={() => {
                            this.postSelectedHandler(p.id);
                        }} />
                    //</Link>
                );
            });
        }
        return (
            <section className={styles.Posts}>
                   {posts}  
                </section>  
        );
    }
}
export default withRouter(Posts);