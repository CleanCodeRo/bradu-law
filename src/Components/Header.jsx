import { useNavigate } from "react-router-dom";
import Dropdown from "../Reusables/Dropdown";
import { LeftDrawer } from "./LeftDrawer";



export default function Header() {

  const navigate = useNavigate()


  const HeaderButton = ({ text, navigate }) => {
    return (

      <a href={navigate} className="  pl-5 pr-4 py-4 h-[84px]  border-l border-zinc-100 flex items-center hover:text-[#c01707]">
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

        <div id="nameAndPhoneNumber" className="flex items-center sm:justify-between  flex-col xl:flex-row  w-full font-normal font-['Inter'] py-3 px1080:py-2.5 ">
          <div id="lawyerName" className="flex items-center h-full ml-0 sm:ml-10 ">
            <img className="h-6 w-6 mx-1" src="images/book-with-marker_43139.png" />
            <p className="uppercase">Cabinet Individual de Insolventa Bradu Nicoleta-Dorina</p>
          </div>

          <div id="lawyerContact" className="hidden px1080:flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 ">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
          </div>
        </div>
      </div>

      <hr></hr>


      {/* //THIS IS A SMALL HEADER */}
      <div id="SMALL HEADER" className=" w-full bg-first  flex flex-col md:flex-row px1080:hidden items-center justify-between py-3">
        <div className="flex items-center">
        <LeftDrawer specialClass=" mx-1 w-5 h-5 sm:mx-3 sm:w-7 sm:h-7" />
        <img
          id="logo"
          className="w-[260px] h-20 rounded-lg"
          src="images/wooden-judges-gavel-table-courtroom-enforcement-office.jpg"
          onClick={() => navigate("/")}
        />
        </div>

      
          <div id="lawyerContact" className="flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 font-normal font-['Inter']">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
          </div>
        


      </div>

      <div id="row1Header" className="w-full hidden px1080:flex  flex-col ">
        <div className="flex justify-center h-[88px]">
          <img
            id="logo"
            className="w-[260px] h-21 mt-0.5"
            src="images/wooden-judges-gavel-table-courtroom-enforcement-office.jpg"
            onClick={() => navigate("/")}
          />
          <div id="buttonsContainer" className="flex text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight cursor-pointer ">
            <HeaderButton text="DESPRE NOI" navigate="/aboutUs" />
            <HeaderButton text="ECHIPA" />
            <HeaderButton text="SERVICII" />
            <HeaderButton text="INSOLVENTA/FALIMENT" />
            <HeaderButton text="LICITATII" />
            <HeaderButton text="ARTICOLE" />
            <HeaderButton text="CONTACT" />
          </div>
        </div>

        <div id="row2Header" class="w-full flex justify-center items-center">
  <div id="row2Wrapper" class="w-[1140px] bg-first flex items-center">
    <Dropdown />
    <input
      id="searchBar"
      class="w-[845px] h-[35px] border p-3 outline-0"
      placeholder="Search a keyword..."
    />
  </div>
</div>


      </div>

    </div>
  );
}
