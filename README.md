***Le Dom et les events***


![DomJs](images/6og0iedzof08464246nj.png)

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
**Fonctionnalité 4 :**

On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).

Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :

if (secondCard.style.color === 'green'){

secondCard.style.color = '' ;

}else …

```js
    let cards = document.querySelectorAll('.card.mb-4.box-shadow');
    let editButtonGreen = secondCard.querySelector('.btn-outline-secondary');

    editButtonGreen.addEventListener('click', function() {
    if (secondCard.style.color === 'green') {
        secondCard.style.color = '';
    } else {
        secondCard.style.color = 'green';
    }
    });
```
**Fonctionnalité 5 :**

Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

```js
    let navbar = document.querySelector('header');
    let link = document.querySelector('link');

    navbar.addEventListener('dblclick', function() {
      if (link.disabled) {
         link.disabled = false;
       } else {
            link.disabled = true;
       }
    });
```
**Fonctionnalité 6 :**

T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… Le lien du cours==> https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/

```js
    let cardsCollapsing = document.querySelectorAll('.card.mb-4.box-shadow');

    for (let i = 0; i < cardsCollapsing.length; i++) {
        let card = cardsCollapsing[i];
        let viewButton = card.querySelector('.btn-success');
        let text = card.querySelector('.card-text');
        let image = card.querySelector('.card-img-top');

        viewButton.addEventListener('mouseover', function() {
            if (text.style.display !== 'none') {
                text.style.display = 'none';
                image.style.width = '20%';
            } else {
                text.style.display = '';
                image.style.width = '';
            }
        });
    }
```
**Fonctionnalités 7 :**

Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.
```js
    let btn = document.querySelector('.btn-secondary');

    btn.addEventListener('click', function() {
        let columnContainers = document.querySelectorAll('.col-md-4');
        let parentOfFirstColumn = columnContainers[0].parentNode;
        parentOfFirstColumn.insertBefore(columnContainers[columnContainers.length - 1], columnContainers[0]);
    });
```

**Fonctionnalités 8 :**

Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event - cf le cours).

Indice 2 : Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". Et tu peux pointer sur un noeud APRES un élément en faisant "lastCard.nextSibling".

```js
    let btnBackward = document.querySelector('.btn-primary');

    btnBackward.addEventListener('click', function(event) {
        event.preventDefault();
        let columnContainers = document.querySelectorAll('.col-md-4');
        let parentOfFirstColumn = columnContainers[0].parentNode;
        if (columnContainers[0].nextSibling) {
            parentOfFirstColumn.insertBefore(columnContainers[0], columnContainers[columnContainers.length - 1].nextSibling);
       } else {
           parentOfFirstColumn.appendChild(columnContainers[0]);
       }
    });
```
**Fonctionnalités 9 :**

Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.
Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.

Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.

Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du <body> à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.

```js
    let jsCard = document.querySelector('.card.mb-4.box-shadow img[src="https://img.icons8.com/color/480/000000/javascript.png"]').parentNode.parentNode;

    jsCard.addEventListener('keypress', function(event) {
       let body = document.body;
        body.className = '';

       switch (event.key) {
            case 'a':
                body.classList.add('col-4');
               break;
            case 'y':
                body.classList.add('col-4', 'offset-md-4');
               break;
           case 'p':
               body.classList.add('col-4', 'offset-md-8');
                break;
            case 'b':
               break;
       }
    });

```
