export default function Footer() {
  const SpecialSlash = () => {
    return <div className="  leading-[18.57px] mx-2">
      /
    </div>
  }

  const TextContainer = ({text}) =>{
    return <div className="p-1 leading-[17.14px] hover:text-[#c01707] cursor-pointer">
    {text}
  </div>
  }


  return (
    <div
      id="footer"
      className="w-full  py-5 bg-zinc-100 justify-center items-center inline-flex bg-first"
    >
      <div className="text-neutral-500 text-s font-normal font-['Inter'] border-zinc-300 flex-col justify-start items-center flex">
        <div
          id="contactLoc"
          className="  w-full border-b border-zinc-300 justify-center items-center inline-flex"
        >
          <div className="p-2 text-center text-neutral-500 text-s font-normal font-['Inter'] leading-[18.57px]">
            Tel: +40 745 295 351 / Strada Aviator Maior Ștefan Sănătescu 44,
            Etaj 1, Sector 1, București 011478
          </div>
        </div>
        <div id="buttons" className="flex flex-wrap justify-center p-3 w-fit">
          <TextContainer text={"Asociatii si Fundatii"}/>
          <SpecialSlash />

          <TextContainer text={" Drept administrativ"}/>
         <SpecialSlash />

          <TextContainer text={"Drept civil"}/>
          <SpecialSlash />

          <TextContainer text={" Divort – Dreptul Familiei"}/>
          <SpecialSlash />

          
          <TextContainer text={" Drept societar"}/>
          <SpecialSlash />
        
          <TextContainer text={"Dreptul muncii"}/>
          <SpecialSlash />

          <TextContainer text={"  Insolventa – Faliment"}/>
          <SpecialSlash />
       
          <TextContainer text={" Proprietate intelectuala"}/>
        </div>
          <p className=" leading-tight text-center pt-4 ">
            Copyright 2021 bradu.ro - CABINET DE AVOCAT-CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA
            - Powered by TipoMedia
          </p>
      </div>
    </div>
  );
}
