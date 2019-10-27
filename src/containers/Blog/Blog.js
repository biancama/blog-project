import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div>
               <section>
                   <Post title="Title" author="Autor" />
                   <Post title="Title" author="Autor" />
                   <Post title="Title" author="Autor" />
                </section>   
                <section>
                    <FullPost id = "1" /> 
                </section>  
                <section>
                    
                </section>
            </div>
        );
    }
}

export default Blog;