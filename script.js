

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

//______________________________________________________________________________________________________________________//
let hamburgerMenu = document.querySelector('.navbar-toggler'); // Sélectionne le bouton du menu hamburger
let navbarHeader = document.getElementById('navbarHeader'); // Sélectionne la navbar

hamburgerMenu.addEventListener('click', function() { // Ajoute un écouteur d'événement sur le bouton du menu hamburger et affiche la navbar si le bouton est cliqué
    navbarHeader.classList.toggle('collapse'); // Ajoute ou enlève la classe collapse à la navbar ce qui permet de la cacher ou de la montrer
});

//______________________________________________________________________________________________________________________//

let firstCard = document.querySelector('.card.mb-4.box-shadow'); // Sélectionne la première carte
let editButton = firstCard.querySelector('.btn-outline-secondary'); // Sélectionne le bouton edit de la première carte

editButton.addEventListener('click', function() { // Ajoute un écouteur d'événement sur le bouton edit de la première carte et affiche le texte en rouge si le bouton est cliqué
    firstCard.style.color = 'red'; // Change la couleur du texte de la première carte en rouge si le bouton est cliqué, avec la propriété style.color qui est un élément de l'objet firstCard
});

//______________________________________________________________________________________________________________________//