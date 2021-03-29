import React from 'react'
import classes from './addPost.module.scss'
const AddPost = (props) =>{
    //Фиксирую изменения на фронте(ввод текста в поле) для записи  в хранилище
    let onPostChange = (text) =>{
        props.changeTextareaValue(text)
    }   
    const Textarea = React.createRef()
    return(
        <div className = {classes.addPost}>
            <textarea placeholder = "Текст Поста" onChange = {() => onPostChange(Textarea.current.value)}  className={classes.textarea} value = {props.textareaValue} ref = {Textarea}/>
            <button className={classes.public} onClick = {() => props.function(Textarea.current.value)}>Опубликовать</button>
        </div>
    )
}


export default AddPost