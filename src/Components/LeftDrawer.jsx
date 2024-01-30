import React from "react";
import Dropdown from "../Reusables/Dropdown";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Menu,
} from "@material-tailwind/react";




export function LeftDrawer({ specialClass }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  let serviceOptions = ["DREPT COMERCIAL SI SOCIETAR", "RECUPERARI CREANTE", "DREPT INSOLVENTA", "DUE DILIGENCE", "CONSULTANTA JURIDICA", "GDPR"]
  let serviceOptionsLinks = ["/drept-comercial-si-societar","#","/insolventa","/dueDiligence","/legalAdvice", "#"]

  // let insolventaSiFalimentOptions = ["PROCEDERI IN CURS", "PROCEDERI INCHEIATE", "PROCEDERI ADMINISTRATOR SCHIMBAT"]
  // let insolventaSiFalimentOptionsLinks = ["#", "#", "#"]

  return (

    <React.Fragment>
      <div onClick={openDrawer}>
        {/* <img className={` ${specialClass}`} src="images/menu_10242916.png" /> */}
        <i className={`fa-solid fa-bars text-2xl ${specialClass}`}></i>

      </div>
      <Drawer open={open} onClose={closeDrawer} overlay={true}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            MENU
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="font-['inter'] uppercase">
          <a href="/aboutUs">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-address-card"></i>
              </ListItemPrefix>
              Despre noi
            </ListItem>
          </a>

          <a href="/team">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-people-group"></i>
              </ListItemPrefix>
              Echipa
            </ListItem>
          </a>

          <ListItem >
            <Popover placement="bottom-start"  >
              <PopoverHandler>
                <div id="optionButton" className="w-full h-full flex justify-between">
                  <div className="flex">
                    <i className="fa-solid fa-bell-concierge mr-4"></i>
                    <p> Servicii</p>
                  </div>

                  <i className="fa-solid fa-angle-down first-letter text-sm mx-[4px] "></i>
                </div>
              </PopoverHandler>

              <PopoverContent className="!absolute !z-[9999] flex flex-col">
                {serviceOptions.map((option, index) =>
                  <div key={index} className="hover:text-[#c01707]  text-[13px] select-none p-[2px]">
                    <a className="w-full h-full" href={serviceOptionsLinks[index]}>{option}</a>
                  </div>)}
              </PopoverContent>
            </Popover>
          </ListItem>

          <a href="/insolvencyBankruptcy">
          <ListItem>
            <ListItemPrefix>
            <i className="fa-solid fa-circle-dollar-to-slot"></i>
            </ListItemPrefix>
            <p>INSOLVENTA/FALIMENT</p>
            {/* <Popover placement="bottom-start"  >
              <PopoverHandler>
                <div id="optionButton" className="w-full h-full flex justify-between">
                  <div className="flex">
                  <i className="fa-solid fa-circle-dollar-to-slot mr-4"></i>
                    <p>INSOLVENTA/FALIMENT</p>
                  </div>

                  <i className="fa-solid fa-angle-down first-letter text-sm mx-[4px] "></i>
                </div>
              </PopoverHandler>

              <PopoverContent className="!absolute !z-[9999] flex flex-col">
                {insolventaSiFalimentOptions.map((option, index) =>
                  <div key={index} className="hover:text-[#c01707]  text-[13px] select-none p-[2px]">
                    <a className="w-full h-full" href={insolventaSiFalimentOptionsLinks[index]}>{option}</a>
                  </div>)}
              </PopoverContent>
            </Popover> */}
          </ListItem>
          </a>

          <a href="/auctions">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-gavel"></i>
              </ListItemPrefix>
              Licitatii
            </ListItem>
          </a>

          <a href="/articles">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-newspaper"></i>
              </ListItemPrefix>
              Articole
            </ListItem>
          </a>

          <a href="/contact">
            <ListItem>
              <ListItemPrefix>
                <i className="fa-solid fa-address-book"></i>
              </ListItemPrefix>
              Contact
            </ListItem>
          </a>

        </List>

      </Drawer>
    </React.Fragment>
  );
}