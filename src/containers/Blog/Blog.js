import React, { Component } from 'react';
import styles from './Blog.module.css';
import Posts from './Posts/Posts'; 
//import NewPost from './NewPost/NewPost';
import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncgComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        

        return (
            <div>
                <header>
                    <nav>
                        <ul className={styles.Nav}>
                            <li className={styles.NavItem}><NavLink to="/" exact activeClassName={styles.active}>Home</NavLink></li>
                            <li className={styles.NavItem}><NavLink to="/new-post" activeClassName={styles.active}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch> 
                    {/* <Route path='/' exact component={Posts}/>       */}
                    { this.state.auth ? <Route path="/new-post" component = { AsyncNewPost } /> : null }
                    <Route path={ `/posts/:id` } exact component = { FullPost } />
                    <Route path="/posts" exact component = { Posts } />
                    <Redirect from="/" to="/posts"  />
                    <Route render = { () => <h1>Sorry, route not found</h1> } />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);