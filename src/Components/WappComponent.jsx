import React, { useRef } from 'react'

export default function WappComponent() {
    const component = useRef()
    const pcLink = "https://web.whatsapp.com/send?phone=40726212737";
    const phoneLink = "https://wa.me/40726212737"

    const link = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? phoneLink : pcLink

  return (
    <a ref={component}  className="bg-[#25D366] text-white text-lg font-bold py-2 px-3.5 px-850:px-5  flex items-center rounded-full px850:rounded-xl fixed bottom-4 left-4 " data-action="open" data-phone="40726212737" href={link}  target="_blank">
      <i className="fa-brands fa-whatsapp text-2xl mr-3"></i>
        <span className="hidden px850:flex">Trimite un mesaj pe WhatsApp</span>
         <span className="flex px850:hidden"> WhatsApp</span>
      </a>

      
  )
}

