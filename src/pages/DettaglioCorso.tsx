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
    subtitle: "Formazione pratica per chi guida per lavoro",
    description: "Il programma è volto a sensibilizzare i conducenti sui rischi legati alla circolazione stradale e a fornire le competenze tecniche per prevenire situazioni critiche. Attraverso l'analisi della dinamica del veicolo e prove pratiche su fondi a bassa aderenza, il partecipante apprende a gestire il mezzo con maggiore consapevolezza, riducendo la probabilità di sinistri.",
    obiettivi: [
      "Regolare correttamente la posizione di guida per il massimo controllo dei comandi.",
      "Comprendere l'influenza della velocità sugli spazi di arresto e sulla forza d'impatto.",
      "Sperimentare l'efficacia e il corretto utilizzo dei sistemi di sicurezza attiva (ABS, ESP).",
      "Riconoscere e anticipare i pericoli derivanti da condizioni meteorologiche avverse o distrazioni.",
      "Acquisire una tecnica di sterzata fluida e precisa per la gestione delle traiettorie.",
    ],
    destinatari: [
      "Dipendenti che utilizzano veicoli aziendali per scopi professionali o in regime di fringe benefit.",
      "Personale commerciale e tecnici che operano quotidianamente su strada.",
      "Responsabili della sicurezza aziendale e Fleet Manager.",
      "Dipendenti che intendono migliorare la propria sicurezza negli spostamenti casa-lavoro.",
    ],
    durata: {
      totale: "8 ore (giornata intera)",
      suddivisione: "1,5 ore di teoria tecnica, 6,5 ore di sessioni pratiche guidate",
      partecipanti: "Massimo 12 allievi, al fine di garantire un rapporto costante con gli istruttori",
    },
    programmaTeoria: [
      "Analisi dei dati sull'incidentalità stradale e focus sulle cause principali.",
      "La fisica della guida: cerchio di aderenza, attrito e trasferimenti di carico.",
      "Sistemi di assistenza alla guida (ADAS): come funzionano e perché non devono indurre a una falsa sicurezza.",
      "Manutenzione preventiva: controllo pneumatici, livelli e visibilità.",
      "Ergonomia e gestione dello stress al volante.",
    ],
    programmaPratica: [
      "Posizione di guida: regolazione sedile, specchi e impugnatura corretta del volante.",
      "Slalom dinamico: gestione della direzionalità e analisi della stabilità laterale.",
      "Frenata di emergenza: simulazione di arresto immediato su fondo viscido con e senza ostacoli.",
      "Sottosterzo: gestione della perdita di aderenza dell'asse anteriore in curva.",
      "Sovrasterzo di potenza/inerzia: tecniche di base per il recupero della stabilità del posteriore.",
      "Controllo della frenata differenziata: gestione del veicolo con due ruote su fondo scivoloso e due su asfalto asciutto.",
    ],
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
    durata: {
      totale: "8 ore (giornata intera)",
      suddivisione: "2 ore di teoria, 6 ore di sessioni pratiche",
      partecipanti: "Massimo 10 allievi per garantire un elevato livello di attenzione individuale",
    },
    programmaTeoria: [
      "Approfondimento su dinamica del veicolo e fisica della frenata.",
      "Comportamento in curva e percezione del rischio.",
      "Strategie di guida difensiva e anticipazione dei pericoli.",
    ],
    programmaPratica: [
      "Esercitazioni intensive su pista con superfici a bassa aderenza.",
      "Prove di frenata d'emergenza.",
      "Evitamento ostacoli in velocità.",
      "Controllo di sbandamento e slalom.",
    ],
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
    durata: {
      totale: "8 ore (giornata intera)",
      suddivisione: "2 ore di teoria, 6 ore di sessioni pratiche con ambulanza",
      partecipanti: "Massimo 8 allievi per garantire la massima sicurezza",
    },
    programmaTeoria: [
      "Normativa sulla circolazione dei veicoli di emergenza.",
      "Responsabilità del conducente.",
      "Comunicazione con la centrale operativa.",
      "Gestione dello stress.",
    ],
    programmaPratica: [
      "Manovre in spazi ristretti e retromarcia.",
      "Guida in emergenza simulata.",
      "Gestione del paziente durante il trasporto.",
      "Esercitazioni specifiche con ambulanza o veicolo equivalente.",
    ],
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
