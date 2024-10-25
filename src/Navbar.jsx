import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="flex justify-around mt-4 border-b pb-5 shadow-md">
            <h1 className="text-3xl font-bold ">Instagram</h1>
            <div className="flex justify-center items-center gap-5">
                <Link to="/" className="text-xl font-semibold">Home</Link>
                <Link to="/request" className="text-xl font-semibold">Requests</Link>
                <Link className="text-xl font-semibold">About us</Link>
            </div>
            <button className="p-3 bg-blue-700 text-white rounded-md ">Explore more</button>
        </div>
        </>
    )
}
export default Navbar;