# Audit Guida Sicura VDA (nessun file modificato)

## Criticità ALTE

1. **Cookie e consenso (index.html, CookieBanner)**: Google Tag Manager si carica a ogni visita, prima che l'utente scelga. I pulsanti "Accetta" e "Rifiuta" salvano solo la scelta e non bloccano né attivano GA4/Clarity. È in contraddizione con la Cookie Policy (Clarity descritto come opt-in) e con il GDPR.
2. **Script esterno sconosciuto in head (index.html)**: prima di GTM c'è uno script `api.lovable.dev/...` che non è documentato nella Cookie Policy. Va verificato o rimosso.
3. **SEO per pagina assente**: tutte le pagine condividono lo stesso title e la stessa meta description della home. Anche il canonical punta sempre alla home, quindi Corsi, Metodo, Istruttori e le schede corso rischiano di non essere indicizzate come pagine distinte.
4. **Sitemap incompleta (public/sitemap.xml)**: mancano le 3 schede corso `/corsi/...`, che sono le pagine con più contenuto.

## Criticità MEDIE

5. **H1 della home poco utile**: l'H1 è solo "GUIDA SICURA VDA". Il messaggio chiave, "Formazione pratica alla guida sicura per aziende", è un paragrafo e non un titolo.
6. **Istruttori, testo introduttivo contraddittorio (Istruttori.tsx, riga 32)**: dice "uno degli istruttori è associato ad Assoformatori", ma entrambe le schede riportano "Associato Assoformatori".
7. **Area operativa (Contatti)**: "tutto il territorio nazionale" contrasta con l'identità "VDA" (Valle d'Aosta) e con l'immagine alpina. Serve chiarire se l'ambito è regionale o nazionale.
8. **Target privati**: il sito è interamente B2B e non dice mai se i privati possono iscriversi. Se i privati sono esclusi, conviene dirlo esplicitamente.
9. **Termine "preventivo" (Contatti, righe 102 e 146)**: è coerente con la scelta di non mostrare prezzi. Però il form non chiede il numero di partecipanti né il corso di interesse, dati che servirebbero proprio per un preventivo.
10. **Home, sezione "A chi ci rivolgiamo"**: il riquadro a destra contiene solo un pulsante. Resta un grande spazio vuoto, soprattutto su desktop, ed è un residuo della vecchia sezione "cataloghi formativi".
11. **Home, logo Assoformatori**: compare con l'intestazione "Riferimenti formativi", mentre la pagina Metodo usa "Sistema formativo di riferimento" e aggiunge CTS e RINA. La terminologia non è uniforme.
12. **Moduli opzionali (Corsi)**: "Trasporto merci sensibili" e altre voci non trovano riscontro nelle schede dettaglio. Alcuni servizi sono promessi ma non descritti.

## Criticità BASSE

13. **Header su mobile**: sotto i 640px si vede solo il quadrato "GS", senza il nome del sito.
14. **Pulsante menu mobile**: manca un'etichetta di accessibilità (aria-label).
15. **Footer**: non c'è il link "Home" nella navigazione, e i titoli di colonna sono H4 senza un H2/H3 prima.
16. **Pagina 404 (NotFound.tsx)**: è la versione di default, in inglese e senza header e footer del sito.
17. **Messaggio di errore del form**: rimanda a info@guidasicuravda.it. È corretto, ma va verificato che la casella sia davvero attiva.
18. **Nomi invertiti**: "Orlarei Edy" nelle schede istruttori, "Edy Orlarei" nel footer e nella Privacy. Conviene uniformare.
19. **Immagine social (og:image)**: è uno screenshot di anteprima vecchio, probabilmente precedente all'hero alpino.
20. **Cookie banner su mobile**: fisso in basso, può coprire i pulsanti dei form finché l'utente non sceglie.

## Aspetti coerenti (nessuna azione)
- 8 partecipanti ovunque; durate 8/16/16 ore uguali tra Corsi e schede dettaglio.
- Nessun prezzo, nessun telefono aziendale, nessun riferimento sportivo (solo negazioni esplicite nel Metodo).
- Email unica info@guidasicuravda.it in footer, contatti e policy.
- Titolare Privacy: solo Edy Orlarei, come richiesto.

## Passo successivo proposto
Se approvi, posso correggere nell'ordine: 1-4 (alte), poi 5-12, poi 13-20. In alternativa indicami solo i punti da sistemare.
