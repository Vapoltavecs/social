import classes from './item.module.css'
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className={classes.post__wrap}>

            <NavLink to={props.data.slug}>
                <div className={classes.title__wrap}>
                    <div className={classes.avatar}><img src={props.data.avatar} alt="avatar" /></div>
                    <div className={classes.userName}>{props.data.name}</div>

                </div>

            </NavLink>
            <div className={classes.PostText}>
                {props.data.text} 
            </div>
            <img src={props.data.image} alt="" className = {classes.PostImage}/>


        </div>
    )
}


export default Item