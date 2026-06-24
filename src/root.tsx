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
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18259205827"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18259205827');
        `
            }}/>
            <Meta/>
            <Links/>
        </head>
        <body>
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
