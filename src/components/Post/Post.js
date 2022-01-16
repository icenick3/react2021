import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div className={'blockPosts'}>
                <p className={'contentPosts'}><strong>UserId:</strong> {post.userId} </p>
                <p className={'contentPosts'}><strong>Id:</strong> {post.id} </p>
                <p className={'contentPosts'}><strong>Title:</strong> {post.title} </p>
                <p className={'contentPosts'}><strong>Body:</strong> {post.body} </p>
            </div>
        </div>

    );
};

export default Post;