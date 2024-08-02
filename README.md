# Quiz Aventure

Quiz Aventure est une application web de quiz dans l'univers de One Piece qui est un manga d'aventure Pirate, construite avec React pour le front-end et Express pour le back-end. Les questions du quiz sont stockées dans un fichier JSON et servies via une API Express. L'application permet aux utilisateurs de répondre à des questions, de voir leur score et de recommencer le quiz afin d'avoir le maximum de réponses correctes, il faut donc avoir un score de 24/24 pour réussir le quiz.

### Choix Technologiques

#### Pourquoi React ?

- **Composants Réutilisables** : Facilite la création de composants modulaires et maintenables.
- **Gestion de l'État** : Simplifie la gestion de l'état de l'application avec des hooks comme `useState` et `useEffect`.
- **Performances** : Optimise les mises à jour de l'interface utilisateur grâce au Virtual DOM.

#### Pourquoi Express.js ?

- **Simplicité et Légèreté** : Idéal pour créer rapidement des API RESTful.
- **Flexibilité** : Permet une organisation claire et personnalisable des routes et middlewares.
- **Compatibilité avec Node.js** : Bénéficie de l'écosystème riche de Node.js et de npm.
## Fonctionnalités

- **Affichage des questions** : Les questions sont affichées une par une avec 4 options de réponse.
- **Calcul du score** : Le score est calculé en fonction des réponses correctes fournies par l'utilisateur.
- **Navigation** : Les utilisateurs peuvent passer d'une question à l'autre après y avoir répondu, ils peuvent voir leur score en direct et savoir grâce à un overlay si la réponse est bonne ou mauvaise.
- **Réinitialisation du quiz** : Possibilité de revenir au début du quiz après l'avoir terminé.
- **Page d'accueil animée** : Une page d'accueil avec un design attractif et un bouton pour démarrer le quiz.

## Prérequis

Assurez-vous d'avoir installé les logiciels suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```sh
    git clone https://github.com/NathanManiezPro/NathanECF.git
    ```

2. Accédez au dossier du projet :

    ```sh
    cd quiz-aventure
    ```

3. Installez les dépendances pour le front-end et le back-end :

    ```sh
    cd quiz-aventure
    npm install
    cd ../quiz-backend
    npm install
    ```

## Configuration

Assurez-vous que le fichier `questions.json` dans le dossier `quiz-backend` contient les questions de votre quiz. Voici un exemple de structure :

```json
[
    {
        "question": "Quel est le capitaine du navire 'Thousand Sunny' ?",
        "options": ["Roronoa Zoro", "Monkey D. Luffy", "Nami", "Usopp"],
        "answer": "Monkey D. Luffy"
    },
    {
        "question": "Quel est le rêve de Sanji ?",
        "options": ["Devenir le Seigneur des Pirates", "Trouver All Blue", "Devenir le meilleur épéiste", "Trouver le One Piece"],
        "answer": "Trouver All Blue"
    }
]
```

### Démarrage du projet

Démarrez le serveur Express :
```sh
cd quiz-backend
node index.js
```
Le serveur sera disponible à l'adresse http://localhost:3001.

Démarrez l'application React :

```sh
cd quiz-aventure
npm start
```
L'application sera disponible à l'adresse http://localhost:3000.

### Structure du Projet : 
- **quiz-aventure/** : Contient le code source du front-end React.
- **src/** : Dossier principal des fichiers source.
- **components/** : Contient les composants React.
- **Home.js** : Composant pour la page d'accueil.
- **Quiz.js**: Composant pour le quiz.
- **App.js** : Composant principal de l'application.
- **index.js** : Point d'entrée du front-end.
- **App.css** : Fichier de styles globaux pour l'application.
- **Quiz.css** : Fichier de styles spécifiques au quiz.
- **Home.css** : Fichier de styles spécifiques à la page d'accueil.
- **quiz-backend/** : Contient le code source du back-end Express.
- **index.js** : Point d'entrée du serveur Express.
- **questions.json** : Fichier contenant les questions du quiz.
- **scores.json** : Fichier ne contenant rien au début mais contient ensuite les meilleures scores obtenu
- **README.md** : Ce fichier.

### Utilisation
1. Accédez à l'application à l'adresse http://localhost:3000.
2. Cliquez sur le bouton "Jouer au jeu" pour commencer le quiz.
3. Répondez aux questions affichées.
4. Tout au long du quiz, le score sera affiché.
5. Cliquez sur "Revenir au début du jeu" pour recommencer le quiz.


### Dépendances
- **Front-end**
1. *React*
2. *Axios*
- **Back-end**
1. *Express*
2. *Cors*



### Auteur
Maniez Nathan