import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-driving.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative section-container py-20 md:py-32">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              GUIDA SICURA BDA
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-serif">
              Formazione pratica alla guida sicura per aziende e professionisti
            </p>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
              Corsi strutturati per migliorare la sicurezza alla guida in ambito lavorativo. 
              Formazione destinata a chi guida per lavoro, con un approccio concreto e operativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/corsi">
                  Scopri i corsi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contatti">
                  Richiedi informazioni
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formazione alla guida sicura in ambito lavorativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guida Sicura BDA propone corsi di formazione pratica rivolti a chi utilizza 
              il veicolo come strumento di lavoro. L'obiettivo è sviluppare competenze 
              concrete per ridurre i rischi sulla strada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-professional text-center">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-5">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sicurezza operativa</h3>
              <p className="text-muted-foreground">
                Formazione orientata alla prevenzione degli incidenti stradali 
                in contesto lavorativo, con attenzione alle situazioni reali.
              </p>
            </div>

            <div className="card-professional text-center">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-5">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Per professionisti</h3>
              <p className="text-muted-foreground">
                Corsi pensati per autisti, operatori dei servizi di emergenza, 
                personale tecnico e tutti coloro che guidano per lavoro.
              </p>
            </div>

            <div className="card-professional text-center">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-5">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Approccio pratico</h3>
              <p className="text-muted-foreground">
                Esercitazioni su strada e in aree controllate, con simulazioni 
                di situazioni critiche in ambiente protetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A chi ci rivolgiamo
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I nostri corsi sono progettati per rispondere alle esigenze 
                formative di diverse realtà professionali:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Aziende e PMI</span>
                    <p className="text-muted-foreground text-sm">
                      Formazione per dipendenti che utilizzano veicoli aziendali o propri per attività lavorative
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Gestori di infrastrutture</span>
                    <p className="text-muted-foreground text-sm">
                      Operatori di gallerie, viabilità e trasporti che necessitano di competenze specifiche
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Servizi di emergenza e soccorso</span>
                    <p className="text-muted-foreground text-sm">
                      Personale sanitario, vigili del fuoco e operatori del soccorso che guidano in condizioni critiche
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 card-professional">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Inserimento in cataloghi formativi
              </h3>
              <p className="text-muted-foreground mb-6">
                I corsi di Guida Sicura BDA sono strutturati per essere inseriti 
                nei cataloghi formativi di associazioni di categoria e enti accreditati, 
                come Confindustria e Confcommercio.
              </p>
              <p className="text-muted-foreground mb-6">
                Contattaci per informazioni sulla compatibilità con i tuoi programmi formativi.
              </p>
              <Button variant="default" asChild>
                <Link to="/contatti">
                  Richiedi informazioni
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Vuoi conoscere i nostri corsi?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Consulta il catalogo corsi o contattaci per ricevere informazioni 
            dettagliate e valutare insieme la soluzione più adatta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/corsi">
                Vai ai corsi
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/contatti">
                Contattaci
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
