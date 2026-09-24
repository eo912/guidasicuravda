import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center py-12 md:py-20">
            <p className="text-accent font-semibold mb-3">Errore 404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pagina non trovata
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              La pagina richiesta non è disponibile. Puoi tornare alla Home oppure consultare i corsi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/">Torna alla Home</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/corsi">Vai ai Corsi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
