# Test de développeur front-end chez Pretto

## Instructions

Le test devrait prendre plus ou moins 2 heures à finir. Si vous dépasser un peu ce n'est pas grave. Lors de l'entretien, nous aurons une discussion sur le code, notamment comment rajouter des features.

Pour commencer, vous devrez vous cloner le repo suivant : `finspot/test-front`

Vous avez le droit d'utiliser les librairies que vous voulez. Vous gérez le CSS comme vous le voulez. Le tout doit être responsive.

Une fois le travail terminé, vous devrez le mettre en ligne.

## Specs fonctionnelles

Au chargement, aucun élément n'est sélectionné.

Dans le header, le titre affiche le nombre d'éléments sélectionnés, le contenu le nom de chaque héros.

Au clic sur une Carte, celle-ci passe dans un état 'sélectionnée', on peut alors la déselectionner.

Le bouton de validation log tous les éléments sélectionnés sous format d'un tableau d'objets avec toutes ses infos (id, title, description).

La validation n'est possible que lorsqu'il y a entre 2 et 4 éléments sélectionnés. Lorsque ce n'est pas le cas, le bouton n'est pas affiché.

L'annulation désélectionne toutes les cartes sélectionnées mais garde le champs de recherche.

Le champs de recherche filtre les cartes de personnages sur leur titre. (ex. : lorsque je tape 'ar', il ne doit apparaître que les cartes de 'Mario' et 'Samus Aran')

## Résultat attendu

![Maquette test front end Pretto](smashbros.png)

## Éléments graphiques

![Annotations](annotations.png)

## Responsive

### Layout

La largeur max du conteneur est de 1240px. On affiche une seule carte jusqu'à 600px, 2 cartes entre 600px et 840px, 3 cartes au-delà de 840px.

### Carte

Un Carte a un padding de 16px jusqu'à 720px, 24px au-delà.
