import React from 'react'
import IconDetailCard from '../Reusables/IconDetailCard'

export default function DueDilligince() {
  return (
    <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center mt-12 mb-5 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - Due Diligence</p>
                    </div>

                    <div id="iconsDetails" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10">
                        <IconDetailCard image="images/analysis_11128104.png" text={"Cabinetul oferă servicii prealabile de analiză, examinare şi investigare a situaţiilor juridice si economice puse la dispoziţie în vederea exprimarii unei opinii legale privind achizitia/instrainarea unor active."} />
                        <IconDetailCard image="images/file_1846935.png" text={"Rezultatele unui procedeu de due diligence poate astfel influenţa în mod semnificativ asupra deciziilor de afaceri de urmează a fi luate, precum şi modalităţile prin care un cumpărător sau investitor se poate proteja în mod adecvat în cadrul contractului de achiziţie pentru atingerea şi menţinerea rezultatelor scontate."} />
                    </div>
                </div>
            </div>
        </div>
  )
}
