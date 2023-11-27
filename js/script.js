/*
Esercizio di oggi: Lista della spesa con ciclo while
nome repo: js-lista-spesa
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
P.S::

volendo BONUS:
do la possibilità all’utente di inserire voci nella lista
*/
// Definisco una lista della spesa vuota che l'utente dovra riempire finche continua ad inserire oggetti nel riqadro, per inserire gli oggetti nella lista, dovra cliccare sul tasto + , il tasto piu attivera una funzione che dovra far partire un loop fino ad un massimo di 50 elementi per lista della spesa;

//step 1 - definire la lista della spesa e il bottone
let spesa = [];

//funzione che permette all'utente di aggiungere elementi alla lista

function aggiungiElemento() {
    //prendo l'input dall'utente
    let elementoInput = document.getElementById('elemento-input');
    // trasformo l'input in una variabile
    let elemento = elementoInput.value;
    // condizione (se la casella ha del testo, l'iterazione verrà aggiunta alla lista della spesa, parte la funzione che aggiornerà la lista)
    if(elemento.trim() !== '') {
        spesa.push(elemento);
        //parte la funzione che aggiornerà la lista
        aggiornaLista();
        //aggiungo il testo della casella 
        elementoInput.value = '';
    }
}
// funzione che permette di aggiornare la lista della spesa
function aggiornaLista() {
    //definisco variabile che prende la lista della spesa (UL)
    let listaElementi = document.getElementById('spesa-lista');
    //definisco alla variabile il valore stringa;
    listaElementi.innerHTML = '';
    //variabile i = 0
    let i = 0;
    //loop che varra finche si inserisce del testo nella casella;
    while (i < spesa.length) {
        //creo un li
        let listItem = document.createElement('li');
        //aggiungo al li un nodo testuale che vale come iterazione aggiunta dal testo del cinput text
        listItem.append(document.createTextNode(spesa[i]));
        //appendo alla unordered list il suo list item
        listaElementi.append(listItem);
        //aumento l'iterazione alla pressione del bottone '+'
        i++;
    }
}