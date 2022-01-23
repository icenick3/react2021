import React from 'react';

import User from "../User/User";
import './Users.css'

const Users = ({users}) => {

    return (
        <div className={'usersBlock'}>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
};

export default Users;