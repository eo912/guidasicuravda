import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "gsvda_cookie_consent";

type ConsentStatus = "accepted" | "rejected" | null;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: ConsentStatus) => {
    if (status) {
      localStorage.setItem(COOKIE_CONSENT_KEY, status);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-foreground mb-1">
              <strong>Informativa sui cookie</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Questo sito utilizza cookie tecnici necessari al funzionamento e cookie 
              di analisi per migliorare l'esperienza di navigazione. 
              <Link to="/cookie-policy" className="text-primary hover:underline ml-1">
                Maggiori informazioni
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleConsent("rejected")}
            >
              Rifiuta
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleConsent("accepted")}
            >
              Accetta
            </Button>
            <button
              onClick={() => handleConsent("rejected")}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors md:hidden"
              aria-label="Chiudi"
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
