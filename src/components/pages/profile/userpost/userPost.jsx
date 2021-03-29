import classes from "./userPost.module.css"

const UserPost = (props) => {
  
    return (
        <div className={classes.postWrapper}>
            <div className={classes.title}><img src={props.avatar} alt="avatar" className = {classes.avatar} /><div className = {classes.userName}>{props.name}</div></div>
            <div className={classes.text}>{props.text}</div>
            <img src={props.img} alt="" className = {classes.post__img}/>
        </div>
    )
}


export default UserPost

