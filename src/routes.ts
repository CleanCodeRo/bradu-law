import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Pages/Home.jsx"),
  route("aboutUs", "./Pages/AboutUs.jsx"),
  route("team", "./Pages/Team.jsx"),
  route("contact", "./Pages/Contact.jsx"),
  route("auctions", "./Pages/Auctions.jsx"),
  route("articles", "./Pages/Articles.jsx"),
  route("dueDiligence", "./Pages/DueDilligince.jsx"),
  route("insolvencyBankruptcy", "./Pages/Insolvency_Bankruptcy.jsx"),
  route("legalAdvice", "./Pages/LegalAdvice.jsx"),
  route("insolventa", "./Pages/Insolventa.jsx"),
  route("drept-comercial-si-societar", "./Pages/Comercial.jsx"),
  route("recuperari-creante", "./Pages/Recuperari.jsx"),
  route("gdpr", "./Pages/GDPR.jsx"),
] satisfies RouteConfig;
