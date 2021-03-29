import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Отвечает за Перерендер дерева после изменений в хранилище
export let rerenderTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {props.getState()} store = {props}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

