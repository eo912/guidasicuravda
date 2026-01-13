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
      partecipanti: "Massimo 10 allievi, al fine di garantire un rapporto costante con gli istruttori",
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
  "guida-sicura-difensiva": {
    title: "Corso di Guida Sicura Difensiva",
    subtitle: "Prevenzione attiva e anticipazione del rischio",
    description: "Il corso mira a trasformare l'attitudine del conducente da passiva a proattiva, fornendo gli strumenti cognitivi e tecnici per identificare i pericoli prima che diventino emergenze. Il programma si concentra sull'anticipazione dei rischi stradali, l'ottimizzazione degli spazi di manovra e l'adozione di protocolli di guida che garantiscano la massima sicurezza anche in presenza di errori altrui.",
    obiettivi: [
      "Implementare tecniche di scansione visiva e analisi costante dell'ambiente stradale.",
      "Definire e mantenere i corretti \"cuscinetti di spazio\" intorno al veicolo in ogni condizione di traffico.",
      "Ridurre l'usura del mezzo e i consumi attraverso una conduzione fluida e razionale.",
      "Riconoscere i segnali premonitori di potenziali collisioni agli incroci e nei sorpassi.",
      "Gestire correttamente lo stress e la pressione temporale per evitare comportamenti a rischio.",
    ],
    destinatari: [
      "Dipendenti aziendali con elevata esposizione al rischio stradale (km annui elevati).",
      "Quadri e dirigenti che utilizzano il veicolo come strumento di lavoro quotidiano.",
      "Autisti addetti al trasporto di persone o merci leggere.",
      "Responsabili della sicurezza (RSPP) che intendono promuovere una cultura della prevenzione.",
    ],
    durata: {
      totale: "8 ore (giornata singola)",
      suddivisione: "2 ore di teoria applicata, 6 ore di pratica su piazzale e percorsi simulati",
      partecipanti: "Massimo 10 persone per sessione",
    },
    programmaTeoria: [
      "I pilastri della guida difensiva: Visione, Spazio, Tempo.",
      "Analisi psicologica: la percezione del rischio e i \"bias\" cognitivi del conducente.",
      "Distanza di sicurezza e tempo di reazione: calcoli realistici basati sulla cinematica.",
      "Gestione delle intersezioni e dei punti ciechi (blind spots).",
      "La regola dei due secondi e l'adattamento alle condizioni meteo-climatiche.",
    ],
    programmaPratica: [
      "Ottimizzazione della posizione di guida per il mantenimento dei tempi di reazione.",
      "Esercitazioni di visione periferica: gestione dello sguardo durante lo slalom dinamico.",
      "Mantenimento della distanza di sicurezza dinamica: frenate simulate a diverse velocità.",
      "Manovre di emergenza controllata: evitamento di ostacoli improvvisi senza perdita di traiettoria.",
      "Percezione degli ingombri: gestione degli spazi critici e delle distanze laterali.",
      "Simulazione di scenari urbani: gestione delle priorità e prevenzione del rischio agli incroci.",
    ],
    note: "Il corso può essere personalizzato in base alle esigenze specifiche dell'azienda e al tipo di veicoli utilizzati.",
  },
  "guida-emergenza-ambulanze": {
    title: "Corso di Guida in Emergenza per Ambulanze",
    subtitle: "Formazione specifica per il soccorso sanitario",
    description: "Il corso è specificamente progettato per il personale soccorritore, tecnico e sanitario addetto alla conduzione di mezzi di soccorso. Il programma si focalizza sulla gestione sicura delle priorità di intervento, coniugando la necessità di rapidità con l'assoluta tutela dell'equipaggio, del paziente trasportato e degli altri utenti della strada, in conformità con le norme del Codice della Strada.",
    obiettivi: [
      "Sviluppare una guida fluida e stabilizzante per garantire l'integrità del paziente e del personale nel vano sanitario.",
      "Ottimizzare l'uso dei segnali acustici e luminosi per massimizzare la visibilità e la prevedibilità del mezzo.",
      "Gestire gli spazi d'arresto e le manovre d'evitamento con veicoli a baricentro alto e carichi variabili.",
      "Implementare tecniche di osservazione avanzata per l'attraversamento degli incroci in regime di emergenza.",
      "Mitigare i rischi derivanti dallo stress psicofisico e dalla percezione alterata della velocità.",
    ],
    destinatari: [
      "Autisti soccorritori dipendenti o volontari di enti e associazioni.",
      "Personale infermieristico e medico che opera su mezzi di soccorso avanzato.",
      "Personale tecnico logistico addetto alla movimentazione dei mezzi sanitari.",
    ],
    durata: {
      totale: "8 ore (giornata singola)",
      suddivisione: "1,5 ore di teoria specifica, 6,5 ore di sessioni pratiche dinamiche",
      partecipanti: "Massimo 10 persone, per garantire un monitoraggio costante di ogni manovra",
    },
    programmaTeoria: [
      "Aspetti normativi: diritti e doveri del conducente in emergenza (Artt. 177 e 141 C.d.S.).",
      "Dinamica dei mezzi pesanti e speciali: masse, baricentro alto e oscillazioni del carico.",
      "Ergonomia in cabina di guida e gestione della strumentazione di bordo.",
      "Fisica della frenata e dell'aderenza applicata a veicoli di categoria M1/N1 allestiti.",
      "Comunicazione e coordinamento tra conducente ed equipaggio durante il trasporto critico.",
    ],
    programmaPratica: [
      "Posizione di guida e tecnica di sterzata progressiva per minimizzare il rollio del mezzo.",
      "Slalom di precisione: gestione degli ingombri e dei trasferimenti di carico laterali.",
      "Frenata d'emergenza modulata: arresto in sicurezza su fondi scivolosi con veicolo a pieno carico.",
      "Evitamento ostacolo improvviso: manovre di scarto per simulare l'imprevisto urbano.",
      "Gestione delle traiettorie a raggio costante per la tutela del comfort clinico nel vano sanitario.",
      "Retromarcia di precisione e manovre in spazi ristretti con ausilio di specchi e sistemi visivi.",
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
