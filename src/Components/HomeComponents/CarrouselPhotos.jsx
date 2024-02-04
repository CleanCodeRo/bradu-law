import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function CarrouselPhotos(){
    return  <Carousel className=" h-[23rem] sm:h-[30rem]">
    <img
      src="headerImages/aaron-burden-y02jEX_B0O0-unsplash.jpg"
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
      src="headerImages/clarisse-meyer-jKU2NneZAbI-unsplash.jpg"
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
      src="headerImages/romain-dancre-doplSDELX7E-unsplash.jpg"
      alt="image 3"
      className="h-full w-full object-cover"
    />
  </Carousel>
}