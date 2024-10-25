import Users from "../NewUser";
import { useParams } from "react-router-dom";
import Post from "./Post";


function UserDetails(){   

       let {username} = useParams();
       let user = Users.find(data=>(
        data.username == username
       ))


    return(
        <>
        <div className=" flex mx-auto justify-center   gap-10  p-10 w-fit rounded-md   ">
        <img className=" w-[200px] h-[200px] object-cover rounded-full"
          src={user.image}
          alt=""
        />
        <div className="">
            <h1 className="text-[33px] w-[280px]  font-bold">{user.name}</h1>
            <h1 className=" font-semibold mt-2 text-neutral-600 text-[16px] ">{user.career}</h1>
            <p className="w-[410px] font-semibold mt-1 text-[17px] text-neutral-800">{user.description}</p>
            <div className="flex items-center gap-6 mt-5">
                <button className=" bg-blue-700 text-white p-1 px-3 rounded-md text-lg">{user.followers} follwers</button>
                <button className=" bg-blue-700 text-white p-1 px-3 rounded-md text-lg">{user.following} follwing</button>

            </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-10 object-cover">
        {
          user.posts.map((data,index)=>(
           <Post key={index} img={data.image} caption={data.caption} id={data.id }/> ))
        }
      </div>
        
        
        </>
    )
}

export default UserDetails;