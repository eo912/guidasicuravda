import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  1. Titolare del trattamento
                </h2>
                <p className="text-muted-foreground">
                  Il Titolare del trattamento dei dati personali è Guida Sicura VDA, 
                  progetto ideato e sviluppato da Orlarei Edy, attualmente in fase di avvio, 
                  contattabile all'indirizzo email: 
                  <a href="mailto:info@guidasicuravda.it" className="text-primary hover:underline ml-1">
                    info@guidasicuravda.it
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  2. Dati raccolti
                </h2>
                <p className="text-muted-foreground mb-4">
                  Raccogliamo esclusivamente i dati forniti volontariamente dall'utente 
                  attraverso il modulo di contatto presente sul sito:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono (facoltativo)</li>
                  <li>Nome dell'ente o organizzazione (facoltativo)</li>
                  <li>Contenuto del messaggio</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  3. Finalità del trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali sono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto</li>
                  <li>Fornire preventivi e informazioni sui corsi di formazione</li>
                  <li>Gestire eventuali rapporti contrattuali con aziende o enti di formazione</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Non effettuiamo attività di profilazione, marketing automatizzato o 
                  invio di newsletter. I dati non vengono utilizzati per finalità 
                  diverse da quelle sopra indicate.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  4. Strumenti di analisi statistica
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il sito utilizza i seguenti strumenti di analisi, attivati solo previo consenso 
                  espresso tramite il banner cookie:
                </p>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Google Analytics 4 (GA4)</strong> – implementato tramite Google Tag Manager 
                  (utilizzato esclusivamente come contenitore tecnico) – per raccogliere dati statistici 
                  aggregati e anonimi sulla navigazione: pagine visitate, durata della sessione, 
                  dispositivo utilizzato, area geografica generica.
                </p>
                <p className="text-muted-foreground mb-4 text-sm">
                  Responsabile del trattamento: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Microsoft Clarity</strong> – strumento di analisi comportamentale che registra 
                  interazioni anonime (movimenti del mouse, scroll, clic) per comprendere l'utilizzo 
                  del sito e migliorarne l'usabilità.
                </p>
                <p className="text-muted-foreground mb-4 text-sm">
                  Responsabile del trattamento: Microsoft Ireland Operations Limited, One Microsoft Place, 
                  South County Business Park, Leopardstown, Dublin 18, Irlanda.
                </p>

                <p className="text-muted-foreground">
                  I dati sono trattati in forma aggregata e non permettono l'identificazione diretta 
                  dell'utente. Non utilizziamo funzionalità di remarketing, pubblicità personalizzata 
                  o profilazione comportamentale. I dati di analytics non sono incrociati con altre 
                  fonti né condivisi con piattaforme pubblicitarie.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  5. Base giuridica del trattamento
                </h2>
                <p className="text-muted-foreground">
                  Il trattamento dei dati si basa sul consenso espresso dall'utente 
                  al momento della compilazione del modulo di contatto (art. 6, par. 1, 
                  lett. a del GDPR) e sulla necessità di eseguire misure precontrattuali 
                  richieste dall'interessato (art. 6, par. 1, lett. b del GDPR).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  6. Modalità di trattamento e conservazione
                </h2>
                <p className="text-muted-foreground">
                  I dati sono trattati con strumenti informatici e/o cartacei, con 
                  misure di sicurezza adeguate a garantirne la riservatezza. I dati 
                  vengono conservati per il tempo strettamente necessario a rispondere 
                  alle richieste ricevute e, in caso di instaurazione di rapporti 
                  contrattuali, per il periodo previsto dalla normativa fiscale e civile.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  7. Comunicazione e diffusione dei dati
                </h2>
                <p className="text-muted-foreground">
                  I dati personali non vengono diffusi né comunicati a terzi, salvo 
                  eventuali obblighi di legge o quanto indicato al punto 4 (Google Ireland Limited 
                  e Microsoft Ireland Operations Limited per i dati di analytics). Non trasferiamo 
                  dati verso paesi extra-UE, ad eccezione dei dati di analytics trattati in conformità 
                  alle Clausole Contrattuali Standard approvate dalla Commissione Europea.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  8. Diritti dell'interessato
                </h2>
                <p className="text-muted-foreground mb-4">
                  In qualità di interessato, hai il diritto di:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Richiederne la rettifica o la cancellazione</li>
                  <li>Limitarne il trattamento</li>
                  <li>Opporti al trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Per esercitare questi diritti, puoi contattarci all'indirizzo: 
                  <a href="mailto:info@guidasicuravda.it" className="text-primary hover:underline ml-1">
                    info@guidasicuravda.it
                  </a>
                </p>
                <p className="text-muted-foreground mt-4">
                  Hai inoltre il diritto di proporre reclamo all'Autorità Garante 
                  per la protezione dei dati personali (www.garanteprivacy.it).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  9. Aggiornamenti
                </h2>
                <p className="text-muted-foreground">
                  La presente informativa può essere aggiornata. Eventuali modifiche 
                  saranno pubblicate su questa pagina con indicazione della data di 
                  ultimo aggiornamento.
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  Ultimo aggiornamento: Gennaio 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
