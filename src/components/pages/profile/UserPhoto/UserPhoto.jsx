import classes from "./photouser.module.css"

const UserPhotoTape = (props) =>{
    console.log(props.data.profilePhoto)
    let imgItems  = props.data.profilePhoto.map(data => <img src= {data.path} alt=""/>)
    return(
        <div className = {classes.wrapper__img}>
            {imgItems}
        </div>
    )
}


export default UserPhotoTape