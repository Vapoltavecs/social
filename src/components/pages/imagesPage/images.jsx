import React from 'react'
import classes from './images.module.css'
const ImagesPage = (props) => {
    console.log(props.images)
    let Item = props.images.galery.map(data => {
        return (
            <div onClick={() => openModal()} className={classes.ItemImg} >
                <img src={data.path} alt="" />
            </div>
        )
    })
    const sliderItemWidth = React.createRef()

    const inner = React.createRef()

    const openModal = () => {
        sliderRef.current.classList.add(classes.active)
        inner.current.classList.add(classes.opacity)

    }
    const sliderRef = React.createRef();

    let sliderItem = props.images.galery.map(data => {
        return (
            <div className={classes.sliderItemImg} ref={sliderItemWidth} >
                <img src={data.path} alt="" />
            </div>
        )
    })


    const closeModal = () =>{
        sliderRef.current.classList.remove(classes.active)
        inner.current.classList.remove(classes.opacity)
    }


    let counter = 0
    const sliderTrack = React.createRef()
    const NextSlide = () => {
        if (counter > sliderItemWidth.current.offsetWidth * (props.images.galery.length - 2)) {
            counter = 0
            
        }
        else {
            counter = counter + sliderItemWidth.current.offsetWidth
            sliderTrack.current.style.right = counter + 'px'
        }
    }
    const PrevSlide = () => {
        if(counter <  sliderItemWidth.current.offsetWidth *2){
            counter = sliderItemWidth.current.offsetWidth * (props.images.galery.length - 1)
            
        }
        console.log(counter)
        counter = counter - sliderItemWidth.current.offsetWidth
        sliderTrack.current.style.right = counter + 'px'
        

    }

    return (
        <div className={classes.container}>
            <div className={classes.inner} ref={inner}>
                {Item}
            </div>
            <div className={classes.slider__wrap} ref={sliderRef}>
                <div className={classes.slider} >
                    <div className={classes.slider__track} ref={sliderTrack}  >
                        {sliderItem}
                    </div>
                    <div className={classes.prev} onClick={() => PrevSlide()}>{'<'}</div>
                    <div className={classes.next} onClick={() => NextSlide()}>{'>'}</div>
                </div>
            </div>
            <div className={classes.opacity__modal} ref={inner}><div className={classes.cross} onClick = {() => closeModal()}>×</div></div>
        </div>
    )
}


export default ImagesPage