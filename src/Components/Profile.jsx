import "./All.css";


const Profile = ({name, email, pNumber, avater}) =>{
    return(
        <div className="container">
            <div className="image">
                <img src={avater} />
            </div>
            
            <div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{pNumber}</div>
            </div>
        </div>
    )
}


export default Profile