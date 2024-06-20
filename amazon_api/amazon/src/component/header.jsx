import { useNavigate } from 'react-router-dom'
import '../css/header.css'
const Header = ()=>{
    const navigate = useNavigate();
    const email = localStorage.getItem('email')
    const firstname = localStorage.getItem('firstname')
    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/login')
    }
    return(
        <>
            <div id="navbar-parent">
            <div id="logo">Uncodemy.com</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox-toggle"/>
                <label for="checkbox-toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a onClick={()=>{navigate('/')}}>Home</a></li>
                <li class="services">
                    <a>Services</a> <i class="ri-arrow-up-s-fill"></i><i class="ri-arrow-down-s-fill"></i>
                    <ul class="dropdown">
                    <li><a >React Js</a></li>
                    <li><a >NodeJs</a></li>
                    </ul>

                </li>
            {!email &&
                <>
                    <li><a onClick={()=>{navigate('/login')}}>Login</a></li>
                    <li><a onClick={()=>{navigate('/registration')}}>Registration</a></li>
                </>
            }
             {email &&
                <>
                <li><a onClick={()=>{handleLogout()}}>{firstname}(Logout)</a></li>
                <li><a onClick={()=>{navigate('/userlist')}}>Userlist</a></li>
                <li><a onClick={()=>{navigate('/profile')}}>Profile</a></li>
               </>
             }
                <li><a onClick={()=>{navigate('/imageuplode')}}>Imageuplode</a></li>
                <li><a onClick={()=>{navigate('/contact')}}>Contact</a></li>
                </div>
            </ul>
            </div>

        </>
    )
}
export default Header
