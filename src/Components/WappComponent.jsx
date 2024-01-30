import React, { useRef } from 'react'

export default function WappComponent() {
    const component = useRef()

  return (
    <a ref={component}  className="bg-[#25D366] text-white text-lg font-bold py-2 px-3.5 px-850:px-5  flex items-center rounded-full px850:rounded-xl fixed bottom-4 left-4 " href="https://web.whatsapp.com/send?phone=40726212737"  target="_blank">
      <i className="fa-brands fa-whatsapp text-2xl mr-3"></i>
        <span className="hidden px850:flex">Trimite un mesaj pe WhatsApp</span>
         <span className="flex px850:hidden"> WhatsApp</span>
      </a>
  )
}

