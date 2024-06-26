import axios from 'axios'
import '../css/userlist.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
    const Userlist = ()=>{
    const [userdata, setuserdata] = useState('');
    const navigate = useNavigate();
    const [path,getpath] = useState('http://localhost:8585/');
    

     const getalluserData = async()=>{
        await axios.get("http://localhost:8585/users/userlist").then((response)=>{
    
            setuserdata(response.data.message)
        })
    }
    
    useEffect(()=>{
        getalluserData();
        
    },[])
    const handleDelete = (userId)=>{
        axios.delete('http://localhost:8585/users/deleteuser/${userId}').then((response)=>{
            // console.log(response)
            getalluserData();
        })
    }
   
    return(
        <>
         <table border={1} width={800} align="center">
                <tr>
                    <th>User id </th><th>First name </th><th>Last name</th><th>Email</th><th>Image</th><th>Action</th>
                </tr>
                { userdata && userdata.map((user)=>(
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td><img id='imglist'src={path+user.image.replace('\public','')}/></td>
                    
                        
                        <td>
                            <input type='button' value="Delete" onClick={()=>{handleDelete(user._id)}}/>
                            <input type='button' value="Edit" onClick={()=>{navigate(`/edit/${user._id}`)}}/>
                            
                        </td>
                    </tr>
                ))}
            
         </table>
        </>
    )
}
export default Userlist
