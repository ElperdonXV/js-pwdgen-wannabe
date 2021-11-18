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
    let password = `
       ${nome}${cognome}${colorePref}21
     `;
    console.log(password);
    document.getElementById('password').innerHTML = password;
