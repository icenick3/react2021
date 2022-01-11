import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import './App.css'
import Comments from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <div className={'main'}>
                <div className={'inferior'}><Users/></div>
                <div className={'inferior'}><Posts/></div>
            </div>
            <div><Comments/></div>
        </div>
    );
};

export default App;
