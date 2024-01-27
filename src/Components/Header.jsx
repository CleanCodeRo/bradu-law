import { useNavigate } from "react-router-dom";
import Dropdown from "../Reusables/Dropdown";
import { LeftDrawer } from "./LeftDrawer";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import React from "react";


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
          <a  className="  pl-5 pr-4 py-4 h-[84px]  border-l border-zinc-100 flex items-center hover:text-[#c01707]">
            <p>{text}</p>
            <i className="fa-solid fa-angle-down first-letter text-[10px] mx-[4px] "></i>
          </a>
        </PopoverHandler>
        <PopoverContent className="rounded-sm font-['Inter'] font-bold">
          <p className="text-gray_text text-sm py-1.5 text-center">{title}</p>
          {dropdownTexts?.map((item, index) =>
            <div key={index} className="hover:text-[#c01707]  text-[11px] select-none p-[2px]">
              <a className="w-full h-full" href={dropdownLinks[index]}>{item}</a>
            </div>
          )}
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <div
      id="Header"
      className="w-full h-fit  bg-white flex items-center flex-col justify-center  "
    >

      <div className="w-full flex justify-center text-gray_text bg-first text-xs">
        <div id="nameAndPhoneNumber" className="flex items-center sm:justify-between  flex-col xl:flex-row  w-full font-normal font-['Inter']  py-3 px1080:py-2.5 ">
          <div id="lawyerName" className="flex items-center h-full ml-0 sm:ml-10 font-bold ">
            <img draggable="false" className="h-5 w-5 mx-1" src="images/book-with-marker_43139.png" />
            <p className="uppercase ">Cabinet Individual de Insolventa Bradu Nicoleta-Dorina</p>
          </div>

          <div id="lawyerContact" className="hidden px1080:flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0 font-bold ">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
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
            src="images/Untitled.png"
            onClick={() => navigate("/")}
            draggable="false"
          />
        </div>

        <div id="lawyerContact" className="flex h-full items-center mt-2 mx-0 sm:mx-10 xl:mt-0  font-bold font-['Inter']">
          <i className="fa-solid fa-phone mx-1"></i>
          <p className="text-sm">CONTACT RAPID : <span className="text-red-300">0743 378 380</span></p>
        </div>
      </div>

      <div id="row1Header" className="w-full hidden px1080:flex  flex-col ">
        <div className="flex justify-center h-[88px]">
          <img
            id="logo"
            className="w-[260px] h-21 mt-0.5"
            src="images/Untitled.png"
            onClick={() => navigate("/")}
          />
          <div id="buttonsContainer" className="flex text-neutral-500 text-sm text-gray_text font-normal font-['Inter'] uppercase leading-tight cursor-pointer ">
            <HeaderButton text="DESPRE NOI" navigate="/aboutUs" />
            <HeaderButton text="ECHIPA" navigate="/team" />
            <HeaderDropdown
              text="SERVICII"
              title="DOMENII DE PRACTICA"
              dropdownTexts={["DREPT CIVIL", "DREPTUL FAMILIEI", "DREPT SOCIETAR", "GDPR", "INSOLVENTA / FALIMENT", "DREPT ADMINISTRATIV", "DREPTUL MUNCII", "PROPRIETATE INTELECTUALA", "ASOCIATII SI FUNDATII"]}
              dropdownLinks={["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]}
            />
            <HeaderDropdown
              text="INSOLVENTA / FALIMENT"
              title="DOSARE INSOLVENTA"
              dropdownTexts={["PRODUCERI IN CURS", "PRODUCERI INCHEIATE", "PRODUCERI ADMINISTRATOR SCHIMBAT"]}
              dropdownLinks={["#", "#", "#"]}
            />
            <HeaderButton text="LICITATII" navigate={"/auctions"}/>
            <HeaderButton text="ARTICOLE" navigate={"/articles"}/>
            <HeaderButton text="CONTACT" navigate="/contact"/>
          </div>
        </div>


        <div id="row2Header" className="w-full flex justify-center items-center">
          <div id="row2Wrapper" className="w-[1140px] bg-first flex items-center">
            <Dropdown />
            <input
              id="searchBar"
              className="w-[845px] h-[35px] border p-3 outline-0 text-gray_text placeholder-gray_text text-[12px] font-['inter'] font-bold uppercase"
              placeholder="ENTER KEYWORDS HERE ..."
            />
            <button className=" text-center w-6 h-6 ml-1 hover:bg-gray-300 rounded-sm">
              <i className="fa-solid fa-magnifying-glass  text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
