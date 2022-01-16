import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/users.services";
import User from "../User/User";
import './Users.css'


const Users = ({getUser}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])


    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} item={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;