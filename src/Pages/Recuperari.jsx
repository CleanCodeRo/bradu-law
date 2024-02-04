import React from "react";
import IconDetailCard from "../Reusables/IconDetailCard";


export default function Recuperari() {


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="headerImages/wallpaperflare.com_wallpaper (1).jpg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-12 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - RECUPERARI CREANTE</p>

                    </div>

                    <div id="description" className="text-sm mb-10">
                        <p className="my-2.5">Cabinetul recuperează creanțe atât interne cât și externe, de la societăți în funcțiune cât și de la societăți în procedura de insolvență.</p>
                        <p className="my-2.5">Pentru recuperarea creanțelor ne puteți trimite spre analiză, pe e-mail, documentele justificative ale creantei detinute ori ne puteți contacta pentru a stabili o consultație la cabinet.</p>
                        <p className="my-2.5 ">Functie de rezultatul analizei juridice oferite, vom identifica cea mai optima solutie de recuperare a creanței prin intermediul procedurii judiciare ori extrajudiciare.</p>
                        
                    </div>

                    {/* <div id="iconsDetails" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10">
                        <IconDetailCard image="images/judge_1705255.png" title={"Drept Civil – Cabinet de avocat"} text={"Recuperări creanțe– în domeniul recuperărilor de creanțe oferim asistență atât în etapa pre litigioasă – recuperare creanțe pe cale amiabilă prin redactarea și transmiterea  somației de plată întemeiată pe dispozițiile articolului 1015 din Codul de Procedură Civilă…"} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Insolventa – Faliment – Cabinet de avocat"} text={"Oferim asistare și reprezentare în cazul procedurii de insolvență în calitate de avocat având o vastă experiență  în reprezentarea creditorilor, debitorului precum și a administratorului special. Redactarea documentelor necesare depunerii cererii …"} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}