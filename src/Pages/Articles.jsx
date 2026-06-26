import { Link } from "react-router-dom";

const articles = [
  {
    slug: "recuperare-creante-ghid-complet",
    title: "Recuperarea Creanțelor – Ghid Complet privind Procedurile și Etapele Legale",
    excerpt:
      "Un avocat specializat în recuperări creanțe vă ajută să vă recuperați sumele de bani datorate de clienți, partenerii de afaceri sau persoanele fizice care refuză să își achite facturile sau împrumuturile, la termen.",
    image: "headerImages/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg",
    date: "26 Iunie 2026",
  },
];

export default function Articles() {
  return (
    <div id="principalHolder" className="w-full flex items-center justify-center text-gray-700 font-['intel']">
      <div id="centerdHolder" className="w-11/12 md:w-5/6 xl:w-3/5 ">
        <img
          src="headerImages/christin-hume-Hcfwew744z4-unsplash.jpg"
          className="sm:h-[25rem] w-full object-cover rounded-b-lg"
          draggable="false"
        />

        <div id="otherDetails" className="w-full">
          <div id="title" className="w-full flex justify-center items-center my-12 relative">
            <div className="bg-gray-300 h-[2px] w-full"></div>
            <p className="text-center bg-white px-2 font-bold sm:text-lg uppercase absolute">
              CABINET DE AVOCAT – ARTICOLE
            </p>
          </div>

          <div id="articlesList" className="w-full mb-10">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/articole/${article.slug}`}
                className="flex flex-col sm:flex-row w-full mb-8 group"
              >
                <img
                  src={article.image}
                  className="w-full sm:w-72 h-48 object-cover rounded-lg sm:mr-6"
                  draggable="false"
                />
                <div className="flex flex-col justify-center mt-3 sm:mt-0">
                  <p className="text-xs text-gray-400 uppercase mb-1">{article.date}</p>
                  <h2 className="font-bold text-base text-gray-800 group-hover:text-[#c01707] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm mt-2 leading-relaxed">{article.excerpt}</p>
                  <p className="text-xs font-semibold text-[#c01707] mt-3 group-hover:underline">
                    Citește mai mult →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
