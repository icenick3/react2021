import React from 'react';

const Comment = (props) => {
    const {id, name, email, body} = props;
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;