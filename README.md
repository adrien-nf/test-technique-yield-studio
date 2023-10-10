# technical-test-react-native

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
