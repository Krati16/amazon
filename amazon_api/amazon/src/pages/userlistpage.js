import Header from "../component/header"
import Userlist from "../component/userlist"
const Userlistpage = (data)=>{
    return(
        <>
          {<Header/>}
          {<Userlist data={data.commonData.api_url}/>}
        </>
    )
}
export default Userlistpage