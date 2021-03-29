import classes from "./userinfo.module.css"
import UserPhotoTape from '../UserPhoto/UserPhoto'
import AddPost from "../addPost/addPost"

const UserInfo = (props) => {
  
  
  return (
    <div className={classes.post__wrapper}>
      <div className={classes.profile__title_wrap}>  <img src={props.data.avatar} alt="avatar" className={classes.post__img} /> <div className={classes.usertitle}>{props.data.name}</div></div>
      <div className={classes.description}>{props.data.description}</div>
      <UserPhotoTape data={props.data} />
      <div className  = {classes.addPostPlace} ><AddPost function = {props.data.addPost}  textareaValue = {props.data.textareaValue} changeTextareaValue = {props.data.changeTextareaValue}/></div>
      
    </div>
  )
}


export default UserInfo