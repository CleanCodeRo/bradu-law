
import React from "react";
import IconDetailCard from "../../Reusables/IconDetailCard";

export default function CabinetDetails() {

    return (
        <div className="w-full flex justify-center font-normal font-['Inter']">
            <div className="w-11/12 md:w-5/6 xl:w-3/5  my-20  text-gray_text font-georgia">
                <div id="firtPart" className="">
                    <p className="font-bold  text-center text-xl sm:text-2xl uppercase">Cabinet Individual de Insolventa Bradu Nicoleta-Dorina</p>
                    <p className="text-center mt-4">acordă asistență și reprezentare juridică în domenii de drept comercial, înființări societăți, drept civil, dreptul familiei, dreptul muncii, proprietate intelectuală, procedura insolvenței, recuperări creanțe,
                        drept administrativ, asociații și fundații etc.
                    </p>
                    <p className="mt-4 text-center"><span className="font-bold">Cabinetul de Insolvență</span> oferă servicii în etapa de pre-insolvență, insolvență, reorganizare judiciară, faliment, lichidare voluntară la Registrul Comerțului.</p>
                </div>

                <div id="secondPart" className="">
                    <p className="font-bold text-lg text-center mt-10 uppercase">Domenii de practica – Cabinet de Avocat Bucuresti</p>
                    <hr className="my-5"></hr>
                    <div id="iconsGrid" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16">
                        <IconDetailCard image="images/parental-control_3092920.png" title={"Dreptul Familiei – Cabinet de avocat"} text={"Referitor la acțiunile întemeiate pe relațiile de familie, asigurăm asistarea și reprezentarea în cadrul procedurilor de Divorț (divorț notar, divorț instanță) indiferent dacă sunt divorțuri întemeiate pe culpa comună a soților cât și culpa exclusivă a unuia dintre soți …"} />
                        <IconDetailCard image="images/judge_1705255.png" title={"Drept Civil – Cabinet de avocat"} text={"Recuperări creanțe– în domeniul recuperărilor de creanțe oferim asistență atât în etapa pre litigioasă – recuperare creanțe pe cale amiabilă prin redactarea și transmiterea  somației de plată întemeiată pe dispozițiile articolului 1015 din Codul de Procedură Civilă…"} />
                        <IconDetailCard image="images/construction_8434403.png" title={"Drept Societar – Cabinet de avocat"} text={"Consultanta, asistare și reprezentare în orice fel de operațiuni în fața Oficiului Registrului Comertului: – înfiintare societate, extindere / modificare obiect de activitate, majorare capital social,  redactare acte constitutive și acte adiționale …"} />
                        <IconDetailCard image="images/chart_3832835.png" title={"Insolventa – Faliment – Cabinet de avocat"} text={"Oferim asistare și reprezentare în cazul procedurii de insolvență în calitate de avocat având o vastă experiență  în reprezentarea creditorilor, debitorului precum și a administratorului special. Redactarea documentelor necesare depunerii cererii …"} />
                        <IconDetailCard image="images/book-with-marker_43139.png" title={"Drept Administrativ – Cabinet de avocat"} text={"Echipa noastră acordă asistență și reprezentare juridică cu privire la : Plângeri formulate împotriva organelor emitente ale actului administrativ ( instituții ale statului). Plângere contravențională formulată împotriva procesului verbal …"} />
                        <IconDetailCard image="images/user_1077114.png" title={"Dreptul Muncii – Cabinet de avocat"} text={"Acordăm asistare și reprezentare juridică cu privire la: redactarea și negocierea clauzelor contractelor individuale de muncă, redactare regulamente de ordine interioară, concedieri, reprezentarea în fața comisiei de disciplină …"} />
                        <IconDetailCard image="images/edit.png" title={"Proprietate Intelectuala – Cabinet de avocat"} text={"Asistare și reprezentare juridică în litigiile privind dreptul de proprietare intelectuală precum și consilierea si asistarea cu privire la înregistrarea mărcii la OSIM, opoziție marcă …"} />
                        <IconDetailCard image="images/document.png" title={"Asociatii si Fundatii – Cabinet de avocat"} text={"Rezervarea de denumire Ministerul de Justiție, redactare act constitutive și statut, modificare statut și act constitutiv astfel cum este prevăzut de O.U.G. 26/2000 …"} />
                    </div>
                </div>
            </div>
        </div>
    )
}