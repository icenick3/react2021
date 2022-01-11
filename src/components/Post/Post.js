import './Post.css'

const Post = (props) => {
    const  {id, title, body} = props;
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;