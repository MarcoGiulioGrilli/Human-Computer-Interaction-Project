# Progetto di Human-Computer Interaction (HCI) - Alimentazione Sostenibile nelle Aree Urbane

## Introduzione
Questo progetto è stato sviluppato per il corso di Human-Computer Interaction (HCI) nell’a.a. 2024-2025, con l’obiettivo di promuovere il benessere urbano attraverso un sistema di alimentazione sostenibile.

- **Problema**: Le città moderne rendono sempre più difficile l'accesso a cibo fresco e locale, spingendo i cittadini verso opzioni industriali che favoriscono obesità e malattie croniche.
- **Utenti Target**: famiglie urbane, studenti, professionisti, agricoltori locali e mercati che mirano a fornire cibo sano e sostenibile.
- **Missione**: Promuovere un sistema alimentare urbano sano, sostenibile e connesso.

## Fasi del Progetto

### Needfinding (C1)
Questa fase si è concentrata sulla raccolta di informazioni sui bisogni e sulle abitudini alimentari degli utenti target, con attenzione alla sostenibilità e al benessere. Le attività principali in questa fase sono state:
- **Interviste** con diversi gruppi di utenti (giovani professionisti, famiglie, studenti, pensionati) per ottenere insight qualitativi sui comportamenti e sulle preferenze alimentari.
- **Questionari** per raccogliere dati quantitativi sulle abitudini di acquisto e sulla consapevolezza in tema di sostenibilità.

I materiali relativi a questa fase si trovano nella directory `report/C1`, con le trascrizioni delle interviste nella sottocartella `report/C1/Interviste`.

### Raffinamento (C2)
Dopo il needfinding, siamo passati alla fase di **raffinamento** per approfondire i risultati e definire soluzioni adeguate. Le attività di questa fase includono:

- **Focus Group**: un'intervista di gruppo ha permesso di esplorare più a fondo le opinioni degli utenti sui temi dell'alimentazione sostenibile, analizzando aspetti come il costo dei prodotti, l’imballaggio, la biodiversità, lo spreco alimentare e la convivialità.
- **Brainstorming sui Bisogni degli Utenti**: il brainstorming ha evidenziato priorità per gli utenti, come la riduzione degli imballaggi, la trasparenza sulla provenienza dei prodotti, l’accessibilità economica e la necessità di informazioni chiare su certificazioni e origine dei prodotti.
- **Definizione della Value Proposition**: sulla base delle esigenze degli utenti, è stata selezionata una soluzione chiave: la piattaforma **GoodBuy**. Questa piattaforma supporta scelte consapevoli degli utenti tramite:
  - una mappa interattiva dei mercati locali,
  - uno scanner per le etichette dei prodotti, che fornisce informazioni su qualità, sostenibilità e origine del prodotto.

Tutti i materiali relativi alla fase di raffinamento sono disponibili nella directory `report/C2`, incluse le trascrizioni del focus group e le conclusioni del brainstorming.

### Prototipazione (C3)
La fase di **prototipazione** ha visto la definizione dei task principali e la creazione dei primi prototipi per la piattaforma GoodBuy. Le attività principali in questa fase includono:

- **Analisi dei Task**: sono stati selezionati tre task chiave, classificati in base alla complessità:
  - **Task Semplice**: l'utente consulta il significato delle certificazioni di un prodotto utilizzando la piattaforma.
  - **Task Moderato**: l'utente scannerizza un prodotto e riceve una valutazione dettagliata, con suggerimenti per alternative migliori.
  - **Task Complesso**: l'utente utilizza la mappa interattiva per trovare un venditore locale che risponda alle sue esigenze specifiche, dopo aver esplorato la bacheca degli annunci.

- **Analisi HTA**: ogni task è stato scomposto utilizzando il metodo di Hierarchical Task Analysis (HTA), evidenziando i passaggi necessari e le potenziali aree di miglioramento.

- **Storyboard**: è stato creato uno storyboard che rappresenta un percorso realistico, intrecciando i task identificati. Lo storyboard mostra l'utente mentre scannerizza un prodotto al supermercato e successivamente utilizza la mappa per trovare un venditore locale.

- **Creazione dei Prototipi**: sono stati sviluppati due prototipi low fidelity utilizzando Figma:
  - **Prototipo 1 (Sito web)**: progettato per desktop e tablet, offre una visualizzazione chiara delle funzionalità principali, ma limita l’esperienza utente in mobilità.
  - **Prototipo 2 (App Mobile)**: pensato per un utilizzo in movimento, consente una scansione rapida dei prodotti e un accesso immediato alla mappa interattiva.

- **Scelta del Prototipo**: dopo aver confrontato i pro e contro di ciascun prototipo, è stata scelta l'app mobile come soluzione principale, per la sua praticità e per l’esperienza utente più fluida, mentre il sito web è stato mantenuto come strumento di supporto.

I materiali relativi alla fase di prototipazione si trovano nella directory `report/C3`, inclusi i file Figma dei prototipi e le analisi dettagliate dei task.

### Raffinamento Prototipi (C4)

La fase di **Raffinamento Prototipi** rappresenta un passaggio cruciale per rendere concreti e funzionali i concetti elaborati durante la fase di prototipazione (C3). I prototipi sono stati portati a un livello di mid-high fidelity, con un’attenzione particolare al funzionamento delle task precedentemente definite e alla creazione di un’esperienza utente coerente e intuitiva.

Il focus principale di questa fase è stato il miglioramento delle interazioni chiave e la simulazione di scenari d’uso realistici. Le task individuate in C3, tra cui la consultazione delle certificazioni, la scannerizzazione dei prodotti e la navigazione nella mappa interattiva, sono state integrate nei prototipi con maggiore dettaglio, permettendo un test più accurato delle funzionalità principali dell’applicazione.

Il design è stato ulteriormente affinato per garantire una transizione fluida tra le diverse sezioni dell’app e per migliorare l’accessibilità. Elementi visivi, come pulsanti, icone e schemi cromatici, sono stati ottimizzati per fornire un’interfaccia chiara e intuitiva. L’obiettivo è quello di avvicinare l’esperienza simulata a quella di un’app reale, consentendo agli utenti di esplorare e comprendere pienamente le funzionalità offerte.

Nella cartella `report/C4` sono inclusi due documenti fondamentali che sintetizzano i progressi e approfondiscono gli aspetti progettuali:
 - **Documento di descrizione del prototipo**: descrive in modo dettagliato ogni funzionalità, illustrando i flussi di interazione e le scelte progettuali che guidano l’esperienza utente.
 - **Documento per i valutatori esterni**: analizza come l’applicazione risponde ai bisogni e alle aspettative degli utenti identificati nelle fasi precedenti. Viene valutata l’efficacia delle soluzioni proposte in termini di utenti target, contesto d’uso, funzionalità principali e limitazioni.

### Valutazione Euristica (C5)

La fase di **Valutazione Euristica** rappresenta un passo fondamentale per l’analisi e il miglioramento del prototipo. Seguendo il metodo delle 10 euristiche di Nielsen, abbiamo svolto una valutazione strutturata per identificare eventuali problematiche nell’interfaccia e migliorare l’esperienza utente. Abbiamo prodotto due documenti distinti per questa fase:
- **Valutazione Individuale**: Ogni membro del nostro gruppo ha condotto una valutazione indipendente del prototipo Park It Up! del gruppo NexusKnight. 
- **Valutazione di Gruppo**: Successivamente, abbiamo combinato i risultati delle valutazioni individuali in un unico documento di gruppo, analizzando i problemi trovati e raggiungendo un consenso sulla loro classificazione e severità.

Il documento della valutazione euristica di gruppo è disponibile nella cartella `report/C5`, i documenti individuali di valutazione sono invece ad uso esclusivo dei docenti e non sono resi disponibili.

### User-Testing (C6)

In questa fase, abbiamo sottoposto il nostro prototipo a **test pratici con utenti che non avevano mai visto né sentito parlare della nostra applicazione**. Lo scopo principale era quello di raccogliere feedback imparziale e valutare l’efficacia delle funzionalità principali. Gli utenti hanno eseguito task specifici, precedentemente definiti.

Durante i test, abbiamo osservato il loro comportamento e raccolto dati sia qualitativi che quantitativi sulle difficoltà incontrate, le loro impressioni generali e i suggerimenti forniti. Successivamente, abbiamo analizzato questi dati per individuare i problemi principali e le aree di miglioramento, concentrandoci sulle funzionalità che richiedevano maggiore chiarezza o ottimizzazione.

Inoltre, abbiamo confrontato i risultati dei test con gli obiettivi definiti nelle fasi precedenti per valutare se il prototipo rispondeva in modo efficace ai bisogni degli utenti. Questo processo ci ha permesso di identificare modifiche chiave per affinare ulteriormente il design e migliorare l’esperienza utente complessiva.

I materiali relativi alla fase di User-Testing sono disponibili nella directory `report/C6`, incluso un documento di sintesi delle osservazioni, il protocollo usato durante i colloqui e una presentazione con la descrizione della procedura seguita per i test, i risultati e le principali raccomandazioni per il miglioramento del prototipo.

---

Questo aggiornamento include le attività svolte nella fase di User-Testing del prototipo interattivo ad alta fedeltà.
