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



