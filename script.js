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
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    video: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "Créez des APIs avec Node.js",
    fullDescription: "Apprenez à créer des serveurs et des APIs avec Node.js et Express.",
    learningPoints: ["Express.js", "Bases de données", "Authentification", "Déploiement"],
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
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
    "nav-home": "Accueil",
    "nav-courses": "Cours",
    "nav-dashboard": "Mon Tableau de Bord",

    // Hero Section
    "hero-title": "Apprenez de Nouvelles Compétences",
    "hero-subtitle": "Accédez à des milliers de cours en ligne de qualité",
    "hero-btn": "Explorer les Cours",

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
    "nav-home": "Home",
    "nav-courses": "Courses",
    "nav-dashboard": "My Dashboard",

    // Hero Section
    "hero-title": "Learn New Skills",
    "hero-subtitle": "Access thousands of quality online courses",
    "hero-btn": "Explore Courses",

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

// ===== Progress Management =====
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

// ===== Language Switching Functions =====
function setLanguage(lang) {
  if (lang !== "fr" && lang !== "en") return
  currentLanguage = lang
  localStorage.setItem("language", lang)
  updateAllTranslations()
  updateLanguageButtons()
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add("active")
    }
  })
}

// Simple language switch function for header buttons
function switchLanguage(lang) {
  setLanguage(lang)
}

function updateAllTranslations() {
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
  const heroTitle = document.querySelector(".hero-content h1")
  const heroSubtitle = document.querySelector(".hero-content p")
  const heroBtn = document.querySelector(".hero-content .btn")
  if (heroTitle) heroTitle.textContent = t("hero-title")
  if (heroSubtitle) heroSubtitle.textContent = t("hero-subtitle")
  if (heroBtn) heroBtn.textContent = t("hero-btn")

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
    document.getElementById("sortSelect").addEventListener("change", (e) => sortCourses(e.target.value))
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
  currentLanguage = localStorage.getItem("language") || "fr"
  updateLanguageButtons()
  updateAllTranslations()
  initializeApp()
  setupAuthListeners()
  setupThemeToggle()
  setupSettingsListeners()
  setupLanguageListeners()
  applyTheme()
  checkAuthStatus()
})

function initializeApp() {
  setupEventListeners()
  renderFeaturedCourses()
  renderCategories()
  updateCartCount()
  updateWishlistCount()
  updateUserProfile()
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
    navigateTo("dashboard")
  })

  // Profile Button
  document.getElementById("profileBtn").addEventListener("click", () => {
    openModal("profileModal")
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
    sortCourses(e.target.value)
  })

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

  // Language Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchLanguage(btn.dataset.lang)
    })
  })
}

// ===== Navigation =====
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"))

  // Show selected page
  const pageElement = document.getElementById(page + "Page")
  if (pageElement) {
    pageElement.classList.add("active")
  }

  // Update active nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.page === page) {
      link.classList.add("active")
    }
  })

  // Close mobile menu
  document.getElementById("navMobile").classList.remove("active")

  // Render page content
  switch (page) {
    case "home":
      renderFeaturedCourses()
      break
    case "courses":
      renderCoursesPage()
      break
    case "dashboard":
      renderDashboard()
      break
    case "cart":
      renderCartPage()
      break
  }

  currentPage = page
  updateProgressBar()
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
}

function renderCoursesGrid() {
  const container = document.getElementById("coursesGrid")
  container.innerHTML = filteredCourses.map((course) => createCourseCard(course)).join("")
  attachCourseCardListeners()
}

function createCourseCard(course) {
  const priceText = course.price === 0 ? t("course-free") : `${course.price}€`
  const priceClass = course.price === 0 ? "free" : ""
  
  // Vérifier si le cours est inscrit et calculer la progression
  const isEnrolled = enrolledCourses.some(c => c.id === course.id)
  const progressPercentage = isEnrolled ? calculateCourseProgress(course.id) : 0
  
  // Créer la barre de progression si le cours est inscrit
  const progressBar = isEnrolled ? `
    <div class="course-progress">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
      </div>
      <span class="progress-text">${progressPercentage}%</span>
    </div>
  ` : ''

  // Afficher la vidéo seulement si le cours est acheté ou gratuit
  const videoContent = (isEnrolled || course.price === 0) ? 
    `<iframe src="${course.video}" frameborder="0" allowfullscreen></iframe>` :
    `<div class="video-locked">
      <div class="lock-icon">🔒</div>
      <p>Achetez le cours pour voir la vidéo</p>
    </div>`

  // Créer le bouton ou l'indicateur selon l'état d'achat
  const buttonOrStatus = isEnrolled ? 
    `<span class="course-purchased">✅ Acheté</span>` :
    `<button class="course-card-btn" onclick="addToCart(${course.id})">${t("course-add")}</button>`

  return `
        <div class="course-card" data-course-id="${course.id}">
            <div class="course-card-video">
                ${videoContent}
            </div>
            <div class="course-card-content">
                <span class="course-card-category">${course.category}</span>
                <h3 class="course-card-title">${course.title}</h3>
                <p class="course-card-instructor">${course.instructor}</p>
                <div class="course-card-meta">
                    <span class="course-card-rating">⭐ ${course.rating}</span>
                    <span class="course-card-students">${course.students.toLocaleString()} ${t("course-students")}</span>
                </div>
                ${progressBar}
                <div class="course-card-footer">
                    <span class="course-card-price ${priceClass}">${priceText}</span>
                    ${buttonOrStatus}
                </div>
            </div>
        </div>
    `
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
function showCourseDetail(courseId) {
  currentCourse = coursesData.find((c) => c.id == courseId)
  if (!currentCourse) return

  // Populate course detail
  document.getElementById("courseTitle").textContent = currentCourse.title
  document.getElementById("courseImage").src = currentCourse.image
  document.getElementById("courseDescription").textContent = currentCourse.description
  document.getElementById("courseFullDescription").textContent = currentCourse.fullDescription
  document.getElementById("courseRating").innerHTML =
    `⭐ ${currentCourse.rating} (${currentCourse.students.toLocaleString()} avis)`
  document.getElementById("courseStudents").textContent = `${currentCourse.students.toLocaleString()} étudiants`
  document.getElementById("coursePrice").textContent = currentCourse.price === 0 ? "Gratuit" : `${currentCourse.price}€`
  
  // Vérifier l'accès à la vidéo
  const isEnrolled = enrolledCourses.some(c => c.id === currentCourse.id)
  const videoFrame = document.getElementById("videoFrame")
  
  if (videoFrame) {
    if (isEnrolled || currentCourse.price === 0) {
      // Cours acheté ou gratuit - afficher la vidéo
      videoFrame.src = currentCourse.video
      videoFrame.style.display = "block"
      
      // Masquer le message de verrouillage s'il existe
      const lockMessage = document.getElementById("videoLockMessage")
      if (lockMessage) {
        lockMessage.style.display = "none"
      }
    } else {
      // Cours non acheté - masquer la vidéo et afficher le message
      videoFrame.style.display = "none"
      
      // Créer ou afficher le message de verrouillage
      let lockMessage = document.getElementById("videoLockMessage")
      if (!lockMessage) {
        lockMessage = document.createElement("div")
        lockMessage.id = "videoLockMessage"
        lockMessage.className = "video-lock-message"
        lockMessage.innerHTML = `
          <div class="lock-icon-large">🔒</div>
          <h3>Vidéo verrouillée</h3>
          <p>Achetez ce cours pour accéder à la vidéo et au contenu complet</p>
          <button class="btn btn-primary" onclick="addToCart(${currentCourse.id})">Acheter maintenant</button>
        `
        videoFrame.parentNode.insertBefore(lockMessage, videoFrame)
      }
      lockMessage.style.display = "block"
    }
  }

  // Learning points
  const learningList = document.getElementById("learningPoints")
  learningList.innerHTML = currentCourse.learningPoints.map((point) => `<li>${point}</li>`).join("")

  // Instructor
  const instructorCard = document.getElementById("instructorCard")
  instructorCard.innerHTML = `
        <div class="instructor-avatar">👨‍🏫</div>
        <div class="instructor-info">
            <h4>${currentCourse.instructor}</h4>
            <p>Instructeur Expert</p>
        </div>
    `

  // Curriculum - using enhanced rendering
  renderCurriculumEnhanced()

  // Reviews
  renderReviews()

  // Q&A
  renderQA()

  // Buttons
  document.getElementById("addToCartBtn").onclick = () => addToCart(courseId)
  document.getElementById("addToWishlistBtn").onclick = () => addToWishlist(courseId)

  navigateTo("courseDetail")
}

function renderCurriculumEnhanced() {
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
  const course = coursesData.find((c) => c.id == courseId)
  if (!course) return

  // Vérifier si le cours est déjà acheté
  const isEnrolled = enrolledCourses.some(c => c.id === courseId)
  if (isEnrolled) {
    alert("Vous avez déjà acheté ce cours!")
    return
  }

  const existingItem = cart.find((item) => item.id === courseId)
  if (!existingItem) {
    cart.push({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    })
    saveCart()
    updateCartCount()
    alert(`${course.title} ajouté au panier!`)
  } else {
    alert("Ce cours est déjà dans votre panier")
  }
}

function removeFromCart(courseId) {
  cart = cart.filter((item) => item.id !== courseId)
  saveCart()
  updateCartCount()
  renderCartPage()
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length
}

function renderCartPage() {
  const cartItems = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Votre panier est vide</p>"
    document.getElementById("subtotal").textContent = "0 €"
    document.getElementById("discount").textContent = "0 €"
    document.getElementById("total").textContent = "0 €"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>Accès illimité</p>
            </div>
            <div>
                <div class="cart-item-price">${item.price === 0 ? "Gratuit" : item.price + "€"}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        </div>
    `,
    )
    .join("")

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
  
  alert(t("msg-checkout-success"))
  navigateTo("dashboard")
}

// ===== Wishlist Management =====
function addToWishlist(courseId) {
  const course = coursesData.find((c) => c.id == courseId)
  if (!course) return

  const existingItem = wishlist.find((item) => item.id === courseId)
  if (!existingItem) {
    wishlist.push({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    })
    saveWishlist()
    updateWishlistCount()
    alert(`${course.title} ajouté aux favoris!`)
  } else {
    alert("Ce cours est déjà dans vos favoris")
  }
}

function removeFromWishlist(courseId) {
  wishlist = wishlist.filter((item) => item.id !== courseId)
  saveWishlist()
  updateWishlistCount()
  renderDashboard()
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

function updateWishlistCount() {
  document.getElementById("wishlistCount").textContent = wishlist.length
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

// ===== Filters & Sorting =====
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
}

function resetFilters() {
  document.querySelectorAll(".category-filter, .price-filter, .rating-filter").forEach((f) => (f.checked = false))
  filteredCourses = [...coursesData]
  renderCoursesGrid()
}

function sortCourses(sortType) {
  switch (sortType) {
    case "popular":
      filteredCourses.sort((a, b) => b.students - a.students)
      break
    case "newest":
      filteredCourses.sort((a, b) => b.id - a.id)
      break
    case "rating":
      filteredCourses.sort((a, b) => b.rating - a.rating)
      break
    case "price-low":
      filteredCourses.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredCourses.sort((a, b) => b.price - a.price)
      break
  }
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

// ===== Profile =====
function editProfile() {
  document.getElementById("profileName").value = userProfile.name
  document.getElementById("profileEmail").value = userProfile.email
  openModal("profileModal")
}

function saveProfile() {
  userProfile.name = document.getElementById("profileName").value
  userProfile.email = document.getElementById("profileEmail").value
  localStorage.setItem("userProfile", JSON.stringify(userProfile))
  closeModal("profileModal")
  updateUserProfile()
  alert("Profil mis à jour!")
}

function updateUserProfile() {
  document.getElementById("userName").textContent = userProfile.name
  document.getElementById("userEmail").textContent = userProfile.email
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
  // Auth tab switching
  document.querySelectorAll(".auth-tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabName = e.target.dataset.authTab
      
      // Remove active class from all tabs and forms
      document.querySelectorAll(".auth-tab-btn").forEach((b) => b.classList.remove("active"))
      document.querySelectorAll(".auth-form").forEach((f) => f.classList.remove("active"))
      
      // Add active class to clicked tab and corresponding form
      e.target.classList.add("active")
      const formId = tabName + "Form"
      const targetForm = document.getElementById(formId)
      if (targetForm) {
        targetForm.classList.add("active")
      }
      
      // Clear form inputs when switching tabs
      if (tabName === "login") {
        document.getElementById("signupForm").reset()
      } else if (tabName === "signup") {
        document.getElementById("loginForm").reset()
      }
    })
  })

  // Login form
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input[type="email"]').value
    const password = e.target.querySelector('input[type="password"]').value
    login(email, password)
  })

  // Signup form
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target.querySelector('input[type="text"]').value
    const email = e.target.querySelectorAll('input[type="email"]')[0].value
    const password = e.target.querySelector('input[type="password"]').value
    signup(name, email, password)
  })
}

function login(email, password) {
  if (email && password) {
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    userProfile.email = email
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
    closeModal("authModal")
    updateAuthUI()
    alert("Connexion réussie!")
  }
}

function signup(name, email, password) {
  if (name && email && password) {
    isLoggedIn = true
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    userProfile.name = name
    userProfile.email = email
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
    closeModal("authModal")
    updateAuthUI()
    alert("Inscription réussie!")
  }
}

function logout() {
  isLoggedIn = false
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  cart = []
  wishlist = []
  enrolledCourses.length = 0
  localStorage.removeItem("cart")
  localStorage.removeItem("wishlist")
  localStorage.removeItem("enrolledCourses")
  updateAuthUI()
  navigateTo("home")
  alert("Déconnexion réussie!")
}

function checkAuthStatus() {
  if (!isLoggedIn) {
    document.getElementById("profileBtn").textContent = "🔓"
    document.getElementById("profileBtn").onclick = () => openModal("authModal")
  } else {
    updateAuthUI()
  }
}

function updateAuthUI() {
  if (isLoggedIn) {
    document.getElementById("profileBtn").textContent = "👤"
    document.getElementById("profileBtn").onclick = () => openModal("profileModal")
  }
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

// ===== Language Button Listeners =====
function setupLanguageListeners() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang)
    })
  })
}
