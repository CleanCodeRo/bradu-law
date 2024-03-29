import React from "react";
import IconDetailCard from "../Reusables/IconDetailCard";


export default function AboutUs() {


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="headerImages/sebastian-pichler-bAQH53VquTc-unsplash.jpg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-12 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA</p>

                    </div>

                    <div id="description" className="text-sm ">
                        <p className="my-2.5">Bine ați venit la Cabinet de Avocat-Cabinet Individual de Insolventa Bradu Nicoleta-Dorina!</p>
                        <p className="my-2.5">Punem accent pe integritate, competență și relații de încredere cu clienții noștri. Fie că aveți nevoie de asistență în dreptul afacerilor, dreptul familiei sau oricare altă sferă juridică, suntem aici să vă ghidăm și să vă reprezentăm cu profesionalism și devotament.</p>
                        <p className="my-2.5 font-bold">Cabinetul nostru acoperă toate nevoile de consultanță ale mediului de afaceri: avocatură, mediere, fiscalitate și politici financiare, gestiunea afacerii, insolvență, recuperări creanțe și altele. </p>
                        <p className="my-2.5">Cabinetul de Avocat-Individual de Insolventa, isi desfasoara activitatea in conformitate cu prevederile Legii nr. 51/1995 privind <span className="font-bold">organizarea şi exercitarea profesiei de avocat</span>, respectiv Ordonantei de Urgenta a Guvernului nr. 86/2006 privind organizarea activitatii practicienilor in insolventa, cu modificarile si completarile ulterioare. </p>
                        <p className="my-2.5">Titularul cabinetului este Dna Av. Bradu Nicoleta-Dorina. Politica cabinetului este aceea de a asigura performanta: servicii de calitate, implicarea rapida si rezolvarea pertinenta a problemelor financiare, tehnice si juridice prin identificarea solutiilor optime pentru fiecare client, asistenta si reprezentare juridica, consultanta juridica.  </p>
                        <p className="my-2.5">Pe plan finaciar, colaboram cu avocati, experti contabili /auditori membrii CECCAR si CAFR care asigura optimizarea activitatii, gestionarea dosarelor, colaborarea optima in vederea identificarii celor mai bune solutii, in vederea reorganizarii sau lichidarii, dupa caz, a societatilor aflate in procedura instituita de Legea 85/2014 privind procedurile de prevenire a insolventei si de insolventa. </p>
                        <p className="my-9 "><i>„A fi avocat nu este doar o vocație. Este o încredere publică și fiecare dintre noi are obligația de a da înapoi comunităților noastre.” – <span className="font-bold">Janet Reno</span></i></p>

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