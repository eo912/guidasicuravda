import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/Layout";

const courseData: Record<string, {
  title: string;
  subtitle: string;
  finalita: string;
  durata: {
    totale: string;
    suddivisione: string;
    partecipanti: string;
  };
  contenuti: string[];
  attivita: string[];
  destinatari: string[];
  nota: string;
}> = {
  "guida-sicura-base": {
    title: "Corso di Guida Sicura Base",
    subtitle: "Prevenzione del rischio stradale e in itinere",
    finalita: "Prevenzione del rischio stradale e in itinere attraverso l'acquisizione delle tecniche fondamentali di guida sicura. Il corso fornisce le basi per una guida consapevole e orientata alla sicurezza, riducendo i comportamenti a rischio negli spostamenti quotidiani.",
    durata: {
      totale: "8 ore",
      suddivisione: "Percorso integrato con attività in aula e sessioni pratiche guidate",
      partecipanti: "Massimo 8 partecipanti per sessione",
    },
    contenuti: [
      "Dati sull'incidentalità stradale e principali fattori di rischio",
      "Principi di guida preventiva e consapevole",
      "Postura corretta e impugnatura del volante",
      "Funzionamento dei sistemi di sicurezza attiva (ABS, ESP)",
    ],
    attivita: [
      "Regolazione ottimale della posizione di guida",
      "Tecniche di frenata d'emergenza",
      "Gestione del veicolo su fondo scivoloso",
      "Controllo del sottosterzo e sovrasterzo",
      "Gestione delle situazioni critiche più comuni",
    ],
    destinatari: [
      "Dipendenti che utilizzano veicoli aziendali",
      "Personale commerciale e tecnici operativi",
      "Nuovi assunti con mansioni di guida",
      "Aziende che avviano un percorso formativo sulla sicurezza stradale",
    ],
    nota: "Corso introduttivo, ideale come primo intervento formativo in azienda. Può essere propedeutico al corso avanzato.",
  },
  "guida-sicura-secondo-livello": {
    title: "Guida Sicura – 2° Livello",
    subtitle: "Formazione avanzata modulare per contesti professionali",
    finalita: "Sviluppare competenze avanzate di guida sicura, focalizzate sulla percezione del rischio e sulla prevenzione attiva degli incidenti. Questo corso rappresenta il livello più alto del catalogo standard ed è la base di partenza per eventuali personalizzazioni tramite moduli opzionali.",
    durata: {
      totale: "16 ore",
      suddivisione: "Percorso integrato con attività in aula e sessioni pratiche su piazzale e percorsi simulati",
      partecipanti: "Massimo 8 partecipanti per sessione",
    },
    contenuti: [
      "I pilastri della guida preventiva: Visione, Spazio, Tempo",
      "Percezione del rischio e bias cognitivi del conducente",
      "Distanza di sicurezza e tempo di reazione",
      "Gestione delle intersezioni e dei punti ciechi",
      "Fattori di distrazione e gestione dello stress alla guida",
    ],
    attivita: [
      "Esercitazioni di visione periferica e scansione attiva",
      "Mantenimento della distanza di sicurezza dinamica",
      "Evitamento di ostacoli improvvisi",
      "Simulazione di scenari urbani e gestione incroci",
      "Frenata d'emergenza combinata a manovre di evitamento",
      "Gestione del veicolo in condizioni di aderenza ridotta",
    ],
    destinatari: [
      "Quadri e dirigenti con uso frequente del veicolo",
      "Personale con elevato chilometraggio annuo",
      "RSPP e responsabili della prevenzione",
      "Fleet Manager e responsabili parco auto",
      "Personale addetto al trasporto persone o merci leggere",
    ],
    nota: "Livello più alto del catalogo standard. Può essere integrato con moduli opzionali definiti in base alle esigenze operative specifiche dell'azienda.",
  },
  "guida-emergenza-ambulanze": {
    title: "Corso Guida Sicura Ambulanza / Emergenza",
    subtitle: "Guida in emergenza e tutela del paziente",
    finalita: "Gestione della guida in contesti di emergenza e alta responsabilità, garantendo sicurezza a operatori, paziente e utenti della strada. Il corso bilancia la necessità di rapidità operativa con il controllo del mezzo e la tutela di tutte le persone coinvolte.",
    durata: {
      totale: "16 ore",
      suddivisione: "Percorso integrato con attività in aula e sessioni pratiche dinamiche",
      partecipanti: "Massimo 8 partecipanti per sessione",
    },
    contenuti: [
      "Normativa: diritti e doveri del conducente in emergenza (Artt. 177 e 141 C.d.S.)",
      "Dinamica dei mezzi pesanti: masse, baricentro, oscillazioni",
      "Ergonomia in cabina e strumentazione di bordo",
      "Coordinamento tra conducente ed equipaggio sanitario",
      "Gestione del rischio specifico nei contesti di emergenza",
    ],
    attivita: [
      "Tecnica di sterzata progressiva per ridurre il rollio",
      "Guida fluida per garantire stabilità nel vano sanitario",
      "Slalom di precisione con gestione trasferimenti di carico",
      "Frenata modulata su fondi scivolosi",
      "Attraversamento sicuro degli incroci in emergenza",
      "Manovre di scarto per evitamento ostacoli",
      "Retromarcia e manovre in spazi ristretti",
    ],
    destinatari: [
      "Autisti soccorritori dipendenti o volontari",
      "Personale infermieristico e medico su mezzi di soccorso",
      "Operatori 118 e personale di emergenza sanitaria",
      "Personale tecnico logistico addetto ai mezzi sanitari",
    ],
    nota: "Corso specialistico destinato a operatori del soccorso sanitario. Può essere organizzato in collaborazione con enti e associazioni di soccorso.",
  },
};

const DettaglioCorso = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  if (!courseId || !courseData[courseId]) {
    return <Navigate to="/corsi" replace />;
  }

  const course = courseData[courseId];

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <Link 
            to="/corsi" 
            className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Torna ai corsi
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
          <p className="text-lg text-primary-foreground/80">{course.subtitle}</p>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            {/* Finalità */}
            <div className="mb-10 p-6 bg-secondary rounded-lg">
              <h2 className="text-xl font-bold text-foreground mb-2">Finalità</h2>
              <p className="text-muted-foreground">{course.finalita}</p>
            </div>

            {/* Durata e struttura */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Durata e struttura</h2>
              <div className="card-professional">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durata complessiva:</strong> {course.durata.totale}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Suddivisione:</strong> {course.durata.suddivisione}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Numero partecipanti:</strong> {course.durata.partecipanti}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contenuti formativi */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contenuti formativi</h2>
              <div className="card-professional">
                <ul className="space-y-2">
                  {course.contenuti.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Attività previste */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Attività previste</h2>
              <div className="card-professional">
                <ul className="space-y-2">
                  {course.attivita.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Destinatari */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Destinatari</h2>
              <ul className="space-y-2">
                {course.destinatari.map((dest, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{dest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nota */}
            <div className="p-6 bg-secondary rounded-lg mb-10">
              <p className="text-muted-foreground italic">{course.nota}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contatti">Richiedi informazioni</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/corsi">Vedi tutti i corsi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DettaglioCorso;
