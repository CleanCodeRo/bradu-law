export default function Team() {

    const MemberCard = ({name, image, roles, descriptions, email}) => {

        return (
            <div className="flex flex-col lg:flex-row w-full text-sm mb-8">
                <img draggable="false" className="w-auto h-auto px400:w-[350px] px400:h-[450px] mb-3 lg:mr-16"
                     src={image}/>

                <div className="flex flex-col px-3 w-full">
                    <p className="font-bold">{name}</p>

                    {roles?.map((role, index) => <p key={index}>{role}</p>)}

                    <div className="h-[1px] w-1/2 bg-gray-700 mt-4 mb-8"></div>

                    {descriptions?.map((desc, index) => <p key={index} className="py-3">{desc}</p>)}

                    <div><span className="font-bold">Contact: </span>{email}</div>
                </div>
            </div>
        )
    }


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 font-normal font-['Inter']">
                <img
                    src="headerImages/tingey-injury-law-firm-9SKhDFnw4c4-unsplash.jpg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div className="my-9 flex items-center justify-between  relative">
                    <p className="font-bold text-sm  absolute bg-white py-6 pr-4">ECHIPA</p>
                    <div className="bg-gray-300 h-[1px] w-full"></div>
                </div>


                <MemberCard
                    name="Bradu Nicoleta-Dorina"
                    image="images/AvocatEchipa.jpeg"
                    descriptions={["Titularul cabinetului este dna. Avocat Bradu Nicoleta-Dorina, membra a Baroului Bucuresti cat si a Uniunii Nationale a Practicienilor in Insolventa-Filiala Bucuresti, avocat cu o experienta remarcabila in Dreptul Comercial.",
                        "Politica cabinetului este aceea de a asigura performanta, servicii de calitate, implicarea rapida si rezolvarea pertinenta a problemelor financiare, tehnice si juridice prin identificarea solutiilor optime pentru fiecare client in parte."
                    ]}
                    email="avocatnicoleta.bradu@gmail.com"/>
            </div>
        </div>
    )
}
