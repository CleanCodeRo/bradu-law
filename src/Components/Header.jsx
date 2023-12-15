import { useNavigate } from "react-router-dom";
import Dropdown from "../Reusables/Dropdown";
import { LeftDrawer } from "./LeftDrawer";



export default function Header() {

  const navigate = useNavigate()


  const HeaderButton = ({ text, navigate }) => {
    return (

      <a href={navigate} className="  pl-5 pr-4 py-4 border-l border-zinc-100 flex items-center">
        {text}
      </a>

    )
  }

  return (
    <div
      id="Header"
      className="w-full h-fit  bg-white flex items-center flex-col justify-center  "
    >

      <div className="w-full flex justify-center bg-first text-sm sm:text-base">

        <div id="nameAndPhoneNumber" className="flex items-center sm:justify-between  flex-col xl:flex-row  w-full font-normal font-['Inter'] py-5 ">
          <div id="lawyerName" className="flex items-center h-full ml-0 sm:ml-10 ">
            <img className="h-6 w-6 mx-1" src="images/book-with-marker_43139.png" />
            <p className="uppercase">Cabinet de Avocat-Cabinet Individual de Insolventa Bradu Nicoleta-Dorina</p>
          </div>

          <div id="lawyerContact" className="hidden px1080:flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 ">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
          </div>
        </div>
      </div>


      {/* //THIS IS A SMALL HEADER */}
      <div id="SMALL HEADER" className=" w-full bg-first flex px1080:hidden items-center justify-between py-3">
        <div className="flex items-center">
        <LeftDrawer specialClass="mx-3" />
        <img
          id="logo"
          className="w-[260px] h-20 rounded-lg"
          src="https://via.placeholder.com/260x86"
          onClick={() => navigate("/")}
        />
        </div>

      
          <div id="lawyerContact" className="flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 font-normal font-['Inter']">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
          </div>
        


      </div>

      <div id="row1Header" className="w-full hidden px1080:flex  flex-col ">
        <div className="flex justify-center">
          <img
            id="logo"
            className="w-[260px] h-20"
            src="https://via.placeholder.com/260x86"
            onClick={() => navigate("/")}
          />
          <div id="buttonsContainer" className="flex text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight cursor-pointer">
            <HeaderButton text="DESPRE NOI" navigate="/aboutUs" />
            <HeaderButton text="ECHIPA" />
            <HeaderButton text="SERVICII" />
            <HeaderButton text="INSOLVENTA/FALIMENT" />
            <HeaderButton text="LICITATII" />
            <HeaderButton text="ARTICOLE" />
            <HeaderButton text="CONTACT" />
          </div>
        </div>

        <div id="row2Header" className="w-full flex justify-center ">
          <Dropdown />
          <input
            id="searchBar"
            className="w-[880px] border-2 border-first p-1"
            placeholder="Search a keyword..."
          ></input>
        </div>

      </div>

    </div>
  );
}
