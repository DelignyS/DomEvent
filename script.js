

/*let footerclick = document.querySelector('footer'); // Sélectionne le footer puis le stocke dans une variable
footerclick.addEventListener('click', function() {  // Ajoute un écouteur d'événement sur le footer et affiche "clique" dans la console si le footer est cliqué
    console.log('clique');
});*/

//______________________________________________________________________________________________________________________//
let footerclick = document.querySelector('footer'); // Sélectionne le footer puis le stocke dans une variable
let count = 0; // Déclare une variable count qui commence à 0 ce qui servira à compter le nombre de clics
footerclick.addEventListener('click', function() { // Ajoute un écouteur d'événement sur le footer et affiche "clique" dans la console si le footer est cliqué et égalise la variable count à 1
count++; // Un petit incrémenteur pour compter le nombre de clics
console.log('Ici tu vas voir le click numéro: ' + count); // Affiche le nombre de clics dans la console
});
