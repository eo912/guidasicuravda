# Audit tecnico cookie, consenso e privacy – Guida Sicura VDA

Solo analisi: nessun file è stato modificato. Verifica fatta nel codice e con una visita reale al sito (browser mobile, nessun consenso dato).

## Cosa si carica prima del consenso (rilevato)
```text
googletagmanager.com/gtm.js?id=GTM-M4LWRNTD      Google Tag Manager
googletagmanager.com/gtag/js?id=G-YMZ1JRKWLG     GA4
scripts.clarity.ms + clarity.ms/tag/va1u0sab64   Microsoft Clarity (invia già dati: j.clarity.ms/collect)
connect.facebook.net/en_US/fbevents.js           Meta (Facebook) Pixel  <-- non documentato
api.lovable.dev/...                              script esterno non documentato
Cookie scritti subito: _ga, _ga_YMZ1JRKWLG
```

## Esito per punto

1. **Tracker prima del consenso** – `index.html` + contenitore GTM. GTM, GA4, Clarity e Meta Pixel partono al caricamento. **Alta.** Correzione: caricare GTM solo dopo "Accetta", oppure attivare Consent Mode v2 con default "denied" e trigger condizionati nel contenitore.
2. **GTM / GA4 / Clarity / altri** – GA4 e Clarity sono configurati dentro GTM (non nel codice). In GTM è presente anche il **Meta Pixel**, un tracker di marketing vietato dalle regole del progetto. **Alta.** Correzione: rimuovere il tag Meta dal contenitore GTM e pubblicare nuova versione.
3. **Il banner blocca davvero?** – `src/components/CookieBanner.tsx`. No: salva solo `gsvda_cookie_consent` in localStorage, non comunica nulla a GTM. **Alta.** Correzione: al click inviare la scelta a GTM (`gtag('consent','update',…)` + evento dataLayer).
4. **Accetta vs Rifiuta** – stesso effetto tecnico; dopo "Rifiuta" `_ga` resta presente e i tracker restano attivi. Anche la "X" su mobile vale Rifiuta (corretto). **Alta.** Correzione: collegata al punto 3.
5. **Consent Mode v2** – assente: nessun `gtag('consent','default',…)` né parametri `ad_user_data`/`ad_personalization`. **Alta.** Correzione: blocco di default "denied" in `index.html` prima dello snippet GTM, update al consenso.
6. **Coerenza con le policy** – `CookiePolicy.tsx`/`PrivacyPolicy.tsx` dichiarano GA4 e Clarity "solo previo consenso" e "nessun cookie di marketing né condivisione con piattaforme pubblicitarie": falso finché sono attivi caricamento anticipato e Meta Pixel. Il cookie tecnico è in realtà un valore localStorage senza scadenza (dichiarati 12 mesi). Contatto policy `info@guidasicuravda.it` coerente con il sito. **Alta.** Correzione: sistemare il comportamento (non il testo); poi precisare "localStorage" e implementare scadenza 12 mesi.
7. **Script non documentati** – script `api.lovable.dev/…` in testa a `index.html` (inserito dalla piattaforma, non citato in policy) e Meta Pixel. **Media** (Lovable) / **Alta** (Meta). Correzione: rimuovere Meta; verificare la natura dello script Lovable e, se non necessario, eliminarlo o documentarlo.
8. **Revoca/modifica consenso** – nessun modo: il banner non ricompare e la policy rimanda a "cancellare i cookie del browser" (che non cancella localStorage in modo evidente). **Media.** Correzione: link "Gestisci preferenze cookie" nel footer che riapre il banner.
9. **Mobile / UX** – banner fisso in basso, pulsanti Rifiuta/Accetta di pari peso (corretto), ma su mobile copre parte di pagina; il testo non nomina Clarity/GA4. Nessun pulsante "Personalizza". **Bassa.** Correzione: citare gli strumenti nel testo; eventuale padding inferiore alla pagina mentre il banner è visibile.
10. **Caricamenti ridondanti** – GTM caricato una sola volta; nessun doppio GA4 nel codice. Da verificare in GTM che GA4 non sia configurato due volte (tag Google + tag GA4). **Bassa.** Correzione: controllo contenitore.

## Correzione minimale proposta (quando vorrai)
1. In GTM: eliminare il tag Meta Pixel; impostare GA4 e Clarity con requisito di consenso `analytics_storage`.
2. `index.html`: Consent Mode v2 default "denied" prima di GTM.
3. `CookieBanner.tsx`: su Accetta/Rifiuta inviare `consent update` a GTM; ad avvio leggere la scelta salvata e riapplicarla; scadenza 12 mesi.
4. `Footer.tsx`: link "Gestisci preferenze cookie".
5. Policy: aggiornare solo dicitura localStorage/revoca.

Approvando questo piano non verrà applicato nulla automaticamente senza tua indicazione esplicita di procedere con le correzioni.
