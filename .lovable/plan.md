# Intervento tecnico SEO, sitemap, 404 e accessibilità

## Obiettivo
Correggere in un unico intervento conservativo le criticità tecniche indicate, senza modificare contenuti approvati, grafica, corsi, cookie, analytics o privacy.

## Modifiche previste

### 1. Metadati specifici per pagina
- Introdurre un piccolo componente SEO centralizzato, senza dipendenze aggiuntive, che aggiorni `title`, description, canonical, Open Graph e Twitter al cambio di pagina.
- Rimuovere da `index.html` il canonical globale, che oggi attribuisce tutte le pagine alla Home.
- Mantenere in `index.html` metadati social sobri della Home come fallback per i servizi che non eseguono JavaScript.
- Usare URL canonical auto-riferiti sul dominio `https://guidasicuravda.it`.
- Coprire:
  - `/`
  - `/corsi`
  - `/corsi/guida-sicura-base`
  - `/corsi/guida-sicura-secondo-livello`
  - `/corsi/guida-emergenza-ambulanze`
  - `/metodo`
  - `/istruttori`
  - `/contatti`
  - `/privacy-policy`
  - `/cookie-policy`
  - route inesistenti con `noindex, nofollow`

### 2. Open Graph e immagine social
- Sostituire la vecchia immagine di anteprima esterna con una versione social 1200×630 ricavata dall’immagine alpina già usata nella Home.
- Impostare `og:title`, `og:description`, `og:url`, `og:image` e i corrispondenti campi Twitter.
- Usare la stessa immagine coerente già presente nel sito; non generarne una nuova e non alterare le fotografie mostrate nelle pagine.

### 3. Sitemap e robots
- Aggiornare il generatore esistente, senza sostituirne il meccanismo.
- Inserire tutte le route pubbliche e indicizzabili, comprese le tre schede corso e le pagine legali.
- Eliminare i `lastmod` calcolati automaticamente alla data di compilazione, perché non rappresentano modifiche specifiche delle singole pagine.
- Rigenerare `public/sitemap.xml` e verificare assenza di duplicati, route dinamiche generiche e URL non pubbliche.
- Conservare `robots.txt` e verificare che punti a `https://guidasicuravda.it/sitemap.xml`.

### 4. Pagina 404
- Sostituire la pagina inglese predefinita con una pagina italiana dentro il layout esistente.
- Aggiungere testo essenziale e due azioni: ritorno alla Home e accesso ai Corsi.
- Riutilizzare esclusivamente componenti, colori e stile già presenti.

### 5. Accessibilità mobile
- Aggiungere al pulsante del menu mobile un’etichetta dinamica “Apri menu di navigazione” / “Chiudi menu di navigazione”, insieme allo stato `aria-expanded` e al collegamento al menu controllato.
- Non modificare disposizione o stile del menu.

## Verifica finale
- Eseguire typecheck e build del progetto.
- Controllare nel browser desktop e mobile: navigazione, menu, 404, title, description, canonical e metadati social per ogni route coperta.
- Validare sitemap XML, URL univoche e collegamento in robots.txt.
- Verificare che cookie banner, GTM, analytics, privacy, testi commerciali, corsi, form, partner, istruttori e identità visiva siano rimasti invariati.
- Nel riepilogo finale indicare file modificati, route coperte e costo in crediti disponibile per questa lavorazione.

## Nota tecnica
Questa applicazione aggiorna i metadati per pagina nel browser. I motori di ricerca che eseguono JavaScript vedranno i dati specifici; i social crawler che non lo eseguono vedranno il fallback della Home presente nel documento iniziale.
