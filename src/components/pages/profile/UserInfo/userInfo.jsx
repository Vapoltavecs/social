import classes from "./userinfo.module.css"
import UserPhotoTape from '../UserPhoto/UserPhoto'

const UserInfo = (props) =>{
    console.log(props)
    return(
        <div className = {classes.post__wrapper}>
          <div className={classes.profile__title_wrap}>  <img src={props.data.avatar} alt="avatar" className={classes.post__img}/> <div className={classes.usertitle}>{props.data.name}</div></div>
          <div className={classes.description}>{props.data.description}</div>
          <UserPhotoTape data = {props.data} />
        </div>
    )
}


export default UserInfo