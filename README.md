# EduLearn - Plateforme de Cours en Ligne

EduLearn est une plateforme d'apprentissage en ligne moderne et intuitive, inspirée d'Udemy, qui permet aux utilisateurs de découvrir, acheter et suivre des cours en ligne.

## 🌟 Fonctionnalités

### Interface Utilisateur
- **Design Responsive** : Interface adaptée à tous les appareils (desktop, tablette, mobile)
- **Mode Sombre/Clair** : Basculement entre les thèmes pour un confort visuel optimal
- **Multi-langues** : Support du français et de l'anglais
- **Navigation Intuitive** : Menu de navigation simple et efficace

### Gestion des Cours
- **Catalogue de Cours** : Plus de 10,000 cours disponibles dans diverses catégories
- **Système de Filtres** : Filtrage par catégorie, prix, note et popularité
- **Recherche Avancée** : Recherche rapide dans la base de données des cours
- **Détails Complets** : Pages détaillées avec aperçu, curriculum, avis et Q&A

### Fonctionnalités Utilisateur
- **Authentification** : Système de connexion et d'inscription
- **Tableau de Bord** : Suivi des cours suivis, progression et statistiques
- **Panier d'Achats** : Gestion des achats avec résumé détaillé
- **Liste de Souhaits** : Sauvegarde des cours favoris
- **Lecteur Vidéo Intégré** : Player vidéo avec contrôles avancés

### Contenu Interactif
- **Lecteur Vidéo YouTube** : Intégration de vidéos YouTube pour les cours
- **Contrôles Vidéo** : Vitesse de lecture, sous-titres, navigation entre leçons
- **Ressources Téléchargeables** : Accès aux documents et ressources du cours
- **Système de Progression** : Suivi automatique de l'avancement dans les cours

## 🚀 Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript (ES6+)
- **Design** : CSS Grid, Flexbox, Animations CSS
- **Intégrations** : YouTube API pour les vidéos
- **Responsive** : Mobile-first design approach

## 📁 Structure du Projet

```
udemy-like-lms/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── package.json        # Configuration du projet
├── public/             # Images et ressources
│   ├── css-styling-web.jpg
│   ├── javascript-programming.png
│   ├── nodejs-backend-server.jpg
│   ├── python-programming-concept.png
│   ├── react-web-development.png
│   └── web-design-ui-ux.jpg
├── .gitignore          # Fichiers à ignorer par Git
└── README.md           # Documentation du projet
```

## 🛠️ Installation et Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel, pour éviter les restrictions CORS)

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/udemy-like-lms.git
   cd udemy-like-lms
   ```

2. **Ouvrir dans un navigateur**
   - Option 1 : Ouvrir directement `index.html` dans votre navigateur
   - Option 2 : Utiliser un serveur local :
     ```bash
     # Avec Python
     python -m http.server 8000
     
     # Avec Node.js (si vous avez http-server installé)
     npx http-server
     
     # Avec PHP
     php -S localhost:8000
     ```

3. **Accéder à l'application**
   - Ouvrez votre navigateur et allez à `http://localhost:8000`
   - Ou ouvrez directement le fichier `index.html`

## 🎯 Utilisation

### Navigation
- **Accueil** : Page d'accueil avec cours en vedette et catégories
- **Cours** : Catalogue complet avec filtres et tri
- **Tableau de Bord** : Gestion des cours suivis et progression
- **Panier** : Gestion des achats

### Fonctionnalités Principales
1. **Explorer les Cours** : Parcourez le catalogue et utilisez les filtres
2. **Voir les Détails** : Cliquez sur un cours pour voir toutes les informations
3. **Ajouter au Panier** : Ajoutez des cours à votre panier d'achats
4. **Suivre un Cours** : Accédez au lecteur vidéo et suivez votre progression

## 🎨 Personnalisation

### Thèmes
- Basculement entre mode clair et sombre
- Thème automatique basé sur les préférences système

### Langues
- Support français/anglais
- Interface entièrement traduite

### Paramètres
- Configuration des préférences utilisateur
- Gestion des méthodes de paiement
- Paramètres de notification

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les écrans :
- **Desktop** : Interface complète avec sidebar
- **Tablette** : Layout adapté avec navigation optimisée
- **Mobile** : Interface tactile avec menu hamburger

## 🔮 Fonctionnalités Futures

- [ ] Système de paiement intégré
- [ ] Certificats de complétion
- [ ] Chat en direct avec les instructeurs
- [ ] Application mobile native
- [ ] API backend pour la gestion des données
- [ ] Système de recommandations IA

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -am 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteur

Développé avec ❤️ par [Votre Nom]

## 📞 Support

Pour toute question ou problème, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Me contacter directement

---

**EduLearn** - Apprenez de nouvelles compétences, où que vous soyez ! 🚀
