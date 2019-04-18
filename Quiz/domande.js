var quiztitle = "Quiz Sistemi Operativi";
    


var quiz = [
    {
        "question"      :   "Q1: Un processo che esegue in spazio kernel non può accedere al suo stack in spazio utente",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F",
    },
    {
        "question"      :   "Q2: In un sistema di memoria a paginazione, il Translation Lookaside Buffer (TLB) velocizza la traduzione di indirizzi virtuali in indirizzi fisici",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V",
    },
    {
        "question"      :   "Q3: La segmentazione consente a due processi di condividere un segmento",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q4: La paginazione consente a due processi di condividere una pagina",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q5: In un sistema a paginazione la traduzione degli indirizzi mantiene l'offset intatto",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q6: Il TLB consente di ridurre gli accessi alla tabella delle pagine",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q7: La strategia di allocazione contigua può comportare frammentazione esterna",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q8: L'ampiezza dello spazio di indirizzamento virtuale dipende dalla dimensione in bit degli indirizzi",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q9: Per deframmentare un disco occorre prima riformattarlo",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q10: Il meccanismo di context-switch è operato dallo scheduler dei processi",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q11: Sia dato un sistema di memoria con indirizzi virtuali suddivisi in 4 campi: a, b, c, d, i primi 3 dei quali siano utilizzati per indirizzare tre livelli gerarchici di tabelle delle pagine e il quarto campo rappresenti l’offset entro la pagina selezionata. Indicare dall’ampiezza di quali campi dipende il numero di pagine indirizzate nel sistema:",
        "choices"       :   [
                                "da quella di tutti e quattro i campi",
                                "da quella del campo d",
                                "da quella del campo a e d",
                                "da quelle dei campi a, b, c",
                            ],
        "correct"       :   "da quelle dei campi a, b, c"
    },
    {
        "question"      :   "Q12: La dimensione di una FAT dipende da:",
        "choices"       :   [
                                "la quantità di file memorizzati su disco",
                                "il numero di partizioni virtuali di un disco",
                                "la contiguità con cui sono scritti i file su disco",
                                "la dimensione del disco",
                            ],
        "correct"       :   "la dimensione del disco"
    },
    {
        "question"      :   "Q13: La tecnica di allocazione contigua è soggetta al problema della frammentazione esterna",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q14: Un indirizzo logico identifica direttamente una cella di memoria fisica",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q15: La tecnica di compattazione della memoria non comporta la rilocazione dei programmi",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q16: La tecnica di paginazione è soggetta alla frammentazione interna ma non a quella esterna",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q17: Un page fault avviene quando la entry richiesta non è presente nel Trasnlation Lookaside Buffer(TLB)",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q18: In un sistema combinato di paginazione/segmentazione lo spazio di indirizzamento utente è suddiviso in un certo numero di pagine a dimensione fissa, che a loro turno sono suddivise in un certo numero di segmenti",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q19: In un sistema di memoria a paginazione, il Translation Lookaside Buffer (TLB) velocizza la traduzione di indirizzi fisici in indirizzi virtuali",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q20: Nella gestione della memoria con paginazione, il fenomeno della frammentazione interna è tanto meno rilevante quanto più la lunghezza media dei programmi è grande rispetto alla dimensione della pagina",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q21: Il nome e la dimensione sono due attributi di un file",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q22: Molti page fault su un processo non modificano le prestazioni degli altri processi",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q23: NTFS è il file system più utilizzato dai sistemi operativi GNU/Linux",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q24: Con NTFS è possibile che il file system scriva il contenuto di file di piccola dimensione (es. <1KB) direttamente nel record dell’MFT",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q25: rmdir è un comando GNU/Linux per rinominare directory",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q26: FAT è un file system ad allocazione concatenata",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q27: pwd è un comando GNU/Linux per modificare la password",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q28: L’i-node contiene al suo interno i dati dei file (es. il testo scritto da un utente in un file .txt)",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q29: Il termine copy-on-write indica il caso in cui ad ogni modifica di una variabile in memoria RAM si procede immediatamente con l’aggiornamento anche della sua copia su partizione di disco",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q30: La dimensione max di un file ottenibile con ext2fs dipende dalla contiguità con cui sono scritti i blocchi del file su disco?",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q31: La dimensione max di un file ottenibile con FAT dipende dalla contiguità con cui sono scritti i blocchi del file su disco?",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
    {
        "question"      :   "Q32: La dimensione max di un file ottenibile con NTFS dipende dalla contiguità con cui sono scritti i blocchi del file su disco?",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q33: Nella gestione della memoria virtuale tramite paginazione, l’uso di una tabella delle pagine invertita è:",
        "choices"       :   [
                                "più utile in un sistema con indirizzi a 32 bit rispetto a un sistema con indirizzi a 64 bit",
                                "più utile in un sistema con indirizzi a 64 bit rispetto a un sistema con indirizzi a 32 bit",
                                "sconsigliabile rispetto all’uso di una tabella delle pagine regolare nei sistemi moderni",
                                "sempre sbagliato",
                            ],
        "correct"       :   "più utile in un sistema con indirizzi a 64 bit rispetto a un sistema con indirizzi a 32 bit"
    },
    {
        "question"      :   "Q34: Data un disco ampio 4 GB, con blocchi ampi 4 KB, e contenente 128 K file, l’ampiezza in B della FAT dipende da",
        "choices"       :   [
                                "il numero di file in essa rappresentati",
                                "l’ampiezza dei blocchi",
                                "l’ampiezza del disco in blocchi e l’ampiezza degli indici di blocco",
                                "l’ampiezza del disco",
                            ],
        "correct"       :   "l’ampiezza del disco in blocchi e l’ampiezza degli indici di blocco"
    },
    {
        "question"      :   "Q35: La dimensione della Tabella delle Pagine Invertita dipende da:",
        "choices"       :   [
                                "l’ampiezza in Pagine del disco",
                                "l’ampiezza in Pagine della RAM",
                                "l’ampiezza in Pagine della Memoria Virtuale",
                                "l’ampiezza in Pagine dei file presenti su disco",
                            ],
        "correct"       :   "l’ampiezza in Pagine della RAM"
    },
    {
        "question"      :   "Q36: “La dimensione massima di un file ottenibile dal File System dipende dalla contiguità con cui sono scritti i suoi blocchi su disco”. Questa affermazione è vera per",
        "choices"       :   [
                                "FAT",
                                "ext2",
                                "entrambi (sia FAT, sia ext2)",
                                "nessuno dei due (né FAT, né ext2)",
                            ],
        "correct"       :   "nessuno dei due (né FAT, né ext2)"
    },
    {
        "question"      :   "Q37: La gestione della memoria con segmentazione può ridurre il consumo di memoria, in quanto consente a più processi di condividere blocchi di codice e di dati",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "V"
    },
    {
        "question"      :   "Q38: In quale tra i seguenti sistemi operativi è più conveniente l’utilizzo di Inverted Page Tables",
        "choices"       :   [
                                "nessuno dei seguenti, il vantaggio è pari per tutti",
                                "sistemi a 16 bit",
                                "sistemi a 32 bit",
                                "sistemi a 64 bit",
                            ],
        "correct"       :   "sistemi a 64 bit"
    },
    {
        "question"      :   "Q39: La contiguità dei blocchi in cui viene scritto un file su disco influenza l’overhead generato dal file system:",
        "choices"       :   [
                                "NTFS",
                                "ext2fs",
                                "entrambi",
                                "nessuno dei due",
                            ],
        "correct"       :   "nessuno dei due"
    },
    {
        "question"      :   "Q40: Con NTFS è possibile che il file system scriva il contenuto di file di piccola dimensione (es. <1KB) direttamente nell’inode",
        "choices"       :   [
                                "V",
                                "F",
                            ],
        "correct"       :   "F"
    },
	{
	"question"      :   "Q41: La gestione della memoria con paginazione consente a più processi di condividere pagine contenenti codice o dati",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q42: chmod è un comando utilizzabile nei sistemi GNU/Linux per modificare i permessi di file e directory",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q43: GNU/Linux tende a scrivere i file su disco come blocchi sequenziali contigui",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q44: Con ext2fs è possibile che il file system scriva il contenuto (i dati) di file di piccola dimensione (es. <1KB) direttamente dentro l’i-node principale",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q45: rmdir è un comando POSIX per eliminare directory vuote",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q46 Una system call dà sempre luogo ad un mode switch tra modalità utente e modalità kernel",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q47: Un process switch tra processi utente avviene sempre contestualmente a 2 mode switch (utente->kernel, kernel->utente)",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q48: Un interrupt viene gestito in modalità utente",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q49: Se un processo è in blocco da 10 ms significa che 10ms fa ha eseguito una system call",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q50: Ogni interrupt è associato ad un processo che ha richiesto una operazione di I/O",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q51: Un processo per lanciare un nuovo processo deve fare una system call",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q52: Gli interrupt sono asincroni mentre le chiamate di sistema (trap) sono sincrone",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	},
	{
	"question"      :   "Q53: Una system call generata da un processo utente viene gestita in modalità utente",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q54: In riferimento allo scheduling di processi, la politiche FIFO ed LRU fanno entrambe parte della categoria degli stack algorithms",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "F",
	},
	{
	"question"      :   "Q55: Il meccanismo dei semafori consente forme più generali di sincronizzazione tra processi rispetto alla mutua esclusione",
	"choices"       :   [
                                "V",
                                "F",
                            ],
	"correct"       :   "V",
	}

];