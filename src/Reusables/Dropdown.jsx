import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let options = ["DREPT CIVIL","DREPTUL FAMILIEI","DREPT SOCIETAR","GDPR","INSOLVENTA / FALIMENT","DREPT ADMINISTRATIV","DREPTUL MUNCII","PROPRIETATE INTELECTUALA","ASOCIATII SI FUNDATII"]
let icons = ["images/judge_1705255.png", "images/parental-control_3092920.png", "images/construction_8434403.png", "images/shield_3177389.png", "images/sound-bar_6612869.png", "images/open-book-lectern_78480.png", "", "", ""]
export default function Dropdown() {



  return (
    <Menu as="div" className="relative inline-block text-left font-['Inter'] font-bold">
      <div className="flex flex-row relative">
        <Menu.Button className="relative z-10 inline-flex w-[260px] h-[41px] text-sm text-gray_text p-3 bg-first text-start justify-start">
          DOMENII DE PRACTICA
        </Menu.Button>

        <ChevronDownIcon
          className="absolute right-3 h-4 w-4 border border-gray-400 rounded-sm text-gray-500 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-0 w-[260px] origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

          {options.map((option, index) => 
            <Menu.Item key={index}>
            {({ active }) => (
              
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100 text-red-900" : "text-gray-700",
                  " px-4 py-3 text-[11.4px] font-extrabold border-b flex items-center"
                )}
              >
                <img className="w-[22px] h-[22px]" src={icons[index]}/>
               <p className="ml-3">{option}</p>
              </a>
            )}
          </Menu.Item>
          )}
          

        </Menu.Items>
      </Transition>
    </Menu>
  );
}
