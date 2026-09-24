import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://guidasicuravda.it";
const SOCIAL_IMAGE = `${SITE_URL}/og-guida-sicura-vda.jpg`;

interface SeoData {
  title: string;
  description: string;
}

const routeMetadata: Record<string, SeoData> = {
  "/": {
    title: "Guida sicura in Valle d'Aosta per aziende e professionisti | Guida Sicura VDA",
    description: "Formazione pratica alla guida sicura in Valle d'Aosta per aziende, flotte, enti e servizi di soccorso. Esercitazioni su piazzali, piste e aree idonee.",
  },
  "/corsi": {
    title: "Corsi di guida sicura per aziende, flotte e professionisti | Guida Sicura VDA",
    description: "Corsi di guida sicura, guida professionale e guida in emergenza per aziende, flotte aziendali ed enti. In Valle d'Aosta e fuori regione su richiesta.",
  },
  "/corsi/guida-sicura-base": {
    title: "Corso di guida sicura base per lavoratori | Guida Sicura VDA",
    description: "Corso di 8 ore sulla sicurezza stradale dei lavoratori: prevenzione del rischio stradale e in itinere, con esercitazioni pratiche su piazzali e aree idonee.",
  },
  "/corsi/guida-sicura-secondo-livello": {
    title: "Corso di guida sicura per professionisti – 2° Livello | Guida Sicura VDA",
    description: "Formazione avanzata modulare di 16 ore per conducenti professionali e flotte aziendali: percezione del rischio e prevenzione attiva.",
  },
  "/corsi/guida-emergenza-ambulanze": {
    title: "Guida sicura dei mezzi di soccorso e ambulanze | Guida Sicura VDA",
    description: "Corso specialistico di 16 ore sulla guida sicura dei mezzi di soccorso, per operatori dell'emergenza sanitaria, vigili del fuoco ed enti.",
  },
  "/metodo": {
    title: "Metodo formativo di guida sicura | Guida Sicura VDA",
    description: "Metodo di formazione pratica e progressiva, adattato ai contesti operativi di aziende, enti e servizi di emergenza.",
  },
  "/istruttori": {
    title: "Istruttori di guida sicura AssoFormatori | Guida Sicura VDA",
    description: "Istruttori di guida sicura associati AssoFormatori, con esperienza nella formazione professionale e operativa in emergenza in Valle d'Aosta.",
  },
  "/contatti": {
    title: "Richiedi un corso di guida sicura | Guida Sicura VDA",
    description: "Richiedi informazioni sui corsi di guida sicura per aziende, flotte ed enti. Operativi in Valle d'Aosta, corsi anche fuori regione.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Guida Sicura VDA",
    description: "Informativa sul trattamento dei dati personali del sito Guida Sicura VDA ai sensi del Regolamento UE 2016/679.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Guida Sicura VDA",
    description: "Informativa sull'utilizzo dei cookie e degli strumenti di analisi presenti sul sito Guida Sicura VDA.",
  },
};

const fallbackMetadata: SeoData = {
  title: "Pagina non trovata | Guida Sicura VDA",
  description: "La pagina richiesta non è disponibile sul sito Guida Sicura VDA.",
};

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
    const metadata = routeMetadata[normalizedPath] ?? fallbackMetadata;
    const isKnownRoute = Boolean(routeMetadata[normalizedPath]);
    const canonicalUrl = `${SITE_URL}${isKnownRoute ? normalizedPath : pathname}`;

    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[name="robots"]', "name", "robots", isKnownRoute ? "index, follow" : "noindex, nofollow");
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", SOCIAL_IMAGE);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", SOCIAL_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default SeoManager;