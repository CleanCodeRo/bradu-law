import React from "react";

export default function IconDetailCard({ image, title, text, className }){
    return (
        <div className={`flex flex-col items-center my-6 sm:my-10 ${className}`}>
        <div id="icon" className="h-16 w-16 mb-10 bg-first rounded-full flex items-center justify-center">
            <img className="h-4/6" src={image} draggable="false"/>
        </div>
        <p className="font-bold uppercase text-center text-[14px] mb-3 ">{title}</p>
        <p className=" text-center text-sm">{text}</p>
    </div>
    )
}