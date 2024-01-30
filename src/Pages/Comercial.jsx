import React from "react";
import IconDetailCard from "../Reusables/IconDetailCard";


export default function Comercial() {


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
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - DREPT COMERCIAL SI SOCIETAR</p>

                    </div>

                    <div id="description" className="text-sm ">
                        <p className="my-2.5">•	Cabinetul a dobândit o experiență semnificativă în domeniul dreptului societar prin asistența juridică asigurată societăților mici si mijlocii, cu capital privat, care îşi desfășoară activitatea în toate domeniile economice, în legătură cu procedurile de înființare şi de modificare a actelor de constituire, de fuziuni şi achiziții, de dizolvare şi lichidare, precum şi cu activități societare curente.</p>
                        <p className="my-2.5">•	Cabinetul acordă asistență juridică şi asigură reprezentarea clienților în toate fazele si etapele activitatii societatii dvs, procedurii de înregistrare a unei societăți în legătură cu alegerea tipului de societate adecvat scopului business-ului respectiv, obținerea de autorizații de funcționare, redactarea documente necesare functionarii.</p>
                        <p className="my-2.5 font-bold">•	Asistență și reprezentare în fața instanțelor de judecată în litigii comerciale, precum și asistență la negocieri pentru încheierea contractelor comerciale. </p>
                        <p className="my-2.5">Cabinetul de Avocat-Individual de Insolventa, isi desfasoara activitatea in conformitate cu prevederile Legii nr. 51/1995 privind <span className="font-bold">organizarea şi exercitarea profesiei de avocat</span>, respectiv Ordonantei de Urgenta a Guvernului nr. 86/2006 privind organizarea activitatii practicienilor in insolventa, cu modificarile si completarile ulterioare. </p>
                        <p className="my-2.5">Titularul cabinetului este Dna Av. Bradu Nicoleta-Dorina. Politica cabinetului este aceea de a asigura performanta: servicii de calitate, implicarea rapida si rezolvarea pertinenta a problemelor financiare, tehnice si juridice prin identificarea solutiilor optime pentru fiecare client, asistenta si reprezentare juridica, consultanta juridica.  </p>
                        <p className="my-2.5">Pe plan finaciar, colaboram cu avocati, experti contabili /auditori membrii CECCAR si CAFR care asigura optimizarea activitatii, gestionarea dosarelor, colaborarea optima in vederea identificarii celor mai bune solutii, in vederea reorganizarii sau lichidarii, dupa caz, a societatilor aflate in procedura instituita de Legea 85/2014 privind procedurile de prevenire a insolventei si de insolventa. </p>
                        <p className="my-9 "><i>„A fi avocat nu este doar o vocație. Este o încredere publică și fiecare dintre noi are obligația de a da înapoi comunităților noastre.” – <span className="font-bold">Janet Reno</span></i></p>

                    </div>

                    <hr className="mt-10 mb-3"></hr>

                    <div id="iconsDetails" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10">
                        <IconDetailCard image="images/judge_1705255.png" title={"Consultații juridice acordate societăților "} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Recuperări creanțe "} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Redactari acte și contracte societăți"}/>
                        <IconDetailCard image="images/chart_3832835.png" title={"Obținerea de avize și autorizații de la diverse instituții "} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Servicii de solutionare a diferendelor financiare atat in plan intern cat si international"}  />
                        <IconDetailCard image="images/chart_3832835.png" title={"Servicii de modificare, completare acte la Registrul Comertului, înfiintare firme, puncte de lucru, lichidare voluntara a firmelor"} />

                    </div>
                </div>
            </div>
        </div>
    )
}