import React from 'react'
import classes from './images.module.css'
const ImagesPage = (props) => {
    //Перебираю массив с картинками, чтобы изначально отобразить их на странице
    let Item = props.images.galery.map(data => {
        return (
            //OnClick тут обрабатывает отркытие модального окна со слайдером
            <div onClick={() => openModal()} className={classes.ItemImg} >
                <img src={data.path} alt="" />
            </div>
        )
    })
    const sliderItemWidth = React.createRef()
    //inner - Создает затемнение заднего фона при открытии модального окна
    const inner = React.createRef()
    //Открытие модального окна со слайдером
    const openModal = () => {
        sliderRef.current.classList.add(classes.active)
        inner.current.classList.add(classes.opacity)

    }
    const sliderRef = React.createRef();
    //Перебираю массив фотографий, пришедший из пропсов 
    let sliderItem = props.images.galery.map(data => {
        return (
            <div className={classes.sliderItemImg} ref={sliderItemWidth} >
                <img src={data.path} alt="" />
            </div>
        )
    })

    //Закрытие модального окна со слайдером
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