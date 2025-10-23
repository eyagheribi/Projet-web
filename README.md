# EduLearn - Plateforme de Cours en Ligne

## 📚 Description
EduLearn est une plateforme de cours en ligne moderne et responsive qui permet aux utilisateurs de découvrir, explorer et s'inscrire à des cours de qualité.

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- Hero section attrayante
- Cours en vedette
- Catégories de cours
- Navigation intuitive

### 📖 Fiches de cours
- Lecteur vidéo intégré
- Informations détaillées du cours
- Onglets (Aperçu, Curriculum, Avis, Q&A)
- Boutons d'action (Ajouter au panier, Favoris)

### 🎯 Interface utilisateur
- Barre de progression animée avec effet shimmer
- Menu burger avec options (Thème, Profil)
- Panier et favoris avec compteurs
- Pages d'authentification dédiées (Connexion/Inscription)

### 📱 Responsive Design
- **Mobile** (≤768px) : Interface optimisée pour smartphones
- **Tablette** (769px-1024px) : Layout adapté pour tablettes
- **Desktop** (≥1025px) : Expérience complète sur ordinateur

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec Flexbox/Grid
- **JavaScript** : Interactivité et gestion d'état
- **Responsive Design** : Media queries pour tous les écrans

### Fonctionnalités avancées
- **Animations CSS** : Transitions fluides et effets visuels
- **Local Storage** : Sauvegarde des préférences utilisateur
- **Dark Mode** : Support du thème sombre
- **Progress Bar** : Barre de progression animée

## 📁 Structure du projet

```
udemy-like-lms/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── public/             # Ressources statiques
│   ├── *.jpg          # Images des cours
│   └── *.png          # Icônes et illustrations
└── README.md          # Documentation
```

## 🚀 Installation et utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel)

### Lancement
1. **Cloner le projet** :
   ```bash
   git clone https://github.com/eyagheribi/Projet-web.git
   cd udemy-like-lms
   ```

2. **Lancer un serveur local** :
   ```bash
   python -m http.server 8000
   # ou
   npx serve .
   ```

3. **Ouvrir dans le navigateur** :
   ```
   http://localhost:8000
   ```

## 🎨 Fonctionnalités détaillées

### Navigation
- **Header responsive** avec logo, recherche et menu utilisateur
- **Menu burger** pour mobile avec options essentielles
- **Navigation fluide** avec barre de progression

### Cours
- **Galerie de cours** avec filtres par catégorie
- **Page de détail** avec lecteur vidéo et informations complètes
- **Système de favoris** et panier d'achat

### Authentification
- **Pages dédiées** pour connexion et inscription
- **Design moderne** avec options sociales
- **Validation de formulaire** côté client

## 📱 Responsive Breakpoints

- **Mobile** : ≤ 768px
  - Layout en colonne unique
  - Menu burger en plein écran
  - Vidéos adaptées (250px)

- **Tablette** : 769px - 1024px
  - Layout en 2 colonnes
  - Vidéos moyennes (300px)
  - Navigation optimisée

- **Desktop** : ≥ 1025px
  - Layout complet (2fr 1fr)
  - Vidéos grandes (400px)
  - Toutes les fonctionnalités

## 🎯 Conformité aux exigences

✅ **Page d'accueil + fiches de cours** : Complètement implémentées  
✅ **Barre de progression + menu burger** : Fonctionnels et animés  
✅ **Fichiers HTML/CSS/JS séparés** : Architecture claire  
✅ **Version mobile, tablette et desktop** : Responsive design complet  

## 🔧 Personnalisation

### Couleurs
Les couleurs sont définies dans les variables CSS :
```css
:root {
  --primary-color: #6366f1;
  --accent-color: #8b5cf6;
  --text-dark: #1e293b;
  --text-light: #64748b;
}
```

### Contenu
Les cours et données sont stockés dans `script.js` dans la variable `coursesData`.

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 👨‍💻 Auteur
Développé par EduLearn Team

---

*Projet réalisé dans le cadre d'un cours de développement web moderne.*