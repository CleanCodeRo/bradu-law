import Dropdown from "../Reusables/Dropdown";

export default function Header() {
  return (
    <div
      id="Header"
      className="w-full h-fit  bg-white flex items-center flex-col justify-center  "
    >

      <div className="w-full flex justify-center bg-first h-14 ">
        <div id="nameAndPhoneNumber" className="flex justify-between w-3/5 font-normal font-['Inter'] ">
          <div id="lawyerName" className="flex items-center h-full">
            <img className="h-6 w-6 mx-1" src="images/book-with-marker_43139.png" />
            <p>CABINET AVOCAT SI INSOLVENTA URSARESCU</p>
          </div>

          <div id="lawyerContact" className="flex h-full items-center">
            <i className="fa-solid fa-phone mx-1"></i>
            <p>CONTACT RAPID : <span className="text-red-300 font-bold">0743 378 380</span></p>
          </div>
        </div>
      </div>

      <div id="row1Header" className="w-3/5 flex items-center justify-start">
        <img
          id="logo"
          className="w-[260px] h-20"
          src="https://via.placeholder.com/260x86"
        />
        <div id="buttonsContainer" className="flex-grow flex justify-end text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">

              Despre noi

            </div>
          </div>
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">

              Servicii

            </div>
          </div>
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">

              Insolventa/Faliment

            </div>
          </div>
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">

              Licitatii

            </div>
          </div>
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">

              Articole

            </div>
          </div>
          <div className="flex-auto">
            <div className="h-20 pl-5 pr-4 border-l border-r border-zinc-100 flex items-center">

              Contact

            </div>
          </div>
        </div>
      </div>

      <div id="row2Header" className="w-3/5 flex flex-row justify-start">
        <Dropdown/>
        <input
          id="searchBar"
          className="w-[880px] border-2 border-first p-1"
          placeholder="Search a keyword..."
        ></input>
      </div>
    </div>
  );
}
