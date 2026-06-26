import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Pages/Home.jsx"),
  route("despre-noi", "./Pages/AboutUs.jsx"),
  route("echipa", "./Pages/Team.jsx"),
  route("contact", "./Pages/Contact.jsx"),
  route("licitatii", "./Pages/Auctions.jsx"),
  route("due-diligence", "./Pages/DueDilligince.jsx"),
  route("insolventa-si-faliment", "./Pages/Insolvency_Bankruptcy.jsx"),
  route("consultanta-juridica", "./Pages/LegalAdvice.jsx"),
  route("insolventa", "./Pages/Insolventa.jsx"),
  route("drept-comercial-si-societar", "./Pages/Comercial.jsx"),
  route("recuperari-creante", "./Pages/Recuperari.jsx"),
  route("gdpr", "./Pages/GDPR.jsx"),
  route("articole", "./Pages/ArticlesLayout.jsx", [
    index("./Pages/Articles.jsx"),
    route("recuperare-creante-ghid-complet", "./Pages/ArticlesPages/RecuperareCreante.jsx"),
  ]),
] satisfies RouteConfig;
