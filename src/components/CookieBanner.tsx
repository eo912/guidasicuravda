import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "gsvda_cookie_consent";
const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000; // 12 mesi
export const OPEN_COOKIE_PREFERENCES_EVENT = "gsvda:open-cookie-preferences";

type ConsentStatus = "accepted" | "rejected";

interface StoredConsent {
  status: ConsentStatus;
  timestamp: number;
  expires: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(status: ConsentStatus) {
  const update = {
    analytics_storage: status === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
  try {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", update);
    } else {
      window.dataLayer = window.dataLayer || [];
      // Stesso formato di gtag(): oggetto arguments-like
      // eslint-disable-next-line prefer-rest-params
      (function (..._args: unknown[]) {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      })("consent", "update", update);
    }
    window.dataLayer?.push({ event: "gsvda_consent_update", consent_status: status });
  } catch {
    // nessun errore bloccante se GTM non è disponibile
  }
}

function readConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.status || !parsed.expires || parsed.expires < Date.now()) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    return null;
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (consent) {
      pushConsent(consent.status);
    } else {
      timer = setTimeout(() => setIsVisible(true), 500);
    }
    const open = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, open);
    };
  }, []);

  const handleConsent = (status: ConsentStatus) => {
    const now = Date.now();
    const data: StoredConsent = { status, timestamp: now, expires: now + CONSENT_DURATION_MS };
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(data));
    } catch {
      // storage non disponibile
    }
    pushConsent(status);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg" role="dialog" aria-label="Preferenze cookie">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-foreground mb-1">
              <strong>Informativa sui cookie</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Questo sito utilizza cookie tecnici necessari al funzionamento e, solo con il tuo
              consenso, strumenti di analisi statistica (Google Analytics 4, Microsoft Clarity).
              Puoi modificare la scelta in qualsiasi momento da "Gestisci preferenze cookie".
              <Link to="/cookie-policy" className="text-primary hover:underline ml-1">
                Maggiori informazioni
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={() => handleConsent("rejected")}>
              Rifiuta
            </Button>
            <Button variant="default" size="sm" onClick={() => handleConsent("accepted")}>
              Accetta
            </Button>
            <button
              onClick={() => handleConsent("rejected")}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors md:hidden"
              aria-label="Chiudi e rifiuta i cookie di analisi"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
