import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-b from-indigo-800/50 to-white text-black flex flex-col items-center justify-center px-6 py-12 text-center">
            {/* Dhamakedaar Emoji (optional) */}
            <div className="text-7xl md:text-9xl animate-bounce mb-4">🤯</div>

            {/* 404 Number */}
            <h1 className="text-8xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
                404
            </h1>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
                No Page Mila Bhai!
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-black text-opacity-80 mt-4 max-w-xs mx-auto leading-relaxed">
                Oops! Yeh page toh kahin kho gaya lagta hai.
                <br />
                <span className="inline-block mt-2">Chalo ghar chalte hain!</span>
            </p>

            {/* Home Button */}
            <Link
                to="/"
                className=" mt-10 px-1 py-2 bg-black text-white font-bold text-xl md:text-xl rounded-[5px] shadow-2xl 
                   active:scale-95 transform transition-all duration-200 
                   min-w-[200px] justify-center"
            >
                <span className="text-xl">Home</span>
            </Link>

            
        </div>
    );
};

export default NoPage;
