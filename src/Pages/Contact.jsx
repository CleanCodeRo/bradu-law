
import React, { useEffect } from 'react'; 
import MyMap from '../Components/MyMap/MyMap';



export default function Contact(){
    


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-georgia">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Yusuf_è_un_profeta.jpeg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-8 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT- CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA</p>
                    </div>

                    <div id="iconsDetails" className="w-full   grid grid-cols-1 px768:grid-cols-2 gap-x-3 gap-y-3 mb-2.5">
                        
                        <div id="leftPart" className="w-full xl-h-[480px] px768:h-fit flex flex-col text-[13px] ">
                        
        <p className="font-bold relative top-0 w-fit text-center mt-0 mb-2.5 uppercase text-[14px]">Contact</p>
        <p className="font-bold relative top-0 w-fit text-center mt-1.5 mb-2.5 ">Cabinet de Avocat Bradu Nicoleta-Dorina</p>
        <div className="flex mt-1.5 mb-2.5">
        <p className="font-bold relative top-0 w-fit text-center mt-0 ">Tel:</p><p className="text-[#c01707] cursor-pointer hover:text-[#FF1800]">+40726.212.737</p>
        </div>
        <div className="flex mt-1.5 mb-2.5 ">
        <p className="font-bold relative top-0 w-fit text-center mt-0 ">Fix:</p><p className="text-[#c01707] cursor-pointer hover:text-[#FF1800]">+40730167941</p>
        </div>
        <div className="flex mt-1.5 mb-2.5 ">
        <p className="font-bold relative top-0 w-fit text-center mt-0 ">Fax:</p><p className="text-[#c01707] cursor-pointer hover:text-[#FF1800]">+40730167941</p>
        </div>
        <div className="flex mt-1.5 mb-2.5 ">
        <p className="font-bold relative top-0 w-fit text-center mt-0 ">Email:</p><p className="text-[#c01707] cursor-pointer hover:text-[#FF1800]">avocatnicoleta.bradu@gmail.com</p>
        
        </div>
        <div className="flex mt-1.5 mb-2.5 ">
        <p className="font-bold relative top-0 w-fit text-center mt-0 ">Email:</p><p className="text-[#c01707] cursor-pointer hover:text-[#FF1800]">cinsolv.bradu@gmail.com</p>
        
        </div>
        
        <p className="font-bold relative top-0 w-fit text-center mt-1.5 mb-2.5 ">Program:</p>
        <p className=" relative top-0 w-fit text-center mt-1.5 mb-2.5 ">Luni-Vineri: 09:00 - 17:00</p>
        <p className="font-bold relative top-0 w-fit text-center mt-1.5 mb-2.5 ">Adresa:</p>
        <p className=" relative top-0 w-fit text-center mt-1.5 mb-2.5 "></p>
                            
                        
        
                        </div>
                        <div className="  w-full h-[450px]">
                           <MyMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom