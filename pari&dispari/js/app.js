let sceltaUtente //per memorizzare scelta utente
let numeroUtente //per memorizzare numero utente
do{ //ciclo viene ripetuto finche utente inserisce dati validi
    sceltaUtente = prompt('Pari o Dispari?').toUpperCase() //per chiedere dati e trasformare in maiuscolo
    if(sceltaUtente !== 'PARI' && sceltaUtente !== 'DISPARI') //per verificare se scelta utente e valida altrimenti fa partire alert
        alert('Inscerisci "PARI" o "DISPARI"')
} while (sceltaUtente !== 'PARI' && sceltaUtente !== 'DISPARI') //condizione per interompere ciclo

do{
    numeroUtente = parseInt(prompt('Scegli numero da 1 a 5'))
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        alert('Inserisci un numero valido da 1 a 5!');
    }
} while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5)
    console.log('Your choise: ' + sceltaUtente)
    console.log('Your number: ' + numeroUtente)
   

    numeroCPU = Math.floor(Math.random() * 5) + 1 //per calcolare numero random per CPU
    console.log('CPU number: ' + numeroCPU) 
    

    function somma (a, b){ //dichiarazione della funzione
      if(((a + b) % 2) === 0 ){ //condizione della funzione somma due numeri e controlla se il resto del modulo e uguale a 0
        return 'pari wins' //return in caso di true
        } else {
        return 'dispari wins' //return in caso di false
        }
    }

    const result = somma(numeroUtente, numeroCPU) //invocazione della funzione
    if ((sceltaUtente === 'PARI' && result === 'pari wins') || (sceltaUtente === 'DISPARI' && result === 'dispari wins')) { //condizione per dichiarare il vincitore
        console.log('YOU WIN') 
    } else {
        console.log('YOU LOSE')
    }

  


    
