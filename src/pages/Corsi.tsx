import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Ambulance } from "lucide-react";
import Layout from "@/components/Layout";

const courses = [
  {
    id: "guida-sicura-base",
    title: "Corso di Guida Sicura Base",
    icon: Car,
    finalita: "Prevenzione del rischio stradale e in itinere attraverso l'acquisizione delle tecniche fondamentali di guida sicura.",
    durata: "6–8 ore",
    partecipanti: "Massimo 8 partecipanti",
    programma: [
      "Guida preventiva e consapevole",
      "Corretta postura e impugnatura del volante",
      "Tecniche di frenata d'emergenza",
      "Gestione delle situazioni critiche più comuni",
    ],
    nota: "Corso introduttivo, ideale come primo intervento formativo in azienda.",
  },
  {
    id: "guida-sicura-avanzato",
    title: "Corso Avanzato di Guida Sicura Aziendale",
    icon: Shield,
    finalita: "Sviluppare competenze avanzate di guida difensiva, focalizzate sulla percezione del rischio e sulla prevenzione attiva degli incidenti.",
    durata: "8 ore (2 ore teoria applicata + 6 ore pratica)",
    partecipanti: "Massimo 8 partecipanti",
    programma: [
      "Guida difensiva: Visione, Spazio, Tempo",
      "Percezione del rischio e bias cognitivi",
      "Distanza di sicurezza e tempo di reazione",
      "Gestione intersezioni e punti ciechi",
      "Esercitazioni pratiche su visione, distanza, evitamento ostacoli",
    ],
    nota: "Livello più alto del catalogo standard. Base di partenza per eventuali personalizzazioni.",
  },
  {
    id: "guida-emergenza-ambulanze",
    title: "Corso Guida Sicura Ambulanza / Emergenza",
    icon: Ambulance,
    finalita: "Gestione della guida in contesti di emergenza e alta responsabilità, garantendo sicurezza a operatori, paziente e utenti della strada.",
    durata: "8 ore",
    partecipanti: "Massimo 8 partecipanti",
    programma: [
      "Guida operativa in emergenza",
      "Gestione del rischio specifico",
      "Scenari critici e manovre di sicurezza",
      "Coordinamento tra conducente ed equipaggio",
    ],
    nota: "Corso specialistico destinato a operatori del soccorso sanitario.",
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
            in ambito professionale. Ogni corso è progettato per rispondere alle 
            esigenze operative delle aziende e può essere adattato a contesti specifici.
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
                    
                    <div className="mb-4 p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-semibold text-foreground mb-1">Finalità</p>
                      <p className="text-sm text-muted-foreground">{course.finalita}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Durata</p>
                        <p className="text-sm text-muted-foreground">{course.durata}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Partecipanti</p>
                        <p className="text-sm text-muted-foreground">{course.partecipanti}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Programma sintetico</p>
                      <ul className="space-y-1">
                        {course.programma.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      {course.nota}
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

          {/* Nota personalizzazione */}
          <div className="mt-12 p-6 bg-secondary rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Personalizzazione dei corsi</h3>
            <p className="text-muted-foreground">
              I corsi possono essere adattati o personalizzati in base alle esigenze 
              operative dell'azienda: tipologia di veicoli, contesto di lavoro, 
              livello di esperienza dei partecipanti. Le personalizzazioni vengono 
              definite a seguito di colloquio conoscitivo.
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
