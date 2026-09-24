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
                    Il Titolare del trattamento dei dati personali è Edy Orlarei. 
                    Per qualsiasi richiesta relativa al trattamento dei dati è possibile 
                    contattare il titolare all'indirizzo: 
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
                  <li>Tipo di esigenza o corso di interesse</li>
                  <li>Numero indicativo di partecipanti (facoltativo)</li>
                  <li>Località desiderata per lo svolgimento (facoltativo)</li>
                  <li>Contenuto del messaggio</li>
                  <li>Evidenza dell'accettazione della presente informativa, richiesta per poter inviare il modulo</li>
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
                  espresso tramite il banner cookie. La preferenza è salvata nel localStorage del 
                  browser per 12 mesi e può essere modificata o revocata in qualsiasi momento tramite 
                  il link "Gestisci preferenze cookie" nel footer del sito:
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
                  4-bis. Gestione del modulo di contatto
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il modulo di contatto presente sul sito è gestito tramite il servizio 
                  <strong> Formspree</strong> (Formspree Inc.), che riceve, archivia e inoltra 
                  al Titolare le richieste inviate dagli utenti, agendo come responsabile del 
                  trattamento.
                </p>
                <p className="text-muted-foreground mb-4">
                  Formspree utilizza un'infrastruttura situata negli Stati Uniti: l'invio del 
                  modulo comporta quindi un trasferimento dei dati al di fuori dell'Unione Europea. 
                  Per tali trasferimenti Formspree dichiara di fare affidamento sulle Clausole 
                  Contrattuali Standard (Standard Contractual Clauses) approvate dalla Commissione 
                  Europea.
                </p>
                <p className="text-muted-foreground text-sm">
                  Informazioni del fornitore: 
                  <a
                    href="https://formspree.io/security/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    formspree.io/security
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  5. Base giuridica del trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  La gestione delle richieste inviate tramite il modulo di contatto si basa 
                  sulla necessità di eseguire misure precontrattuali richieste dall'interessato 
                  (art. 6, par. 1, lett. b del GDPR). Quando la richiesta non è riconducibile 
                  a misure precontrattuali, il trattamento si basa sul legittimo interesse del 
                  Titolare a rispondere a chi lo contatta (art. 6, par. 1, lett. f del GDPR).
                </p>
                <p className="text-muted-foreground">
                  L'utilizzo degli strumenti di analisi statistica indicati al punto 4 si basa 
                  esclusivamente sul consenso dell'utente (art. 6, par. 1, lett. a del GDPR), 
                  revocabile in qualsiasi momento.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  6. Modalità di trattamento e conservazione
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati sono trattati con strumenti informatici e/o cartacei, con 
                  misure di sicurezza adeguate a garantirne la riservatezza.
                </p>
                <p className="text-muted-foreground">
                  I dati relativi alle richieste di contatto sono conservati per il tempo 
                  necessario a gestire la richiesta e comunque per un periodo massimo di 
                  24 mesi dalla chiusura della richiesta o dall'ultima interazione ad essa 
                  collegata, salvo l'ulteriore conservazione necessaria per adempiere a obblighi 
                  di legge o per la tutela dei diritti del Titolare. In caso di instaurazione 
                  di rapporti contrattuali, i dati sono conservati per il periodo previsto 
                  dalla normativa fiscale e civile.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  7. Comunicazione e diffusione dei dati
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali non vengono diffusi. Possono essere trattati, per nostro 
                  conto e limitatamente a quanto necessario, dai fornitori tecnici che agiscono 
                  come responsabili del trattamento: Formspree Inc. (gestione del modulo di 
                  contatto, punto 4-bis), Google Ireland Limited e Microsoft Ireland Operations 
                  Limited (dati di analisi statistica, punto 4).
                </p>
                <p className="text-muted-foreground">
                  Al di fuori di questi fornitori, i dati non vengono comunicati a terzi, salvo 
                  eventuali obblighi di legge o necessità di tutela dei diritti del Titolare. 
                  I trasferimenti verso paesi extra-UE riguardano esclusivamente i fornitori 
                  sopra indicati e avvengono sulla base delle Clausole Contrattuali Standard 
                  approvate dalla Commissione Europea.
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
                   Ultimo aggiornamento: 24 settembre 2026
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
