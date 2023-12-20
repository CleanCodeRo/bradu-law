import React from "react";
import IconDetailCard from "../Reusables/IconDetailCard";


export default function AboutUs() {


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-8">
                        <div className="bg-gray-300 h-1 w-[10%]"></div>
                        <p className="text-center w-[80%] font-bold  sm:text-lg uppercase">Cabinet de Avocat-Cabinet Individual de Insolventa Bradu Nicoleta-Dorina</p>
                        <div className="bg-gray-300 h-1 w-[10%]"></div>
                    </div>

                    <div id="description" className="text-sm sm:text-base">
                        <p className="my-3">Bine ați venit la Cabinetul de Avocatură Cabinet de Avocat-Cabinet Individual de Insolventa Bradu Nicoleta-Dorina!</p>
                        <p className="my-3">punem accent pe integritate, competență și relații de încredere cu clienții noștri. Fie că aveți nevoie de asistență în dreptul afacerilor, dreptul familiei, dreptul penal sau oricare altă sferă juridică, suntem aici să vă ghidăm și să vă reprezentăm cu profesionalism și devotament.</p>
                        <p className="my-3">Echipa noastră de avocați pasionați se străduiește să ofere consultanță juridică clară și eficientă, având ca obiectiv principal obținerea rezultatelor dorite pentru clienții noștri. </p>
                    </div>

                    <hr className="mt-10 mb-3"></hr>

                    <div id="iconsDetails" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10">
                        <IconDetailCard image="images/judge_1705255.png" title={"Drept Civil – Cabinet de avocat"} text={"Recuperări creanțe– în domeniul recuperărilor de creanțe oferim asistență atât în etapa pre litigioasă – recuperare creanțe pe cale amiabilă prin redactarea și transmiterea  somației de plată întemeiată pe dispozițiile articolului 1015 din Codul de Procedură Civilă…"} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Insolventa – Faliment – Cabinet de avocat"} text={"Oferim asistare și reprezentare în cazul procedurii de insolvență în calitate de avocat având o vastă experiență  în reprezentarea creditorilor, debitorului precum și a administratorului special. Redactarea documentelor necesare depunerii cererii …"} />
                    </div>
                </div>
            </div>
        </div>
    )
}