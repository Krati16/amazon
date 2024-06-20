import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/registration.css';
import { useEffect, useState } from 'react';
const Registration = (data)=>{
  const [image, setImage ,getimage] = useState({ preview: '', data: '' ,'':''})
  const [status, setStatus] = useState('')


  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
     
    console.log(data.data)
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    
    const [api_url,getApiurl]  = useState(data.data);
    const [formname,getformname] = useState('Registration Form')
    const [buttonname,getbuttonname] = useState('Registration');
    const [firstname,getfirstname] = useState('');
    const [lastname,getlastname] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [email,getemail] = useState('');
    const [password,getpassword] = useState('');
    const [formerror,getformerror]= useState('');
    const firstnameHanadler = (event)=>{
        getfirstname(event.target.value)
    }
    const lastnameHanadler = (event)=>{
        getlastname(event.target.value)
    }
    const phonenoHanadler = (event)=>{
        getphoneno(event.target.value)
    }
    const emailHanadler = (event)=>{
        getemail(event.target.value)
    }
    const passwordHanadler = (event)=>{
        getpassword(event.target.value)
    }
        //console.log(firstname+lastname+phoneno+email+password)
        // const Registration =()=>{
          
    const submitHandler= (event)=>{
      event.preventDefault();
      navigate('/login');
    
        if(params.id){
            let registrationData ={firstname:firstname,lastname:lastname,phoneno:phoneno,email:email}
            axios.put(`http://localhost:8585/users/updateuser/${params.id}`,registrationData).then((response)=>{
                navigate('/userlist')
                console.log(response);
            })
        }else if(location.pathname === '/login'){
            let registrationData ={email:email,password:password}
            axios.post(`http://localhost:8585/users/login`,registrationData).then((response)=>{
                if(response.data.message == 'email or password doesnot match'){
                    getformerror('Eamil or password is wrong')
                }else{
                    localStorage.setItem('email',response.data.message.email)
                    localStorage.setItem('firstname',response.data.message.firstname)
                    localStorage.setItem('id',response.data.message._id)
                    // localStorage.setItem('image',response.file.path.image)
                   navigate('/profile')
                }
                
    
            })

        }else{let formData = new FormData()
          formData.append('image', image.data);
          formData.append('firstname',firstname);
          formData.append('lastname',lastname);
          formData.append('phoneno',phoneno);
          formData.append('email',email);
          formData.append('password',password);
          
          const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
            axios.post(`http://localhost:8585/users/registration`,formData,config).then((response)=>{
                  //console.log(response)
                  Navigate('/login');
        })
        }
    }
    useEffect(()=>{
        if(location.pathname === '/login'){
            getformname('Login form')
            getbuttonname('Login')
        }
        if(params.id){
            getformname('Update form')
            getbuttonname('Update')
            axios.get(`http://localhost:8585/users/singleuserlist/${params.id}`).then((response)=>{
                getfirstname(response.data.message.firstname)
                getlastname(response.data.message.lastname)
                getphoneno(response.data.message.phoneno)
                getemail(response.data.message.email)
                getimage(response.data.file)
            })
        }
    },[])
    
    return(
        <>
        <div id="form-main-container">
            <div id="form-container">
    <div class="header-form">{formname} </div>
    <div>{formerror}</div>
    <form class="form">
    { buttonname != 'Login' &&
    <>
      <div class="input-box">
        <label for="firstname">First name </label>
        <input type="text" placeholder="First name" value={firstname} onChange={firstnameHanadler}/>
      </div>
      <div class="input-box">
        <label for="lastname">Last name </label>
        <input type="text" placeholder="Last name" value={lastname} onChange={lastnameHanadler}/>
      </div>
      <div class="input-box">
          <label for="phoneno">Phone no </label>
          <input type="text" placeholder="Phone No" value={phoneno} onChange={phonenoHanadler}/>
        </div>
        <div class="input-box">
        {image.preview && <img id='preview'src={image.preview} width='100' height='100' />}
      <hr></hr>
        <input type='file' name='file' onChange={handleFileChange}></input>
        </div>
    </>
}
      <div class="column">
        <div class="input-box">
            <label for="email">Email </label>
            <input type="text" placeholder="Email" value={email} onChange={emailHanadler}/>
        </div>
        <div class="input-box">
          <label for="password">Password </label>
          <input type="password" placeholder="Password" value={password} onChange={passwordHanadler}/>
        </div>
        
      </div>
      <input type="submit" value={buttonname} onClick={submitHandler}/>
    </form>
  </div>
  </div>
        </>
    )
}
export default Registration
