import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, AlertTriangle, Ambulance } from "lucide-react";
import Layout from "@/components/Layout";

const courses = [
  {
    id: "guida-sicura-aziendale",
    title: "Corso Base di Guida Sicura Aziendale",
    description: "Formazione alla guida sicura per dipendenti che utilizzano veicoli per lavoro. Un percorso pratico per acquisire consapevolezza dei rischi e migliorare le tecniche di guida in situazioni quotidiane.",
    icon: Car,
    destinatari: "Dipendenti di aziende, autisti, personale commerciale",
  },
  {
    id: "guida-sicura-difensiva",
    title: "Corso di Guida Sicura Difensiva",
    description: "Formazione per trasformare l'attitudine del conducente da passiva a proattiva, fornendo strumenti per identificare i pericoli prima che diventino emergenze e ottimizzare gli spazi di manovra.",
    icon: AlertTriangle,
    destinatari: "Dipendenti aziendali, quadri, dirigenti, autisti, RSPP",
  },
  {
    id: "guida-emergenza-ambulanze",
    title: "Corso di Guida in Emergenza per Ambulanze",
    description: "Corso specifico per operatori del soccorso sanitario. Formazione teorica e pratica sulla guida in condizioni di emergenza, con attenzione alla sicurezza del paziente e dell'equipaggio.",
    icon: Ambulance,
    destinatari: "Autisti di ambulanza, operatori sanitari, personale 118",
  },
];

const Corsi = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">I Corsi</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Percorsi formativi strutturati per sviluppare competenze di guida sicura 
            in ambito professionale. Ogni corso è modulabile e adattabile alle 
            specifiche esigenze operative.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-8">
            {courses.map((course) => (
              <div key={course.id} className="card-professional">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      <course.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {course.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">Destinatari:</span>{" "}
                      {course.destinatari}
                    </p>
                    <Button variant="outline" asChild>
                      <Link to={`/corsi/${course.id}`}>
                        Dettagli del corso
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 p-6 bg-secondary rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Corsi personalizzabili</h3>
            <p className="text-muted-foreground">
              Tutti i corsi possono essere adattati al contesto operativo specifico: 
              tipologia di veicoli utilizzati, ambiente di lavoro (urbano, montano, 
              autostradale), livello di esperienza dei partecipanti. Contattaci per 
              definire insieme il programma più adatto alle tue esigenze.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted">
        <div className="section-container text-center">
          <p className="text-muted-foreground mb-4">
            Vuoi maggiori informazioni sui nostri corsi?
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contatti">
              Contattaci
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Corsi;
