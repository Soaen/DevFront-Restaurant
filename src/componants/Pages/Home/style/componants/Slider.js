import React, {useState} from 'react';
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider(){

    const [slideIndex, setSlideIndex] = useState(1)
    const [slideTimeOut, setSlideTimeOut] = useState(false)


    const LEFT_ARROW_KEY = "ArrowLeft";
    const RIGHT_ARROW_KEY = "ArrowRight";
  
  
    function SliderKey(event){
  switch(event.code) 
  {
      case RIGHT_ARROW_KEY:
          nextSlide();
          break;
  
      case LEFT_ARROW_KEY:
          prevSlide();
          break;
          default:
  }
    }
  
    document.addEventListener('keyup', SliderKey);

    const nextSlide = () =>{
        if(slideTimeOut === false){
            setSlideTimeOut(true);
            if(slideIndex !== 4){
                setSlideIndex(slideIndex + 1)
            } else if (slideIndex === 4){
                setSlideIndex(1)
            }
            setTimeout(() => {
                setSlideTimeOut(false);
            }, 0)
        }
    }

    const prevSlide = () => {
        if(slideTimeOut === false){
            setSlideTimeOut(true);
            if(slideIndex !== 1){
                setSlideIndex (slideIndex - 1)
            }
            else if (slideIndex === 1){
                setSlideIndex(4)
            }
        setTimeout(() => {
            setSlideTimeOut(false);
        }, 0)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

(function(){
    setTimeout(() => {
        nextSlide()
       }, 4000)
})();

    return (
        <div className='container-slider'>
            {Array.from({length: 4}).map((obj, index) => {
                return (
                    <div 
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imagesresto/resto${index + 1}.png`} alt="" />
                    </div>
                )
            })}

            {/* <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>


            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index +1 ? "dot active" : "dot"}>

                    </div>
                ))}
            </div> */}
        </div>
    )
}