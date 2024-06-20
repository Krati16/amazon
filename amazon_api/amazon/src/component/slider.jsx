import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/slider.css';
const Slider = ()=>{
    const navigate = useNavigate();
    let images =['images/img1.jpg','images/img2.jpg','images/img3.jpeg']
    let imageno = 0;
    function changeSlide(){
        document.getElementById('slide-image').src = images[imageno];
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno++;
        }
        setTimeout(changeSlide,2000)
    }
    
    useEffect(()=>{
        changeSlide();
    },[])
    return(
        <>
            <div class="slider-container">
                <div class="inner-slide-container">
                <button id='shopnow'onClick={()=>{navigate(`/profile`)}}>SHOP NOW...</button>
                    <img id="slide-image"/>
                </div>
            </div>
        </>
    )
}
export default Slider
