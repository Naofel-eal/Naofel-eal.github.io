import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    posts: "Articles",
    tags: "Tags",
    about: "À propos",
    archives: "Archives",
    search: "Rechercher",
  },
  post: {
    publishedAt: "Publié le",
    updatedAt: "Mis à jour",
    sharePostIntro: "Partager cet article :",
    sharePostOn: "Partager cet article sur {{platform}}",
    sharePostViaEmail: "Partager cet article par e-mail",
    tagLabel: "Tags",
    backToTop: "Haut de page",
    tableOfContents: "Sommaire",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Article précédent",
    nextPost: "Article suivant",
  },
  pagination: {
    prev: "Préc.",
    next: "Suiv.",
    page: "Page",
  },
  home: {
    socialLinks: "Me retrouver",
    featured: "À la une",
    recentPosts: "Articles récents",
    allPosts: "Tous les articles",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tous droits réservés.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Tous les articles avec le tag",

    tagsTitle: "Tags",
    tagsDesc: "Tous les tags utilisés dans les articles.",

    postsTitle: "Articles",
    postsDesc: "Tous mes articles.",

    archivesTitle: "Archives",
    archivesDesc: "Tous les articles, classés par date.",

    searchTitle: "Rechercher",
    searchDesc: "Rechercher un article…",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    skipTableOfContents: "Passer le sommaire",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher des articles…",
    noResults: "Aucun résultat",
    goToPreviousPage: "Page précédente",
    goToNextPage: "Page suivante",
  },
  notFound: {
    title: "404 Introuvable",
    message: "Page introuvable",
    goHome: "Retour à l'accueil",
  },
} satisfies UIStrings;
