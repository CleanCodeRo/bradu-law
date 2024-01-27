import React from "react";

export default function EventComponent({ title, date, description }) {
    return (
        <div id='wholeComponent' className="w-full flex flex-col my-4">
            <div id="titleAndDate" className="flex items-center">
                <div id="date" className="border-4 min-w-[4rem] h-[5rem] flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold">{date.split(" ")[0]}</p>
                    <p className="text-sm">{date.split(" ")[1]}</p>
                </div>
                <div id="title" className="ml-4 font-bold">
                    <p className="px400:text-xl uppercase mb-3 text-[rgb(70,70,70)] line-clamp-4 md:line-clamp-2 cursor-pointer hover:text-[#c01707] ">{title}</p>
                    <p className="text-[8.5px] uppercase tracking-wide">By Bradu Nicoleta-Dorina</p>
                </div>
            </div>

            <div id="description" className="my-6 line-clamp-5  md:line-clamp-3">
                {description}
            </div>

            <div id="navigationLink" className="text-[#c01707]  hover:text-red-400 cursor-pointer">
                {"> View article"}
            </div>
        </div>
    )
}