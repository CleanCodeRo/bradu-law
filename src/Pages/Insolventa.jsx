import IconDetailCard from "../Reusables/IconDetailCard";

export default function Insolventa() {

    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <img
                    src="headerImages/markus-winkler-EX9QVVFtQxw-unsplash.jpg"
                    className=" sm:h-[25rem] w-full object-cover rounded-b-lg"
                    draggable="false"
                />

                <div id="otherDetails" className="w-full">
                    <div id="title" className="w-full flex justify-center items-center my-12 relative">
                        <div className="bg-gray-300 h-[2px] w-full"></div>
                        <p className="text-center bg-white px-2 font-bold  sm:text-lg uppercase absolute">CABINET DE
                            AVOCAT - DREPTUL INSOLVENTEI</p>

                    </div>

                    <div id="iconsDetails" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10">
                        <IconDetailCard image="images/money-flow.png" title={"Insolventa -Cabinet de avocat"}
                                        text={"Lansarea și gestionarea procedurilor de insolvență "}/>
                        <IconDetailCard image="images/registre.png" title={"Faliment – Cabinet de avocat"}
                                        text={"Crearea şi implementarea, prin soluţii personalizate, a unor planuri de redresare pentru firmele aflate în dificultate financiară."}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
