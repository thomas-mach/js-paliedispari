parolaUtente = prompt('Scrivi una parola') // Per chiedere una parola all'utente e salvarla nella variabile "parolaUtente" (prompt restituisce stringa)
parolaUtente = parolaUtente.toUpperCase() // per trasformare stringa in maiuscolo
function palindroma(parola){ // funzione che controlla se la parola inserita e palindroma
    let parolaInvertita = '' // per contenere la parola convertita
    for (let i = parola.length -1; i >= 0; i-- ){ // per legere la stringa al contrario
        parolaInvertita += parola[i] // per assegnare a "parolaInvertita" la concatenazione di lettere della stringa al contrario
    }
    let ePalindroma = false
    if (parola === parolaInvertita){ //per confrontare
        ePalindroma = true
        return parolaUtente + ' e palindroma' // per restituire risultato in caso di sucesso
    } else {
        ePalindroma = false
        return parolaUtente + ' non e palindroma' // per restituire risultato in caso di fallimento
    }
}
const parolaNew = palindroma(parolaUtente) //per evocare la funzione
console.log(parolaNew) // per stampare risultato della funzione