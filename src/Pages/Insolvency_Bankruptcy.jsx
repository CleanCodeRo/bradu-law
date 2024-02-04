import React from 'react'
import IconDetailCard from '../Reusables/IconDetailCard'

export default function Insolvency_Bankruptcy() {
  return (
    <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
    <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
        <img
            src="headerImages/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg"
            className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
            draggable="false"
        />

        <div id="otherDetails" className="w-full">
            <div id="title" className="w-full flex justify-center items-center my-12 relative">
                <div className="bg-gray-300 h-[2px] w-full"></div>
                <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - INSOLVENTA</p>

            </div>

            <div id="description" className="text-sm mb-10">
                <p className="my-4">Scopul Legii nr. 85/2014 este instituirea unei proceduri colective pentru acoperirea pasivului debitorului, cu acordarea, atunci când este posibil, a șansei de redresare a activității acestuia.</p>
                <p className="my-4">Debitorul aflat în stare de insolvență este obligat să adreseze tribunalului o cerere pentru a fi supus dispozițiilor prezentei legi, în termen de maximum 30 de zile de la apariția stării de insolvență. La cererea adresată tribunalului va fi atașată dovada notificării organului fiscal competent cu privire la intenția de deschidere a procedurii insolvenței.</p>
                <p className="my-4">Din definitia legala mentionata se poate lesne observa ca una dintre caracteristicile esentiale ale insolventei o reprezinta insuficienta fondurilor banesti din patrimoniul debitorului, . </p>
                <p className="my-4">Asadar, insolventa se caracterizeaza printr-o lipsa a fondurilor banesti necesare pentru acoperirea datoriilor exigibile.</p>

                <p className="my-4">Un debitor ajuns în stare de insolvabilitate are posibilitatea, in conditiile in care întrunește condițiile expres prevăzute de lege, să intre într-o fază de reorganizare a activității, pe baza unui plan de reorganizare aprobat de creditori și confirmat de catre judecătorul sindic. </p>
                <p className="my-4">Pe plan finaciar, colaboram cu avocati, experti contabili /auditori membrii CECCAR si CAFR care asigura optimizarea activitatii, gestionarea dosarelor, colaborarea optima in vederea identificarii celor mai bune solutii, in vederea reorganizarii sau lichidarii, dupa caz, a societatilor aflate in procedura instituita de Legea 85/2014 privind procedurile de prevenire a insolventei si de insolventa. </p>
                <p className="my-4 ">In conditiile in care debitoarea nu are posibilitatea redresarii se poate adresa judecatorului sindic cu o cerere de declansare a procedurii de faliment.</p>

            </div>

        </div>
    </div>
</div>
  )
}
