import React from "react";
import EventComponent from "../Components/EventComponent";




export default function Articles() {
    let data = [
        {
            title: "The Impact of Cybersecurity Laws on Corporate Governance, The Impact of Cybersecurity Laws on Corporate Governance, Navigating Intellectual Property Rights in the Digital Age",
            date: "21 JUL",
            description: "This article explores the evolving landscape of cybersecurity laws and their implications on corporate governance, addressing challenges and best practices for businesses in safeguarding sensitive data. Examining the legal implications of blockchain technology and smart contracts, this article explores issues related to contract enforcement, jurisdiction, and the potential for these technologies to transform traditional legal processes. Examining the legal implications of blockchain technology and smart contracts, this article explores issues related to contract enforcement, jurisdiction, and the potential for these technologies to transform traditional legal processes",
        },
        {
            title: "Navigating Intellectual Property Rights in the Digital Age",
            date: "10 IUN",
            description: "An examination of how advancements in technology have reshaped intellectual property laws, focusing on issues such as digital piracy, patent trolls, and the balance between innovation and protection.",
        },
        {
            title: "The Legal Implications of Artificial Intelligence in Healthcare",
            date: "03 DEC",
            description: "This article delves into the legal considerations surrounding the use of artificial intelligence in the healthcare industry, covering topics like liability, patient privacy, and regulatory compliance.",
        },
        {
            title: "Climate Change Litigation: Holding Corporations Accountable",
            date: "09 IAN",
            description:"Examining the legal implications of blockchain technology and smart contracts, this article explores issues related to contract enforcement, jurisdiction, and the potential for these technologies to transform traditional legal processes.",
        }
    ]


    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
                <p className="text-gray_text text-xl mt-12 mb-4">CATEGORII : ARTICOLE</p>

                <div id="itemList" className="flex flex-col">
                    {  data.map((item, index) =>  <EventComponent key={index} title={item.title} date={item.date} description={item.description} />)}
                </div>
            </div>

        </div>
    )
}