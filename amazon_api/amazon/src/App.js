import './css/main.css'
import Homepage from './pages/homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registrationpage from './pages/registration';
import Contactpage from './pages/contactpage';
import Loginpage from './pages/login';
import Userlistpage from './pages/userlistpage';
import Profilepage from './pages/profilepage';
import Imageuplodepage from './pages/imageuplodepage';

function App() {
  var commonData = {"api_url":"http://localhost:8585"}
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/registration' element={<Registrationpage commonData={commonData}/>} />
            <Route path='/login' element={<Loginpage commonData={commonData}/>} />
            <Route path='/contact' element={<Contactpage/>} />
            <Route path='/userlist' element={<Userlistpage commonData={commonData}/>} />
            <Route path='/edit/:id' element={<Registrationpage commonData={commonData}/>} />
            <Route path='/profile' element={<Profilepage/>} />
            <Route path='/imageuplode' element={<Imageuplodepage/>} />
            
        </Routes>
     </BrowserRouter>
    </>
   
  );
}

export default App;
