import classes from "./photouser.module.css"

const UserPhotoTape = (props) => {
    //Лента с фотографиями в профиле пользователя, из пропсов приходит массив с путями, тут я отображаю его на странице
    let imgItems = props.data.profilePhoto.map(data => <img src={data.path} alt="" />)
    return (
        <div className={classes.wrapper__img}>
            {imgItems}
        </div>
    )
}


export default UserPhotoTape