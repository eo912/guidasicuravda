# Audit email e form contatti — Guida Sicura VDA (nessuna modifica applicata)

## 1. Indirizzo mostrato
Solo `info@guidasicuravda.it`, sempre come link mailto:
- Footer.tsx (tutte le pagine)
- Contatti.tsx (blocco Email + messaggio di errore del form)
- PrivacyPolicy.tsx (Titolare, diritti), CookiePolicy.tsx
Nessun residuo di eo84.EO@gmail.com né numeri di telefono.

## 2-3. Funzionamento form (Contatti.tsx)
- `handleSubmit` → `fetch` POST JSON a Formspree `https://formspree.io/f/xpqvjjdl`.
- Nessuna funzione server del progetto, nessun database: l'email la invia Formspree.
- Destinatario: NON è nel codice, è configurato nell'account Formspree (non verificabile da qui).
- Mittente: Formspree. Reply-To: Formspree usa il campo `email` solo se si chiama esattamente `email` o `_replyto` → qui si chiama `email`, quindi OK.
- Validazioni: solo HTML (`required`, `type=email`, number min 1); checkbox privacy obbligatoria per abilitare il pulsante.
- Successo: toast + reset form. Errore: toast con invito a scrivere a info@.
- L'endpoint risponde (test HTTP 200), quindi il form è attivo.

## 4. Rischi
- Destinatario sconosciuto (media): va controllato in Formspree che sia info@guidasicuravda.it e verificato.
- Consegna (media): dominio su Aruba, SPF presente, DMARC `p=none`; le mail Formspree arrivano da loro, possibili finire in spam → controllare cartella spam.
- Limite piano gratuito Formspree (~50 invii/mese) (media).
- Doppio invio: bloccato dal pulsante disabilitato durante l'invio (basso).
- Esposizione indirizzo: mailto in chiaro, rischio scraping spam (basso).
- Il form ID è pubblico per natura (non è un segreto).

## 5. Segreti hardcoded
Nessuno.

## 7. Anti-spam
Nessun honeypot, captcha o limite lato sito. Resta solo il filtro interno di Formspree (media).

## 8. Privacy
- Consenso coerente (checkbox obbligatoria). Mancano però nell'informativa: Formspree come responsabile esterno (USA) e i nuovi campi (tipo esigenza, partecipanti, località) (media).
- Il valore del consenso non viene inviato insieme ai dati (bassa).

## Correzioni proposte (da non applicare ora)
1. Verificare in Formspree destinatario = info@guidasicuravda.it e piano/limiti.
2. Aggiungere campo nascosto `_gotcha` (honeypot) e `_subject` descrittivo.
3. Aggiornare Privacy Policy: Formspree + campi aggiuntivi.
4. Inviare `consenso_privacy: true` con i dati.
5. Opzionale: DMARC più restrittivo dopo verifica.

## Verdetto
PARZIALE: il form invia davvero tramite Formspree, ma destinatario non verificabile da codice, nessun anti-spam, informativa incompleta.

## Test da telefono sul sito pubblico
- Compilare il form con la propria email e controllare arrivo su info@ (anche spam) e che "Rispondi" vada al mittente.
- Provare a inviare senza privacy: pulsante disabilitato.
- Toccare l'email nel footer: si apre l'app mail.
Nota: il sito pubblico va prima sbloccato dal ciclo di reindirizzamenti.
