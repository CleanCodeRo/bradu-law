export default function Footer() {
  const SpecialSlash = () => {
    return <div className="  leading-[18.57px] mx-0.5 font-bold text-lg">
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
      className="w-full  pb-5 bg-zinc-100 justify-center items-center inline-flex bg-first  bottom-0 "
    >
      <div className="text-neutral-500 text-sm text-gray_text font-normal font-['Inter'] border-zinc-300 flex-col justify-start items-center flex">
        <div
          id="contactLoc"
          className="  w-full border-b border-zinc-300 justify-center items-center inline-flex"
        >
          <div className="pt-6 w-full text-center text-neutral-500 text-s font-normal font-['Inter'] leading-[18.57px] border-y border-gray-300">
            Tel: +40 726 212 737 / Email: avocatnicoleta.bradu@gmail.com
          </div>
         
        </div>
        <div id="buttons" className="flex flex-wrap justify-center items-center p-3 w-fit">

          <TextContainer text={"Drept comercial si societar"}/>
         <SpecialSlash />

          <TextContainer text={"Recuperari Creante"}/>
          <SpecialSlash />

          <TextContainer text={" Insolventa – Faliment"}/>
          <SpecialSlash />
       
          <TextContainer text={"Due Diligence"}/>
          <SpecialSlash />

          <TextContainer text={"GDPR"}/>

        </div>
          <p className=" leading-tight text-xs text-center ">
            Copyright 2024 bradu.ro - CABINET INDIVIDUAL DE INSOLVENTA BRADU NICOLETA-DORINA
          </p>
      </div>
    </div>
  );
}
