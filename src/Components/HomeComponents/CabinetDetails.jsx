import { timeline } from "@material-tailwind/react";
import React from "react";


export default function CabinetDetails() {

    const Card = ({ image, title, text }) => {
        return (
            <div className="flex flex-col items-center my-10">
                <div id="icon" className="h-16 w-16 mb-10 bg-first rounded-full flex items-center justify-center">
                    <img className="h-4/6" src={image} />
                </div>
                <p className="font-bold uppercase text-center mb-3">{title}</p>
                <p className=" text-center">{text}</p>
            </div>)
    }


    return (
        <div className="w-full flex justify-center">
            <div className="w-3/5 mt-20  text-gray-700">
                <div id="firtPart" className="">
                    <p className="font-bold text-center text-2xl ">Cabinet de Avocat Ursărescu Gabriela Cristina</p>
                    <p className="text-center mt-4">acordă asistență și reprezentare juridică în domenii de drept comercial, înființări societăți, drept civil, dreptul familiei, dreptul muncii, proprietate intelectuală, procedura insolvenței, recuperări creanțe,
                        drept administrativ, asociații și fundații etc.
                    </p>
                    <p className="mt-4"><span className="font-bold">Cabinetul de Insolvență </span> oferă servicii în etapa de pre-insolvență, insolvență, reorganizare judiciară, faliment, lichidare voluntară la Registrul Comerțului.</p>
                </div>

                <div id="secondPart" className="">
                    <p className="font-bold text-lg text-center mt-10 uppercase">Domenii de practica – Cabinet de Avocat Bucuresti</p>
                    <hr className="my-5"></hr>
                    <div id="iconsGrid" className="w-full grid grid-cols-2 gap-x-16">
                        <Card image="public/parental-control_3092920.png" title={"Dreptul Familiei – Cabinet de avocat"} text={"Referitor la acțiunile întemeiate pe relațiile de familie, asigurăm asistarea și reprezentarea în cadrul procedurilor de Divorț (divorț notar, divorț instanță) indiferent dacă sunt divorțuri întemeiate pe culpa comună a soților cât și culpa exclusivă a unuia dintre soți …"} />
                        <Card image="public\judge_1705255.png" title={"Drept Civil – Cabinet de avocat"} text={"Recuperări creanțe– în domeniul recuperărilor de creanțe oferim asistență atât în etapa pre litigioasă – recuperare creanțe pe cale amiabilă prin redactarea și transmiterea  somației de plată întemeiată pe dispozițiile articolului 1015 din Codul de Procedură Civilă…"} />
                        <Card image="public\construction_8434403.png" title={"Drept Societar – Cabinet de avocat"} text={"Consultanta, asistare și reprezentare în orice fel de operațiuni în fața Oficiului Registrului Comertului: – înfiintare societate, extindere / modificare obiect de activitate, majorare capital social,  redactare acte constitutive și acte adiționale …"} />
                        <Card image="public\chart_3832835.png" title={"Insolventa – Faliment – Cabinet de avocat"} text={"Oferim asistare și reprezentare în cazul procedurii de insolvență în calitate de avocat având o vastă experiență  în reprezentarea creditorilor, debitorului precum și a administratorului special. Redactarea documentelor necesare depunerii cererii …"} />
                        <Card image="public\book-with-marker_43139.png" title={"Drept Administrativ – Cabinet de avocat"} text={"Echipa noastră acordă asistență și reprezentare juridică cu privire la : Plângeri formulate împotriva organelor emitente ale actului administrativ ( instituții ale statului). Plângere contravențională formulată împotriva procesului verbal …"} />
                        <Card image="public\user_1077114.png" title={"Dreptul Muncii – Cabinet de avocat"} text={"Acordăm asistare și reprezentare juridică cu privire la: redactarea și negocierea clauzelor contractelor individuale de muncă, redactare regulamente de ordine interioară, concedieri, reprezentarea în fața comisiei de disciplină …"} />
                        <Card image="public/parental-control_3092920.png" title={"Proprietate Intelectuala – Cabinet de avocat"} text={"Asistare și reprezentare juridică în litigiile privind dreptul de proprietare intelectuală precum și consilierea si asistarea cu privire la înregistrarea mărcii la OSIM, opoziție marcă …"} />
                        <Card image="public/parental-control_3092920.png" title={"Asociatii si Fundatii – Cabinet de avocat"} text={"Rezervarea de denumire Ministerul de Justiție, redactare act constitutive și statut, modificare statut și act constitutiv astfel cum este prevăzut de O.U.G. 26/2000 …"} />
                    </div>
                </div>
            </div>
        </div>
    )
}