import './UserDetails.css'

const UserDetails = ({user, getUserId}) => {
    console.log(user)
    return (
        <div className={'detailsBlock'}>
            <div className={'detailsP'}>
                <p className={'pBlock'}>Id:{user.id}</p>
                <p className={'pBlock'}>Name:{user.name}</p>
                <p className={'pBlock'}>Username:{user.username}</p>
                <p className={'pBlock'}>Email:{user.email}</p>
                <p className={'pBlock'}>Address:{user.address.city}</p>
                <p className={'pBlock'}>Phone:{user.phone}</p>
                <p className={'pBlock'}>Website:{user.website}</p>
                <button className={'detailsButton'} onClick={() => getUserId(user.id)}>Posts</button>
            </div>
        </div>
    );
};

export default UserDetails;