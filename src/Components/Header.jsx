import { useNavigate } from "react-router-dom";
import Dropdown from "../Reusables/Dropdown";
import { LeftDrawer } from "./LeftDrawer";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import React from "react";
import Search from "./HomeComponents/Search";


export default function Header() {
  const navigate = useNavigate()

  const HeaderButton = ({ text, navigate }) => {
    return (
      <a href={navigate} className="  pl-5 pr-4 py-4 h-[84px]  border-l border-zinc-100 flex items-center hover:text-[#c01707]">
        {text}
      </a>
    )
  }

  const HeaderDropdown = ({ text, dropdownTexts, dropdownLinks, title }) => {
    return (
      <Popover>
        <PopoverHandler>
          <a className="  pl-5 pr-4 py-4 h-[84px]  border-l border-zinc-100 flex items-center hover:text-[#c01707]">
            <p>{text}</p>
            <i className="fa-solid fa-angle-down first-letter text-[10px] mx-[4px] "></i>
          </a>
        </PopoverHandler>
        <PopoverContent className="rounded-sm font-['Inter'] font-bold">
          <p className="text-gray_text text-sm py-1.5 text-center">{title}</p>
          <div className="flex flex-col">
          {dropdownTexts?.map((item, index) =>
            <a key={index} href={dropdownLinks[index]} className="hover:text-[#c01707] w-full h-full text-[11px] select-none p-[2px]">
              {item}
            </a>
          )}
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <div
      id="Header"
      className="w-full h-fit  bg-white flex items-center flex-col justify-center relative "
    >

      <div className="w-full flex justify-center text-gray_text bg-first text-xs">
        <div id="nameAndPhoneNumber" className="flex items-center sm:justify-between  flex-col xl:flex-row  w-full font-normal font-['Inter']  py-3 px1080:py-2.5 ">
          <div id="lawyerName" className="flex items-center h-full ml-0 sm:ml-10 font-bold ">
            <img draggable="false" className="h-5 w-5 mx-1" src="images/book-with-marker_43139.png" />
            <p className="uppercase ">CABINET DE AVOCAT - CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA</p>
          </div>

          <div id="lawyerContact" className="hidden px1080:flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 font-bold ">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold cursor-pointer hover:text-[#c01707]">0726 212 737</span></p>
          </div>
        </div>
      </div>

      <hr></hr>


      {/* //THIS IS A SMALL HEADER */}
      <div id="SMALL HEADER" className=" w-full bg-first text-gray_text flex flex-col md:flex-row px1080:hidden items-center justify-between py-3">
        <div className="flex items-center ">
          <LeftDrawer specialClass=" mx-1 w-5 h-5 sm:mx-3 sm:w-7 sm:h-7" />
          <img
            id="logo"
            className="w-[260px] h-20 rounded-lg"
            src="images\NewLogo.png"
            onClick={() => navigate("/")}
            draggable="false"
          />
        </div>

        <a href="tel:+40726212737" id="lawyerContact" className="flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0  font-bold font-['Inter'] cursor-pointer">
          <i className="fa-solid fa-phone mx-1"></i>
          <p className="text-sm">CONTACT RAPID : <span className="text-red-300">0726 212 737</span></p>
        </a>
      </div>
      {/* //THIS IS A SMALL HEADER */}


      <div id="row1Header" className="w-full hidden px1080:flex  flex-col ">
        <div className="flex justify-center h-[88px]">
          <img
            id="logo"
            className="w-[260px] h-21 mt-0.5"
            src="images\NewLogo.png"
            draggable={false}
            onClick={() => navigate("/")}
          />
          <div id="buttonsContainer" className="flex text-neutral-500 text-sm text-gray_text font-normal font-['Inter'] uppercase leading-tight cursor-pointer ">
            <HeaderButton text="DESPRE NOI" navigate="/aboutUs" />
            <HeaderButton text="ECHIPA" navigate="/team" />
            <HeaderDropdown
              text="SERVICII"
              title="DOMENII DE PRACTICA"
              dropdownTexts={["DREPT COMERCIAL SI SOCIETAR", "RECUPERARI CREANTE", "DREPT INSOLVENTA", "DUE DILIGENCE", "CONSULTANTA JURIDICA", "GDPR"]}
              dropdownLinks={["/drept-comercial-si-societar", "/recuperari-creante", "/insolventa", "/dueDiligence", "/legalAdvice", "/gdpr"]}
            />
            {/* <HeaderDropdown
              text="INSOLVENTA / FALIMENT"
              title="DOSARE INSOLVENTA"
              dropdownTexts={["PRODUCERI IN CURS", "PRODUCERI INCHEIATE", "PRODUCERI ADMINISTRATOR SCHIMBAT"]}
              dropdownLinks={["#", "#", "#"]}
            /> */}
            <HeaderButton text="INSOLVENTA" navigate={"/insolvencyBankruptcy"} />
            <HeaderButton text="LICITATII" navigate={"/auctions"} />
            <HeaderButton text="ARTICOLE" navigate={"/articles"} />
            <HeaderButton text="CONTACT" navigate="/contact" />
          </div>
        </div>


        <div id="row2Header" className="w-full flex justify-center items-center">
          <div id="row2Wrapper" className="w-[1140px] bg-first flex items-center">
            <Dropdown />
            <Search/>
          </div>
        </div>
      </div>


      

    </div>
  );
}
