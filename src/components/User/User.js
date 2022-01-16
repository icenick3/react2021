import React from 'react';

import './User.css'

const User = ({item, getUser}) => {
    return (
        <div className={'mainBlock'}>
            <div className={'childBlock'}>{item.id}) {item.name}</div>
            <button className={'button'} onClick={() => getUser(item)}>Details</button>
        </div>
    );
};

export default User;