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


let plusButton = document.getElementById('plus');
// step 2 attivare l'evento click

plusButton.addEventListener('click', function(){

    
    listaUl = document.querySelector('.Ullist');

    
    let listaSpesa = ['pane', 'pasta', 'mele', 'pere', 'maiale', 'branzino'];

    
    let elementList = '';

   

    let i = 0;

    while (i < listaSpesa.length) {

     

      
        elementList = `<li> ${listaSpesa[i]} </li>`

   
        listaUl.innerHTML += elementList;

        i++;

    }
}
);

