import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";



export function LeftDrawer({ specialClass }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);



  let serviceOptions = ["DREPT CIVIL", "DREPTUL FAMILIEI", "DREPT SOCIETAR", "GDPR", "INSOLVENTA / FALIMENT", "DREPT ADMINISTRATIV", "DREPTUL MUNCII", "PROPRIETATE INTELECTUALA", "ASOCIATII SI FUNDATII"]
  let serviceOptionsLinks = ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]


  return (
    <React.Fragment>
      <div onClick={openDrawer}>
        {/* <img className={` ${specialClass}`} src="images/menu_10242916.png" /> */}
        <i className={`fa-solid fa-bars text-2xl ${specialClass}`}></i>
        </div>
      <Drawer open={open} onClose={closeDrawer}>
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

          <ListItem>
            <ListItemPrefix>
              <i className="fa-solid fa-bell-concierge"></i>
            </ListItemPrefix>
            SERVICE
            <ListItemSuffix>
              <i className="fa-solid fa-angle-down first-letter text-sm mx-[4px] "></i>
            </ListItemSuffix>
          </ListItem>


          <ListItem>
            <ListItemPrefix>
              <i className="fa-solid fa-circle-dollar-to-slot"></i>
            </ListItemPrefix>
            Insolventa / Faliment
            <ListItemSuffix>
              <i className="fa-solid fa-angle-down first-letter text-sm mx-[4px] "></i>
            </ListItemSuffix>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <i className="fa-solid fa-gavel"></i>
            </ListItemPrefix>
            Licitatii
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <i className="fa-solid fa-newspaper"></i>
            </ListItemPrefix>
            Articole
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <i className="fa-solid fa-address-book"></i>
            </ListItemPrefix>
            Contact
          </ListItem>

        </List>

      </Drawer>
    </React.Fragment>
  );
}