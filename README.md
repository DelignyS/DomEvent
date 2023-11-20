***Le Dom et les events***


**Fonctionnalité 1 :**

On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre !

```js
   let footerclick = document.querySelector('footer');
    footerclick.addEventListener('click', function() {
    console.log('clique');
});
```
**Fonctionnalité 1-bis :**

Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

Indice : Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !

```js
    let footerclick = document.querySelector('footer');
    let count = 0;
    footerclick.addEventListener('click', function() {
    count++;
    console.log('Ici tu vas voir le click numéro: ' + count);
});
```
**Fonctionnalité 2:**

On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")

```js
    let hamburgerMenu = document.querySelector('.navbar-toggler');
    let navbarHeader = document.getElementById('navbarHeader');

    hamburgerMenu.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});
```
**Fonctionnalité 3**

À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).

Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).

Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

```js
    let firstCard = document.querySelector('.card.mb-4.box-shadow');
let editButton = firstCard.querySelector('.btn-outline-secondary');

editButton.addEventListener('click', function() {
    firstCard.style.color = 'red';
});
```




