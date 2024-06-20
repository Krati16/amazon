import { useEffect ,useState} from "react"
import axios from "axios"
import '../css/profile.css'
const Profile = ()=>{
    const [path,getpath] = useState('http://localhost:8585/');
    const userId = localStorage.getItem('id')
    const [firstname,getfirstname] = useState('');
    const [lastname,getlastname] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [email,getemail] = useState('');
    const [image,getimage] = useState('');
    
    useEffect(()=>{
        getSingleuserData();
    })
    const getSingleuserData = ()=>{
        axios.get(`http://localhost:8585/users/singleuserlist/${userId}`).then((response)=>{
            getfirstname(response.data.message.firstname)
            getlastname(response.data.message.lastname)
            getphoneno(response.data.message.phoneno)
            getemail(response.data.message.email)
        
        })
    }
    return(
        <><table id='profiletable'>
                
                 <tr>
                 <th>user id</th> 
                 <th>{userId}</th>
                 </tr>
                 <tr>
                 <th>First name </th>
                 <th>{firstname}</th>
                 </tr>
                 <tr>
                 <th>Last name</th>
                 <th>{lastname}</th>
                 </tr>
                 <tr>
                 <th>Email</th>
                 <th>{email}</th>
                 </tr>
    
                 <tr>
                 <th>Action</th>
                 <th><input type='button' value="Delete" />
                    <input type='button' value="Edit" />
                </th>
               </tr>
    
               </table>
       </>
   )
    
}
export default Profile
