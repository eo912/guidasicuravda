import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">GS</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg">GUIDA SICURA</span>
                <span className="text-accent font-bold ml-1">VDA</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Formazione pratica alla guida sicura per aziende e professionisti.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/corsi" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  I Corsi
                </Link>
              </li>
              <li>
                <Link to="/metodo" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Il Metodo
                </Link>
              </li>
              <li>
                <Link to="/istruttori" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Istruttori
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Privacy & Legale</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:info@guidasicuravda.it" className="hover:text-primary-foreground transition-colors">
                  info@guidasicuravda.it
                </a>
              </li>
              <li>
                <a href="tel:+390000000000" className="hover:text-primary-foreground transition-colors">
                  +39 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <p className="text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Guida Sicura VDA. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
