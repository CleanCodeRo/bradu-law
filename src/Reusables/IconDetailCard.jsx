import React from "react";

export default function IconDetailCard({ image, title, text }){
    return (
        <div className="flex flex-col items-center my-10">
        <div id="icon" className="h-16 w-16 mb-10 bg-first rounded-full flex items-center justify-center">
            <img className="h-4/6" src={image} />
        </div>
        <p className="font-bold uppercase text-center mb-3">{title}</p>
        <p className=" text-center">{text}</p>
    </div>
    )
}