import React from 'react';

import './User.css'

const User = ({item}) => {
    return (
        <div className={'mainBlock'}>
            <p>{item.name} --- {item.username} --- {item.email}</p>
        </div>
    );
};

export default User;