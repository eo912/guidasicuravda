import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Shield, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Metodo = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Il Metodo</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Un approccio formativo basato sulla pratica, sulla progressione 
            e sull'adattamento al contesto operativo reale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                La formazione proposta da Guida Sicura VDA si basa su un metodo 
                sviluppato per rispondere alle esigenze concrete di chi guida per lavoro. 
                Non si tratta di guida sportiva o di performance, ma di sicurezza 
                quotidiana applicata al contesto professionale.
              </p>
            </div>

            {/* Method Pillars */}
            <div className="grid gap-8 mt-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Formazione pratica e progressiva
                  </h2>
                  <p className="text-muted-foreground">
                    Ogni corso prevede una combinazione di teoria e pratica, 
                    con esercitazioni che partono da situazioni semplici per 
                    arrivare gradualmente a scenari più complessi. I partecipanti 
                    affrontano manovre in ambiente controllato prima di applicare 
                    le tecniche apprese in contesti realistici.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Sicurezza reale e quotidiana
                  </h2>
                  <p className="text-muted-foreground">
                    L'obiettivo non è raggiungere prestazioni estreme, ma sviluppare 
                    competenze utilizzabili ogni giorno. La formazione si concentra 
                    sulla prevenzione: riconoscere i segnali di pericolo, mantenere 
                    le distanze di sicurezza, anticipare le situazioni critiche, 
                    gestire la stanchezza e le distrazioni.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Adattamento al contesto operativo
                  </h2>
                  <p className="text-muted-foreground">
                    I corsi vengono calibrati in base all'ambiente di lavoro 
                    dei partecipanti: guida urbana con traffico intenso, percorsi 
                    montani con condizioni meteorologiche variabili, tratti 
                    autostradali o infrastrutturali (gallerie, svincoli). 
                    Questa personalizzazione garantisce che la formazione sia 
                    direttamente applicabile.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Gruppi ridotti e attenzione individuale
                  </h2>
                  <p className="text-muted-foreground">
                    Le sessioni pratiche vengono svolte con gruppi di dimensioni 
                    contenute per garantire un tempo di guida adeguato a ciascun 
                    partecipante. Gli istruttori forniscono feedback individuali 
                    e suggerimenti mirati al miglioramento.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 p-6 bg-secondary rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">
                Non è guida sportiva
              </h3>
              <p className="text-muted-foreground">
                È importante chiarire che i corsi di Guida Sicura VDA non hanno 
                finalità sportive o agonistiche. L'approccio è esclusivamente 
                formativo, orientato alla sicurezza sul lavoro e alla prevenzione
                degli incidenti stradali in ambito professionale.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Vuoi saperne di più sul nostro approccio formativo?
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Metodo;
