import React from 'react'

export default function GDPR() {

    const Introduction = () => {
        return <div>intro</div>
    }

    const Point1 = () => {
        return <div>point1</div>
    }

    const Point2 = () => {
        return <div>point1</div>
    }

    const Point3 = () => {
        return <div className='my-6'>
            <p id="title" className='font-bold underline my-2 text-base'>3. Temeiul Prelucrării Datelor dumneavoastră cu caracter personal</p>
            <p className='my-2'>In general, prelucrarea datelor cu caracter personal este necesara in vederea desfasurarii activitatii specifice scopurilor prelucrarii.</p>
            <p className='my-2'>Vi se solicita sa furnizati datele dumneavoastra cu caracter personal, doar in limita strict necesara  in mod obligatoriu, cu exceptia situatiilor limitate in care va vom cere si acordul pentru  anumite informatii facultative. Daca nu ne oferiti respectivele date minimale cerute a fi furnizate, procesul poate fi intarziat sau chiar imposibil.</p>
            <p className='my-2'>Pentru a putea prelucra datele dumneavoastra cu caracter personal, cabinetul  se bazeaza pe urmatoarele <strong>temeiuri juridice:</strong></p>

            <div id="list">
                <p className=' my-2 '>•        <strong>Consimțământul</strong> - <span className='underline'>Preambul (32), (42), (43); Art. 6 alin (1) lit. (a) </span> Prelucrarea este permisă dacă persoana vizată și-a dat consimțământul pentru prelucrare;</p>
                <p className=' my-2 '>•        <strong>Încheierea sau executarea unui contract</strong> - <span className='underline'>Preambul (44); Art. 6 alin. (1) lit. (b)</span> prelucrarea este necesară pentru executarea unui contract la care persoana vizată este parte sau pentru a face demersuri la cererea persoanei vizate înainte de încheierea unui contract;</p>
                <p className=' my-2 '>•        <strong>Îndeplinirea unei obligații legale </strong>- <span className='underline'>Preambul (45); Art.6(1) lit. (c);Art. 6 alin. (3)</span> prelucrarea este necesară în vederea îndeplinirii unei obligații legale care îi revine operatorului;</p>
                <p className=' my-2 '>•        <strong>Interesele vitale</strong> - <span className='underline'>Preambul (46); Art.6(1) lit. (d) </span> prelucrarea este necesara pentru a proteja interesele vitale ale persoanei vitale ale persoane vizate sau ale altei persoane fizice,</p>
                <p className=' my-2 '>•        <strong>Interesul public </strong>- <span className='underline'>Preambul (47), (48); Art.6(1) lit. (f)</span> prelucrarea este necesară în scopul intereselor legitime urmărite de operator sau de o parte terță, cu excepția cazului în care prevalează interesele sau drepturile și libertățile fundamentale ale persoanei vizate, care necesită protejarea datelor cu caracter personal, în special atunci când persoana vizată este un copil</p>
                <p className=' my-2 '>•        <strong>Prelucrarea de categorii speciale de date cu caracter personal</strong> - <span className='underline'>Preambul (51)-(56); Art.9  </span></p>
                <div className='ml-9'>
                    <p className=' my-2 '>➢        persoana vizată și-a dat consimțământul explicit; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară în scopul îndeplinirii obligațiilor și al exercitării unor drepturi specifice ale operatorului sau ale persoanei vizate în domeniul ocupării forței de muncă și al securității sociale și protecției sociale; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară pentru protejarea intereselor vitale ale persoanei vizate sau ale unei alte persoane fizice, atunci când persoana vizată se află în incapacitate fizică sau juridică de a-și da consimțământul; </p>
                    <p className=' my-2 '>➢        prelucrarea este efectuată în cadrul activităților lor legitime și cu garanții adecvate de către o fundație, o asociație sau orice alt organism fără scop lucrativ și cu specific politic, filozofic, religios sau sindical, cu condiția ca prelucrarea să se refere numai la membrii sau la foștii membri ai organismului respectiv sau la persoane cu care acesta are contacte permanente în legătură cu scopurile sale și ca datele cu caracter personal să nu fie comunicate terților fără consimțământul persoanelor vizate; </p>
                    <p className=' my-2 '>➢        prelucrarea se referă la date cu caracter personal care sunt făcute publice în mod manifest de către persoana vizată; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară pentru constatarea, exercitarea sau apărarea unui drept în instanță sau ori de câte ori instanțele acționează în exercițiul funcției lor judiciare; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară din motive de interes public major, în baza dreptului Uniunii sau a dreptului intern, care este proporțional cu obiectivul urmărit, respectă esența dreptului la protecția datelor și prevede măsuri corespunzătoare și specifice pentru protejarea drepturilor fundamentale și a intereselor persoanei vizate; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară în scopuri legate de medicina preventivă sau a muncii, de evaluarea capacității de muncă a angajatului, de stabilirea unui diagnostic medical, de furnizarea de asistență medicală sau socială sau a unui tratament medical sau de gestionarea sistemelor și serviciilor de sănătate sau de asistență socială, în temeiul dreptului Uniunii sau al dreptului intern sau în temeiul unui contract încheiat cu un cadru medical și sub rezerva respectării condițiilor și garanțiilor prevăzute la alineatul (3); </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară din motive de interes public în domeniul sănătății publice, cum ar fi protecția împotriva amenințărilor transfrontaliere grave la adresa sănătății sau asigurarea de standarde ridicate de calitate și siguranță a asistenței medicale și a medicamentelor sau a dispozitivelor medicale, în temeiul dreptului Uniunii sau al dreptului intern, care prevede măsuri adecvate și specifice pentru protejarea drepturilor și libertăților persoanei vizate, în special a secretului profesional; </p>
                    <p className=' my-2 '>➢        prelucrarea este necesară în scopuri de arhivare în interes public, în scopuri de cercetare științifică sau istorică ori în scopuri statistice, în conformitate cu articolul 89 alineatul (1), în baza dreptului Uniunii sau a dreptului intern, care este proporțional cu obiectivul urmărit, respectă esența dreptului la protecția datelor și prevede măsuri corespunzătoare și specifice pentru protejarea drepturilor fundamentale și a intereselor persoanei vizate. </p>
                </div>

                <p className=' my-2 '>•        <strong>Prelucrarea în alt scop </strong> - <span className='underline'>Art. 6 alin. (4)  </span> În cazul în care prelucrarea în alt scop decât cel pentru care datele cu caracter personal au fost colectate nu se bazează pe consimțământul persoanei vizate sau pe dreptul Uniunii sau dreptul intern, care constituie o măsură necesară și proporțională într-o societate democratică pentru a proteja obiectivele menționate la articolul 23 alineatul (1), operatorul, pentru a stabili dacă prelucrarea în alt scop este compatibilă cu scopul pentru care datele cu caracter personal au fost colectate inițial, ia în considerare, printre altele:</p>
                <div className='ml-9'>
                    <p className=' my-2 '>➢        orice legătură dintre scopurile în care datele cu caracter personal au fost colectate și scopurile prelucrării ulterioare preconizate; </p>
                    <p className=' my-2 '>➢        contextul în care datele cu caracter personal au fost colectate, în special în ceea ce privește relația dintre persoanele vizate și operator; </p>
                    <p className=' my-2 '>➢        natura datelor cu caracter personal, în special în cazul prelucrării unor categorii speciale de date cu caracter personal, în conformitate cu articolul 9, sau în cazul în care sunt prelucrate date cu caracter personal referitoare la condamnări penale și infracțiuni, în conformitate cu articolul 10; </p>
                    <p className=' my-2 '>➢        posibilele consecințe asupra persoanelor vizate ale prelucrării ulterioare preconizate; </p>
                    <p className=' my-2 '>➢        (e)existența unor garanții adecvate, care pot include criptarea sau pseudonimizarea. </p>
                </div>
            </div>

            <p className='mt-9 mb-2'>GARANŢII, RESPONSABILITĂŢI.</p>
            <p>Informaţiile de pe acest website sunt oferite ca atare şi fără nici un fel de garanţie, expresă sau implicită, inclusiv (dar fără limitare la) orice garanţii mercantile implicite, potrivire pentru orice scop, sau neîncalcarea drepturilor unor terţe părţi. În timp ce informaţiile oferite sunt considerate corecte, pot include erori. <strong> Cabinet de Avocat-Individual de Insolventa Bradu Nicoleta-Dorina </strong> nu va fi responsabilă în niciun fel faţă de nicio persoană pentru daune speciale sau indirecte în legatură cu acest material, decât dacă acestea sunt cauzate de neglijenţa sau inducere în eroare în mod intenţionat. Cabinet de Avocat-Individual de Insolventa Bradu Nicoleta-Dorina nu este răspunzatoare pentru conţinutul website-urilor ce sunt administrate de terţe părţi şi, în consecinţa, neagă orice răspundere pentru orice link care face legătură între acest website şi un altul.</p>
        </div>
    }

    const Point4 = () => {
        return <div className='my-6'>
            <p id="title" className='font-bold underline my-2 text-base'>4. Transferuri de date, destinatari si temeiul legal al acestor transferuri</p>
            <p className='my-2'>Transferam datele dumneavoastra tertilor doar dupa ce dumneavoastra v-ati dat in prealabil acordul printr-un click pe un link intr-un email sau doar dupa ce dumneavoastra ati accesat o pagina din site-ul Cabinet de Avocat-Individual de Insolventa Bradu Nicoleta-Dorina.</p>
            <p className='my-2'>Datele dvs cu character personal pot fi transmise catre:</p>
            <p className='my-2'>Avocați pledanți, alți specialiști din domeniul juridic, inclusiv mediatori, notari publici, executori judecătorești, consultanți sau experți implicați în cauza dumneavoastră, în cazul în care transmiterea datelor este impusă prin obiectul lucrărilor aferent cauzei dumneavoastră;</p>
            <p className='my-2'>Instanțe de judecată, autorități de aplicare a legii, autorități de reglementare sau avocați sau alte persoane dacă se dovedește necesar în mod just în vederea constatării, exercitării sau apărării unui drept în justiție sau în scopul unui proces de soluționare alternativă;</p>
            <p className='my-2'>Societăți care prestează servicii pentru controale împotriva spălării banilor, reducerea riscului de credit și în alte scopuri de prevenire a fraudelor și infracțiunilor și societăți care prestează servicii similare, inclusiv instituții financiare, birouri de credit și autorități de reglementare cu care sunt partajate datele respective;</p>
            <p className='my-2'>Orice terț căruia îi cesionăm sau novăm orice drepturi sau obligații, în condițiile legii;</p>
        </div>
    }

    const Point5 = () => {
        return <div className='my-6'>
            <p id="title" className='font-bold underline my-2 text-base'>5. Perioada de retentie</p>
            <p className='my-2'>Datele cu caracter personal prelucrate in scopurile mentionate in prezenta politica de confidentialitate vor fi pastrate doar cat este necesar, pe durata existentei contractului si ulterior, in timpul unei perioade de tranzitie (de exemplu, pentru primirea unui raspuns la solicitarea dumneavoastra) sau pentru oricare alta perioada mai indelungata in care cabinetul are obligatia legala de a arhiva datele cu caracter personal sau de a asigura garantia pentru produsele/serviciile prestate catre dvs.</p>
            <p className='my-2'>Daca se initiaza o actiune judiciara, datele cu caracter personal pot fi pastrate pana la finalul acestei actiuni, inclusiv eventualele perioade de recurs, iar apoi vor fi sterse sau arhivate, conform prevederilor legislatiei aplicabile.</p>
            <p className='my-2'>In principiu, va vom pastra datele cu caracter personal pe durata solicitata sau permisa de legislatia aplicabila. Ulterior, vom elimina/sterge datele dumneavoastra cu caracter personal din sistemele si evidentele noastre si/sau vom lua masuri pentru a le anonimiza, astfel incat sa nu mai puteti fi identificat in baza acestora.</p>
        </div>
    }

    const Point6 = () => {
        return <div className='my-6'>
            <p id="title" className='font-bold underline my-2 text-base'>6. Drepturile dumneavoastra</p>
            <p className='my-2'>Daca v-ati declarat consimtamantul cu privire la anumite activitati de prelucrare, puteti retrage acest consimtamant in orice moment cu efecte viitoare.</p>
            <p className='my-2'>O astfel de retragere nu va afecta legalitatea prelucrarii anterior retragerii consimtamantului.</p>
        </div>
    }

    const Point7 = () => {
        return <div className='my-6'>
            <p id="title" className='font-bold underline my-2 text-base'>7. Cum prelucram datele personale ale copiilor?</p>
            <p className='my-2'>Serviciile oferite de cabinet nu sunt destinate minorilor fara acordul tutorelui sau.</p>
        </div>

    }


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="headerImages/ben-rosett-WdJkXFQ4VHY-unsplash.jpg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-12 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE AVOCAT - CONFIDENTIALITATE / GDPR</p>
                    </div>

                    <div id="description" className="text-sm ">
                        <Introduction />
                        <Point1 />
                        <Point2 />
                        <Point3 />
                        <Point4 />
                        <Point5 />
                        <Point6 />
                        <Point7 />
                    </div>

                </div>
            </div>
        </div>
    )
}
