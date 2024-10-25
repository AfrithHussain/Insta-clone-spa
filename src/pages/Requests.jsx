import Users from "../Users";
import Usercard from "../Usercard";



function Requests(){
    return(
        <>
         <div className="mx-auto mt-12 text-center">
         <h1 className="text-2xl font-semibold mx-auto">Request has been sent bye</h1>

         </div>
         
       <div className="">
       {
                Users.map((user,index)=>(
                    <Usercard key={index} name={user.name} career={user.career} image={user.image} username={user.username}   />
                ))
            }
       </div>

        


        
        </>
        
    )
    
}
export default Requests;