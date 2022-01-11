import './User.css'


const User = (props) => {
    const  {id, name, surname, email} = props;
    return (
        <div>
            <h3 className={'mg'}>{id}</h3>
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <h3>{email}</h3>
        </div>
    );
};

export default User;