import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, AlertTriangle, Ambulance } from "lucide-react";
import Layout from "@/components/Layout";

const courses = [
  {
    id: "guida-sicura-aziendale",
    title: "Corso Base di Guida Sicura Aziendale",
    icon: Car,
    descrizione: "Formazione pratica per chi guida per lavoro. Un percorso orientato al controllo del veicolo e alla gestione delle situazioni critiche più frequenti sulle strade.",
    obiettivo: "Ridurre il rischio negli spostamenti lavorativi quotidiani attraverso il controllo del veicolo e la gestione delle situazioni critiche più comuni.",
    focus: "Tecnica di guida e controllo del mezzo",
    cosaSiImpara: [
      "Corretta posizione di guida e impugnatura del volante",
      "Frenata d'emergenza su fondo scivoloso",
      "Gestione di sottosterzo e sovrasterzo",
      "Utilizzo corretto dei sistemi di sicurezza attiva (ABS, ESP)",
    ],
    destinatari: "Dipendenti aziendali, personale commerciale, tecnici, fleet manager",
  },
  {
    id: "guida-sicura-difensiva",
    title: "Corso di Guida Sicura Difensiva",
    icon: AlertTriangle,
    descrizione: "Formazione mirata alla prevenzione dell'incidente. Un approccio proattivo per riconoscere i pericoli prima che diventino emergenze e adottare comportamenti di guida consapevoli.",
    obiettivo: "Prevenire l'incidente attraverso l'anticipazione dei rischi, la lettura del contesto e l'adozione di comportamenti di guida consapevoli.",
    focus: "Anticipazione del rischio e guida preventiva",
    cosaSiImpara: [
      "Tecniche di scansione visiva e osservazione avanzata",
      "Gestione delle distanze di sicurezza dinamiche",
      "Riconoscimento dei segnali premonitori di pericolo",
      "Gestione dello stress e della pressione temporale",
    ],
    destinatari: "Quadri e dirigenti, autisti professionisti, RSPP, personale con elevato chilometraggio",
  },
  {
    id: "guida-emergenza-ambulanze",
    title: "Corso di Guida in Emergenza per Ambulanze",
    icon: Ambulance,
    descrizione: "Formazione specifica per operatori del soccorso sanitario. Un percorso dedicato alla guida in condizioni di emergenza, bilanciando rapidità operativa e sicurezza di equipaggio e paziente.",
    obiettivo: "Gestire la guida in emergenza garantendo la sicurezza di operatori, paziente e utenti della strada, bilanciando rapidità e controllo del mezzo.",
    focus: "Guida in emergenza e tutela del paziente",
    cosaSiImpara: [
      "Guida fluida per garantire stabilità nel vano sanitario",
      "Uso corretto dei segnali acustici e luminosi",
      "Attraversamento sicuro degli incroci in emergenza",
      "Gestione di veicoli a baricentro alto e carichi variabili",
    ],
    destinatari: "Autisti soccorritori, personale 118, operatori sanitari su mezzi di emergenza",
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
                      {course.descrizione}
                    </p>
                    
                    <div className="mb-4 p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-semibold text-foreground mb-1">Obiettivo</p>
                      <p className="text-sm text-muted-foreground">{course.obiettivo}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-1">Focus formativo</p>
                      <p className="text-sm text-muted-foreground">{course.focus}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Cosa si impara</p>
                      <ul className="space-y-1">
                        {course.cosaSiImpara.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">Destinatari:</span>{" "}
                      {course.destinatari}
                    </p>
                    
                    <Button variant="outline" asChild>
                      <Link to={`/corsi/${course.id}`}>
                        Programma completo
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
