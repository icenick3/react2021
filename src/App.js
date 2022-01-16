import {useState} from "react";

import './App.css';
import Users from './components/Users/Users'
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {getPosts} from "./services/users.services";


const App = () => {

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])


    const getUserId = (userId) => {
        getPosts(userId).then(value => setPosts(value))
    }
    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }

    return (
        <div>
            <div className={'usersBox'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            <div><Posts posts={posts}/></div>
        </div>
    );
}

export default App;
