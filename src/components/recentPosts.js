import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

// import Post from './post'

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }
    
    renderPosts = function() {
        console.log('%c response: ', 'color: yellow', this.props)
       console.log(this.props, "hi")
        // const posts = this.props.recentPosts.map((post, index) => {
        //     if(index < 3) {
        //         return (
        //             <Post {...post} key={index}/>
        //         )
        //     }
           
        // })
        // return posts
        // const posts = this.props.posts.map((post, index) =>{
        //     if(index < 3) {
        //         return (
        //             <li key={index}>
        //                 {post.title}
        //             </li>
        //         )
        //     }
        // })
        return "helllo"
    }

    render() {
        return (
         <div className="recent-posts">
             <div className="recent-posts__wrapper">
                <div className="recent-posts__heading">Recent Posts</div>
                <ul className="recent-posts__posts">
                    {this.renderPosts()}
                </ul>
             </div>

         </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);

