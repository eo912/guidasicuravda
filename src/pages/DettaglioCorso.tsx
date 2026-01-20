import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/Layout";

const courseData: Record<string, {
  title: string;
  subtitle: string;
  descrizione: string;
  obiettivo: string;
  focus: string;
  cosaSiImpara: string[];
  destinatari: string[];
  durata: {
    totale: string;
    suddivisione: string;
    partecipanti: string;
  };
  programmaTeoria: string[];
  programmaPratica: string[];
  note: string;
}> = {
  "guida-sicura-aziendale": {
    title: "Corso Base di Guida Sicura Aziendale",
    subtitle: "Tecnica di guida e controllo del mezzo",
    descrizione: "Formazione pratica per chi guida per lavoro. Un percorso orientato al controllo del veicolo e alla gestione delle situazioni critiche più frequenti sulle strade. Il programma prevede sessioni teoriche sulla dinamica del veicolo e prove pratiche su fondi a bassa aderenza.",
    obiettivo: "Ridurre il rischio negli spostamenti lavorativi quotidiani attraverso il controllo del veicolo e la gestione delle situazioni critiche più comuni.",
    focus: "Tecnica di guida e controllo del mezzo",
    cosaSiImpara: [
      "Corretta posizione di guida e impugnatura del volante",
      "Frenata d'emergenza su fondo scivoloso",
      "Gestione di sottosterzo e sovrasterzo",
      "Utilizzo corretto dei sistemi di sicurezza attiva (ABS, ESP)",
    ],
    destinatari: [
      "Dipendenti che utilizzano veicoli aziendali per scopi professionali",
      "Personale commerciale e tecnici operativi",
      "Fleet Manager e responsabili della sicurezza",
      "Dipendenti in regime di fringe benefit",
    ],
    durata: {
      totale: "8 ore (giornata intera)",
      suddivisione: "1,5 ore di teoria tecnica, 6,5 ore di sessioni pratiche guidate",
      partecipanti: "Massimo 10 allievi per sessione",
    },
    programmaTeoria: [
      "Dati sull'incidentalità stradale e cause principali",
      "Fisica della guida: aderenza, attrito, trasferimenti di carico",
      "Sistemi ADAS: funzionamento e limiti",
      "Manutenzione preventiva del veicolo",
    ],
    programmaPratica: [
      "Regolazione della posizione di guida",
      "Slalom dinamico e gestione della stabilità laterale",
      "Frenata d'emergenza su fondo viscido",
      "Recupero del sottosterzo e sovrasterzo",
      "Frenata differenziata su fondi misti",
    ],
    note: "Il corso può essere adattato alla tipologia di veicoli utilizzati e al contesto operativo specifico.",
  },
  "guida-sicura-difensiva": {
    title: "Corso di Guida Sicura Difensiva",
    subtitle: "Anticipazione del rischio e guida preventiva",
    descrizione: "Formazione mirata alla prevenzione dell'incidente. Un approccio proattivo per riconoscere i pericoli prima che diventino emergenze. Il programma si concentra sull'anticipazione dei rischi stradali e l'adozione di comportamenti di guida consapevoli.",
    obiettivo: "Prevenire l'incidente attraverso l'anticipazione dei rischi, la lettura del contesto e l'adozione di comportamenti di guida consapevoli.",
    focus: "Anticipazione del rischio e guida preventiva",
    cosaSiImpara: [
      "Tecniche di scansione visiva e osservazione avanzata",
      "Gestione delle distanze di sicurezza dinamiche",
      "Riconoscimento dei segnali premonitori di pericolo",
      "Gestione dello stress e della pressione temporale",
    ],
    destinatari: [
      "Quadri e dirigenti con uso quotidiano del veicolo",
      "Autisti professionisti e personale con elevato chilometraggio",
      "RSPP e responsabili della prevenzione",
      "Personale addetto al trasporto persone o merci leggere",
    ],
    durata: {
      totale: "8 ore (giornata singola)",
      suddivisione: "2 ore di teoria applicata, 6 ore di pratica su piazzale e percorsi simulati",
      partecipanti: "Massimo 10 persone per sessione",
    },
    programmaTeoria: [
      "I pilastri della guida difensiva: Visione, Spazio, Tempo",
      "Percezione del rischio e bias cognitivi del conducente",
      "Distanza di sicurezza e tempo di reazione",
      "Gestione delle intersezioni e dei punti ciechi",
    ],
    programmaPratica: [
      "Ottimizzazione della posizione di guida",
      "Esercitazioni di visione periferica",
      "Mantenimento della distanza di sicurezza dinamica",
      "Evitamento di ostacoli improvvisi",
      "Simulazione di scenari urbani e gestione incroci",
    ],
    note: "Il corso può essere personalizzato in base alle esigenze specifiche dell'azienda.",
  },
  "guida-emergenza-ambulanze": {
    title: "Corso di Guida in Emergenza per Ambulanze",
    subtitle: "Guida in emergenza e tutela del paziente",
    descrizione: "Formazione specifica per operatori del soccorso sanitario. Un percorso dedicato alla guida in condizioni di emergenza, bilanciando rapidità operativa e sicurezza di equipaggio e paziente, in conformità con il Codice della Strada.",
    obiettivo: "Gestire la guida in emergenza garantendo la sicurezza di operatori, paziente e utenti della strada, bilanciando rapidità e controllo del mezzo.",
    focus: "Guida in emergenza e tutela del paziente",
    cosaSiImpara: [
      "Guida fluida per garantire stabilità nel vano sanitario",
      "Uso corretto dei segnali acustici e luminosi",
      "Attraversamento sicuro degli incroci in emergenza",
      "Gestione di veicoli a baricentro alto e carichi variabili",
    ],
    destinatari: [
      "Autisti soccorritori dipendenti o volontari",
      "Personale infermieristico e medico su mezzi di soccorso",
      "Operatori 118 e personale di emergenza sanitaria",
      "Personale tecnico logistico addetto ai mezzi sanitari",
    ],
    durata: {
      totale: "8 ore (giornata singola)",
      suddivisione: "1,5 ore di teoria specifica, 6,5 ore di sessioni pratiche dinamiche",
      partecipanti: "Massimo 10 persone per sessione",
    },
    programmaTeoria: [
      "Normativa: diritti e doveri del conducente in emergenza (Artt. 177 e 141 C.d.S.)",
      "Dinamica dei mezzi pesanti: masse, baricentro, oscillazioni",
      "Ergonomia in cabina e strumentazione di bordo",
      "Coordinamento tra conducente ed equipaggio",
    ],
    programmaPratica: [
      "Tecnica di sterzata progressiva per ridurre il rollio",
      "Slalom di precisione con gestione trasferimenti di carico",
      "Frenata modulata su fondi scivolosi",
      "Manovre di scarto per evitamento ostacoli",
      "Retromarcia e manovre in spazi ristretti",
    ],
    note: "Il corso può essere organizzato in collaborazione con enti e associazioni di soccorso.",
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
            {/* Description */}
            <div className="mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.descrizione}
              </p>
            </div>

            {/* Obiettivo */}
            <div className="mb-10 p-6 bg-secondary rounded-lg">
              <h2 className="text-xl font-bold text-foreground mb-2">Obiettivo del corso</h2>
              <p className="text-muted-foreground">{course.obiettivo}</p>
            </div>

            {/* Focus */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Focus formativo</h2>
              <p className="text-muted-foreground">{course.focus}</p>
            </div>

            {/* Cosa si impara */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cosa si impara</h2>
              <ul className="space-y-3">
                {course.cosaSiImpara.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinatari */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Destinatari</h2>
              <ul className="space-y-2">
                {course.destinatari.map((dest, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{dest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Durata e struttura */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Durata e struttura</h2>
              <div className="card-professional mb-4">
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

            {/* Programma teorico */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Programma teorico</h2>
              <div className="card-professional">
                <ul className="space-y-2">
                  {course.programmaTeoria.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Programma pratico */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Programma pratico</h2>
              <div className="card-professional">
                <ul className="space-y-2">
                  {course.programmaPratica.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Note */}
            <div className="p-6 bg-secondary rounded-lg mb-10">
              <p className="text-muted-foreground italic">{course.note}</p>
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
