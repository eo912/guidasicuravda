import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/Layout";

const courseData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  obiettivi: string[];
  destinatari: string[];
  struttura: {
    teoria: string;
    pratica: string;
  };
  note: string;
}> = {
  "guida-sicura-aziendale": {
    title: "Corso Base di Guida Sicura Aziendale",
    subtitle: "Formazione pratica per chi guida per lavoro",
    description: "Il corso fornisce le competenze fondamentali per una guida consapevole e sicura in ambito lavorativo. Attraverso sessioni teoriche e pratiche, i partecipanti apprendono tecniche per riconoscere e prevenire situazioni di rischio, migliorando il proprio stile di guida quotidiano.",
    obiettivi: [
      "Sviluppare consapevolezza dei rischi legati alla guida su strada",
      "Acquisire tecniche di guida preventiva",
      "Migliorare la gestione del veicolo in condizioni normali e avverse",
      "Comprendere l'importanza della manutenzione e dei controlli pre-partenza",
      "Ridurre comportamenti a rischio (distrazione, stanchezza, velocità)",
    ],
    destinatari: [
      "Dipendenti che utilizzano veicoli aziendali",
      "Personale commerciale e tecnico con trasferte frequenti",
      "Autisti non professionisti",
      "Neoassunti con mansioni che prevedono la guida",
    ],
    struttura: {
      teoria: "Sessione in aula sui principi della guida sicura, analisi delle principali cause di incidente, normativa di riferimento e responsabilità del conducente.",
      pratica: "Esercitazioni su area dedicata con simulazione di situazioni critiche: frenata d'emergenza, evitamento ostacoli, gestione del sottosterzo e sovrasterzo in ambiente controllato.",
    },
    note: "Il corso può essere adattato alla tipologia di veicoli utilizzati (autovetture, furgoni, veicoli commerciali) e al contesto operativo specifico.",
  },
  "guida-difensiva-emergenza": {
    title: "Corso di Guida Difensiva ed Emergenza",
    subtitle: "Formazione avanzata per situazioni critiche",
    description: "Corso di livello avanzato rivolto a chi ha già esperienza di guida professionale e necessita di competenze specifiche per affrontare situazioni impreviste. Il programma si concentra sulla prevenzione attiva e sulla gestione del veicolo in condizioni limite.",
    obiettivi: [
      "Anticipare e prevenire situazioni di pericolo attraverso la guida difensiva",
      "Gestire il veicolo in condizioni di emergenza (frenata su fondo bagnato, aquaplaning, ghiaccio)",
      "Controllare il veicolo in caso di perdita di aderenza",
      "Eseguire manovre evasive in sicurezza",
      "Mantenere la calma e prendere decisioni rapide in situazioni critiche",
    ],
    destinatari: [
      "Autisti professionisti con esperienza",
      "Operatori di infrastrutture stradali e autostradali",
      "Personale addetto alla viabilità",
      "Responsabili flotte aziendali",
    ],
    struttura: {
      teoria: "Approfondimento su dinamica del veicolo, fisica della frenata, comportamento in curva, percezione del rischio e strategie di guida difensiva.",
      pratica: "Esercitazioni intensive su pista con superfici a bassa aderenza, prove di frenata d'emergenza, evitamento ostacoli in velocità, controllo di sbandamento e slalom.",
    },
    note: "Il corso è particolarmente indicato per operatori che lavorano in contesti infrastrutturali (gallerie, tratti autostradali) o in condizioni meteorologiche variabili.",
  },
  "guida-emergenza-ambulanze": {
    title: "Corso di Guida in Emergenza per Ambulanze",
    subtitle: "Formazione specifica per il soccorso sanitario",
    description: "Corso dedicato agli autisti di ambulanza e al personale del soccorso sanitario. Il programma affronta le peculiarità della guida in emergenza, con particolare attenzione alla sicurezza del paziente, dell'equipaggio e degli altri utenti della strada.",
    obiettivi: [
      "Condurre il veicolo di emergenza in modo sicuro ed efficiente",
      "Gestire la guida con paziente a bordo, minimizzando stress e scosse",
      "Affrontare situazioni di traffico intenso e attraversamenti critici",
      "Utilizzare correttamente i dispositivi di segnalazione (sirena, lampeggianti)",
      "Prevenire incidenti durante le missioni di soccorso",
    ],
    destinatari: [
      "Autisti di ambulanza",
      "Soccorritori e volontari del 118",
      "Operatori sanitari con funzioni di guida",
      "Personale di associazioni di soccorso",
    ],
    struttura: {
      teoria: "Normativa sulla circolazione dei veicoli di emergenza, responsabilità del conducente, comunicazione con la centrale operativa, gestione dello stress.",
      pratica: "Esercitazioni specifiche con ambulanza o veicolo equivalente: manovre in spazi ristretti, retromarcia, guida in emergenza simulata, gestione del paziente durante il trasporto.",
    },
    note: "Il corso può essere organizzato in collaborazione con enti e associazioni di soccorso, utilizzando i veicoli operativi o mezzi messi a disposizione.",
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
                {course.description}
              </p>
            </div>

            {/* Obiettivi */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Obiettivi formativi</h2>
              <ul className="space-y-3">
                {course.obiettivi.map((obiettivo, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{obiettivo}</span>
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

            {/* Struttura */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Struttura del corso</h2>
              <div className="grid gap-4">
                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">Parte teorica</h3>
                  <p className="text-muted-foreground">{course.struttura.teoria}</p>
                </div>
                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">Parte pratica</h3>
                  <p className="text-muted-foreground">{course.struttura.pratica}</p>
                </div>
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
