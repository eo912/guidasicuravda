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
    title: "Guida Sicura VDA | Formazione alla guida sicura",
    description: "Formazione pratica alla guida sicura per aziende, enti, flotte, professionisti e servizi di emergenza.",
  },
  "/corsi": {
    title: "Corsi di guida sicura per aziende | Guida Sicura VDA",
    description: "Corsi di guida sicura, guida professionale e guida in emergenza per aziende, enti, flotte e operatori professionali.",
  },
  "/corsi/guida-sicura-base": {
    title: "Corso di Guida Sicura Base | Guida Sicura VDA",
    description: "Corso base per la prevenzione del rischio stradale e l'acquisizione delle tecniche fondamentali di guida sicura.",
  },
  "/corsi/guida-sicura-secondo-livello": {
    title: "Guida Sicura – 2° Livello | Guida Sicura VDA",
    description: "Formazione avanzata modulare sulla percezione del rischio e sulla prevenzione attiva per conducenti professionali.",
  },
  "/corsi/guida-emergenza-ambulanze": {
    title: "Guida Sicura Ambulanza ed Emergenza | Guida Sicura VDA",
    description: "Corso specialistico per la guida sicura dei mezzi di soccorso, rivolto a operatori dell'emergenza sanitaria.",
  },
  "/metodo": {
    title: "Metodo formativo | Guida Sicura VDA",
    description: "Metodo di formazione pratica e progressiva, adattato ai contesti operativi di aziende, enti e servizi di emergenza.",
  },
  "/istruttori": {
    title: "Istruttori qualificati | Guida Sicura VDA",
    description: "Istruttori qualificati con esperienza nella formazione alla guida sicura, professionale e operativa in emergenza.",
  },
  "/contatti": {
    title: "Contatti e richieste corsi | Guida Sicura VDA",
    description: "Contatta Guida Sicura VDA per informazioni sui percorsi formativi e sulle modalità di erogazione dei corsi.",
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