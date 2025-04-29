import React, { useState, useEffect } from "react";
import EventComponent from "../Components/EventComponent";
import PostArticle from "./PostArticle";

export default function Articles() {
    const token = localStorage.getItem("lawToken");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    let data2 = [
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
        },{
            title: "Climate Change Litigation: Holding Corporations Accountable",
            date: "09 IAN",
            description:"Examining the legal implications of blockchain technology and smart contracts, this article explores issues related to contract enforcement, jurisdiction, and the potential for these technologies to transform traditional legal processes.",
        }
    ]

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/articles");
            if (!response.ok) {
                throw new Error("Failed to fetch articles");
            }
            const data = await response.json();
            setArticles(data);

        } catch (err) {
            setError("Error loading articles");
            console.error("Error fetching articles:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center text-gray-700 font-['intel']">
                <div className="text-xl">Loading articles...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full flex items-center justify-center text-gray-700 font-['intel']">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
            <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5">
                {token ? <PostArticle onArticlePosted={fetchArticles} /> : null}
                <p className="text-gray_text text-xl mt-12 mb-4">CATEGORII : ARTICOLE</p>

                <div id="itemList" className="flex flex-col">
                    {articles.map((article) => (
                        <EventComponent 
                            key={article.id} 
                            title={article.title} 
                            date={article.date} 
                            description={article.description} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}