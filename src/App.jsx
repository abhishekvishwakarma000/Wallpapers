// import about from "../pages/about.jsx";
import Imagecard from "./component/imagecard.jsx";
import { Link } from "react-router-dom";
const App = () => {



    return (
        <>
            <div className="w-full bg-white">
                <div className="w-full bg-black text-white px-2 lg:px-4 flex items-center  py-4 justify-around sticky top-0 z-10">
                    <Link to="/" className="font-serif font-bold text-[15px] lg:text-xl  text-indigo-400">LuxyWalls</Link>
                   <Link to="/about" className="text-[17px] lg:text-xl">About</Link>
                </div>
                <Imagecard />
                <div className="w-full h-10 bg-black flex justify-center items-center text-white text-[15px]">Made By Abhi❤️</div>
            </div>


        </>
    )
}

export default App