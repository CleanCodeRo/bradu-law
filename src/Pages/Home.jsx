import CabinetDetails from "../Components/HomeComponents/CabinetDetails";
import CarrouselPhotos from "../Components/HomeComponents/CarrouselPhotos"

export default function Home() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <CarrouselPhotos/>
      <CabinetDetails />
 
    </div>
  );
}



