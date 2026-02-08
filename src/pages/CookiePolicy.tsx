import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Informativa sull'utilizzo dei cookie su questo sito web
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
                  Cosa sono i cookie
                </h2>
                <p className="text-muted-foreground">
                  I cookie sono piccoli file di testo che i siti web salvano sul 
                  dispositivo dell'utente durante la navigazione. Vengono utilizzati 
                  per memorizzare informazioni e migliorare l'esperienza di navigazione.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Cookie utilizzati su questo sito
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il sito Guida Sicura VDA utilizza esclusivamente:
                </p>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-foreground mb-2">Cookie tecnici (necessari)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Sono cookie essenziali per il corretto funzionamento del sito. 
                    Non richiedono il consenso dell'utente e non possono essere disabilitati.
                  </p>
                  <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                    <li><strong>gsvda_cookie_consent</strong> – memorizza le preferenze di consenso cookie (durata: 12 mesi)</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-foreground mb-2">Cookie di analisi – Google Analytics 4</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Questi cookie sono installati da Google Analytics 4 (GA4), implementato tramite 
                    Google Tag Manager (utilizzato esclusivamente come contenitore tecnico), 
                    e vengono attivati solo previo consenso espresso dell'utente.
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Raccolgono dati statistici aggregati e anonimi sulla navigazione: pagine visitate, 
                    durata della sessione, dispositivo utilizzato, area geografica generica. 
                    Non permettono l'identificazione diretta dell'utente.
                  </p>
                  <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                    <li><strong>_ga</strong> – identificatore anonimo per distinguire gli utenti (durata: 2 anni)</li>
                    <li><strong>_ga_*</strong> – mantiene lo stato della sessione (durata: 2 anni)</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-2">
                    <strong>Responsabile del trattamento:</strong> Google Ireland Limited, Gordon House, 
                    Barrow Street, Dublin 4, Irlanda.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookie di analisi – Microsoft Clarity</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Microsoft Clarity è uno strumento di analisi comportamentale che registra 
                    interazioni anonime (movimenti del mouse, scroll, clic) per comprendere 
                    l'utilizzo del sito e migliorarne l'usabilità. Viene attivato solo previo 
                    consenso espresso dell'utente.
                  </p>
                  <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                    <li><strong>_clck</strong> – identificatore anonimo (durata: 12 mesi)</li>
                    <li><strong>_clsk</strong> – mantiene lo stato della sessione (durata: 1 giorno)</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-2">
                    <strong>Responsabile del trattamento:</strong> Microsoft Ireland Operations Limited, 
                    One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irlanda.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Cookie che NON utilizziamo
                </h2>
                <p className="text-muted-foreground mb-4">
                  Per trasparenza, specifichiamo che questo sito:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Non utilizza cookie di profilazione comportamentale</li>
                  <li>Non utilizza cookie di marketing, remarketing o pubblicitari</li>
                  <li>Non utilizza cookie di terze parti per tracciamento cross-site</li>
                  <li>Non condivide dati di navigazione con piattaforme pubblicitarie</li>
                  <li>Non attiva funzionalità di personalizzazione pubblicitaria in GA4</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Gestione delle preferenze
                </h2>
                <p className="text-muted-foreground mb-4">
                  Al primo accesso al sito, ti viene mostrato un banner che ti permette 
                  di accettare o rifiutare i cookie di analisi. La tua scelta viene 
                  memorizzata per le visite successive.
                </p>
                <p className="text-muted-foreground">
                  Puoi modificare le tue preferenze in qualsiasi momento eliminando 
                  i cookie dal tuo browser. Di seguito le istruzioni per i principali browser:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-4 text-sm">
                  <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li>Firefox: Opzioni → Privacy e sicurezza → Cookie e dati dei siti</li>
                  <li>Safari: Preferenze → Privacy → Gestisci dati siti web</li>
                  <li>Edge: Impostazioni → Privacy, ricerca e servizi → Cookie</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Durata dei cookie
                </h2>
                <p className="text-muted-foreground">
                  I cookie tecnici hanno durata limitata alla sessione di navigazione 
                  o a un massimo di 12 mesi. Il cookie che memorizza le tue preferenze 
                  di consenso ha una durata di 12 mesi.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Contatti
                </h2>
                <p className="text-muted-foreground">
                  Per domande relative a questa Cookie Policy, puoi contattarci all'indirizzo: 
                  <a href="mailto:eo84.EO@gmail.com" className="text-primary hover:underline ml-1">
                    eo84.EO@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">
                   Ultimo aggiornamento: Gennaio 2026
                 </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
