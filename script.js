// ===== Data Management =====
const coursesData = [
  {
    id: 1,
    title: "JavaScript Avancé",
    category: "Programmation",
    instructor: "Jean Dupont",
    price: 49.99,
    rating: 4.8,
    students: 15420,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/PkZYUXjMrF4",
    description: "Maîtrisez JavaScript avec des concepts avancés",
    fullDescription:
      "Apprenez les concepts avancés de JavaScript incluant les closures, les prototypes, async/await, et bien plus.",
    learningPoints: [
      "Comprendre les closures et le scope",
      "Maîtriser les Promises et async/await",
      "Travailler avec les prototypes",
      "Utiliser les modules ES6",
    ],
    videoUrl: "https://www.youtube.com/embed/PkZYUXjMrF4",
    sections: [
      {
        id: 1,
        title: "Fondamentaux",
        lessons: [
          { id: 1, title: "Introduction", duration: "15 min", videoUrl: "https://www.youtube.com/embed/PkZYUXjMrF4" },
          {
            id: 2,
            title: "Variables et Types",
            duration: "20 min",
            videoUrl: "https://www.youtube.com/embed/PkZYUXjMrF4",
          },
        ],
      },
      {
        id: 2,
        title: "Concepts Avancés",
        lessons: [
          { id: 3, title: "Closures", duration: "25 min", videoUrl: "https://www.youtube.com/embed/PkZYUXjMrF4" },
          { id: 4, title: "Async/Await", duration: "30 min", videoUrl: "https://www.youtube.com/embed/PkZYUXjMrF4" },
        ],
      },
    ],
    reviews: [
      { author: "Marie", rating: 5, text: "Excellent cours, très bien expliqué!", date: "2025-01-15" },
      { author: "Pierre", rating: 4, text: "Bon contenu, pourrait avoir plus d'exercices", date: "2025-01-10" },
    ],
    qa: [
      { question: "Comment fonctionne async/await?", answer: "Async/await est une syntaxe pour gérer les Promises..." },
      {
        question: "Quelle est la différence entre var et let?",
        answer: "Let a un scope de bloc tandis que var a un scope de fonction...",
      },
    ],
  },
  {
    id: 2,
    title: "React Complet",
    category: "Frontend",
    instructor: "Sophie Martin",
    price: 59.99,
    rating: 4.9,
    students: 22150,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/SqcY0GlETPk",
    description: "Devenez expert en React",
    fullDescription: "Apprenez React de zéro à expert avec les hooks, le context API, et les meilleures pratiques.",
    learningPoints: [
      "Créer des composants React",
      "Utiliser les hooks (useState, useEffect)",
      "Gérer l'état avec Context API",
      "Optimiser les performances",
    ],
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    sections: [
      {
        id: 1,
        title: "Bases de React",
        lessons: [
          {
            id: 1,
            title: "JSX et Composants",
            duration: "20 min",
            videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
          },
          { id: 2, title: "Props et State", duration: "25 min", videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk" },
        ],
      },
    ],
    reviews: [{ author: "Luc", rating: 5, text: "Meilleur cours React que j'ai suivi!", date: "2025-01-12" }],
    qa: [],
  },
  {
    id: 3,
    title: "Web Design Moderne",
    category: "Design",
    instructor: "Emma Rousseau",
    price: 39.99,
    rating: 4.7,
    students: 18900,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/0xF6aU9qAVE",
    description: "Créez des designs web modernes et attrayants",
    fullDescription: "Apprenez les principes du design web moderne, la typographie, les couleurs, et l'UX.",
    learningPoints: [
      "Principes du design",
      "Typographie et couleurs",
      "Responsive design",
      "Prototypage et wireframing",
    ],
    videoUrl: "https://www.youtube.com/embed/0xF6aU9qAVE",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 4,
    title: "Python pour Débutants",
    category: "Programmation",
    instructor: "Marc Lefevre",
    price: 0,
    rating: 4.6,
    students: 45230,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/kqtZrmDKwOc",
    description: "Apprenez Python gratuitement",
    fullDescription: "Cours gratuit pour débuter avec Python.",
    learningPoints: ["Syntaxe Python", "Variables et types", "Boucles et conditions", "Fonctions"],
    videoUrl: "https://www.youtube.com/embed/kqtZrmDKwOc",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 5,
    title: "CSS Avancé",
    category: "Frontend",
    instructor: "Nathalie Petit",
    price: 34.99,
    rating: 4.8,
    students: 12450,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    description: "Maîtrisez CSS avec les grilles et flexbox",
    fullDescription: "Apprenez CSS avancé incluant Grid, Flexbox, animations et responsive design.",
    learningPoints: ["Flexbox et Grid", "Animations CSS", "Responsive design", "Préprocesseurs CSS"],
    videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 6,
    title: "Node.js Backend",
    category: "Backend",
    instructor: "Thomas Bernard",
    price: 54.99,
    rating: 4.7,
    students: 9870,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "Créez des APIs avec Node.js",
    fullDescription: "Apprenez à créer des serveurs et des APIs avec Node.js et Express.",
    learningPoints: ["Express.js", "Bases de données", "Authentification", "Déploiement"],
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 7,
    title: "Développement Mobile React Native",
    category: "Mobile",
    instructor: "Alexandra Dubois",
    price: 69.99,
    rating: 4.8,
    students: 15680,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/0Z0hUCOu25o",
    description: "Créez des applications mobiles avec React Native",
    fullDescription: "Apprenez à développer des applications mobiles cross-platform avec React Native.",
    learningPoints: ["React Native basics", "Navigation", "APIs et données", "Déploiement"],
    videoUrl: "https://www.youtube.com/embed/0Z0hUCOu25o",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 8,
    title: "Data Science avec Python",
    category: "Data Science",
    instructor: "Dr. Marie Curie",
    price: 79.99,
    rating: 4.9,
    students: 22340,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/aircAruvnKk",
    description: "Analysez des données avec Python et ses bibliothèques",
    fullDescription: "Maîtrisez la data science avec Pandas, NumPy, Matplotlib et Scikit-learn.",
    learningPoints: ["Pandas et NumPy", "Visualisation", "Machine Learning", "Analyse statistique"],
    videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 9,
    title: "UI/UX Design Avancé",
    category: "Design",
    instructor: "Lucas Design",
    price: 49.99,
    rating: 4.7,
    students: 18750,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/7gXqQhX4Hw8",
    description: "Créez des interfaces utilisateur exceptionnelles",
    fullDescription: "Apprenez les principes avancés du design UI/UX et les outils professionnels.",
    learningPoints: ["Design thinking", "Prototypage", "Figma avancé", "Tests utilisateurs"],
    videoUrl: "https://www.youtube.com/embed/7gXqQhX4Hw8",
    sections: [],
    reviews: [],
    qa: [],
  },
  {
    id: 10,
    title: "DevOps et Déploiement",
    category: "Backend",
    instructor: "Pierre DevOps",
    price: 89.99,
    rating: 4.8,
    students: 12340,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/9cP6B2b0Q3M",
    description: "Maîtrisez DevOps et le déploiement d'applications",
    fullDescription: "Apprenez Docker, Kubernetes, CI/CD et les meilleures pratiques DevOps.",
    learningPoints: ["Docker et conteneurs", "Kubernetes", "CI/CD", "Monitoring"],
    videoUrl: "https://www.youtube.com/embed/9cP6B2b0Q3M",
    sections: [],
    reviews: [],
    qa: [],
  },
]

const categories = [
  { id: 1, name: "Programmation", icon: "💻" },
  { id: 2, name: "Frontend", icon: "🎨" },
  { id: 3, name: "Backend", icon: "⚙️" },
  { id: 4, name: "Design", icon: "✏️" },
  { id: 5, name: "Mobile", icon: "📱" },
  { id: 6, name: "Data Science", icon: "📊" },
]
const quizzesData = {
    1: [ // Cours JavaScript Avancé
        {
            question: "Quelle est la différence entre var et let ?",
            options: [
                "Var a un scope de fonction, let a un scope de bloc",
                "Var est constant, let est variable",
                "Var et let sont identiques",
                "Let ne peut pas être réassigné"
            ],
            answer: 0
        },
        {
            question: "Que fait async/await ?",
            options: [
                "Gérer les Promises de façon synchrone",
                "Créer des variables globales",
                "Déclarer des fonctions normales",
                "Rien du tout"
            ],
            answer: 0
        },
        {
            question: "Quel type de fonction crée un closure ?",
            options: [
                "Une fonction imbriquée qui accède aux variables externes",
                "Une fonction anonyme",
                "Une fonction fléchée uniquement",
                "Une fonction asynchrone"
            ],
            answer: 0
        },
        {
            question: "Comment créer un tableau en JavaScript ?",
            options: [
                "var arr = []",
                "var arr = {}",
                "var arr = ()",
                "var arr = null"
            ],
            answer: 0
        },
        {
            question: "Que retourne typeof null ?",
            options: [
                "'null'",
                "'object'",
                "'undefined'",
                "'number'"
            ],
            answer: 1
        }
    ]
};


function renderQuiz() {
    const courseId = parseInt(localStorage.getItem("currentCourseId"));
    const quizContainer = document.getElementById("quizContainer");
    const quizResult = document.getElementById("quizResult");
    quizResult.textContent = "";
    quizContainer.innerHTML = "";

    const quiz = quizzesData[courseId];
    if (!quiz || quiz.length === 0) {
        quizContainer.innerHTML = "<p>Aucun quiz disponible.</p>";
        return;
    }

    quiz.forEach((q, i) => {
        const qDiv = document.createElement("div");
        qDiv.className = "quiz-question";
        qDiv.innerHTML = `<p>${i+1}. ${q.question}</p>`;
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.style.display = "block";
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${i}`;
            input.value = j;
            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            qDiv.appendChild(label);
        });
        quizContainer.appendChild(qDiv);
    });

    document.getElementById("submitQuizBtn").onclick = () => {
        let score = 0;
        quiz.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && parseInt(selected.value) === q.answer) score++;
        });
        quizResult.textContent = `Votre score : ${score} / ${quiz.length}`;
    };
}

// Appeler après le rendu du cours
document.addEventListener("DOMContentLoaded", () => {
    renderCourseDetail();
    renderQuiz();
});


// ===== State Management =====
let currentPage = "home"
let cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || []
const courseProgress = JSON.parse(localStorage.getItem("courseProgress")) || {}
const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {
  name: "Utilisateur",
  email: "user@example.com",
}
let currentCourse = null
const currentLesson = null
let filteredCourses = [...coursesData]
let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false
let currentTheme = localStorage.getItem("theme") || "light"
let currentLanguage = localStorage.getItem("language") || "fr"

// ===== Translation Dictionary =====
const translations = {
  fr: {
    // Header & Navigation
    "search-placeholder": "Rechercher des cours...",
    "login-subtitle": "Connectez-vous à votre compte EduLearn",
    "signup-subtitle": "Créez votre compte EduLearn",
    "remember-me": "Se souvenir de moi",
    "forgot-password": "Mot de passe oublié?",
    "terms-agreement": "J'accepte les conditions d'utilisation et la politique de confidentialité",
    "or": "ou",
    "login-google": "Continuer avec Google",
    "login-facebook": "Continuer avec Facebook",
    "signup-google": "Continuer avec Google",
    "signup-facebook": "Continuer avec Facebook",
    "nav-home": "Accueil",
    "search-courses": "Rechercher des cours...",
    "cart": "Panier",
    "wishlist": "Favoris",
    "add-to-cart": "Ajouter au Panier",
    "add-to-favorites": "Ajouter aux Favoris",
    "remove-from-favorites": "Retirer des Favoris",
    "back": "Retour",
    "overview": "Aperçu",
    "curriculum": "Curriculum",
    "reviews": "Avis",
    "qa": "Q&A",
    "about-course": "À propos de ce cours",
    "what-you-learn": "Ce que vous apprendrez",
    "course-content": "Ce cours comprend des vidéos, des exercices pratiques et des ressources téléchargeables.",
    "create-react-components": "Créer des composants React",
    "use-hooks": "Utiliser les hooks React",
    "context-api": "Gérer l'état avec Context API",
    "best-practices": "Appliquer les meilleures pratiques",
    "instructor": "Instructeur",
    "theme-toggle": "Mode Sombre",
    "theme-toggle-dark": "Mode Clair",
    "nav-courses": "Cours",
    "nav-dashboard": "Mon Tableau de Bord",
   
    // Burger Menu
    "burger-login": "Se Connecter",
    "burger-signup": "S'inscrire",
    "burger-settings": "Paramètres",
    "burger-theme": "Mode Sombre",

    // Hero Section
    "hero-title": "Apprenez de Nouvelles Compétences",
    "hero-description": "Rejoignez plus de 500,000 professionnels qui développent leurs compétences avec nos cours créés par des experts de l'industrie.",
    "hero-btn": "Commencer l'apprentissage",

    // Featured Courses
    "featured-title": "Cours en Vedette",
    "categories-title": "Parcourir par Catégorie",

    // Stats
    "stat-courses": "Cours disponibles",
    "stat-students": "Étudiants actifs",
    "stat-rating": "Note moyenne",
    "stat-support": "Support disponible",

    // Filters
    "filters-title": "Filtres",
    "filter-category": "Catégorie",
    "filter-price": "Prix",
    "filter-free": "Gratuit",
    "filter-paid": "Payant",
    "filter-rating": "Note",
    "filter-reset": "Réinitialiser",

    // Sort
    "sort-label": "Trier par:",
    "sort-popular": "Populaire",
    "sort-newest": "Récent",
    "sort-rating": "Note",
    "sort-price-low": "Prix: Bas à Haut",
    "sort-price-high": "Prix: Haut à Bas",

    // Course Card
    "course-students": "étudiants",
    "course-add": "Ajouter",
    "course-free": "Gratuit",

    // Course Detail
    "course-back": "← Retour",
    "course-add-cart": "Ajouter au Panier",
    "course-add-wishlist": "❤️ Ajouter aux Favoris",
    "course-about": "À propos de ce cours",
    "course-learn": "Ce que vous apprendrez",
    "course-instructor": "Instructeur",
    "course-content": "Contenu du Cours",
    "course-reviews": "Avis des Étudiants",
    "course-qa": "Questions et Réponses",

    // Tabs
    "tab-overview": "Aperçu",
    "tab-curriculum": "Curriculum",
    "tab-reviews": "Avis",
    "tab-qa": "Q&A",

    // Dashboard
    "dashboard-title": "Mon Tableau de Bord",
    "dashboard-profile": "Mon Profil",
    "dashboard-stats": "Mes Statistiques",
    "dashboard-enrolled": "Cours Suivis:",
    "dashboard-completed": "Cours Complétés:",
    "dashboard-hours": "Heures d'Apprentissage:",
    "dashboard-my-courses": "Mes Cours",
    "dashboard-wishlist": "Mes Favoris",
    "dashboard-no-courses": "Vous n'avez pas encore suivi de cours",
    "dashboard-no-wishlist": "Vous n'avez pas de favoris",
    "dashboard-edit": "Modifier",
    "dashboard-logout": "Se Déconnecter",

    // Cart
    "cart-title": "Mon Panier",
    "cart-empty": "Votre panier est vide",
    "cart-summary": "Résumé",
    "cart-subtotal": "Sous-total:",
    "cart-discount": "Réduction:",
    "cart-total": "Total:",
    "cart-checkout": "Procéder au Paiement",
    "cart-continue": "Continuer les Achats",
    "cart-unlimited": "Accès illimité",
    "cart-remove": "✕",

    // Auth
    "auth-login": "Se Connecter",
    "auth-signup": "S'Inscrire",
    "auth-email": "Email",
    "auth-password": "Mot de passe",
    "auth-name": "Nom complet",
    "auth-confirm-password": "Confirmer le mot de passe",
    "auth-success-login": "Connexion réussie!",
    "auth-success-signup": "Inscription réussie!",
    "auth-success-logout": "Déconnexion réussie!",
    "auth-already-in-cart": "Ce cours est déjà dans votre panier",
    "auth-added-to-cart": "ajouté au panier!",
    "auth-already-in-wishlist": "Ce cours est déjà dans vos favoris",
    "auth-added-to-wishlist": "ajouté aux favoris!",

    // Settings
    "settings-title": "Paramètres",
    "settings-appearance": "Apparence",
    "settings-light": "Mode Clair",
    "settings-dark": "Mode Sombre",
    "settings-auto": "Auto",
    "settings-language": "Langue",
    "settings-payment": "Paiement",
    "settings-payment-method": "Méthode de paiement préférée:",
    "settings-card": "Carte Bancaire",
    "settings-paypal": "PayPal",
    "settings-wallet": "Portefeuille",
    "settings-auto-renew": "Renouvellement automatique",
    "settings-save": "Enregistrer les Paramètres",

    // Profile
    "profile-title": "Mon Profil",
    "profile-name": "Nom",
    "profile-email": "Email",
    "profile-save": "Enregistrer",
    "profile-updated": "Profil mis à jour!",

    // Footer
    "footer-about": "À Propos",
    "footer-about-text": "EduLearn est une plateforme d'apprentissage en ligne moderne.",
    "footer-links": "Liens Utiles",
    "footer-terms": "Conditions d'Utilisation",
    "footer-privacy": "Politique de Confidentialité",
    "footer-contact": "Contact",
    "footer-follow": "Suivez-nous",
    "footer-facebook": "Facebook",
    "footer-twitter": "Twitter",
    "footer-linkedin": "LinkedIn",
    "footer-copyright": "© 2025 EduLearn. Tous droits réservés.",

    // Course Player
    "player-previous": "← Leçon Précédente",
    "player-next": "Leçon Suivante →",
    "player-speed": "Vitesse:",
    "player-captions": "Sous-titres:",
    "player-resources": "📥 Ressources",
    "player-slides": "📄 Slides du Cours",
    "player-notes": "📝 Notes de Cours",
    "player-code": "💻 Code Source",
    "player-questions": "Questions",

    // Messages
    "msg-empty-cart": "Votre panier est vide",
    "msg-checkout-success": "Paiement réussi! Vous pouvez maintenant accéder à vos cours.",
    "msg-no-reviews": "Aucun avis pour le moment",
    "msg-no-qa": "Aucune question pour le moment",
    "msg-course-content": "Ce cours comprend des vidéos, des exercices pratiques et des ressources téléchargeables.",
  },
  en: {
    // Header & Navigation
    "search-placeholder": "Search courses...",
    "login-subtitle": "Sign in to your EduLearn account",
    "signup-subtitle": "Create your EduLearn account",
    "remember-me": "Remember me",
    "forgot-password": "Forgot password?",
    "terms-agreement": "I accept the terms of use and privacy policy",
    "or": "or",
    "login-google": "Continue with Google",
    "login-facebook": "Continue with Facebook",
    "signup-google": "Continue with Google",
    "signup-facebook": "Continue with Facebook",
    "nav-home": "Home",
    "search-courses": "Search courses...",
    "cart": "Cart",
    "wishlist": "Wishlist",
    "add-to-cart": "Add to Cart",
    "add-to-favorites": "Add to Favorites",
    "remove-from-favorites": "Remove from Favorites",
    "back": "Back",
    "overview": "Overview",
    "curriculum": "Curriculum",
    "reviews": "Reviews",
    "qa": "Q&A",
    "about-course": "About this course",
    "what-you-learn": "What you will learn",
    "course-content": "This course includes videos, practical exercises and downloadable resources.",
    "create-react-components": "Create React components",
    "use-hooks": "Use React hooks",
    "context-api": "Manage state with Context API",
    "best-practices": "Apply best practices",
    "instructor": "Instructor",
    "theme-toggle": "Dark Mode",
    "theme-toggle-dark": "Light Mode",
    "nav-courses": "Courses",
    "nav-dashboard": "My Dashboard",
   
    // Burger Menu
    "burger-login": "Sign In",
    "burger-signup": "Sign Up",
    "burger-settings": "Settings",
    "burger-theme": "Dark Mode",

    // Hero Section
    "hero-title": "Learn New Skills",
    "hero-description": "Join more than 500,000 professionals who develop their skills with our courses created by industry experts.",
    "hero-btn": "Start Learning",

    // Featured Courses
    "featured-title": "Featured Courses",
    "categories-title": "Browse by Category",

    // Stats
    "stat-courses": "Courses available",
    "stat-students": "Active students",
    "stat-rating": "Average rating",
    "stat-support": "Support available",

    // Filters
    "filters-title": "Filters",
    "filter-category": "Category",
    "filter-price": "Price",
    "filter-free": "Free",
    "filter-paid": "Paid",
    "filter-rating": "Rating",
    "filter-reset": "Reset",

    // Sort
    "sort-label": "Sort by:",
    "sort-popular": "Popular",
    "sort-newest": "Newest",
    "sort-rating": "Rating",
    "sort-price-low": "Price: Low to High",
    "sort-price-high": "Price: High to Low",

    // Course Card
    "course-students": "students",
    "course-add": "Add",
    "course-free": "Free",

    // Course Detail
    "course-back": "← Back",
    "course-add-cart": "Add to Cart",
    "course-add-wishlist": "❤️ Add to Wishlist",
    "course-about": "About this course",
    "course-learn": "What you'll learn",
    "course-instructor": "Instructor",
    "course-content": "Course Content",
    "course-reviews": "Student Reviews",
    "course-qa": "Questions & Answers",

    // Tabs
    "tab-overview": "Overview",
    "tab-curriculum": "Curriculum",
    "tab-reviews": "Reviews",
    "tab-qa": "Q&A",

    // Dashboard
    "dashboard-title": "My Dashboard",
    "dashboard-profile": "My Profile",
    "dashboard-stats": "My Statistics",
    "dashboard-enrolled": "Courses Enrolled:",
    "dashboard-completed": "Courses Completed:",
    "dashboard-hours": "Learning Hours:",
    "dashboard-my-courses": "My Courses",
    "dashboard-wishlist": "My Wishlist",
    "dashboard-no-courses": "You haven't taken any courses yet",
    "dashboard-no-wishlist": "You don't have any favorites",
    "dashboard-edit": "Edit",
    "dashboard-logout": "Logout",

    // Cart
    "cart-title": "My Cart",
    "cart-empty": "Your cart is empty",
    "cart-summary": "Summary",
    "cart-subtotal": "Subtotal:",
    "cart-discount": "Discount:",
    "cart-total": "Total:",
    "cart-checkout": "Proceed to Checkout",
    "cart-continue": "Continue Shopping",
    "cart-unlimited": "Unlimited access",
    "cart-remove": "✕",

    // Auth
    "auth-login": "Login",
    "auth-signup": "Sign Up",
    "auth-email": "Email",
    "auth-password": "Password",
    "auth-name": "Full Name",
    "auth-confirm-password": "Confirm Password",
    "auth-success-login": "Login successful!",
    "auth-success-signup": "Sign up successful!",
    "auth-success-logout": "Logout successful!",
    "auth-already-in-cart": "This course is already in your cart",
    "auth-added-to-cart": "added to cart!",
    "auth-already-in-wishlist": "This course is already in your wishlist",
    "auth-added-to-wishlist": "added to wishlist!",

    // Settings
    "settings-title": "Settings",
    "settings-appearance": "Appearance",
    "settings-light": "Light Mode",
    "settings-dark": "Dark Mode",
    "settings-auto": "Auto",
    "settings-language": "Language",
    "settings-payment": "Payment",
    "settings-payment-method": "Preferred payment method:",
    "settings-card": "Credit Card",
    "settings-paypal": "PayPal",
    "settings-wallet": "Wallet",
    "settings-auto-renew": "Auto renewal",
    "settings-save": "Save Settings",

    // Profile
    "profile-title": "My Profile",
    "profile-name": "Name",
    "profile-email": "Email",
    "profile-save": "Save",
    "profile-updated": "Profile updated!",

    // Footer
    "footer-about": "About",
    "footer-about-text": "EduLearn is a modern online learning platform.",
    "footer-links": "Useful Links",
    "footer-terms": "Terms of Use",
    "footer-privacy": "Privacy Policy",
    "footer-contact": "Contact",
    "footer-follow": "Follow Us",
    "footer-facebook": "Facebook",
    "footer-twitter": "Twitter",
    "footer-linkedin": "LinkedIn",
    "footer-copyright": "© 2025 EduLearn. All rights reserved.",

    // Course Player
    "player-previous": "← Previous Lesson",
    "player-next": "Next Lesson →",
    "player-speed": "Speed:",
    "player-captions": "Captions:",
    "player-resources": "📥 Resources",
    "player-slides": "📄 Course Slides",
    "player-notes": "📝 Course Notes",
    "player-code": "💻 Source Code",
    "player-questions": "Questions",

    // Messages
    "msg-empty-cart": "Your cart is empty",
    "msg-checkout-success": "Payment successful! You can now access your courses.",
    "msg-no-reviews": "No reviews yet",
    "msg-no-qa": "No questions yet",
    "msg-course-content": "This course includes videos, practical exercises, and downloadable resources.",
  },
}

// ===== Translation Function =====
function t(key) {
  return translations[currentLanguage]?.[key] || translations["en"]?.[key] || key
}

// ===== Theme Management =====
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  localStorage.setItem("theme", currentTheme)
  applyTheme()
  updateThemeButton()
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme)
  console.log("Theme applied:", currentTheme)
}

function updateThemeButton() {
  const themeButton = document.getElementById("burgerTheme")
  if (themeButton) {
    const icon = themeButton.querySelector(".burger-icon")
    const text = themeButton.querySelector(".burger-text")
    if (currentTheme === "dark") {
      icon.textContent = "☀️"
      text.textContent = "Mode Clair"
    } else {
      icon.textContent = "🌙"
      text.textContent = "Mode Sombre"
    }
  }
}

function setupThemeToggle() {
  // Initialize theme from localStorage or default to light
  currentTheme = localStorage.getItem("theme") || "light"
  applyTheme()
  updateThemeButton()
}

// ===== Progress Bar Management =====
function updateProgressBar(percentage) {
  const progressBar = document.getElementById('progressBar')
  if (progressBar) {
    progressBar.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`
  }
}

function showProgressBar() {
  const progressBar = document.getElementById('progressBar')
  if (progressBar) {
    progressBar.style.opacity = '1'
  }
}

function hideProgressBar() {
  const progressBar = document.getElementById('progressBar')
  if (progressBar) {
    progressBar.style.opacity = '0'
    setTimeout(() => {
      progressBar.style.width = '0%'
    }, 300)
  }
}

function simulateProgress() {
  let progress = 0
  showProgressBar()
 
  const interval = setInterval(() => {
    progress += Math.random() * 15
    updateProgressBar(progress)
   
    if (progress >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        hideProgressBar()
      }, 500)
    }
  }, 200)
}

// ===== Course Progress Management =====
function calculateCourseProgress(courseId) {
  const progress = courseProgress[courseId] || { completedLessons: [], totalLessons: 0 }
  const course = coursesData.find(c => c.id === courseId)
 
  if (!course || !course.sections) {
    return 0
  }
 
  // Calculer le nombre total de leçons
  const totalLessons = course.sections.reduce((total, section) => total + section.lessons.length, 0)
  progress.totalLessons = totalLessons
 
  // Calculer le pourcentage
  const percentage = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0
 
  return percentage
}

function markLessonCompleted(courseId, lessonId) {
  if (!courseProgress[courseId]) {
    courseProgress[courseId] = { completedLessons: [], totalLessons: 0 }
  }
 
  if (!courseProgress[courseId].completedLessons.includes(lessonId)) {
    courseProgress[courseId].completedLessons.push(lessonId)
    saveCourseProgress()
  }
}

function saveCourseProgress() {
  localStorage.setItem("courseProgress", JSON.stringify(courseProgress))
}


function updateAllTranslations() {
  console.log("Updating translations for language:", currentLanguage)
  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.getAttribute("data-translate")
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
      console.log("Updated element with key:", key, "to:", translations[currentLanguage][key])
    }
  })
 
  // Update placeholder texts
  document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
    const key = element.getAttribute("data-translate-placeholder")
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key]
    }
  })
 
  // Update title attributes
  document.querySelectorAll("[title]").forEach(element => {
    const title = element.getAttribute("title")
    if (title === "Panier" && translations[currentLanguage]["cart"]) {
      element.title = translations[currentLanguage]["cart"]
    } else if (title === "Favoris" && translations[currentLanguage]["wishlist"]) {
      element.title = translations[currentLanguage]["wishlist"]
    }
  })
 
  // Update document language
  document.documentElement.lang = currentLanguage
 
  // Header & Navigation
  const searchInput = document.getElementById("searchInput")
  if (searchInput) searchInput.placeholder = t("search-placeholder")
 
  document.querySelectorAll(".nav-link").forEach((link) => {
    const page = link.dataset.page
    if (page === "home") link.textContent = t("nav-home")
    else if (page === "courses") link.textContent = t("nav-courses")
    else if (page === "dashboard") link.textContent = t("nav-dashboard")
  })

  // Hero Section
  const heroTitle = document.querySelector(".hero-title")
  const heroDescription = document.querySelector(".hero-description")
  const heroBtn1 = document.querySelector(".hero-btn")
  if (heroTitle) heroTitle.textContent = t("hero-title")
  if (heroDescription) heroDescription.textContent = t("hero-description")
  if (heroBtn1) heroBtn1.textContent = t("hero-btn")

  // Featured & Categories Titles
  const featuredTitle = document.querySelector(".featured-section h2")
  const categoriesTitle = document.querySelector(".categories-section h2")
  if (featuredTitle) featuredTitle.textContent = t("featured-title")
  if (categoriesTitle) categoriesTitle.textContent = t("categories-title")

  // Stats Section
  const statCards = document.querySelectorAll(".stat-card")
  const statTexts = [t("stat-courses"), t("stat-students"), t("stat-rating"), t("stat-support")]
  statCards.forEach((card, i) => {
    const p = card.querySelector("p")
    if (p && statTexts[i]) p.textContent = statTexts[i]
  })

  // Filters
  const filtersTitle = document.querySelector(".filters-sidebar h3")
  if (filtersTitle) filtersTitle.textContent = t("filters-title")

  // Sort
  const sortLabel = document.querySelector(".sort-bar label")
  if (sortLabel) {
    sortLabel.innerHTML = `${t("sort-label")}
      <select id="sortSelect">
        <option value="popular">${t("sort-popular")}</option>
        <option value="newest">${t("sort-newest")}</option>
        <option value="rating">${t("sort-rating")}</option>
        <option value="price-low">${t("sort-price-low")}</option>
        <option value="price-high">${t("sort-price-high")}</option>
      </select>`
}

  // Dashboard
  const dashboardTitle = document.querySelector(".dashboard-container h1")
  if (dashboardTitle) dashboardTitle.textContent = t("dashboard-title")

  // Cart
  const cartTitle = document.querySelector(".cart-container h1")
  if (cartTitle) cartTitle.textContent = t("cart-title")

  // Settings Modal
  const settingsTitle = document.querySelector(".settings-modal h2")
  if (settingsTitle) settingsTitle.textContent = t("settings-title")

  // Footer
  const footerSections = document.querySelectorAll(".footer-section")
  if (footerSections.length >= 3) {
    const aboutSection = footerSections[0]
    const linksSection = footerSections[1]
    const followSection = footerSections[2]
   
    if (aboutSection) {
      const aboutTitle = aboutSection.querySelector("h4")
      const aboutText = aboutSection.querySelector("p")
      if (aboutTitle) aboutTitle.textContent = t("footer-about")
      if (aboutText) aboutText.textContent = t("footer-about-text")
    }
   
    if (linksSection) {
      const linksTitle = linksSection.querySelector("h4")
      if (linksTitle) linksTitle.textContent = t("footer-links")
    }
   
    if (followSection) {
      const followTitle = followSection.querySelector("h4")
      if (followTitle) followTitle.textContent = t("footer-follow")
    }
  }

  // Footer copyright
  const footerBottom = document.querySelector(".footer-bottom p")
  if (footerBottom) footerBottom.textContent = t("footer-copyright")

  // Re-render current page with translations
  if (currentPage === "home") renderFeaturedCourses()
  if (currentPage === "courses") renderCoursesPage()
  if (currentPage === "dashboard") renderDashboard()
  if (currentPage === "cart") renderCartPage()
}

// ===== Initialization =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded")
  console.log(coursesData); // check if coursesData is populated
  renderCourses();           // now render courses
  simulateProgress()

  loadCart()         // populate cart from localStorage
  updateCartCount()  // update cart badge
  // Navigate to the correct page based on hash
  initializeFromHash()
  renderCartPage()
  loadWishlist()          // <-- add this
  updateWishlistCount()   // <-- update badge
  renderWishlist()

  currentLanguage = localStorage.getItem("language") || "fr"
  console.log("Current language:", currentLanguage)
  updateAllTranslations()
  initializeApp()
  setupAuthListeners()
  setupThemeToggle()
  setupSettingsListeners()
  applyTheme()
  checkAuthStatus()
})


function initializeApp() {
  setupEventListeners()
  renderFeaturedCourses()
  renderCategories()
  loadCart()
  updateWishlistCount()
 
  // Initialize new advanced features
  initializeSearch()
  initializeNotifications()
  initializeDiscussionSystem()
  initializeCourseProgress()
  renderActivities()
  renderCertificates()
 
  // Initialize new page features
  initializeContactForm()
  initializeScrollAnimations()
  initializeAccessibility()
  lazyLoadImages()
  initializeCoursesPage()
  initializeNewsletter()
 
  // Initialize navigation from URL hash
  initializeFromHash()
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const page = e.target.dataset.page
      navigateTo(page)
    })
  })

  // Menu Toggle
  document.getElementById("menuToggle").addEventListener("click", () => {
    const navMobile = document.getElementById("navMobile")
    navMobile.classList.toggle("active")
  })

  // Cart Button
  document.getElementById("cartBtn").addEventListener("click", () => {
    navigateTo("cart")
  })

  // Wishlist Button
  document.getElementById("wishlistBtn").addEventListener("click", () => {
    navigateTo("wishlist")
  })

  // Burger Menu Button
  document.getElementById("burgerMenuBtn").addEventListener("click", (e) => {
    e.stopPropagation()
    document.getElementById("burgerMenuOverlay").classList.add("active")
  })

  // Burger Menu Close
  document.getElementById("burgerMenuClose").addEventListener("click", () => {
    document.getElementById("burgerMenuOverlay").classList.remove("active")
  })

  // Close burger menu when clicking outside
  document.getElementById("burgerMenuOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById("burgerMenuOverlay").classList.remove("active")
    }
  })

  // Burger Menu Items
  // Cart and Wishlist buttons in navbar
  document.getElementById("cartBtn").addEventListener("click", () => {
    navigateTo("cart")
  })

  document.getElementById("wishlistBtn").addEventListener("click", () => {
    navigateTo("wishlist")
  })

  // Settings
  document.getElementById("burgerLogin").addEventListener("click", () => {
    alert("Fonction de connexion")
    document.getElementById("burgerMenuOverlay").classList.remove("active")
  })

  document.getElementById("burgerSignup").addEventListener("click", () => {
    alert("Fonction d'inscription")
    document.getElementById("burgerMenuOverlay").classList.remove("active")
  })

  document.getElementById("burgerSettings").addEventListener("click", () => {
    openModal("settingsModal")
    document.getElementById("burgerMenuOverlay").classList.remove("active")
  })

  document.getElementById("burgerTheme").addEventListener("click", () => {
    toggleTheme()
    document.getElementById("burgerMenuOverlay").classList.remove("active")
  })



  // Navigation between auth pages
  document.querySelectorAll('.auth-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const text = link.textContent.trim()
      if (text === 'S\'inscrire' || text === 'Sign Up') {
        navigateTo("signup")
      } else if (text === 'Se Connecter' || text === 'Login') {
        navigateTo("login")
      }
    })
  })
 
  // Navigation from auth pages to other pages
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const text = link.textContent.trim()
      if (text === 'S\'inscrire' || text === 'Sign Up') {
        navigateTo("signup")
      } else if (text === 'Se Connecter' || text === 'Login') {
        navigateTo("login")
      }
    })
  })

 
  // Profile Dropdown Items - Menu utilisateur connecté
  document.getElementById("dropdownDashboard").addEventListener("click", (e) => {
    e.preventDefault()
    navigateTo("dashboard")
    document.getElementById("profileDropdown").classList.remove("active")
  })

  document.getElementById("dropdownProfile").addEventListener("click", (e) => {
    e.preventDefault()
    editProfile()
    document.getElementById("profileDropdown").classList.remove("active")
  })

  document.getElementById("dropdownSettings").addEventListener("click", (e) => {
    e.preventDefault()
    openModal("settingsModal")
    document.getElementById("profileDropdown").classList.remove("active")
  })

  document.getElementById("dropdownWishlist").addEventListener("click", (e) => {
    e.preventDefault()
    navigateTo("dashboard") // Les favoris sont dans le dashboard
    document.getElementById("profileDropdown").classList.remove("active")
  })

  document.getElementById("dropdownCart").addEventListener("click", (e) => {
    e.preventDefault()
    navigateTo("cart")
    document.getElementById("profileDropdown").classList.remove("active")
  })

  document.getElementById("dropdownLogout").addEventListener("click", (e) => {
    e.preventDefault()
    logout()
    document.getElementById("profileDropdown").classList.remove("active")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("profileDropdown")
   
    if (dropdown.classList.contains("active") &&
        !dropdown.contains(e.target)) {
      dropdown.classList.remove("active")
    }
  })


  // Search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase()
    filteredCourses = coursesData.filter(
      (course) => course.title.toLowerCase().includes(query) || course.category.toLowerCase().includes(query),
    )
    renderCoursesGrid()
  })

  // Sort
 document.getElementById("sortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;       // save the selected sort type
  renderCourses();                    // re-render with new sorting
});


  // Filters
  document.querySelectorAll(".price-filter, .rating-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters)
  })

  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabName = e.target.dataset.tab
      switchTab(tabName)
    })
  })

  // Profile Form
  document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault()
    saveProfile()
  })

}


// ===== Course Rendering =====
function renderFeaturedCourses() {
  const container = document.getElementById("featuredCourses")
  const featured = coursesData.slice(0, 6)
  container.innerHTML = featured.map((course) => createCourseCard(course)).join("")
  attachCourseCardListeners()
}

function renderCoursesPage() {
  renderCategoryFilters()
  renderCoursesGrid()
}

function renderCategoryFilters() {
  const container = document.getElementById("categoryFilters")
  container.innerHTML = categories
    .map(
      (cat) => `
        <label>
            <input type="checkbox" class="category-filter" value="${cat.id}">
            ${cat.name}
        </label>
    `,
    )
    .join("")

  document.querySelectorAll(".category-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters)
  })

  // Enhanced Login Page Form
  const loginPageForm = document.getElementById("loginPageForm")
  if (loginPageForm) {
    loginPageForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value
     
      enhancedLogin(email, password)
    })
   
    // Real-time password strength for login
    const loginPassword = document.getElementById("loginPassword")
    if (loginPassword) {
      loginPassword.addEventListener("input", (e) => {
        const password = e.target.value
        if (password.length > 0) {
          updatePasswordStrength(password)
        }
      })
    }
  }

  // Enhanced Signup Page Form
  const signupPageForm = document.getElementById("signupPageForm")
  if (signupPageForm) {
    signupPageForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("signupName").value
      const email = document.getElementById("signupEmail").value
      const password = document.getElementById("signupPassword").value
      const confirmPassword = document.getElementById("signupConfirmPassword").value
     
      enhancedSignup(name, email, password)
    })
   
    // Real-time password strength for signup
    const signupPassword = document.getElementById("signupPassword")
    if (signupPassword) {
      signupPassword.addEventListener("input", (e) => {
        const password = e.target.value
        updatePasswordStrength(password)
      })
    }
   
    // Real-time password match checking
    const signupConfirmPassword = document.getElementById("signupConfirmPassword")
    if (signupConfirmPassword) {
      signupConfirmPassword.addEventListener("input", (e) => {
        const password = document.getElementById("signupPassword").value
        const confirmPassword = e.target.value
        checkPasswordMatch(password, confirmPassword)
      })
    }
  }
}

function renderCoursesGrid() {
  const container = document.getElementById("coursesGrid")
  container.innerHTML = filteredCourses.map((course) => createCourseCard(course)).join("")
  attachCourseCardListeners()
}


function attachCourseCardListeners() {
  document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("course-card-btn")) {
        const courseId = card.dataset.courseId
        showCourseDetail(courseId)
      }
    })
  })
}

// ===== Course Detail =====
// Function to check video access and show appropriate content
function checkVideoAccess(course) {
  const isEnrolled = enrolledCourses.some(c => c.id === course.id)
  const videoLockOverlay = document.getElementById("videoLockOverlay")
  const videoWrapper = document.getElementById("videoWrapper")
  const videoPreview = document.getElementById("videoPreview")
  const videoFrame = document.getElementById("videoFrame")
  const lockPrice = document.getElementById("lockPrice")
 
  if (isEnrolled || course.price === 0) {
    // User has access - show video
    if (videoLockOverlay) videoLockOverlay.style.display = "none"
    if (videoWrapper) {
      videoWrapper.style.display = "block"
      if (videoFrame && course.video) {
        videoFrame.src = course.video
      }
    }
    if (videoPreview) videoPreview.style.display = "none"
  } else {
    // User doesn't have access - show lock overlay
    if (videoLockOverlay) {
      videoLockOverlay.style.display = "flex"
      if (lockPrice) {
        lockPrice.textContent = course.price === 0 ? "Gratuit" : `${course.price}€`
      }
    }
    if (videoWrapper) videoWrapper.style.display = "none"
    if (videoPreview) videoPreview.style.display = "none"
  }
}

// Function to add course to cart from lock overlay
function addToCartFromLock() {
  if (!isLoggedIn) {
    // User not logged in - open auth modal
    openModal('authModal')
    return
  }
 
  if (currentCourse) {
    addToCart(currentCourse.id)
  }
}

// Function to open auth modal
function openAuthModal() {
  openModal('authModal')
}

function showCourseDetail(courseId) {
  currentCourse = coursesData.find((c) => c.id == courseId)
  if (!currentCourse) return

  // Populate course detail
  document.getElementById("courseTitle").textContent = currentCourse.title
  document.getElementById("courseDescription").textContent = currentCourse.description
  document.getElementById("courseFullDescription").textContent = currentCourse.fullDescription
  document.getElementById("courseRating").innerHTML =
    `⭐ ${currentCourse.rating} (${currentCourse.students.toLocaleString()} avis)`
  document.getElementById("courseStudents").textContent = `${currentCourse.students.toLocaleString()} étudiants`
  document.getElementById("coursePrice").textContent = currentCourse.price === 0 ? "Gratuit" : `${currentCourse.price}€`
 
  // Update breadcrumb
  document.getElementById("courseCategory").textContent = currentCourse.category
  document.getElementById("courseTitleBreadcrumb").textContent = currentCourse.title
 
  // Update course badges
  document.getElementById("courseCategoryBadge").textContent = currentCourse.category
  document.getElementById("courseLevelBadge").textContent = "Tous niveaux"
 
  // Check video access and display appropriate content
  checkVideoAccess(currentCourse)

  // Learning points
  const learningList = document.getElementById("learningPoints")
  if (learningList && currentCourse.learningPoints) {
    learningList.innerHTML = currentCourse.learningPoints.map((point) => `<li>${point}</li>`).join("")
  }

  // Instructor
  const instructorCard = document.getElementById("instructorCard")
  if (instructorCard) {
    instructorCard.innerHTML = `
          <div class="instructor-avatar">👨‍🏫</div>
          <div class="instructor-info">
              <h4>${currentCourse.instructor}</h4>
              <p>Instructeur Expert</p>
          </div>
      `
  }

  // Curriculum - using enhanced rendering
  renderCurriculumEnhanced()

  // Reviews
  renderReviews()

  // Q&A
  renderQA()

  // Buttons
  const addToCartBtn = document.getElementById("addToCartBtn")
  const addToWishlistBtn = document.getElementById("addToWishlistBtn")
 
  if (addToCartBtn) {
    addToCartBtn.onclick = () => addToCart(courseId)
  }
  if (addToWishlistBtn) {
    addToWishlistBtn.onclick = () => addToWishlist(courseId)
  }

  navigateTo("courseDetail")
}

function renderCurricuolumEnhanced() {
  const curriculumList = document.getElementById("curriculumList")

  if (!currentCourse.sections || currentCourse.sections.length === 0) {
    curriculumList.innerHTML = `
      <div class="course-content-section">
        <h4>📚 Contenu du Cours</h4>
        <p>Ce cours comprend des vidéos, des exercices pratiques et des ressources téléchargeables.</p>
      </div>
    `
    return
  }

  curriculumList.innerHTML = currentCourse.sections
    .map(
      (section, sectionIndex) => `
      <div class="section-item">
        <div class="section-title" onclick="toggleSection(this)">
          <span>📌 ${section.title}</span>
          <span>${section.lessons.length} leçons</span>
        </div>
        <div class="lessons-list">
          ${section.lessons
            .map(
              (lesson, lessonIndex) => `
              <div class="lesson-item" onclick="playLesson(${currentCourse.id}, ${sectionIndex}, ${lessonIndex})">
                <span>▶️ ${lesson.title}</span>
                <span class="lesson-duration">${lesson.duration}</span>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
    `,
    )
    .join("")
}

function toggleSection(element) {
  const lessonsList = element.nextElementSibling
  element.classList.toggle("active")
  lessonsList.style.display = element.classList.contains("active") ? "flex" : "none"
}

function playLesson(courseId, sectionIndex, lessonIndex) {
  const course = coursesData.find((c) => c.id === courseId)
  if (course && course.sections[sectionIndex]) {
    const lesson = course.sections[sectionIndex].lessons[lessonIndex]
    document.getElementById("videoFrame").src = lesson.videoUrl + "?autoplay=1"
    document.getElementById("videoTitle").textContent = lesson.title
   
    // Marquer la leçon comme terminée après 5 secondes (simulation)
    setTimeout(() => {
      markLessonCompleted(courseId, lesson.id)
      // Mettre à jour l'affichage de la progression
      updateProgressDisplay(courseId)
    }, 5000)
   
    console.log("[v0] Playing lesson:", lesson.title)
  }
}

function updateProgressDisplay(courseId) {
  // Mettre à jour les cartes de cours avec la nouvelle progression
  const courseCard = document.querySelector(`[data-course-id="${courseId}"]`)
  if (courseCard) {
    const progressBar = courseCard.querySelector('.progress-bar-fill')
    const progressText = courseCard.querySelector('.progress-text')
    if (progressBar && progressText) {
      const newPercentage = calculateCourseProgress(courseId)
      progressBar.style.width = `${newPercentage}%`
      progressText.textContent = `${newPercentage}%`
    }
  }
}

function renderReviews() {
  const reviewsSummary = document.getElementById("reviewsSummary")
  const reviewsList = document.getElementById("reviewsList")

  if (currentCourse.reviews.length === 0) {
    reviewsSummary.innerHTML = "<p>Aucun avis pour le moment</p>"
    reviewsList.innerHTML = ""
    return
  }

  const avgRating = (
    currentCourse.reviews.reduce((sum, r) => sum + r.rating, 0) / currentCourse.reviews.length
  ).toFixed(1)

  reviewsSummary.innerHTML = `
        <div class="rating-summary">
            <div class="big-rating">${avgRating}</div>
            <p>Note moyenne</p>
        </div>
        <div class="rating-bars">
            ${[5, 4, 3, 2, 1]
              .map((star) => {
                const count = currentCourse.reviews.filter((r) => r.rating === star).length
                const percentage = (count / currentCourse.reviews.length) * 100
                return `
                    <div class="rating-bar">
                        <span class="rating-bar-label">${star}⭐</span>
                        <div class="rating-bar-fill">
                            <div class="rating-bar-progress" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `
              })
              .join("")}
        </div>
    `

  reviewsList.innerHTML = currentCourse.reviews
    .map(
      (review) => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">${"⭐".repeat(review.rating)}</div>
            <p class="review-text">${review.text}</p>
        </div>
    `,
    )
    .join("")
}

function renderQA() {
  const qaSection = document.getElementById("qaSection")
  if (currentCourse.qa.length === 0) {
    qaSection.innerHTML = "<p>Aucune question pour le moment</p>"
    return
  }

  qaSection.innerHTML = currentCourse.qa
    .map(
      (item) => `
        <div class="qa-item">
            <div class="qa-question">Q: ${item.question}</div>
            <div class="qa-answer">A: ${item.answer}</div>
        </div>
    `,
    )
    .join("")
}


// ===== Cart Management =====
function addToCart(courseId) {
  courseId = Number(courseId)

  const course = coursesData.find((c) => c.id == courseId)
  if (!course) {
    console.error("Course not found:", courseId)
    showNotification("Erreur: Cours non trouvé", 'error')
    return
  }

  // Vérifier si le cours est déjà acheté
  const isEnrolled = enrolledCourses.some(c => c.id === courseId)
  if (isEnrolled) {
    showNotification("Vous avez déjà acheté ce cours!", 'warning')
    return
  }

  // Vérifier si le cours est déjà dans le panier
  const existingItem = cart.find((item) => item.id === courseId)
  if (existingItem) {
    showNotification("Ce cours est déjà dans votre panier!", 'info')
    return
  }

  // Ajouter au panier
 cart.push({
    id: courseId,
    title: course.title,
    description: course.description,
    price: course.price,
    image: course.image,
    instructor: course.instructor,
    category: course.category,
    rating: course.rating,
    students: course.students
})

 
  saveCart()
  updateCartCount()

  showNotification(`"${course.title}" ajouté au panier!`, 'success')

  renderCoursesGrid()
  renderFeaturedCourses()
  renderCartPage();
}


function removeFromCart(courseId) {
  // Remove item from cart in memory
  cart = cart.filter(item => item.id !== courseId)
 
  // Save updated cart to localStorage
  saveCart()
 
  // Update cart badge
  updateCartCount()
 
  // Refresh the cart page list
  renderCartPage()
 
  // Refresh course grid and featured courses
  renderCoursesGrid()
  renderFeaturedCourses()
 
  // Optional: show notification
  showNotification("Cours retiré du panier", "info")
}


function loadCart() {
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCartCount()
  }
}
//added cause it was missing
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.length
  const cartCountElement = document.getElementById("cartCount")
  const dropdownCartCount = document.getElementById("dropdownCartCount")
 
  if (cartCountElement) cartCountElement.textContent = count
  if (dropdownCartCount) dropdownCartCount.textContent = count
}

function renderCartPage() {
  const cartItems = document.getElementById("cartItems")
  const cartEmpty = document.getElementById("cartEmpty")

  if (cart.length === 0) {
    cartItems.style.display = "none"
    if (cartEmpty) cartEmpty.style.display = "flex"
    document.getElementById("subtotal").textContent = "0 €"
    document.getElementById("discount").textContent = "0 €"
    document.getElementById("total").textContent = "0 €"
    return
  }

  cartItems.style.display = "flex"
  if (cartEmpty) cartEmpty.style.display = "none"

cartItems.innerHTML = cart
  .map(item => `
    <div class="cart-item" data-course-id="${item.id}">
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        </div>
        <div class="cart-item-details">
            <h3 class="cart-item-title">${item.title}</h3>
            <p class="cart-item-instructor">Par ${item.instructor}</p>
            <div class="cart-item-meta">
                <span class="cart-item-category">${item.category}</span>
                <span class="cart-item-rating">⭐ ${item.rating}</span>
                <span class="cart-item-students">👥 ${item.students.toLocaleString()}</span>
            </div>
            <div class="cart-item-price">${item.price === 0 ? "Gratuit" : item.price + "€"}</div>
        </div>
        <div class="cart-item-actions">
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Retirer du panier">✕</button>
        </div>
    </div>
  `).join("")


  updateCartSummary()
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0)
  const discount = subtotal > 100 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  document.getElementById("subtotal").textContent = subtotal.toFixed(2) + " €"
  document.getElementById("discount").textContent = discount.toFixed(2) + " €"
  document.getElementById("total").textContent = total.toFixed(2) + " €"
}

function checkout() {
  if (cart.length === 0) {
    alert(t("msg-empty-cart"))
    return
  }

  // Add courses to enrolled
  cart.forEach((item) => {
    if (!enrolledCourses.find((c) => c.id === item.id)) {
      enrolledCourses.push(item)
      // Initialiser la progression du cours
      if (!courseProgress[item.id]) {
        courseProgress[item.id] = { completedLessons: [], totalLessons: 0 }
      }
    }
  })

  localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses))
  saveCourseProgress()
  cart = []
  saveCart()
  updateCartCount()
 
  // Mettre à jour l'affichage des cartes de cours pour déverrouiller les vidéos
  renderCoursesGrid()
 
  // Si nous sommes sur la page de détail d'un cours, vérifier à nouveau l'accès à la vidéo
  if (currentCourse) {
    checkVideoAccess(currentCourse)
  }
 
  alert(t("msg-checkout-success"))
  navigateTo("dashboard")
}

// ===== Wishlist Management =====
function addToWishlist(courseId) {
  console.log("addToWishlist called with courseId:", courseId)
  const course = coursesData.find((c) => c.id == courseId)
  console.log("Course found:", course)
 
  if (!course) {
    console.error("Course not found!")
    return
  }

  const existingItem = wishlist.find((item) => item.id === courseId)
  console.log("Existing item:", existingItem)
 
  if (!existingItem) {
    console.log("Adding course to wishlist")
    wishlist.push({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
      instructor: course.instructor,
      category: course.category,
      rating: course.rating,
      students: course.students,
      description: course.description
    })
    console.log("Wishlist after adding:", wishlist)
    saveWishlist()
    updateWishlistCount()
    showNotification(`${course.title} ajouté aux favoris!`, 'success')
   
    // Update the button to show it's been added
    updateWishlistButton(courseId, true)
  } else {
    console.log("Course already in wishlist")
    showNotification("Ce cours est déjà dans vos favoris", 'info')
  }
  renderWishlist()
}

function removeFromWishlist(courseId) {
  const index = wishlist.findIndex((item) => item.id === courseId)
  if (index > -1) {
    const course = wishlist[index]
    wishlist.splice(index, 1)
    saveWishlist()
    updateWishlistCount()
    showNotification(`${course.title} retiré des favoris`, 'info')
   
    // Update the button to show it's been removed
    updateWishlistButton(courseId, false)
  }
  renderWishlist()
}

function updateWishlistButton(courseId, isInWishlist) {
  const courseCard = document.querySelector(`[data-course-id="${courseId}"]`)
  if (courseCard) {
    const wishlistBtn = courseCard.querySelector('button[onclick*="addToWishlist"]')
    if (wishlistBtn) {
      if (isInWishlist) {
        wishlistBtn.innerHTML = '<span class="btn-icon">💖</span>'
        wishlistBtn.title = 'Retirer des favoris'
        wishlistBtn.onclick = () => {
          event.stopPropagation()
          removeFromWishlist(courseId)
        }
      } else {
        wishlistBtn.innerHTML = '<span class="btn-icon">❤️</span>'
        wishlistBtn.title = 'Ajouter aux favoris'
        wishlistBtn.onclick = () => {
          event.stopPropagation()
          addToWishlist(courseId)
        }
      }
    }
  }
}


function renderWishlist() {
  console.log("renderWishlist called, wishlist length:", wishlist.length)
  const wishlistGrid = document.getElementById('wishlistGrid')
  const wishlistEmpty = document.getElementById('wishlistEmpty')
 
  console.log("wishlistGrid found:", !!wishlistGrid)
  console.log("wishlistEmpty found:", !!wishlistEmpty)
 
  if (!wishlistGrid) {
    console.error("wishlistGrid element not found!")
    return
  }
 
  if (wishlist.length === 0) {
    console.log("Wishlist is empty, showing empty state")
    wishlistGrid.style.display = 'none'
    if (wishlistEmpty) wishlistEmpty.style.display = 'flex'
  } else {
    console.log("Wishlist has items, rendering grid")
    wishlistGrid.style.display = 'grid'
    if (wishlistEmpty) wishlistEmpty.style.display = 'none'
   
    wishlistGrid.innerHTML = wishlist.map(item => `
      <div class="wishlist-card" data-course-id="${item.id}">
        <div class="wishlist-card-image">
          <img src="${item.image}" alt="${item.title}">
          <button class="wishlist-remove-btn" onclick="removeFromWishlist(${item.id})" title="Retirer des favoris">
            ✕
          </button>
        </div>
        <div class="wishlist-card-content">
          <span class="wishlist-card-category">${item.category}</span>
          <h3 class="wishlist-card-title">${item.title}</h3>
          <p class="wishlist-card-instructor">Par ${item.instructor}</p>
          <div class="wishlist-card-meta">
            <span class="wishlist-card-rating">⭐ ${item.rating}</span>
            <span class="wishlist-card-students">👥 ${item.students.toLocaleString()}</span>
          </div>
          <p class="wishlist-card-description">${item.description}</p>
          <div class="wishlist-card-footer">
            <span class="wishlist-card-price">${item.price === 0 ? 'Gratuit' : item.price + '€'}</span>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">
              <span class="btn-icon">🛒</span>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    `).join('')
  }
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

function updateWishlistCount() {
  const count = wishlist.length
  const wishlistCountElement = document.getElementById("wishlistCount")
  const dropdownWishlistCount = document.getElementById("dropdownWishlistCount")
 
  if (wishlistCountElement) wishlistCountElement.textContent = count
  if (dropdownWishlistCount) dropdownWishlistCount.textContent = count
}
function loadWishlist() {
  const savedWishlist = localStorage.getItem("wishlist")
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist)
  }
  updateWishlistCount()
}

// Ajouter un cours
function addToCart(courseId) {
  cart.push({ id: courseId })
  localStorage.setItem("cart", JSON.stringify(cart))
  renderDashboard() // Met à jour le dashboard
}

// ===== Dashboard =====
function renderDashboard() {
  // Update profile
  document.getElementById("userName").textContent = userProfile.name
  document.getElementById("userEmail").textContent = userProfile.email

  // Update stats
  document.getElementById("enrolledCount").textContent = enrolledCourses.length
  document.getElementById("completedCount").textContent = Math.floor(enrolledCourses.length * 0.3)
  document.getElementById("learningHours").textContent = enrolledCourses.length * 12

  // My Courses
  const myCoursesGrid = document.getElementById("myCoursesGrid")
  if (enrolledCourses.length === 0) {
    myCoursesGrid.innerHTML = "<p>Vous n'avez pas encore suivi de cours</p>"
  } else {
    myCoursesGrid.innerHTML = enrolledCourses
      .map((course) => {
        const fullCourse = coursesData.find((c) => c.id === course.id)
        return createCourseCard(fullCourse)
      })
      .join("")
    attachCourseCardListeners()
  }

  // Wishlist
  const wishlistGrid = document.getElementById("wishlistGrid")
  if (wishlist.length === 0) {
    wishlistGrid.innerHTML = "<p>Vous n'avez pas de favoris</p>"
  } else {
    wishlistGrid.innerHTML = wishlist
      .map((course) => {
        const fullCourse = coursesData.find((c) => c.id === course.id)
        return createCourseCard(fullCourse)
      })
      .join("")
    attachCourseCardListeners()
  }
  // Panier
const cartGrid = document.getElementById("dashboardCartGrid")
if (!cart || cart.length === 0) {
  cartGrid.innerHTML = "<p>Votre panier est vide</p>"
} else {
  cartGrid.innerHTML = cart
    .map((course) => {
      const fullCourse = coursesData.find((c) => c.id === course.id)
      return createCourseCard(fullCourse)
    })
    .join("")
  attachCourseCardListeners()
}
}



// ===== Categories =====
function renderCategories() {
  const container = document.getElementById("categoriesGrid")
  container.innerHTML = categories
    .map(
      (cat) => `
        <div class="category-card" onclick="filterByCategory(${cat.id})">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
        </div>
    `,
    )
    .join("")
}

function filterByCategory(categoryId) {
  navigateTo("courses")
  setTimeout(() => {
    document.querySelectorAll(".category-filter").forEach((filter) => {
      filter.checked = filter.value == categoryId
    })
    applyFilters()
  }, 100)
}

/* ===== Filters & Sorting =====
function applyFilters() {
  const selectedCategories = Array.from(document.querySelectorAll(".category-filter:checked")).map((f) =>
    Number.parseInt(f.value),
  )
  const priceFilters = Array.from(document.querySelectorAll(".price-filter:checked")).map((f) => f.value)
  const ratingFilters = Array.from(document.querySelectorAll(".rating-filter:checked")).map((f) =>
    Number.parseInt(f.value),
  )

  filteredCourses = coursesData.filter((course) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(course.category)
    const priceMatch =
      priceFilters.length === 0 ||
      (priceFilters.includes("free") && course.price === 0) ||
      (priceFilters.includes("paid") && course.price > 0)
    const ratingMatch = ratingFilters.length === 0 || ratingFilters.some((r) => course.rating >= r)

    return categoryMatch && priceMatch && ratingMatch
  })

  renderCoursesGrid()
}*/

function applyFilters() {
  const selectedCategories = Array.from(document.querySelectorAll(".category-filter:checked"))
    .map(f => f.value)  // FIXED

  const priceFilters = Array.from(document.querySelectorAll(".price-filter:checked"))
    .map(f => f.value)

  const ratingFilters = Array.from(document.querySelectorAll(".rating-filter:checked"))
    .map(f => Number.parseInt(f.value))

  filteredCourses = coursesData.filter(course => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category)

    const priceMatch =
      priceFilters.length === 0 ||
      (priceFilters.includes("free") && course.price === 0) ||
      (priceFilters.includes("paid") && course.price > 0)

    const ratingMatch =
      ratingFilters.length === 0 ||
      ratingFilters.some(r => course.rating >= r)

    return categoryMatch && priceMatch && ratingMatch
  })

  renderCoursesGrid(filteredCourses)
}


function resetFilters() {
  document.querySelectorAll(".category-filter, .price-filter, .rating-filter").forEach((f) => (f.checked = false))
  filteredCourses = [...coursesData]
  renderCoursesGrid()
}


// ===== Tabs =====
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"))
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))

  // Show selected tab
  document.getElementById(tabName + "Tab").classList.add("active")
  event.target.classList.add("active")
}

// Open login modal function (supprimée)
function openLoginModal() {
  // Fonction supprimée - pas de modal de connexion
}

// Open signup modal function (supprimée)  
function openSignupModal() {
  // Fonction supprimée - pas de modal d'inscription
}

// ===== Profile =====
function editProfile() {
  // Populate all profile fields
  document.getElementById("profileName").value = userProfile.name || ''
  document.getElementById("profileEmail").value = userProfile.email || ''
  document.getElementById("profilePhone").value = userProfile.phone || ''
  document.getElementById("profileBio").value = userProfile.bio || ''
  document.getElementById("profileLanguage").value = userProfile.language || 'fr'
 
  // Update avatar display
  const avatarElement = document.getElementById("profileAvatar")
  if (avatarElement) {
    avatarElement.textContent = userProfile.avatar || '👤'
  }
 
  openModal("profileModal")
}

// Avatar upload function
function uploadAvatar() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
 
  input.onchange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload the file to a server
      // For now, we'll just use a placeholder
      const reader = new FileReader()
      reader.onload = (e) => {
        // Update avatar in profile
        userProfile.avatar = e.target.result
       
        // Update avatar display
        const avatarElement = document.getElementById("profileAvatar")
        if (avatarElement) {
          avatarElement.innerHTML = `<img src="${e.target.result}" alt="Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`
        }
       
        // Update user in database
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
        const currentUser = existingUsers.find(u => u.id === userProfile.id)
        if (currentUser) {
          currentUser.avatar = e.target.result
          localStorage.setItem('users', JSON.stringify(existingUsers))
        }
       
        localStorage.setItem("userProfile", JSON.stringify(userProfile))
        showNotification('Photo de profil mise à jour!', 'success')
      }
      reader.readAsDataURL(file)
    }
  }
 
  input.click()
}

function saveProfile() {
  const name = document.getElementById("profileName").value
  const email = document.getElementById("profileEmail").value
  const phone = document.getElementById("profilePhone").value
  const bio = document.getElementById("profileBio").value
  const language = document.getElementById("profileLanguage").value
 
  // Validate required fields
  if (!name || !email) {
    showNotification('Le nom et l\'email sont obligatoires.', 'error')
    return
  }
 
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showNotification('Veuillez entrer un email valide.', 'error')
    return
  }
 
  // Check if email is already taken by another user
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  const currentUser = existingUsers.find(u => u.id === userProfile.id)
  const emailTaken = existingUsers.find(u => u.email === email && u.id !== userProfile.id)
 
  if (emailTaken) {
    showNotification('Cet email est déjà utilisé par un autre compte.', 'error')
    return
  }
 
  // Update user profile
  userProfile.name = name
  userProfile.email = email
  userProfile.phone = phone
  userProfile.bio = bio
  userProfile.language = language
 
  // Update user in database
  if (currentUser) {
    currentUser.name = name
    currentUser.email = email
    currentUser.phone = phone
    currentUser.bio = bio
    currentUser.language = language
    localStorage.setItem('users', JSON.stringify(existingUsers))
  }
 
  localStorage.setItem("userProfile", JSON.stringify(userProfile))
  updateAuthUI()
  closeModal("profileModal")
  showNotification('Profil mis à jour avec succès!', 'success')
}

// ===== Modals =====
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active")
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active")
}

// ===== Progress Bar =====
function updateProgressBar() {
  const progress = (Object.keys(enrolledCourses).length / coursesData.length) * 100
  document.getElementById("progressBar").style.width = Math.min(progress, 100) + "%"
}

// ===== Utilities =====
function previousLesson() {
  alert("Leçon précédente")
}

function nextLesson() {
  alert("Leçon suivante")
}

// ===== Authentication Functions =====
function setupAuthListeners() {
  // Les modales et pages de connexion/inscription ont été supprimées
}

function login(email, password) {
  // Validation des champs
  if (!email || !password) {
    alert("Veuillez remplir tous les champs")
    return false
  }
 
  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide")
    return false
  }
 
  // Validation du mot de passe
  if (password.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères")
    return false
  }
 
  // Simulation de connexion réussie
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    userProfile.email = email
  userProfile.name = email.split('@')[0] // Utilise la partie avant @ comme nom par défaut
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
 
    closeModal("authModal")
    updateAuthUI()
    alert("Connexion réussie!")
  return true
}

function signup(name, email, password) {
  // Validation des champs
  if (!name || !email || !password) {
    alert("Veuillez remplir tous les champs")
    return false
  }
 
  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide")
    return false
  }
 
  // Validation du nom
  if (name.length < 2) {
    alert("Le nom doit contenir au moins 2 caractères")
    return false
  }
 
  // Validation du mot de passe
  if (password.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères")
    return false
  }
 
  // Simulation d'inscription réussie
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    userProfile.name = name
    userProfile.email = email
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
 
    closeModal("authModal")
    updateAuthUI()
    alert("Inscription réussie!")
  return true
}

function logout() {
  // Clear user session
  isLoggedIn = false
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  localStorage.removeItem("userProfile")
 
  // Clear user data
  cart = []
  wishlist = []
  enrolledCourses.length = 0
  localStorage.removeItem("cart")
  localStorage.removeItem("wishlist")
  localStorage.removeItem("enrolledCourses")
 
  // Reset user profile
  userProfile = {
    name: '',
    email: '',
    avatar: '👤',
    bio: '',
    phone: '',
    language: 'fr'
  }
 
  updateAuthUI()
  showNotification('Déconnexion réussie!', 'success')
  navigateTo("home")
}

function checkAuthStatus() {
  const profileBtn = document.getElementById("profileBtn")
  if (!profileBtn) return
 
  if (!isLoggedIn) {
    profileBtn.textContent = "🔓"
    profileBtn.onclick = () => openModal("authModal")
  } else {
    updateAuthUI()
  }
}

function updateAuthUI() {
  const userMenu = document.getElementById("userMenu")
  const guestMenu = document.getElementById("guestMenu")
 
  if (isLoggedIn) {
    // Afficher le menu utilisateur et masquer le menu invité
    if (guestMenu) guestMenu.style.display = "none"
    if (userMenu) userMenu.style.display = "block"
   
    // Mettre à jour les informations utilisateur dans le dropdown
    updateProfileDropdown()
  } else {
    // Afficher le menu invité et masquer le menu utilisateur
    if (guestMenu) guestMenu.style.display = "block"
    if (userMenu) userMenu.style.display = "none"
  }
}

function updateProfileDropdown() {
  // Mettre à jour les informations utilisateur
  const userName = document.getElementById("dropdownUserName")
  const userEmail = document.getElementById("dropdownUserEmail")
  const wishlistCount = document.getElementById("dropdownWishlistCount")
  const cartCount = document.getElementById("dropdownCartCount")
 
  if (userName) userName.textContent = userProfile.name
  if (userEmail) userEmail.textContent = userProfile.email
  if (wishlistCount) wishlistCount.textContent = wishlist.length
  if (cartCount) cartCount.textContent = cart.length
}

// ===== MODERN AUTH FUNCTIONS =====

// Toggle password visibility
function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId)
  const toggleIcon = input.parentElement.querySelector('.toggle-icon')
 
  if (input.type === 'password') {
    input.type = 'text'
    toggleIcon.textContent = '🙈'
  } else {
    input.type = 'password'
    toggleIcon.textContent = '👁️'
  }
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0
  let strengthText = 'Très faible'
  let strengthColor = '#ef4444'
 
  if (password.length >= 8) strength += 1
  if (password.match(/[a-z]/)) strength += 1
  if (password.match(/[A-Z]/)) strength += 1
  if (password.match(/[0-9]/)) strength += 1
  if (password.match(/[^a-zA-Z0-9]/)) strength += 1
 
  switch (strength) {
    case 0:
    case 1:
      strengthText = 'Très faible'
      strengthColor = '#ef4444'
      break
    case 2:
      strengthText = 'Faible'
      strengthColor = '#f59e0b'
      break
    case 3:
      strengthText = 'Moyen'
      strengthColor = '#f59e0b'
      break
    case 4:
      strengthText = 'Fort'
      strengthColor = '#10b981'
      break
    case 5:
      strengthText = 'Très fort'
      strengthColor = '#10b981'
      break
  }
 
  return {
    strength: strength,
    text: strengthText,
    color: strengthColor,
    percentage: (strength / 5) * 100
  }
}

// Update password strength indicator
function updatePasswordStrength(password) {
  const strengthFill = document.getElementById('strengthFill')
  const strengthText = document.getElementById('strengthText')
 
  if (!strengthFill || !strengthText) return
 
  const strength = checkPasswordStrength(password)
 
  strengthFill.style.width = `${strength.percentage}%`
  strengthFill.style.background = strength.color
  strengthText.textContent = strength.text
  strengthText.style.color = strength.color
}

// Check password match
function checkPasswordMatch(password, confirmPassword) {
  const passwordMatch = document.getElementById('passwordMatch')
 
  if (!passwordMatch) return
 
  if (confirmPassword && password === confirmPassword) {
    passwordMatch.style.display = 'flex'
  } else {
    passwordMatch.style.display = 'none'
  }
}

// Form validation
function validateForm(formType) {
  let isValid = true
 
  if (formType === 'login') {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
   
    // Email validation
    const emailError = document.getElementById('emailError')
    if (!email || !isValidEmail(email)) {
      emailError.textContent = 'Veuillez entrer une adresse email valide'
      isValid = false
    } else {
      emailError.textContent = ''
    }
   
    // Password validation
    const passwordError = document.getElementById('passwordError')
    if (!password || password.length < 6) {
      passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères'
      isValid = false
    } else {
      passwordError.textContent = ''
    }
  }
 
  if (formType === 'signup') {
    const name = document.getElementById('signupName').value
    const email = document.getElementById('signupEmail').value
    const password = document.getElementById('signupPassword').value
    const confirmPassword = document.getElementById('signupConfirmPassword').value
   
    // Name validation
    const nameError = document.getElementById('nameError')
    if (!name || name.length < 2) {
      nameError.textContent = 'Le nom doit contenir au moins 2 caractères'
      isValid = false
    } else {
      nameError.textContent = ''
    }
   
    // Email validation
    const emailError = document.getElementById('signupEmailError')
    if (!email || !isValidEmail(email)) {
      emailError.textContent = 'Veuillez entrer une adresse email valide'
      isValid = false
    } else {
      emailError.textContent = ''
    }
   
    // Password validation
    const passwordError = document.getElementById('signupPasswordError')
    if (!password || password.length < 8) {
      passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères'
      isValid = false
    } else {
      passwordError.textContent = ''
    }
   
    // Confirm password validation
    const confirmPasswordError = document.getElementById('confirmPasswordError')
    if (!confirmPassword || password !== confirmPassword) {
      confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas'
      isValid = false
    } else {
      confirmPasswordError.textContent = ''
    }
  }
 
  return isValid
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Show loading state
function showLoading(buttonId) {
  const button = document.getElementById(buttonId)
  const btnContent = button.querySelector('.btn-content')
  const btnLoader = button.querySelector('.btn-loader')
 
  if (btnContent && btnLoader) {
    btnContent.style.display = 'none'
    btnLoader.style.display = 'block'
    button.disabled = true
  }
}

// Hide loading state
function hideLoading(buttonId) {
  const button = document.getElementById(buttonId)
  const btnContent = button.querySelector('.btn-content')
  const btnLoader = button.querySelector('.btn-loader')
 
  if (btnContent && btnLoader) {
    btnContent.style.display = 'flex'
    btnLoader.style.display = 'none'
    button.disabled = false
  }
}

// Upload avatar function
function uploadAvatar() {
  // Create file input
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
 
  input.onchange = function(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function(e) {
        const avatarCircle = document.getElementById('profileAvatar')
        avatarCircle.style.backgroundImage = `url(${e.target.result})`
        avatarCircle.style.backgroundSize = 'cover'
        avatarCircle.style.backgroundPosition = 'center'
        avatarCircle.querySelector('.avatar-text').style.display = 'none'
      }
      reader.readAsDataURL(file)
    }
  }
 
  input.click()
}

// Enhanced login function
function enhancedLogin(email, password) {
  if (!validateForm('login')) {
    return false
  }
 
  showLoading('loginSubmitBtn')
 
  // Simulate API call with better validation
  setTimeout(() => {
    // Check if user exists (simulate database check)
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const user = existingUsers.find(u => u.email === email)
   
    if (!user) {
      hideLoading('loginSubmitBtn')
      showNotification('Email non trouvé. Veuillez vous inscrire d\'abord.', 'error')
      return false
    }
   
    // In a real app, you'd hash the password and compare
    if (user.password !== password) {
      hideLoading('loginSubmitBtn')
      showNotification('Mot de passe incorrect.', 'error')
      return false
    }

    // Store user session data
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
   
    userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      loginTime: new Date().toISOString(),
      lastLogin: user.lastLogin || null,
      avatar: user.avatar || '👤',
      bio: user.bio || '',
      phone: user.phone || '',
      language: user.language || 'fr'
    }
   
    // Update last login
    user.lastLogin = new Date().toISOString()
    localStorage.setItem('users', JSON.stringify(existingUsers))
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
   
    hideLoading('loginSubmitBtn')
    closeModal("loginModal")
    updateAuthUI()
   
    // Show success message
    showNotification(`Bienvenue ${user.name}!`, 'success')
   
    // Navigate to dashboard after successful login
    setTimeout(() => {
      navigateTo('dashboard')
    }, 1000)
  }, 1500)
 
  return true
}

// Enhanced signup function
function enhancedSignup(name, email, password) {
  if (!validateForm('signup')) {
    return false
  }
 
  showLoading('signupSubmitBtn')
 
  // Simulate API call with better validation
  setTimeout(() => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const existingUser = existingUsers.find(u => u.email === email)
   
    if (existingUser) {
      hideLoading('signupSubmitBtn')
      showNotification('Un compte avec cet email existe déjà.', 'error')
      return false
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password, // In real app, hash this password
      createdAt: new Date().toISOString(),
      lastLogin: null,
      avatar: '👤',
      bio: '',
      phone: '',
      language: 'fr',
      enrolledCourses: [],
      wishlist: [],
      completedCourses: [],
      certificates: []
    }
   
    // Add user to database
    existingUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(existingUsers))
   
    // Store user session data
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
   
    userProfile = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      loginTime: new Date().toISOString(),
      lastLogin: null,
      avatar: newUser.avatar,
      bio: newUser.bio,
      phone: newUser.phone,
      language: newUser.language
    }
   
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
   
    hideLoading('signupSubmitBtn')
    closeModal("signupModal")
    updateAuthUI()
   
    // Show success message
    showNotification(`Bienvenue ${name}! Votre compte a été créé avec succès.`, 'success')
   
    // Navigate to dashboard after successful signup
    setTimeout(() => {
      navigateTo('dashboard')
    }, 1000)
  }, 1500)
 
  return true
}

// Password reset function
function resetPassword(email) {
  if (!email) {
    showNotification('Veuillez entrer votre email.', 'error')
    return false
  }
 
  // Check if user exists
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  const user = existingUsers.find(u => u.email === email)
 
  if (!user) {
    showNotification('Aucun compte trouvé avec cet email.', 'error')
    return false
  }
 
  // Simulate sending reset email
  showLoading('resetPasswordBtn')
 
  setTimeout(() => {
    hideLoading('resetPasswordBtn')
    closeModal('passwordResetModal')
    showNotification('Un lien de réinitialisation a été envoyé à votre email.', 'success')
   
    // In a real app, you would send an actual email
    console.log(`Password reset link sent to: ${email}`)
  }, 2000)
 
  return true
}

// Social login function
function socialLogin(provider) {
  showNotification(`Connexion avec ${provider} en cours...`, 'info')
 
  // Simulate social login process
  setTimeout(() => {
    // In a real app, you would integrate with actual OAuth providers
    const socialUser = {
      id: Date.now().toString(),
      name: `Utilisateur ${provider}`,
      email: `user@${provider}.com`,
      provider: provider,
      avatar: provider === 'google' ? '🔍' : '📘',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }
   
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    let user = existingUsers.find(u => u.email === socialUser.email)
   
    if (!user) {
      // Create new user
      user = {
        ...socialUser,
        password: 'social_login', // No password for social logins
        bio: '',
        phone: '',
        language: 'fr',
        enrolledCourses: [],
        wishlist: [],
        completedCourses: [],
        certificates: []
      }
      existingUsers.push(user)
      localStorage.setItem('users', JSON.stringify(existingUsers))
    } else {
      // Update last login
      user.lastLogin = new Date().toISOString()
      localStorage.setItem('users', JSON.stringify(existingUsers))
    }
   
    // Store user session data
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
   
    userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      loginTime: new Date().toISOString(),
      lastLogin: user.lastLogin,
      avatar: user.avatar,
      bio: user.bio,
      phone: user.phone,
      language: user.language
    }
   
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
   
    updateAuthUI()
    showNotification(`Connexion avec ${provider} réussie!`, 'success')
   
    // Close any open modals
    closeModal('authModal')
    closeModal('passwordResetModal')
   
    // Navigate to dashboard
    setTimeout(() => {
      navigateTo('dashboard')
    }, 1000)
  }, 2000)
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
      <span class="notification-message">${message}</span>
    </div>
  `
 
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `
 
  document.body.appendChild(notification)
 
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Add notification animations to CSS
const notificationStyles = `
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.notification-icon {
  font-size: 1.2rem;
}

.notification-message {
  font-weight: 500;
}
`

// Inject notification styles
const styleSheet = document.createElement('style')
styleSheet.textContent = notificationStyles
document.head.appendChild(styleSheet)

// ===== ADVANCED SEARCH SYSTEM =====
let searchTimeout = null
let searchSuggestions = []

function initializeSearch() {
  const searchInput = document.getElementById('searchInput')
  const searchClear = document.getElementById('searchClear')
  const searchSuggestions = document.getElementById('searchSuggestions')
 
  if (!searchInput) return
 
  // Search input events
  searchInput.addEventListener('input', handleSearchInput)
  searchInput.addEventListener('focus', showSearchSuggestions)
  searchInput.addEventListener('blur', hideSearchSuggestions)
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const query = searchInput.value.trim()
      if (query.length >= 2) {
        performSearchAndNavigate(query)
      }
    }
  })
 
  // Clear button
  if (searchClear) {
    searchClear.addEventListener('click', clearSearch)
  }
 
  // Click outside to close suggestions
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      hideSearchSuggestions()
    }
  })
}

function handleSearchInput(e) {
  const query = e.target.value.trim()
  const searchClear = document.getElementById('searchClear')
 
  // Show/hide clear button
  if (searchClear) {
    searchClear.style.display = query ? 'block' : 'none'
  }
 
  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }
 
  // Debounce search
  searchTimeout = setTimeout(() => {
    if (query.length >= 2) {
      performSearch(query)
    } else {
      hideSearchSuggestions()
    }
  }, 300)
}

function performSearch(query) {
  const results = {
    courses: coursesData.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    ),
    categories: [...new Set(coursesData.map(course => course.category))]
      .filter(category => category.toLowerCase().includes(query.toLowerCase()))
  }
 
  displaySearchSuggestions(results)
}

function performSearchAndNavigate(query) {
  // Navigate to courses page
  navigateTo('courses')
 
  // Filter courses based on search query
  filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.instructor.toLowerCase().includes(query.toLowerCase()) ||
    course.category.toLowerCase().includes(query.toLowerCase())
  )
 
  // Render filtered courses
  renderCoursesGrid()
 
  // Hide search suggestions
  hideSearchSuggestions()
 
  // Show notification
  showNotification(`${filteredCourses.length} cours trouvé(s) pour "${query}"`, 'success')
}

function displaySearchSuggestions(results) {
  const courseSuggestions = document.getElementById('courseSuggestions')
  const categorySuggestions = document.getElementById('categorySuggestions')
  const searchSuggestions = document.getElementById('searchSuggestions')
 
  if (!courseSuggestions || !categorySuggestions || !searchSuggestions) return
 
  // Display course suggestions
  courseSuggestions.innerHTML = results.courses.slice(0, 5).map(course => `
    <div class="suggestion-item" onclick="selectSearchResult('course', ${course.id})">
      <span class="suggestion-icon">📚</span>
      <span class="suggestion-text">${course.title}</span>
    </div>
  `).join('')
 
  // Display category suggestions
  categorySuggestions.innerHTML = results.categories.slice(0, 3).map(category => `
    <div class="suggestion-item" onclick="selectSearchResult('category', '${category}')">
      <span class="suggestion-icon">🏷️</span>
      <span class="suggestion-text">${category}</span>
    </div>
  `).join('')
 
  showSearchSuggestions()
}

function selectSearchResult(type, value) {
  const searchInput = document.getElementById('searchInput')
 
  if (type === 'course') {
    // Close search suggestions
    hideSearchSuggestions()
   
    // Navigate to course detail page
    showCourseDetail(value)
   
    // Clear search input
    if (searchInput) searchInput.value = ''
    const searchClear = document.getElementById('searchClear')
    if (searchClear) searchClear.style.display = 'none'
  } else if (type === 'category') {
    navigateTo('courses')
    // Filter by category
    filterCoursesByCategory(value)
    hideSearchSuggestions()
  }
}

function showSearchSuggestions() {
  const searchSuggestions = document.getElementById('searchSuggestions')
  if (searchSuggestions) {
    searchSuggestions.style.display = 'block'
  }
}

function hideSearchSuggestions() {
  const searchSuggestions = document.getElementById('searchSuggestions')
  if (searchSuggestions) {
    searchSuggestions.style.display = 'none'
  }
}

function clearSearch() {
  const searchInput = document.getElementById('searchInput')
  const searchClear = document.getElementById('searchClear')
 
  if (searchInput) searchInput.value = ''
  if (searchClear) searchClear.style.display = 'none'
  hideSearchSuggestions()
}

// ===== NOTIFICATION SYSTEM =====
let notifications = [
  {
    id: 1,
    type: 'course',
    title: 'Nouveau cours disponible',
    message: 'JavaScript Avancé - Début des cours le 15 janvier',
    time: 'Il y a 2 heures',
    read: false
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Certificat obtenu!',
    message: 'Félicitations! Vous avez terminé le cours HTML & CSS Basics',
    time: 'Hier',
    read: false
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Rappel de cours',
    message: 'Vous avez une leçon en attente dans React Fundamentals',
    time: 'Il y a 3 jours',
    read: true
  },
  {
    id: 4,
    type: 'message',
    title: 'Nouveau message',
    message: 'Vous avez reçu un message de votre instructeur',
    time: 'Il y a 1 jour',
    read: false
  },
  {
    id: 5,
    type: 'update',
    title: 'Mise à jour du cours',
    message: 'Le cours Python a été mis à jour avec de nouveaux contenus',
    time: 'Il y a 4 heures',
    read: false
  }
]

function initializeNotifications() {
  const notificationBtn = document.getElementById('notificationBtn')
  const notificationDropdown = document.getElementById('notificationDropdown')
  const notificationContainer = notificationBtn?.closest('.notification-container')
  const markAllRead = document.getElementById('markAllRead')
 
  if (!notificationBtn || !notificationDropdown || !notificationContainer) return
 
  // Toggle notifications
  notificationBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    notificationContainer.classList.toggle('active')
  })
 
  // Mark all as read
  if (markAllRead) {
    markAllRead.addEventListener('click', markAllNotificationsAsRead)
  }
 
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-container')) {
      notificationContainer.classList.remove('active')
    }
  })
 
  updateNotificationCount()
  renderNotifications()
}

function updateNotificationCount() {
  const notificationCount = document.getElementById('notificationCount')
  const unreadCount = notifications.filter(n => !n.read).length
 
  if (notificationCount) {
    notificationCount.textContent = unreadCount
    notificationCount.style.display = unreadCount > 0 ? 'block' : 'none'
  }
}

function renderNotifications() {
  const notificationList = document.getElementById('notificationList')
  if (!notificationList) return
 
  notificationList.innerHTML = notifications.map(notification => `
    <div class="notification-item ${notification.read ? '' : 'unread'}" onclick="markNotificationAsRead(${notification.id})">
      <div class="notification-icon-small">${getNotificationIcon(notification.type)}</div>
      <div class="notification-content">
        <h4>${notification.title}</h4>
        <p>${notification.message}</p>
        <span class="notification-time">${notification.time}</span>
      </div>
    </div>
  `).join('')
}

function getNotificationIcon(type) {
  const icons = {
    course: '📚',
    achievement: '🏆',
    reminder: '⏰',
    message: '💬',
    update: '🔄',
    system: '⚙️'
  }
  return icons[type] || '📢'
}

function markNotificationAsRead(id) {
  const notification = notifications.find(n => n.id === id)
  if (notification) {
    notification.read = true
    updateNotificationCount()
    renderNotifications()
  }
}

function markAllNotificationsAsRead() {
  notifications.forEach(notification => {
    notification.read = true
  })
  updateNotificationCount()
  renderNotifications()
}

function addNotification(type, title, message) {
  const newNotification = {
    id: Date.now(),
    type,
    title,
    message,
    time: 'Maintenant',
    read: false
  }
 
  notifications.unshift(newNotification)
  updateNotificationCount()
  renderNotifications()
 
  // Show notification toast
  showNotification(message, 'info')
}

// ===== DISCUSSION & Q&A SYSTEM =====
let discussions = [
  {
    id: 1,
    author: 'Marie Dubois',
    content: 'Excellent cours ! Les explications sont très claires et les exercices pratiques sont parfaits pour comprendre les concepts.',
    time: 'Il y a 2 heures',
    likes: 12,
    replies: []
  },
  {
    id: 2,
    author: 'Pierre Martin',
    content: 'J\'ai une question sur le chapitre 3. Pourriez-vous expliquer plus en détail le concept de closures en JavaScript ?',
    time: 'Il y a 5 heures',
    likes: 8,
    replies: []
  }
]

let questions = [
  {
    id: 1,
    author: 'Jean Dupont',
    question: 'Comment installer Node.js sur Windows ?',
    description: 'Je n\'arrive pas à installer Node.js sur mon ordinateur Windows. Quelqu\'un peut-il m\'aider ?',
    time: 'Il y a 1 jour',
    answers: [
      {
        id: 1,
        author: 'Marie Dubois',
        content: 'Voici les étapes : 1) Téléchargez Node.js depuis le site officiel, 2) Exécutez l\'installateur, 3) Redémarrez votre terminal.',
        time: 'Il y a 12 heures'
      }
    ]
  }
]

function initializeDiscussionSystem() {
  // Discussion form
  const discussionForm = document.querySelector('.discussion-form')
  if (discussionForm) {
    const textarea = discussionForm.querySelector('textarea')
    const button = discussionForm.querySelector('button')
   
    if (button) {
      button.addEventListener('click', postDiscussion)
    }
  }
 
  // Q&A form
  const qaForm = document.querySelector('.qa-form')
  if (qaForm) {
    const button = qaForm.querySelector('button')
    if (button) {
      button.addEventListener('click', askQuestion)
    }
  }
 
  // Like buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-like')) {
      handleLike(e.target)
    }
  })
}

function postDiscussion() {
  const textarea = document.getElementById('discussionInput')
  if (!textarea || !textarea.value.trim()) return
 
  const newDiscussion = {
    id: Date.now(),
    author: userProfile.name || 'Utilisateur',
    content: textarea.value.trim(),
    time: 'Maintenant',
    likes: 0,
    replies: []
  }
 
  discussions.unshift(newDiscussion)
  renderDiscussions()
  textarea.value = ''
 
  showNotification('Discussion publiée avec succès!', 'success')
}

function askQuestion() {
  const input = document.getElementById('questionInput')
  if (!input || !input.value.trim()) return
 
  const newQuestion = {
    id: Date.now(),
    author: userProfile.name || 'Utilisateur',
    question: input.value.trim(),
    description: '',
    time: 'Maintenant',
    answers: []
  }
 
  questions.unshift(newQuestion)
  renderQuestions()
  input.value = ''
 
  showNotification('Question posée avec succès!', 'success')
}

function handleLike(button) {
  const currentLikes = parseInt(button.textContent.match(/\d+/)[0])
  const newLikes = currentLikes + 1
  button.textContent = `👍 ${newLikes}`
 
  // Add visual feedback
  button.style.transform = 'scale(1.1)'
  setTimeout(() => {
    button.style.transform = 'scale(1)'
  }, 200)
}

function renderDiscussions() {
  const discussionList = document.getElementById('discussionList')
  if (!discussionList) return
 
  discussionList.innerHTML = discussions.map(discussion => `
    <div class="discussion-item">
      <div class="discussion-avatar">👤</div>
      <div class="discussion-content">
        <div class="discussion-header">
          <h4>${discussion.author}</h4>
          <span class="discussion-time">${discussion.time}</span>
        </div>
        <p>${discussion.content}</p>
        <div class="discussion-actions">
          <button class="btn-like">👍 ${discussion.likes}</button>
          <button class="btn-reply">Répondre</button>
        </div>
      </div>
    </div>
  `).join('')
}

function renderQuestions() {
  const qaList = document.getElementById('qaList')
  if (!qaList) return
 
  qaList.innerHTML = questions.map(qa => `
    <div class="qa-item">
      <div class="qa-question">
        <h4>${qa.question}</h4>
        <p>${qa.description}</p>
        <div class="qa-meta">
          <span class="qa-author">Par ${qa.author}</span>
          <span class="qa-time">${qa.time}</span>
          <span class="qa-answers">${qa.answers.length} réponses</span>
        </div>
      </div>
      <div class="qa-answers">
        ${qa.answers.map(answer => `
          <div class="qa-answer">
            <div class="answer-avatar">👤</div>
            <div class="answer-content">
              <h5>${answer.author}</h5>
              <p>${answer.content}</p>
              <span class="answer-time">${answer.time}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('')
}

// ===== DATA DES COURS EN COURS =====
let userCourseProgress = [
  {
    courseId: 1,
    courseTitle: 'JavaScript pour Débutants',
    progress: 65,
    timeRemaining: '12h restantes',
    thumbnail: '📖'
  },
  {
    courseId: 2,
    courseTitle: 'Design Web Moderne',
    progress: 30,
    timeRemaining: '8h restantes',
    thumbnail: '🎨'
  }
]

// ===== NAVIGATION SPA =====
function navigateTo(pageId) {
  // Masquer toutes les pages
  document.querySelectorAll(".page").forEach(page => page.style.display = "none");

  // Afficher la page demandée
  const page = document.getElementById(pageId);
  if (page) page.style.display = "block";

  // Actions spécifiques par page
  if (pageId === "dashboard") {
    renderDashboard();
  }

  if (pageId === "courseDetailPage") {
    const lastCourse = localStorage.getItem("currentCourseId");
    if (lastCourse) renderCourseDetail(parseInt(lastCourse));
  }
}

// ===== RENDU DU DASHBOARD =====
function renderDashboard() {
  const courseProgressList = document.getElementById("courseProgressList");

  if (userCourseProgress.length === 0) {
    courseProgressList.innerHTML = "<p>Aucun cours en cours</p>";
    return;
  }

  courseProgressList.innerHTML = userCourseProgress
    .map((item) => {
      const course = coursesData.find(c => c.id === item.courseId);
      if (!course) return '';

      return `
        <div class="progress-item">
          <div class="course-thumbnail">${item.thumbnail || "📘"}</div>
          <div class="progress-content">
            <h4>${course.title}</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${item.progress}%"></div>
            </div>
            <div class="progress-info">
              <span class="progress-text">${item.progress}% complété</span>
              <span class="progress-time">${item.timeRemaining}</span>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="continueCourse(${course.id})">Continuer</button>
        </div>
      `;
    })
    .join("");
}

// ===== BOUTON CONTINUER =====
function continueCourse(courseId) {
  // Sauvegarder l'ID du cours sélectionné
  localStorage.setItem("currentCourseId", courseId);

  // Afficher la page détail
  navigateTo("courseDetail");
}
function openCourseDetail(courseId) {
    localStorage.setItem("currentCourseId", courseId);
    navigateTo('courseDetailPage'); // ou ta fonction qui affiche la page
}


// ===== RENDU DE LA PAGE DETAIL DU COURS =====
function renderCourseDetail(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) {
    console.error("Cours introuvable : " + courseId);
    return;
  }

  // Remplir les champs de la page détail
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseTitleBreadcrumb").textContent = course.title;
  document.getElementById("courseCategory").textContent = course.category;
  document.getElementById("courseCategoryBadge").textContent = course.category;
  document.getElementById("courseLevelBadge").textContent = course.level;
  document.getElementById("courseRating").textContent = course.rating;
  document.getElementById("courseStudents").textContent = course.students;
  document.getElementById("courseDuration").textContent = course.duration;
  document.getElementById("courseLastUpdated").textContent = course.lastUpdated;
  document.getElementById("courseDescription").textContent = course.description;
  document.getElementById("coursePrice").textContent = course.price;
  document.getElementById("courseOriginalPrice").textContent = course.originalPrice || "";
  document.getElementById("courseDiscount").textContent = course.discount || "";

  if (course.video) {
    document.getElementById("courseVideo").src = course.video;
  }
}



// function initializeCourseProgress() {
//   renderCourseProgress()
 
//   // Add click handlers for continue buttons
//   document.addEventListener('click', (e) => {
//     if (e.target.textContent === 'Continuer') {
//       const progressItem = e.target.closest('.progress-item')
//       if (progressItem) {
//         const courseTitle = progressItem.querySelector('h4').textContent
//         navigateToCourse(courseTitle)
//       }
//     }
//   })
// }

// function renderCourseProgress() {
//   const progressList = document.getElementById('courseProgressList')
//   if (!progressList) return
 
//   progressList.innerHTML = userCourseProgress.map(course => `
//     <div class="progress-item">
//       <div class="course-thumbnail">${course.thumbnail}</div>
//       <div class="progress-content">
//         <h4>${course.courseTitle}</h4>
//         <div class="progress-bar">
//           <div class="progress-fill" style="width: ${course.progress}%"></div>
//         </div>
//         <div class="progress-info">
//           <span class="progress-text">${course.progress}% complété</span>
//           <span class="progress-time">${course.timeRemaining}</span>
//         </div>
//       </div>
//       <button class="btn btn-primary btn-sm">Continuer</button>
//     </div>
//   `).join('')
// }

// function navigateToCourse(courseTitle) {
//   // Find course by title
//   const course = coursesData.find(c => c.title === courseTitle)
//   if (course) {
//     window.currentCourseId = course.id
//     navigateTo('course-detail')
//   }
// }

// ===== ACTIVITY SYSTEM =====
let activities = [
  {
    id: 1,
    type: 'chapter_completed',
    title: 'Vous avez terminé le chapitre 3',
    description: 'JavaScript pour Débutants',
    time: 'Il y a 2 heures',
    icon: '📚'
  },
  {
    id: 2,
    type: 'certificate_earned',
    title: 'Certificat obtenu!',
    description: 'HTML & CSS Basics',
    time: 'Hier',
    icon: '🏆'
  },
  {
    id: 3,
    type: 'quiz_completed',
    title: 'Quiz complété',
    description: 'Design Web Moderne - Score: 85%',
    time: 'Il y a 3 jours',
    icon: '📝'
  }
]

function renderActivities() {
  const activityList = document.getElementById('activityList')
  if (!activityList) return
 
  activityList.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-content">
        <p><strong>${activity.title}</strong></p>
        <p>${activity.description}</p>
        <span class="activity-time">${activity.time}</span>
      </div>
    </div>
  `).join('')
}

function addActivity(type, title, description) {
  const newActivity = {
    id: Date.now(),
    type,
    title,
    description,
    time: 'Maintenant',
    icon: getActivityIcon(type)
  }
 
  activities.unshift(newActivity)
  renderActivities()
}

function getActivityIcon(type) {
  const icons = {
    chapter_completed: '📚',
    certificate_earned: '🏆',
    quiz_completed: '📝',
    course_enrolled: '🎓',
    achievement_unlocked: '⭐'
  }
  return icons[type] || '📢'
}

// ===== CERTIFICATE SYSTEM =====
let certificates = [
  {
    id: 1,
    title: 'HTML & CSS Basics',
    description: 'Certificat de complétion',
    date: 'Obtenu le 15 Jan 2024',
    icon: '🏆'
  }
]

function renderCertificates() {
  const certificatesGrid = document.getElementById('certificatesGrid')
  if (!certificatesGrid) return
 
  certificatesGrid.innerHTML = certificates.map(certificate => `
    <div class="certificate-item">
      <div class="certificate-icon">${certificate.icon}</div>
      <div class="certificate-content">
        <h4>${certificate.title}</h4>
        <p>${certificate.description}</p>
        <span class="certificate-date">${certificate.date}</span>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="downloadCertificate(${certificate.id})">Télécharger</button>
    </div>
  `).join('')
}

function downloadCertificate(certificateId) {
  const certificate = certificates.find(c => c.id === certificateId)
  if (certificate) {
    showNotification(`Téléchargement du certificat "${certificate.title}"...`, 'info')
    // Simulate download
    setTimeout(() => {
      showNotification('Certificat téléchargé avec succès!', 'success')
    }, 1500)
  }
}

// ===== FAQ FUNCTIONALITY =====
function toggleFAQ(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains('active')
 
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active')
  })
 
  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active')
  }
}

// ===== CONTACT FORM FUNCTIONALITY =====
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm')
  if (!contactForm) return
 
  contactForm.addEventListener('submit', handleContactSubmit)
}

function handleContactSubmit(e) {
  e.preventDefault()
 
  const formData = {
    name: document.getElementById('contactName').value,
    email: document.getElementById('contactEmail').value,
    subject: document.getElementById('contactSubject').value,
    message: document.getElementById('contactMessage').value
  }
 
  // Validate form
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    showNotification('Veuillez remplir tous les champs', 'error')
    return
  }
 
  // Simulate form submission
  showLoading('contactForm')
 
  setTimeout(() => {
    hideLoading('contactForm')
    showNotification('Message envoyé avec succès! Nous vous répondrons dans les 24h.', 'success')
    contactForm.reset()
  }, 2000)
}

// ===== ENHANCED NAVIGATION =====
let navigationHistory = ['home']

function navigateTo(page) {
  // Add to history only if different from current page
  if (navigationHistory[navigationHistory.length - 1] !== page) {
    navigationHistory.push(page)
  }
 
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active')
    p.style.display = 'none'
  })
 
  // Show target page
  const targetPage = document.getElementById(page + 'Page')
  if (targetPage) {
    targetPage.classList.add('active')
    targetPage.style.display = 'block'
    window.scrollTo(0, 0)
  } else {
    // Handle special cases
    switch(page) {
      case 'home':
        const homePage = document.getElementById('homePage')
        if (homePage) {
          homePage.classList.add('active')
          homePage.style.display = 'block'
        }
        break
      case 'courses':
        const coursesPage = document.getElementById('coursesPage')
        if (coursesPage) {
          coursesPage.classList.add('active')
          coursesPage.style.display = 'block'
        }
        break
      case 'login':
        const loginPage = document.getElementById('loginPage')
        if (loginPage) {
          loginPage.classList.add('active')
          loginPage.style.display = 'block'
        }
        break
      case 'signup':
        const signupPage = document.getElementById('signupPage')
        if (signupPage) {
          signupPage.classList.add('active')
          signupPage.style.display = 'block'
        }
        break
      case 'dashboard':
        if (isLoggedIn) {
          const dashboardPage = document.getElementById('dashboardPage')
          if (dashboardPage) {
            dashboardPage.classList.add('active')
            dashboardPage.style.display = 'block'
          }
        } else {
          navigateTo('login')
        }
        break
      case 'wishlist':
        const wishlistPage = document.getElementById('wishlistPage')
        if (wishlistPage) {
          wishlistPage.classList.add('active')
          wishlistPage.style.display = 'block'
          renderWishlist()
        }
        break
      case 'cart':
        const cartPage = document.getElementById('cartPage')
        if (cartPage) {
          cartPage.classList.add('active')
          cartPage.style.display = 'block'
          renderCartPage()
        }
        break
      case 'about':
        const aboutPage = document.getElementById('aboutPage')
        if (aboutPage) {
          aboutPage.classList.add('active')
          aboutPage.style.display = 'block'
        }
        break
      case 'contact':
        const contactPage = document.getElementById('contactPage')
        if (contactPage) {
          contactPage.classList.add('active')
          contactPage.style.display = 'block'
        }
        break
      case 'privacy':
        const privacyPage = document.getElementById('privacyPage')
        if (privacyPage) {
          privacyPage.classList.add('active')
          privacyPage.style.display = 'block'
        }
        break
      case 'terms':
        const termsPage = document.getElementById('termsPage')
        if (termsPage) {
          termsPage.classList.add('active')
          termsPage.style.display = 'block'
        }
        break
      default:
        // Show 404 page for unknown routes
        const errorPage = document.getElementById('error404Page')
        if (errorPage) {
          errorPage.classList.add('active')
          errorPage.style.display = 'block'
        }
    }
  }
 
  // Update active navigation
  updateActiveNavigation(page)
 
  // Update browser history
  if (history.pushState) {
    history.pushState({ page: page }, '', `#${page}`)
  }
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page) {
    navigateTo(event.state.page)
  } else if (navigationHistory.length > 1) {
    navigationHistory.pop() // Remove current page
    const previousPage = navigationHistory[navigationHistory.length - 1]
    navigateTo(previousPage)
  } else {
    navigateTo('home')
  }
})

// Handle hash changes
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.substring(1)
  if (hash && hash !== navigationHistory[navigationHistory.length - 1]) {
    navigateTo(hash)
  }
})

// Initialize from URL hash
function initializeFromHash() {
  const hash = window.location.hash.substring(1)
  if (hash) {
    navigateTo(hash)
  } else {
    navigateTo('home')
  }
}

function updateActiveNavigation(activePage) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('data-page') === activePage) {
      link.classList.add('active')
    }
  })
}

// ===== ENHANCED ERROR HANDLING =====
function handle404Error() {
  // This function can be called when a route is not found
  navigateTo('error404')
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)
 
  // Observe elements for animation
  document.querySelectorAll('.testimonial-card, .value-card, .team-member, .stat-card').forEach(el => {
    observer.observe(el)
  })
}

// ===== ENHANCED LOADING STATES =====
function showLoading(formId) {
  const form = document.getElementById(formId)
  if (!form) return
 
  const submitBtn = form.querySelector('button[type="submit"]')
  if (submitBtn) {
    submitBtn.disabled = true
    const originalText = submitBtn.innerHTML
    submitBtn.dataset.originalText = originalText
   
    // Check if it's newsletter form
    if (formId === 'newsletterForm') {
      submitBtn.innerHTML = '<span class="btn-loader"></span> Abonnement...'
    } else {
      submitBtn.innerHTML = '<span class="btn-loader"></span> Envoi en cours...'
    }
  }
}

function hideLoading(formId) {
  const form = document.getElementById(formId)
  if (!form) return
 
  const submitBtn = form.querySelector('button[type="submit"]')
  if (submitBtn && submitBtn.dataset.originalText) {
    submitBtn.disabled = false
    submitBtn.innerHTML = submitBtn.dataset.originalText
    delete submitBtn.dataset.originalText
  }
}

// ===== SOCIAL SHARING =====
function shareOnSocial(platform, url = window.location.href) {
  const title = 'Découvrez EduLearn - La plateforme d\'apprentissage en ligne'
  const text = 'Apprenez de nouvelles compétences avec les meilleurs instructeurs du monde'
 
  let shareUrl = ''
 
  switch(platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      break
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      break
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
      break
  }
 
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}

// ===== ANALYTICS TRACKING =====
function trackEvent(eventName, properties = {}) {
  // This would integrate with analytics services like Google Analytics
  console.log('Event tracked:', eventName, properties)
 
  // Example implementation for Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties)
  }
}

function trackPageView(pageName) {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  })
}

// ===== PERFORMANCE OPTIMIZATION =====
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]')
 
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })
 
  images.forEach(img => imageObserver.observe(img))
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
function initializeAccessibility() {
  // Add keyboard navigation for custom elements
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close modals and dropdowns
      closeAllModals()
      hideSearchSuggestions()
    }
  })
 
  // Add focus management
  document.addEventListener('focusin', (e) => {
    if (e.target.closest('.modal')) {
      // Trap focus within modal
      trapFocus(e.target.closest('.modal'))
    }
  })
}

function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
 
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
 
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
  })
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none'
  })
 
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.classList.remove('active')
  })
}

// ===== ENHANCED COURSES PAGE FUNCTIONALITY =====
let currentView = 'grid'
let currentFilters = {
  category: [],
  price: [],
  rating: [],
  duration: [],
  level: []
}
let currentSort = "popular";

function initializeCoursesPage() {
  setupViewToggle()
  setupFilterCounts()
  updateCourseCount()
  setupLoadMore()
}

function setupViewToggle() {
  const viewBtns = document.querySelectorAll('.view-btn')
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentView = btn.dataset.view
      renderCourses()
    })
  })
}

function setupFilterCounts() {
  // Update filter counts based on available courses
  updateFilterCount('price', 'free', coursesData.filter(c => c.price === 0).length)
  updateFilterCount('price', 'paid', coursesData.filter(c => c.price > 0).length)
  updateFilterCount('rating', '4', coursesData.filter(c => c.rating >= 4).length)
  updateFilterCount('rating', '3', coursesData.filter(c => c.rating >= 3).length)
  updateFilterCount('duration', 'short', coursesData.filter(c => c.duration < 3).length)
  updateFilterCount('duration', 'medium', coursesData.filter(c => c.duration >= 3 && c.duration <= 10).length)
  updateFilterCount('duration', 'long', coursesData.filter(c => c.duration > 10).length)
  updateFilterCount('level', 'beginner', coursesData.filter(c => c.level === 'beginner').length)
  updateFilterCount('level', 'intermediate', coursesData.filter(c => c.level === 'intermediate').length)
  updateFilterCount('level', 'advanced', coursesData.filter(c => c.level === 'advanced').length)
}

function updateFilterCount(filterType, value, count) {
  const filterElement = document.querySelector(`.${filterType}-filter[value="${value}"]`)
  if (filterElement) {
    const countElement = filterElement.closest('.filter-checkbox').querySelector('.filter-count')
    if (countElement) {
      countElement.textContent = `(${count})`
    }
  }
}

function updateCourseCount() {
  const totalCoursesElement = document.getElementById('totalCourses')
  if (totalCoursesElement) {
    totalCoursesElement.textContent = coursesData.length
  }
}

function setupLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn')
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreCourses)
  }
}

function loadMoreCourses() {
  // Simulate loading more courses
  showLoading('loadMoreBtn')
 
  setTimeout(() => {
    hideLoading('loadMoreBtn')
    showNotification('Plus de cours chargés!', 'success')
  }, 1500)
}

function resetFilters() {
  // Reset all filter checkboxes
  document.querySelectorAll('.filter-checkbox input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false
  })
 
  // Reset current filters
  currentFilters = {
    category: [],
    price: [],
    rating: [],
    duration: [],
    level: []
  }
 
  // Re-render courses
  renderCourses()
  updateActiveFilters()
}

function updateActiveFilters() {
  const activeFiltersElement = document.getElementById('activeFilters')
  if (!activeFiltersElement) return
 
  const activeCount = Object.values(currentFilters).flat().length
  if (activeCount > 0) {
    activeFiltersElement.textContent = `${activeCount} filtre(s) actif(s)`
  } else {
    activeFiltersElement.textContent = ''
  }
}

// ===== ENHANCED COURSE RENDERING =====
function renderCourses() {
  const coursesGrid = document.getElementById('coursesGrid')
  if (!coursesGrid) return
 
  const filteredCourses = getFilteredCourses()
  const sortedCourses = sortCourses(filteredCourses,currentSort)
 
  // Update results count
  const resultsCountElement = document.getElementById('resultsCount')
  if (resultsCountElement) {
    resultsCountElement.textContent = `${sortedCourses.length} cours trouvé${sortedCourses.length > 1 ? 's' : ''}`
  }
 
  if (currentView === 'grid') {
    coursesGrid.className = 'courses-grid'
    coursesGrid.innerHTML = sortedCourses.map(course => createCourseCard(course)).join('')
  } else {
    coursesGrid.className = 'courses-list'
    coursesGrid.innerHTML = sortedCourses.map(course => createCourseListItem(course)).join('')
  }
}

function viewCourse(courseId) {
  courseId = Number(courseId)
  const course = coursesData.find(c => c.id === courseId)
  if (!course) return

  currentCourse = course // store globally if needed

  // ==== Fill main info ====
  const titleEl = document.getElementById("courseTitle")
  const descEl = document.getElementById("courseDescription")
  const categoryBadge = document.getElementById("courseCategoryBadge")
  const levelBadge = document.getElementById("courseLevelBadge")
  const ratingEl = document.getElementById("courseRating")
  const studentsEl = document.getElementById("courseStudents")
  const durationEl = document.getElementById("courseDuration")
  const lastUpdatedEl = document.getElementById("courseLastUpdated")
  const priceEl = document.getElementById("coursePrice")
  const originalPriceEl = document.getElementById("courseOriginalPrice")
  const discountEl = document.getElementById("courseDiscount")

  if (titleEl) titleEl.textContent = course.title
  if (descEl) descEl.textContent = course.description
  if (categoryBadge) categoryBadge.textContent = course.category
  if (levelBadge) levelBadge.textContent = course.level
  if (ratingEl) ratingEl.textContent = course.rating
  if (studentsEl) studentsEl.textContent = course.students.toLocaleString()

  // Duration
  const allLessons = course.sections.flatMap(s => s.lessons)
  const totalMinutes = allLessons.reduce((sum, lesson) => sum + (parseInt(lesson.duration) || 0), 0)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  if (durationEl) durationEl.textContent = hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`

  // Last updated
  if (lastUpdatedEl) lastUpdatedEl.textContent = course.lastUpdated || "—"

  // Price
  if (priceEl) priceEl.textContent = course.price === 0 ? "Gratuit" : `${course.price}€`
  if (originalPriceEl) originalPriceEl.textContent = course.originalPrice ? `${course.originalPrice}€` : ""
  if (discountEl) discountEl.textContent = course.discount ? `-${course.discount}%` : ""

  // Bestseller badge (show only if true)
  const bestsellerBadge = document.querySelector(".course-badge.bestseller")
  if (bestsellerBadge) {
    bestsellerBadge.style.display = course.bestseller ? "inline-block" : "none"
  }

  // ==== Add to Cart / Wishlist buttons ====
  const addToCartBtn = document.getElementById("addToCartBtn")
  const addToWishlistBtn = document.getElementById("addToWishlistBtn")

  if (addToCartBtn) {
    addToCartBtn.onclick = () => addToCart(courseId)
  }

  if (addToWishlistBtn) {
    addToWishlistBtn.onclick = () => addToWishlist(courseId)
  }

  // Navigate to course detail page
  navigateTo("courseDetail")
}



function createCourseCard(course) {
  // Compute total lessons
  const allLessons = course.sections.flatMap(s => s.lessons);
  const totalLessons = allLessons.length;

  // Compute total duration in minutes
  const totalMinutes = allLessons.reduce((sum, lesson) => {
    const minutes = parseInt(lesson.duration);
    return sum + (isNaN(minutes) ? 0 : minutes);
  }, 0);

  // Convert to h/min text
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const durationText =
    totalLessons === 0
      ? "Aucune leçon"
      : hours > 0
        ? `${hours}h ${minutes}min`
        : `${minutes}min`;

  return `
    <div class="course-card" onclick="viewCourse(${course.id})">
      <div class="course-image">
        <img src="${course.image}" alt="${course.title}" loading="lazy">
        <div class="course-badge">${course.category}</div>
        <div class="course-overlay">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); addToCart(${course.id})">
            <span class="btn-icon">🛒</span>
            Ajouter au panier
          </button>
        </div>
      </div>

      <div class="course-content">
        <div class="course-header">
          <h3 class="course-title">${course.title}</h3>
          <div class="course-rating">
            <span class="stars">${'⭐'.repeat(Math.floor(course.rating))}</span>
            <span class="rating-value">${course.rating}</span>
            <span class="rating-count">(${course.students})</span>
          </div>
        </div>

        <p class="course-description">${course.description}</p>

        <div class="course-meta">
          <div class="course-instructor">
            <span class="instructor-icon">👨‍🏫</span>
            <span class="instructor-name">${course.instructor}</span>
          </div>

          <div class="course-duration">
            <span class="duration-icon">⏱️</span>
            <span class="duration-text">${durationText}</span>
          </div>

          <div class="course-lessons">
            <span class="lessons-icon">📚</span>
            <span class="lessons-text">${totalLessons} leçons</span>
          </div>
        </div>

        <div class="course-footer">
          <div class="course-price">
            ${course.price === 0
              ? '<span class="price-free">Gratuit</span>'
              : `<span class="price-paid">${course.price}€</span>`}
          </div>

          <div class="course-actions">
            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); addToWishlist(${course.id})">
              <span class="btn-icon">❤️</span>
            </button>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); addToCart(${course.id})">
              <span class="btn-icon">🛒</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


// ===== Helpers to calculate duration and lessons =====
function getCourseDuration(course) {
  if (!course.sections) return 0;

  let totalMinutes = 0;
  course.sections.forEach(section => {
    section.lessons.forEach(lesson => {
      const match = lesson.duration.match(/(\d+)\s*min/);
      if (match) {
        totalMinutes += parseInt(match[1], 10);
      }
    });
  });

  const hours = totalMinutes / 60;
  return hours.toFixed(2); // e.g., "1.50"
}

function getCourseLessons(course) {
  if (!course.sections) return 0;

  let totalLessons = 0;
  course.sections.forEach(section => {
    totalLessons += section.lessons.length;
  });

  return totalLessons;
}

// ===== Corrected createCourseListItem =====
function createCourseListItem(course) {
  console.log('List view course:', course);

  return `
    <div class="course-list-item" onclick="viewCourse(${course.id})">
      <div class="course-list-image">
        <img src="${course.image || 'placeholder.jpg'}" alt="${course.title || 'Cours'}" loading="lazy">
      </div>

      <div class="course-list-content">
        <div class="course-list-header">
          <h3 class="course-list-title">${course.title || 'Titre indisponible'}</h3>
          <div class="course-list-rating">
            <span class="stars">${'⭐'.repeat(Math.floor(course.rating || 0))}</span>
            <span class="rating-value">${course.rating ?? 'N/A'}</span>
            <span class="rating-count">(${course.students ?? 0})</span>
          </div>
        </div>

        <p class="course-list-description">${course.description || 'Description manquante'}</p>

        <div class="course-list-meta">
          <div class="course-list-instructor">
            <span class="instructor-icon">👨‍🏫</span>
            <span class="instructor-name">${course.instructor || 'Instructeur inconnu'}</span>
          </div>

          <div class="course-list-duration">
            <span class="duration-icon">⏱️</span>
            <span class="duration-text">${getCourseDuration(course)} h</span>
          </div>

          <div class="course-list-level">
            <span class="level-badge">${getCourseLessons(course)} lessons</span>
          </div>

          ${course.category ? `
          <div class="course-list-category">
            <span class="category-badge">${course.category}</span>
          </div>` : ''}
        </div>
      </div>

      <div class="course-list-actions">
        <div class="course-list-price">
          ${course.price === 0 ? '<span class="price-free">Gratuit</span>' : `<span class="price-paid">${course.price ?? 'N/A'}€</span>`}
        </div>

        <div class="course-list-buttons">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); addToWishlist(${course.id})">
            <span class="btn-icon">❤️</span>
          </button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); addToCart(${course.id})">
            <span class="btn-icon">🛒</span>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  `;
}


function getFilteredCourses() {
  // Ensure currentFilters is initialized
  const filters = currentFilters || { category: [], price: [], rating: [], duration: [], level: [] }

  // Check if any filter is active
  const anyFilterActive = filters.category.length > 0
    || filters.price.length > 0
    || filters.rating.length > 0
    || filters.duration.length > 0
    || filters.level.length > 0

  if (!anyFilterActive) return [...coursesData] // no filters → return all courses

  // Apply filters normally
  return coursesData.filter(course => {
    // Category filter
    if (filters.category.length > 0 && !filters.category.includes(course.category)) return false

    // Price filter
    if (filters.price.length > 0) {
      const isFree = course.price === 0
      const isPaid = course.price > 0
      if (filters.price.includes('free') && !isFree) return false
      if (filters.price.includes('paid') && !isPaid) return false
    }

    // Rating filter
    if (filters.rating.length > 0) {
      const hasRating4 = course.rating >= 4
      const hasRating3 = course.rating >= 3
      if (filters.rating.includes('4') && !hasRating4) return false
      if (filters.rating.includes('3') && !hasRating3) return false
    }

    // Duration filter
    if (filters.duration.length > 0) {
      const isShort = course.duration < 3
      const isMedium = course.duration >= 3 && course.duration <= 10
      const isLong = course.duration > 10
      if (filters.duration.includes('short') && !isShort) return false
      if (filters.duration.includes('medium') && !isMedium) return false
      if (filters.duration.includes('long') && !isLong) return false
    }

    // Level filter
    if (filters.level.length > 0 && !filters.level.includes(course.level)) return false

    return true
  })
}

function sortCourses(courses, sortType) {
  if (!Array.isArray(courses)) return courses;

  let sorted = [...courses];

  switch (sortType) {
    case "newest":
      sorted.sort((a, b) => (b.dateAdded ? new Date(b.dateAdded) : 0) - (a.dateAdded ? new Date(a.dateAdded) : 0));
      break;

    case "rating":
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;

    case "price-low":
      sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      break;

    case "price-high":
      sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      break;

    case "duration":
      sorted.sort((a, b) => getCourseDuration(a) - getCourseDuration(b));
      break;

    case "popular":
    default:
      sorted.sort((a, b) => (b.students || 0) - (a.students || 0));
  }

  return sorted;
}


// ===== NEWSLETTER FUNCTIONALITY =====
function initializeNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm')
  if (!newsletterForm) return
 
  newsletterForm.addEventListener('submit', handleNewsletterSubmit)
}

function handleNewsletterSubmit(e) {
  e.preventDefault()
 
  const email = document.getElementById('newsletterEmail').value
 
  if (!email) {
    showNotification('Veuillez entrer une adresse email valide', 'error')
    return
  }
 
  // Simulate subscription
  showLoading('newsletterForm')
 
  setTimeout(() => {
    hideLoading('newsletterForm')
    showNotification('Merci pour votre abonnement ! Un email de confirmation a été envoyé.', 'success')
    newsletterForm.reset()
    trackEvent('newsletter_subscribe', { email })
  }, 1500)
}

// ===== Theme Management Functions =====
function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
    applyTheme()
  })
}

function applyTheme() {
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode")
    document.getElementById("themeToggle").textContent = "☀️"
  } else {
    document.body.classList.remove("dark-mode")
    document.getElementById("themeToggle").textContent = "🌙"
  }
}

function setTheme(theme) {
  currentTheme = theme
  localStorage.setItem("theme", theme)
  applyTheme()
}

// ===== Settings Functions =====
function setupSettingsListeners() {
  document.getElementById("settingsBtn").addEventListener("click", () => {
    openModal("settingsModal")
    document.querySelector(`input[value="${currentTheme}"]`).checked = true
    document.getElementById("languageSelect").value = currentLanguage
  })
}

function setLanguage(lang) {
  currentLanguage = lang
  localStorage.setItem("language", lang)
  updateAllTranslations()
 
  // Update language selector
  const languageSelect = document.getElementById("languageSelect")
  if (languageSelect) {
    languageSelect.value = lang
  }
 
  // Update document language attribute
  document.documentElement.lang = lang
 
  // Show notification
  showNotification(`Language changed to ${lang === 'en' ? 'English' : 'Français'}`, 'success')
}

function changeLanguage() {
  const selectedLang = document.getElementById("languageSelect").value
  setLanguage(selectedLang)
}

function saveSettings() {
  const paymentMethod = document.getElementById("paymentMethod").value
  const autoRenew = document.getElementById("autoRenew").checked
  localStorage.setItem("paymentMethod", paymentMethod)
  localStorage.setItem("autoRenew", JSON.stringify(autoRenew))
  closeModal("settingsModal")
  alert("Paramètres enregistrés!")
}

// ===== Video Control Functions =====
function changeSpeed() {
  const speed = document.getElementById("speedControl").value
  console.log("[v0] Video speed changed to:", speed)
}

// ===== Test Functions =====
function testWishlist() {
  console.log("Testing wishlist functionality...")
  console.log("Current wishlist:", wishlist)
  console.log("Courses data:", coursesData)
 
  // Add first course to wishlist for testing
  if (coursesData.length > 0) {
    addToWishlist(coursesData[0].id)
  }
}
