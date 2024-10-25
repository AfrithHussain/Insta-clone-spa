/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

  
function Post({img, id}){
    return(
        <>
      <Link to={`/post/${id}`}>
      <img src={img} className="w-[370px] h-[250px]" alt="" /></Link>  
        
        </>
    )
}
export default Post;