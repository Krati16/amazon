import Header from "../component/header"
import Registration from "../component/registration"

const Registrationpage = (data)=>{
    return(
        <>
            {<Header/>}
            {<Registration data={data.commonData.api_url}/>}
          
        </>
    )
}
export default Registrationpage