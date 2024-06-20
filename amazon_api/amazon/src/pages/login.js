import Header from "../component/header"
import Registration from "../component/registration"

const Loginpage = (data)=>{
    return(
        <>
            {<Header/>}
            {<Registration data={data.commonData.api_url}/>}
          
        </>
    )
}
export default Loginpage