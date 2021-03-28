import { NavLink } from 'react-router-dom'
import classes from './header.module.css'
const Header = (props) => {
    const isLoggedIn = props.registrated.getRegistrated();
    function greering() {
        if (isLoggedIn == false) {
            return <div><NavLink to="/login" >Войти</NavLink>/<NavLink to="/registration">Регистрация</NavLink></div>
        }

        else {

            return <div> <NavLink to='/' onClick={() => outAccount()} activeClassName={classes.active}>Выйти</NavLink></div>

        }


    }
    function outAccount() {
        props.registrated.setRegistrated(false)
    }



    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.header__item}><NavLink to='/friends' activeClassName={classes.active}>Друзья</NavLink></div>
                <div className={classes.header__item}><NavLink to='/messages' activeClassName={classes.active}>Сообщения</NavLink></div>
                <div className={classes.header__item}><NavLink to='/galery' activeClassName={classes.active}>Картинки</NavLink></div>
                <div className={classes.header__item}><NavLink to='/tape' activeClassName={classes.active}>Лента</NavLink></div>
                <div className={classes.header__item}><NavLink to='/profile' activeClassName={classes.active}>Профиль</NavLink></div>
            </nav>
            <div className={classes.registration}>
                {greering(isLoggedIn).props.children}
            </div>
        </header>
    )
}


export default Header