import Item from './Item/item'
import classes from './tape.module.css'

import Spinner from '../../spinner/spinner'
const TapePage = (props) => {
    if (!TapePage) {
        <Spinner />
    }
    else {

        const PostItem = props.data.tape.map(data => <Item data={data} />)
        return (
            <div className={classes.tape}>
                {PostItem}
            </div>
        )
    }
}


export default TapePage