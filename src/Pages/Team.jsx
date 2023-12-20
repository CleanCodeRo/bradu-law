import React from "react";

export default function Team() {

    const MemberCard = ({ name, image, roles, descriptions, email }) => {

        return (
            <div className="flex flex-col lg:flex-row w-full text-sm mb-8">
                <img draggable="false" className="w-auto h-auto px400:h-[450px] px400:w-[300px] mb-3 lg:mr-16" src={image} />

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
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div className="my-8 flex items-center justify-between  relative">
                    <p className="font-bold text-sm  absolute bg-white py-6 pr-4">ECHIPA CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA</p>
                    <div className="bg-gray-300 h-[1px] w-full"></div>
                </div>


                <MemberCard
                    name="Gabriela Ursarescu"
                    image="teamImages/member3.png"
                    roles={["Managing partner", "Avocat si practician in insolventa"]}
                    descriptions={["I am a dedicated and results-oriented attorney with a passion for the law and a commitment to achieving justice for my clients. With a strong background in [specific area of law, e.g.",
                        "My legal practice is characterized by meticulous attention to detail, strategic thinking, and a client-centric approach. I understand that each legal matter is unique, and I work tirelessly to tailor my strategies to meet the individual needs and objectives of my clients.",
                        "I am committed to staying abreast of the latest legal developments and continuously expanding my expertise to provide cutting-edge solutions. My dedication to professional development is evidenced by my active involvement in [bar associations, legal organizations, or continuing education programs]."
                    ]}
                    email="gogguAlina@gmail.com" />

                <MemberCard
                    name="Catalin Mihai Lupascu"
                    image="teamImages/member2.png"
                    roles={["Managing partner"]}
                    descriptions={["I am a dedicated and results-oriented attorney with a passion for the law and a commitment to achieving justice for my clients. With a strong background in [specific area of law, e.g.",
                        "My legal practice is characterized by meticulous attention to detail, strategic thinking, and a client-centric approach. I understand that each legal matter is unique, and I work tirelessly to tailor my strategies to meet the individual needs and objectives of my clients.",
                    ]}
                    email="catalin.lupascu@gmail.com" />

                <MemberCard
                    name="Razvan Maru"
                    image="teamImages/member1.png"
                    roles={["Managing partner", "Avocat si practician in insolventa"]}
                    descriptions={["I am a dedicated and results-oriented attorney with a passion for the law and a commitment to achieving justice for my clients. With a strong background in [specific area of law, e.g.",
                        "My legal practice is characterized by meticulous attention to detail, strategic thinking, and a client-centric approach. I understand that each legal matter is unique, and I work tirelessly to tailor my strategies to meet the individual needs and objectives of my clients.",
                        "I am committed to staying abreast of the latest legal developments and continuously expanding my expertise to provide cutting-edge solutions. My dedication to professional development is evidenced by my active involvement in [bar associations, legal organizations, or continuing education programs].",
                        "My legal practice is characterized by meticulous attention to detail, strategic thinking"
                    ]}
                    email="razvan.maru@gmail.com" />

            </div>
        </div>
    )
}