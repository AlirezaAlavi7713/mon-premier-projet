function factorielle(n) {
    let resultat = 1;
    for (let i = 1; i<=n;i++){
        resultat *= i;
    } return resultat;
}

console.log(factorielle(5));