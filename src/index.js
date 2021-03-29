import store from './redux/state'
import {rerenderTree} from './render'

//Вызывает начальный рендер странички
rerenderTree(store)

