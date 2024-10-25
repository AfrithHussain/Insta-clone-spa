/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Usercard({ name, image, career , username}) {
  return (
    <>
      <Link to={`/${username}`}>
      <div className="shawdow-md shadow w-fit flex mx-auto p-1 border rounded-md justify-center items-center  gap-12  mt-6">
        <img className=" w-16  h-16 object-cover rounded-full"
          src={image}
          alt=""
        />
        <div className="">
            <h1 className="text-lg w-[200px]  font-semibold">{name}</h1>
            <p className="font-semibold text-neutral-700 text-sm">{career}</p>
        </div>
      </div></Link>
    </>
  );
}

export default Usercard;
