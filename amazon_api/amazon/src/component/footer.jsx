import { useNavigate } from 'react-router-dom'
import '../css/footer.css'
const Footer = ()=>{
    return(
        <>
        <div id = "cdf">
             <div class="one">
      <h3  >Products</h3>
      <a >Contact Centre <br/> Solution</a><br/>
      <a >CPaaS Voice</a><br/>
      <a >CPaaS SMS</a><br/>
      <a >Unified Communication <br/> Platform</a><br/>
  </div>
  <div class="two">
    <h3>Refrence</h3>
         <a>Tracking Solution</a><br/>
          <a>CPaaS Whatsapp </a><br/>
          <a>CPaaS Whatsapp </a><br/>
  </div>
  <div class="three">
      <h3>Quick Links</h3>
      <a>Home</a> <br/>
      <a>About us</a><br/>
      <a>Careers</a><br/>
      <a>Contact us</a>
  </div>
  <div class="four">
      <h3 >Subscribe to our newsletter</h3>
      <p >Monthly digest of what's new and exciting from us.</p>
      <input type="text" placeholder="Email address"/> <button>Subscribe</button>
  </div>
  <hr/>
  <p1>© 2022 Novus Connect. All rights reserved.</p1><br/>
</div>

        </>
    )
}

export default Footer