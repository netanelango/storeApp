# Angular Store - Application E-commerce avec Angular et JSON Server

## Description
Angular Store est une application web e-commerce développée avec **Angular** et un backend simulé via **JSON Server**. Elle permet aux utilisateurs de s'inscrire, se connecter et parcourir des produits avec leurs détails.

##  Fonctionnalités
- **Authentification des utilisateurs** (inscription, connexion, déconnexion)
- **Affichage des produits** sous forme de cartes
- **Page de détails d'un produit**
- **Gestion de l'état utilisateur** avec `BehaviorSubject`
- **Sauvegarde de session** avec `localStorage`

## 🛠️ Installation et Exécution
### 1 Prérequis
- Node.js installé (v16 recommandé)
- Angular CLI installé (v16 max)

### 2️ Cloner le projet


### 3  Installer les dépendances
```sh
npm install
```

### 4️ Lancer le serveur JSON (Backend)
```sh
json-server --watch db.json --port 3000
```

### 5️  Lancer l'application Angular
```sh
ng serve --open
```

## Structure du Projet
```
angular-shop/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── product-detail/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── product.service.ts
│── db.json
│── angular.json
│── package.json
│── README.md
```

##  Routes Principales
| Route         | Description |
|--------------|-------------|
| `/`          | Accueil avec liste des produits |
| `/product/:id` | Détails d'un produit |
| `/login`     | Connexion utilisateur |
| `/register`  | Inscription utilisateur |

##  Améliorations Futures
- Ajout d'un panier d'achat
- Gestion des commandes et paiements
- Interface utilisateur améliorée avec Angular Material

## Auteur
- **Nom** : [ANGO]
- **Email** : [shalom.ango@efrei.net]
