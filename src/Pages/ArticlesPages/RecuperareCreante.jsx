import { useEffect } from "react";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recuperarea Creanțelor – Ghid Complet privind Procedurile și Etapele Legale",
  description:
    "Un avocat specializat în recuperări creanțe vă ajută să vă recuperați sumele de bani datorate de clienți, partenerii de afaceri sau persoanele fizice care refuză să își achite facturile sau împrumuturile, la termen. Procesul este structurat în două etape majore: faza amiabilă și faza judiciară.",
  author: {
    "@type": "Person",
    name: "Bradu Nicoleta-Dorina",
    url: "https://www.bradu-law.ro/#attorney",
  },
  publisher: {
    "@type": "Organization",
    name: "Bradu Law - Cabinet de Avocat - Cabinet Individual de Insolventa Bradu Nicoleta-Dorina",
    url: "https://www.bradu-law.ro",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bradu-law.ro/images/NewLogo.png",
    },
  },
  image: "https://www.bradu-law.ro/headerImages/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.bradu-law.ro/articole/recuperare-creante-ghid-complet",
  },
  about: {
    "@type": "Thing",
    name: "Recuperare Creanțe",
    description:
      "Servicii de recuperare creanțe interne și externe, atât pe cale amiabilă cât și judiciară.",
  },
  keywords:
    "recuperare creanțe, avocat recuperări creanțe, somație de plată, ordonanță de plată, executare silită, insolvență, cerere de valoare redusă, recuperare datorii, avocat București",
  mentions: [
    { "@type": "Thing", name: "Cerere de valoare redusă" },
    { "@type": "Thing", name: "Ordonanță de plată" },
    { "@type": "Thing", name: "Procedură de Insolvență" },
    { "@type": "Thing", name: "Executare silită" },
  ],
};

export default function RecuperareCreante() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(articleJsonLd, null, 2);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
      <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
        <img
          src="/headerImages/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg"
          className="sm:h-[25rem] w-full object-cover rounded-b-lg"
          draggable="false"
        />

        <div id="otherDetails" className="w-full">
          <div id="title" className="w-full flex justify-center items-center my-12 relative">
            <div className="bg-gray-300 h-[2px] w-full"></div>
            <p className="text-center bg-white px-2 font-bold sm:text-lg uppercase absolute">
              CABINET DE AVOCAT – ARTICOL
            </p>
          </div>

          <div id="articleContent" className="text-sm">
            <h1 className="text-xl font-bold text-center my-8 text-gray-800">
              Recuperarea Creanțelor – Ghid Complet privind Procedurile și Etapele Legale
            </h1>

            <p className="my-4 leading-relaxed">
              Un avocat specializat în recuperări creanțe vă ajută să vă recuperați sumele de bani datorate de
              clienți, partenerii de afaceri sau persoanele fizice care refuză să își achite facturile sau
              împrumuturile, la termen.
            </p>
            <p className="my-4 leading-relaxed">
              Procesul este structurat în două etape majore: faza amiabilă și faza judiciară.
            </p>

            <div className="my-10">
              <h2 className="font-bold text-base text-[#c01707] mb-4 uppercase">
                Faza prealabilă (Amiabilă)
              </h2>

              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-sm">Analiza documentelor</h3>
                  <p className="my-1 leading-relaxed">
                    Evaluarea documentelor justificative ale creantelor constand in facturi, situatii de lucrari,
                    corespondenta, contracte și a extrase de cont. Totodata, in aceasta etapa realizam analiza
                    juridica si economico-financiara a debitorului dvs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Notificarea debitorului</h3>
                  <p className="my-1 leading-relaxed">
                    Redactarea și transmiterea unei somații oficiale de plată.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Negocierea</h3>
                  <p className="my-1 leading-relaxed">
                    Stabilirea unui grafic de eșalonare a datoriilor dacă debitorul colaborează.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h2 className="font-bold text-base text-[#c01707] mb-4 uppercase">
                Faza judiciară (Prin investirea Instantei de judecata)
              </h2>

              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-sm">Cererea de valoare redusă</h3>
                  <p className="my-1 leading-relaxed">
                    Pentru datorii de maximum 50.000 lei, printr-o procedură rapidă.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Ordonanța de plată</h3>
                  <p className="my-1 leading-relaxed">
                    Procedură specială pentru creanțe certe, lichide și exigibile.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Judecata de drept comun</h3>
                  <p className="my-1 leading-relaxed">
                    Utilizată când debitorul contestă datoria și sunt necesare probe complexe.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Procedura de Insolventa</h3>
                  <p className="my-1 leading-relaxed">
                    Cand starea de insolvabilitate a debitorului poate este dovedita si sunt indeplinite conditiile
                    precum creanta certa, lichida si exigibila cu o scadenta de peste 60 de zile si valoare mai mare
                    de 50.000 lei.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Executarea silită</h3>
                  <p className="my-1 leading-relaxed">
                    Colaborarea cu un executor judecătoresc pentru recuperarea efectivă a banilor prin popriri sau
                    sechestru, la momentul dobandirii unui titlu executoriu.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="my-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#c01707]">
              <p className="my-2 leading-relaxed">
                Analizăm documentatia si situația de fapt, riscurile juridice pentru a construi o strategie adaptată
                cazului tău!
              </p>
              <p className="my-2 leading-relaxed">
                Avocatii din cadrul Cabinet de Avocat Bradu Nicoleta-Dorina va sprijina in toate aceste etape. Pentru
                orice informatii ori neclaritati va stam la dispozitie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
