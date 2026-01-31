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
                  <h3 className="font-semibold text-foreground mb-2">Cookie tecnici</h3>
                  <p className="text-muted-foreground text-sm">
                    Sono cookie necessari per il corretto funzionamento del sito. 
                    Non richiedono il consenso dell'utente e non possono essere 
                    disabilitati. Includono cookie per la gestione delle preferenze 
                    di consenso e per il funzionamento base del sito.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookie di analisi (statistici)</h3>
                  <p className="text-muted-foreground text-sm">
                    Questi cookie ci permettono di raccogliere dati anonimi sull'utilizzo 
                    del sito, come il numero di visitatori e le pagine più visualizzate. 
                    Le informazioni sono aggregate e anonime, e ci aiutano a migliorare 
                    l'esperienza di navigazione. Il sito utilizza Google Tag Manager per 
                    la gestione dei tag di analisi. L'utilizzo di questi cookie richiede 
                    il tuo consenso.
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
                  <li>Non utilizza cookie di profilazione</li>
                  <li>Non utilizza cookie di marketing o pubblicitari</li>
                  <li>Non utilizza cookie di terze parti per tracciamento cross-site</li>
                  <li>Non condivide dati di navigazione con piattaforme pubblicitarie</li>
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
                  <a href="mailto:info@guidasicurabda.it" className="text-primary hover:underline ml-1">
                    info@guidasicurabda.it
                  </a>
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">
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

export default CookiePolicy;
