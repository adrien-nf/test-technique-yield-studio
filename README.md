# YieldStagram
## Fonctionnalités
### Splash Screen
L'écran "Splash" s'affiche durant le chargement.
<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/44f9c2b2-5942-406b-90ad-bc777a0d9ec2" width="225" height="500">
</p>

### Écran d'accueil
L'écran d'accueil a plusieurs états:
- D'abord, sans photos, il affiche un smiley triste.
- Avec des photos, il les affiche dans une liste de la plus récente à la plus ancienne.
- Enfin, il est possible de supprimer les photos en masse.

Lorsque l'on appuie sur une photo, nous somme redirigé sur son écran dit "Show", présenté plus bas.
On peut également cliquer sur l'icône d'appareil photo pour rajouter une nouvelle photo.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/d92f47c6-a58a-4d2f-b32f-4846d5a2d0f2" width="225" height="500">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/02853032-c11c-4cc2-a660-cf94d1d2f068" width="225" height="500">
</p>

#### Mode supression de masse
La suppression en masse se fait en restant appuyé longtemps sur une photo. Ceci lance le mode "suppression de masse". Désormais, chaque pression simple sur une photo l'ajoute à la liste de photos à supprimer. Afin de confirmer la suppression, il suffit de cliquer sur la poubelle rouge qui s'affiche en haut à droite de l'écran.

Sur la première photo, nous avons sélectionné 4 images: les images n° 2, 3, 4 et 5. Seules les photos 1 et 6 n'ont pas été sélectionnées.

La seconde photo montre ce qu'il se passe lorsqu'on appuie sur la poubelle rouge.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/fa5693b5-78df-41f5-ae30-58c8cf841f84" width="225" height="500">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/15dec79b-f092-4456-a70b-34ed1ed6422b" width="225" height="500">
</p>

### Création de "post"
En appuyant sur l'appareil photo de l'écran d'accueil, nous arrivons sur la page de création de "post". Il est possible d'ajouter un titre à notre post, et de sélectionner une image.
Deux moyens s'offrent à nous: l'appareil photo, ou la galerie photos.

Le bouton de validation reste grisé tant qu'il n'y a pas une photo et un post.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/4ef1189a-a5e9-4b30-961d-fded9ca6161c" width="225" height="500">
</p>

#### Gestion des permissions
L'écran demande la permission lorsque l'on tente d'ajouter une photo. Si on refuse une première fois, l'application proposera d'ouvrir les paramètres comme montré ci-après.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/282b9f5d-d0c1-4557-9738-50ed1aa40a2f" width="225" height="500">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/bc54533a-618f-433e-a223-67e2d88fe03f" width="225" height="500">
</p>

#### Ajout de la photo
Il est possible d'éditer la taille de la photo au moment de l'ajout.
On note qu'à l'ajout d'un titre, l'application reste fonctionnelle et rien ne se cache derrière le clavier.
Sur cette photo, je venais de remporter un quiz à un meetup React & React Native. J'étais donc content, ce qui se lit à mon sourire.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/8a39ad34-eed9-4875-89b5-8d53edbec5b9" width="225" height="500">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/2c18cb65-4041-4c02-939c-8bcb6f699b45" width="225" height="500">
</p>

#### Validation
Une fois la photo ajoutée, l'utilisateur est renvoyé sur l'écran d'accueil et un snackbar lui précise que l'action a fonctionné.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/c1f2e85e-c0df-49bf-99dc-70050fb705a8" width="225" height="500">
</p>

### Affichage d'une photo
En cliquant sur une photo, on se fait rediriger sur la page d'affichage de ladite photo. En haut s'affiche le titre, suivi de la photo qui s'adapte au mieux aux dimensions de l'écran.
En cliquant sur la poubelle rouge, il est possible de supprimer la photo. Après quoi, on est redirigé sur l'écran d'accueil.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/81499d9a-d295-49d3-aed2-f3836d5e07a4" width="225" height="500">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/9d56fdd0-9403-4800-9ba1-fb5f1d2abee1" width="225" height="500">
</p>

### Mode Landscape
Bien que pas optimal pour une application de ce genre, le mode "Landscape" a été géré au mieux.

<p align="center">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/6fbc9b6d-82e8-4dd7-a517-4282dc5ca79b" width="500" height="225">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/821f3778-db94-4b9a-829b-20c3f9f5c19a" width="500" height="225">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/45945137-29d0-474e-9cfe-bd0cf0b1038d" width="500" height="225">
  <img src="https://github.com/adrien-nf/test-technique-yield-studio/assets/22148893/ba42f8f0-5f62-4a90-bf5b-ec04641c0794" width="500" height="225">
</p>

### Sauvegarde
Les photos sont sauvegardées entre les utilisations de l'application. Il est donc possible de quitter l'application, et revenir à notre loisir. Les photos sont sauvegardées par react-native-mmkv. Une Facade a été créee à cet effet: s'il y a besoin de changer de solution de sauvegarde, il suffira alors de modifier le code de la Facade.

### Détails techniques
L'application a été réalisée avec quelques défis:
- Je n'utilise habituellement pas tailwind, mais j'ai tenté l'expérience. J'aime bien, je n'utiliserais pas sur mes projets persos, mais sur des projets en collaboration pourquoi pas.
- Les états ont été gérés par zustand, que je n'utilise habituellement pas: je passe plutôt par un Context. C'était intéressant d'utiliser un outil de gestion d'état.
- Le formulaire a été géré par react-hook-form, que je n'utilise habituellement pas: j'ai été pas mal convaincu et je pense le réutiliser.
- La demande de permission est bien gérée dans un hook, 
- J'ai souhaité respecter le principe du YAGNI, ainsi, dans une application réelle avec des perspectives d'évolution, il est possible que certains morceaux d'architecture soient modifiés. Par exemple, certains types pourraient être déplacés dans leurs propres fichiers, les interfaces de Props pourraient être découplées et exportées, voire déplacées dans leurs propres fichiers. J'ai jugé que pour un sujet de cette ampleur, aller au plus simple était mieux.
- L'application a été testée sur téléphone Android réel, et sur émulateur Android.
- Je n'ai pas d'iPhone, j'ai codé au mieux l'application en espérant que tout soit bon sous iOS, j'ai tenté de n'utiliser que des librairies standards. Je mise sur le MacBook pro fourni pour travailler dans de meilleures conditions au sein de Yield Studio.
- Un travail a été effectué sur l'UX, en tentant de la mettre au mieux en avant.

### Conclusion
Enfin, l'application devrait respecter chacun des points énoncés dans la consigne. Si vous avez des questions la concernant, n'hésitez pas à me contacter pour plus de clarté.

## Cahier des charges

Hello et merci de prendre le temps de faire notre test technique !

L'objectif de ce test et produire rapidement une petite application permettant à l'utilisateur de se créer localement une galerie de photo.

Sur cette application, l'utilisateur pourra donc consulter, ajouter et supprimer des photos.

Ce test est prévue pour une durée d'environs 2-3h.

**Screens de l'application à mettre en place**

- Un screen home avec la galerie de photo déjà enregistrée
- Un screen de type "card" pour consulter le détail d'une photo
- Un screen de type "modal" contenant un formulaire pour ajouter une photo

**Détails techniques**

- L'application doit permettre d'ajouter ou de supprimer des photos
  - les photos doivent être enregistrées localement via react-native-mmkv (ou autre)
  - déplacer toute la logique dans un store avec zustand ou dans un React Context
- Ajouter un formulaire avec un champ string "Titre" pour le titre de la photo et un bouton permettant à l'utilisateur de sélectionner ou de prendre une photo
  - la demande de permission doit être faite dans un hook
  - le hook doit proposer une redirection vers les settings du téléphone si la demande de permission a déjà été refusée
  
**Informations supplémentaires**

- L'application doit être utilisable en format portait et paysage
- React Hook Form a été setup sur le projet mais n'est pas obligatoire
- Tailwind a été setup sur le projet mais n'est pas obligatoire
- Moti et Reanimated ont été setup sur le projet mais ne sont pas obligatoire
- Jest a été setup sur le projet mais n'est pas obligatoire
- Il n'est pas interdit d'ajouter des librairies supplémentaires sur le projet
- L'UI de l'application n'est pas prioritaire à l'UX sur ce projet et n'est surtout par prioritaire sur la qualité du code, son organisation et sa clarté
