// Descrizione esercizio:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


let nome = prompt('Inserisci Nome');
console.log(nome);

let cognome = prompt('Inserisci Cognome');
console.log(cognome);

let colorePref = prompt('Inserisci il tuo colore preferito');
console.log(colorePref);

// chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5
// attacchiamo alla password, al posto del 21, il risultato
var numPref = prompt('Inserisci il tuo numero preferito');
console.log(parseInt(numPref));
var numPsw = 5;
console.log(parseInt(numPsw));
var finalNum = Number(numPref) + Number(numPsw); 
let password = `
       ${nome}${cognome}${colorePref}${finalNum}
     `;
console.log(password);
document.getElementById('password').innerHTML = password;
