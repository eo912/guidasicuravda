# Audit — Email/Form contatti e Privacy Policy (nessuna modifica applicata)

## PARTE 1 — Email e form contatti

### 1. Indirizzo mostrato
Solo `info@guidasicuravda.it`, sempre come link mailto:
- `src/components/Footer.tsx` (tutte le pagine)
- `src/pages/Contatti.tsx` (blocco Email + messaggio di errore)
- `src/pages/PrivacyPolicy.tsx` (Titolare, diritti), `src/pages/CookiePolicy.tsx`
Nessun residuo di eo84.EO@gmail.com né numeri di telefono.

### 2-3. Funzionamento tecnico (`src/pages/Contatti.tsx`)
- `handleSubmit` → POST JSON a Formspree `https://formspree.io/f/xpqvjjdl`.
- Nessuna funzione server nel progetto, nessun database: l'email la invia Formspree.
- Destinatario: non è nel codice, è configurato nell'account Formspree (non verificabile da qui).
- Reply-To: il campo si chiama `email`, quindi Formspree lo usa come risposta.
- Validazioni: solo HTML (`required`, `type=email`, min 1 partecipante) + checkbox privacy obbligatoria per abilitare il pulsante.
- Successo: toast + reset. Errore: toast con invito a scrivere a info@.
- L'endpoint risponde (test HTTP 200): il form è attivo.

### 4. Rischi
- Destinatario non verificabile da codice (ALTA): controllare in Formspree che sia info@guidasicuravda.it e verificato.
- Consegna/spam (MEDIA): dominio su Aruba, SPF presente, DMARC `p=none`; le mail partono dai server Formspree.
- Limite piano gratuito Formspree (~50 invii/mese) (MEDIA).
- Doppio invio: già bloccato dal pulsante disabilitato (BASSA).
- Indirizzo in chiaro nel mailto → scraping spam (BASSA).

### 5. Segreti hardcoded
Nessuno. L'ID del form Formspree è pubblico per natura.

### 7. Anti-spam
Nessun honeypot, captcha o rate limit lato sito: resta solo il filtro interno di Formspree (MEDIA).

### 8. Coerenza privacy/consenso
Checkbox obbligatoria corretta, ma il valore del consenso non viene inviato con i dati (BASSA) e Formspree non è citato nell'informativa (ALTA, vedi Parte 2).

### VERDETTO PARTE 1: PARZIALE
Il form invia realmente le email tramite Formspree, ma destinatario non verificabile dal codice, nessuna protezione anti-spam, informativa incompleta.

---

## PARTE 2 — Verifica Privacy Policy (`src/pages/PrivacyPolicy.tsx`)

| Punto | Stato attuale | Esito |
|---|---|---|
| 1. Titolare e contatti | Edy Orlarei, info@guidasicuravda.it (par. 1) | OK |
| 2. Finalità e base giuridica | Par. 3 e 5: consenso + misure precontrattuali | OK |
| 3. Campi raccolti | Par. 2 elenca solo nome, email, telefono, azienda, messaggio | INCOMPLETO: mancano tipo di esigenza, numero partecipanti, località; manca la registrazione del consenso |
| 4. Formspree | Mai citato; par. 7 dichiara "non comunicati a terzi" ed esclude trasferimenti extra-UE salvo analytics | NON CONFORME: Formspree (USA) è un responsabile esterno effettivo |
| 5. GA4 e Clarity | Par. 4 li descrive con consenso preventivo, responsabili irlandesi, revoca dal footer | Coerente con il codice |
| 6. Meta Pixel / Iubenda | Mai menzionati nella Privacy né nella Cookie Policy | OK (nessuna dichiarazione da correggere) |
| 7. Conservazione | Par. 6 solo generico: "tempo strettamente necessario" | TROPPO GENERICO: manca un termine indicativo (es. 24 mesi per le richieste) |
| 8. Diritti | Par. 8 completo, con email e reclamo al Garante | OK |
| 9. Coerenza con Cookie Policy e banner | Entrambe descrivono consenso preventivo e revoca dal footer, coerente con Consent Mode v2 impostato nel codice | OK |
| 10. Altro | Data "Gennaio 2026" non più attuale dopo le modifiche recenti; par. 7 in contraddizione con l'uso di Formspree | Da aggiornare |

### VERDETTO PARTE 2: PARZIALMENTE COERENTE

### Modifiche necessarie (da NON applicare ora)
ALTA
1. `PrivacyPolicy.tsx` par. 2 — aggiungere i campi tipo di esigenza, numero partecipanti, località e la registrazione del consenso.
2. `PrivacyPolicy.tsx` par. 4/7 — inserire Formspree come responsabile esterno, indicando il trasferimento extra-UE con Clausole Contrattuali Standard, e correggere la frase "non comunicati a terzi".

MEDIA
3. `PrivacyPolicy.tsx` par. 6 — indicare un tempo di conservazione concreto per le richieste di contatto.
4. `Contatti.tsx` — inviare anche il valore del consenso privacy insieme ai dati.
5. `Contatti.tsx` — aggiungere honeypot (`_gotcha`) e oggetto email descrittivo.
6. Verificare in Formspree destinatario, verifica dell'indirizzo e limiti del piano.

BASSA
7. Aggiornare la data di ultimo aggiornamento in Privacy e Cookie Policy.
8. Valutare un DMARC più restrittivo dopo la verifica della consegna.

---

## Cosa testare subito dal telefono sul sito pubblico
- Inviare il form con la propria email: verificare l'arrivo su info@ (anche in spam) e che "Rispondi" torni al mittente.
- Provare l'invio senza spuntare la privacy: il pulsante resta disabilitato.
- Toccare l'email nel footer: si apre l'app di posta.
Nota: il sito pubblico va prima sbloccato dal ciclo di reindirizzamenti tra guidasicuravda.it e www.

## Crediti
Il sistema non espone il costo di una singola verifica.
