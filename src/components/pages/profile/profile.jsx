import UserInfo from "./UserInfo/userInfo"
import classes from './profile.module.css'
import UserPost from "./userpost/userPost"
const Profile = (props) => {
    const Post = props.data.posts.map(data => <UserPost img={data.image} avatar={data.avatar} text={data.text} name={data.name} />)
    return (
        <div>
            <UserInfo data={props.data} />
            <div className={classes.posts__wrapper}>
                {Post}
            </div>
        </div>
    )
}

  
export default Profile