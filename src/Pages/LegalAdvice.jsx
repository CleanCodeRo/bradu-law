import React from 'react'
import IconDetailCard from '../Reusables/IconDetailCard'

export default function LegalAdvice() {
    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-12 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - Consultanță juridica </p>
                    </div>



                    <div className={`flex flex-col px850:flex-row items-center justify-center my-6 sm:my-10 `}>
                            <div id="icon" className="h-16 w-16 mb-7 px850:mb-0 px850:mr-7  bg-first rounded-full flex items-center justify-center">
                                <img className="h-4/6 " src={"images/consult_7997942.png"} />
                            </div>
                            <p className=" text-center text-sm">Conteaza pe un consultant juridic cu o vasta experienta pentru servicii complete de consultanta juridica. </p>
                        </div>



                </div>
            </div>
        </div>
    )
}

