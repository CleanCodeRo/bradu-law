export default function Header() {
  return (
    <div
      id="Header"
      className="w-full h-32  bg-white flex items-center flex-col justify-center"
    >
      <div id="row1Header" class="w-[1140px] flex items-center justify-start">
        <img
          id="logo"
          class="w-[260px] h-20"
          src="https://via.placeholder.com/260x86"
        />
        <div id="buttonsContainer" class="flex-grow flex justify-end">
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Despre noi
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Servicii
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Insolventa/Faliment
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Licitatii
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Articole
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="h-20 pl-5 pr-4 border-l border-r border-zinc-100 flex items-center">
              <div class="text-neutral-500 text-sm font-normal font-['Inter'] uppercase leading-tight">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="row2Header" className="w-[1140px] flex flex-row justify-start">
        <div className="w-[260px] h-[41px] text-s p-3 bg-[#F2F2F2]">
          Domenii de practica
        </div>
        <input
          id="searchBar"
          className="w-[880px] border-2 border-[#F2F2F2]"
          placeholder="Search a keyword..."
        ></input>
      </div>
    </div>
  );
}
