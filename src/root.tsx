import {Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation} from "react-router";
import {useEffect} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WappComponent from "./Components/WappComponent";
import "./index.css";

function FontAwesomeKit() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/5509a13330.js";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
        return () => {
            script.remove();
        };
    }, []);
    return null;
}

function GoogleAnalytics() {
    const location = useLocation();
    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("config", "AW-18259205827", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);
    return null;
}

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <base href="/"/>
            <link rel="icon" type="image" href="/headerImages/siteLogo.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WDR5XQZ5');
            `
                }}
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18259205827"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18259205827');
        `
            }}/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": ["LegalService", "LocalBusiness"],
                        "@id": "https://www.bradu-law.ro",
                        "name": "Cabinet de Avocat - Cabinet Individual de Insolventa Bradu Nicoleta-Dorina",
                        "alternateName": "Bradu Law",
                        "legalName": "Cabinet Individual de Insolventa Bradu Nicoleta-Dorina",
                        "description": "Cabinet de avocat care acordă asistență și reprezentare juridică în domenii de drept comercial, societar, civil, familiei, muncii, proprietate intelectuală, procedura insolvenței, recuperări creanțe, drept administrativ, asociații și fundații.",
                        "url": "https://www.bradu-law.ro",
                        "logo": "https://www.bradu-law.ro/images/NewLogo.png",
                        "image": [
                            "https://www.bradu-law.ro/images/NewLogo.png",
                            "https://www.bradu-law.ro/images/AvocatEchipa.jpeg"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Bld. Iuliu Maniu 19A, Corp A, Ap. 0002",
                            "addressLocality": "București",
                            "addressRegion": "Sector 6",
                            "addressCountry": "RO"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 44.425322,
                            "longitude": 26.175283
                        },
                        "telephone": "+40 726 212 737",
                        "email": "avocatnicoleta.bradu@gmail.com",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "09:00",
                            "closes": "17:00"
                        },
                        "founder": {
                            "@type": "Person",
                            "@id": "https://www.bradu-law.ro/#attorney",
                            "name": "Bradu Nicoleta-Dorina",
                            "jobTitle": "Avocat – Practician în insolvență",
                            "image": "https://www.bradu-law.ro/images/AvocatEchipa.jpeg",
                            "email": "avocatnicoleta.bradu@gmail.com",
                            "memberOf": [
                                {
                                    "@type": "Organization",
                                    "name": "Baroul București"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "Uniunea Națională a Practicienilor în Insolvență - Filiala București"
                                }
                            ]
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+40-726-212-737",
                            "contactType": "customer service",
                            "email": "avocatnicoleta.bradu@gmail.com",
                            "availableLanguage": "Romanian"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "RO"
                        },
                        "hasMap": "https://maps.google.com/?q=44.425322,26.175283",
                        "priceRange": "$$",
                        "knowsLanguage": "ro",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicii Juridice",
                            "itemListElement": [
                                {
                                    "@type": "Service",
                                    "name": "Drept Comercial si Societar",
                                    "description": "Asistență și reprezentare juridică în drept comercial și societar: înființări societăți, fuziuni și achiziții, dizolvare și lichidare, litigii comerciale.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Insolvență și Faliment",
                                    "description": "Asistare și reprezentare în procedura de insolvență, reorganizare judiciară, faliment, lichidare voluntară la Registrul Comerțului.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Recuperări Creanțe",
                                    "description": "Servicii de recuperare creanțe interne și externe, atât pe cale amiabilă (somație de plată art. 1015 CPC) cât și judiciară. Recuperăm creanțe de la societăți în funcțiune sau în procedura de insolvență, cu analiză juridică prealabilă și identificarea soluției optime de recuperare.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Due Diligence",
                                    "description": "Analiză, examinare și investigare a situațiilor juridice și economice pentru exprimarea unei opinii legale privind achiziționarea sau înstrăinarea de active.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Drept Civil",
                                    "description": "Asistență și reprezentare în litigii civile.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Dreptul Familiei",
                                    "description": "Asistență și reprezentare în procedurile de divorț notarial sau pe cale judecătorească.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Dreptul Muncii",
                                    "description": "Asistență juridică în relațiile de muncă: redactare contracte, concedieri, reprezentare în fața comisiei de disciplină.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Drept Administrativ",
                                    "description": "Plângeri împotriva actelor administrative și plângeri contravenționale.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Proprietate Intelectuală",
                                    "description": "Consiliere și asistență pentru înregistrarea mărcii la OSIM, opoziție marcă, litigii în domeniul proprietății intelectuale.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Asociații și Fundații",
                                    "description": "Înființare și modificare acte pentru asociații și fundații conform O.U.G. 26/2000.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Consultantă Juridică",
                                    "description": "Servicii complete de consultanță juridică pentru mediul de afaceri.",
                                    "provider": {
                                        "@id": "https://www.bradu-law.ro"
                                    },
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "RO"
                                    }
                                }
                            ]
                        }
                    }, null, 2)
                }}
            />
            <Meta/>
            <Links/>
        </head>
        <body>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDR5XQZ5"
                    height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe>
        </noscript>
        <FontAwesomeKit/>
        <GoogleAnalytics/>
        <Header/>
        {children}
        <WappComponent/>
        <Footer/>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function Root() {
    return <Outlet/>;
}
