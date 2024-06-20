import '../css/footer.css'
import { useNavigate } from 'react-router-dom';
import '../css/contact.css'
const Contact = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <button id='contactus'onClick={()=>{navigate(`/contact`)}}>CONTACT US</button>
        <img src='images/img4.jpg'></img>
        <div id='contactcard'>
            <div id='livechat'>
            <img class='img5'src='images/img5.png'></img>
            <h2>Live Chat</h2>
            <p>Real time chatting with a customers on website not only builds customers confidence during their shopping experience, but also helps to improve your conversion ratio and creates a brand image</p>
        </div>
        <div id='lightingspeed'>
        <img class='img6' src='images/img6.jpg'></img>
        <h2>Lighting Speed</h2>
        <p>Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of cutomer staying on site as the website respond faster</p>
        </div>
        <div id='support'>
        <img class='img7' src='images/img7.jpg'></img>
            <h2>24*7 Support</h2>
            <p>We at Zauca, considering the importance of business that we are into, now provides around the clock support to enhance its customer support, which can ensure 99.9% uptime of websites</p>
        </div>
        </div>
        
        </>
    )
}

export default Contact