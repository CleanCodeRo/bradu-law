import React from "react";
import {Drawer, Typography, IconButton, List, ListItem, ListItemPrefix, Popover, PopoverHandler, PopoverContent} from "@material-tailwind/react";


export function LeftDrawer({specialClass}) {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    let serviceOptions = ["DREPT COMERCIAL SI SOCIETAR", "RECUPERARI CREANTE", "DREPT INSOLVENTA", "DUE DILIGENCE", "CONSULTANTA JURIDICA", "GDPR"]
    let serviceOptionsLinks = ["/drept-comercial-si-societar", "/recuperari-creante", "/insolventa", "/due-diligence", "/consultanta-juridica", "/gdpr"]

    return (

        <React.Fragment>
            <div onClick={openDrawer}>
                <i className={`fa-solid fa-bars text-2xl ${specialClass}`} aria-hidden="true"></i>

            </div>
            <Drawer open={open} onClose={closeDrawer} overlay={false}
                    className="bg-[rgba(255,255,255,0.8)] text-black backdrop-blur-md">
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
                <List className="font-['inter'] uppercase text-black">
                    <a href="/despre-noi">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-address-card" aria-hidden="true"></i>
                            </ListItemPrefix>
                            Despre noi
                        </ListItem>
                    </a>

                    <a href="/echipa">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-people-group" aria-hidden="true"></i>
                            </ListItemPrefix>
                            Echipa
                        </ListItem>
                    </a>

                    <ListItem>
                        <Popover placement="bottom-start">
                            <PopoverHandler>
                                <div id="optionButton" className="w-full h-full flex justify-between">
                                    <div className="flex">
                                        <i className="fa-solid fa-bell-concierge mr-4" aria-hidden="true"></i>
                                        <p> Servicii</p>
                                    </div>

                                    <i className="fa-solid fa-angle-down first-letter text-sm mx-[4px] " aria-hidden="true"></i>
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

                    <a href="/insolventa-si-faliment">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-circle-dollar-to-slot" aria-hidden="true"></i>
                            </ListItemPrefix>
                            <p>INSOLVENTA</p>
                        </ListItem>
                    </a>

                    <a href="/licitatii">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-gavel" aria-hidden="true"></i>
                            </ListItemPrefix>
                            Licitatii
                        </ListItem>
                    </a>

                    <a href="/articole">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-newspaper" aria-hidden="true"></i>
                            </ListItemPrefix>
                            Articole
                        </ListItem>
                    </a>

                    <a href="/contact">
                        <ListItem>
                            <ListItemPrefix>
                                <i className="fa-solid fa-address-book" aria-hidden="true"></i>
                            </ListItemPrefix>
                            Contact
                        </ListItem>
                    </a>

                </List>
            </Drawer>
        </React.Fragment>
    );
}
