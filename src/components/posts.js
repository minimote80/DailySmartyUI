import React, { Component } from 'react';

class Post extends Component {
    
    renderTopics() {
        let topics = this.props.associated_topsics.map(topic, index => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
    }

    render() {
        return (
                <li>
                    {this.post.title}
                </li>
        )
    }
}