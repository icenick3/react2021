import {useEffect, useState} from "react";

import Form from "./Form/Form";
import './App.css';
import {getAllUsers} from "./servisec/userService";
import Users from "./components/Users/Users";

function App() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() => {
        getAllUsers().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])


    const getFilter = (data) => {
        let filterArr = [...users]

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.includes(data.name))
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.includes(data.username))
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.includes(data.email))
        }
        setFilteredUsers(filterArr)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
