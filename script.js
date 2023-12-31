

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

let cards = document.querySelectorAll('.card.mb-4.box-shadow'); // Sélectionne toutes les cartes et les stocke dans une variable
let secondCard = cards[1]; // Sélectionne la deuxième carte avec l'index 1 du tableau cards
let editButtonGreen = secondCard.querySelector('.btn-outline-secondary'); // Sélectionne le bouton edit de la deuxième carte. On peut aussi utiliser la méthode cards[1].querySelector('.btn-outline-secondary')

editButtonGreen.addEventListener('click', function() { // Ajoute un écouteur d'événement sur le bouton edit de la deuxième carte et affiche le texte en vert si le bouton est cliqué
    if (secondCard.style.color === 'green') { // Si la couleur du texte de la deuxième carte est verte, alors on enlève la couleur verte
        secondCard.style.color = ''; // On enlève la couleur verte en mettant une chaîne de caractères vide
    } else {
        secondCard.style.color = 'green';  // Sinon on met la couleur verte si la couleur du texte de la deuxième carte n'est pas verte. 
    }
});

//______________________________________________________________________________________________________________________//
// Ici c'est la fonction la plus hideuse aue j'ai eu à définir dans toute ma vie. Je suis désolé pour ça.
let navbar = document.querySelector('header'); // Sélectionne le header
let link = document.querySelector('link');// Sélectionne le lien vers le fichier bootstrap

navbar.addEventListener('dblclick', function() { // Ajoute un écouteur d'événement sur le header et désactive le lien vers le fichier bootstrap si le header est double cliqué
    if (link.disabled) { // Si le lien est désactivé, alors on l'active
        link.disabled = false; // On active le lien en mettant la propriété disabled à false
    } else {
        link.disabled = true; // Sinon on le désactive en mettant la propriété disabled à true
    }
});

//______________________________________________________________________________________________________________________//

let cardsCollapsing = document.querySelectorAll('.card.mb-4.box-shadow'); // Sélectionne toutes les cartes et les stocke dans une variable

for (let i = 0; i < cardsCollapsing.length; i++) { // Ajoute un éouteur d'évenement pour collapser les cartes au passage de la souris sur le boutton 'edit' de la carte
    let card = cardsCollapsing[i];
    let viewButton = card.querySelector('.btn-success'); // Sélectionne le bouton view de la carte
    let text = card.querySelector('.card-text');
    let image = card.querySelector('.card-img-top');

    viewButton.addEventListener('mouseover', function() {
        if (text.style.display !== 'none') { // Si le texte de la carte n'est pas caché, alors on le cache
            text.style.display = 'none'; // Cache le texte de la carte si le bouton 'view' est moussé
            image.style.width = '20%'; // Réduit la taille de l'image de la carte à 20% si le bouton 'view' est cliqué
        } else {
            text.style.display = ''; // Rétablit la taille de l'image de la carte à 100% si le bouton 'view' n'est pas moussé
            image.style.width = ''; // Rétablit la taille de l'image de la carte à 100% si le bouton 'view' n'est pas moussé
        }
    });
}

//______________________________________________________________________________________________________________________//
//omg omg omg omg omg omg omg omg omg omg omg omg omg omg omg omg omg omg omg
let btn = document.querySelector('.btn-secondary');// Sélectionne le bouton gris

btn.addEventListener('click', function() { // Ajoute un écouteur d'événement sur le bouton gris et déplace la dernière carte en premier si le bouton est cliqué
    let columnContainers = document.querySelectorAll('.col-md-4'); // Sélectionne toutes les colonnes
    let parentOfFirstColumn = columnContainers[0].parentNode; // Sélectionne le parent de la première colonne
    parentOfFirstColumn.insertBefore(columnContainers[columnContainers.length - 1], columnContainers[0]); // Déplace la dernière colonne en premier avec cette petite fonction que l'on peut appeler "insertBefore"
});

//______________________________________________________________________________________________________________________//

let btnBackward = document.querySelector('.btn-primary'); // Sélectionne le bouton bleu du header avec le lien degueulasse

btnBackward.addEventListener('click', function(event) { // Ajoute un écouteur d'événement sur le bouton bleu du header et déplace la première carte en dernier si le bouton est cliqué
    event.preventDefault(); // Empêche le comportement par défaut du bouton bleu du header qui est de renvoyer vers une autre page
    let columnContainers = document.querySelectorAll('.col-md-4'); // Sélectionne toutes les colonnes et les stocke dans une variable
    let parentOfFirstColumn = columnContainers[0].parentNode; // Sélectionne le parent de la première colonne et le stocke dans une variable
    if (columnContainers[0].nextSibling) { // Si la première colonne a un élément suivant, alors on insère la première colonne avant l'élément suivant de la dernière colonne
        parentOfFirstColumn.insertBefore(columnContainers[0], columnContainers[columnContainers.length - 1].nextSibling); // Déplace la première colonne en dernier avec cette petite fonction que l'on peut appeler "insertBefore"
    } else {
        parentOfFirstColumn.appendChild(columnContainers[0]); // Sinon on insère la première colonne en dernier
    }
});

//______________________________________________________________________________________________________________________//

let jsCard = document.querySelector('.card.mb-4.box-shadow img[src="https://img.icons8.com/color/480/000000/javascript.png"]').parentNode.parentNode; // Assurez-vous que cela sélectionne la bonne carte
// la selection la plus longue et tricky de toute ma honteuse carrière. Mais plus serieusement cela permet de sélectionner la carte qui contient l'image de Javascript
jsCard.addEventListener('keypress', function(event) { // Ajoute un écouteur d'événement sur la carte de Javascript 
    let body = document.body; // Sélectionne le body
    body.className = ''; // Enlève toutes les classes du body

    switch (event.key) { // Ajoute une classe au body en fonction de la touche pressée
        case 'a': // Si la touche pressée est a, alors on ajoute la classe col-4 au body
            body.classList.add('col-4');
            break;
        case 'y': // Si la touche pressée est y, alors on ajoute la classe offset-md-4 au body
            body.classList.add('col-4', 'offset-md-4');
            break;
        case 'p': // Si la touche pressée est p, alors on ajoute la classe offset-md-8 au body
            body.classList.add('col-4', 'offset-md-8');
            break;
        case 'b': // Si la touche pressée est b, alors on enlève toutes les classes du body
            break;
    }
});