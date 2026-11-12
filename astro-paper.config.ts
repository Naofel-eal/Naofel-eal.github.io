import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://naofel-eal.github.io/",
    title: "Naofel El Alouani",
    description:
      "Articles, retours d'expérience et notes techniques de Naofel El Alouani, développeur freelance.",
    author: "Naofel El Alouani",
    profile: "https://naofel-eal.github.io/about/",
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/Naofel-eal" },
    // TODO : décommente et mets l'URL de ton profil LinkedIn
    // { name: "linkedin", url: "https://www.linkedin.com/in/ton-profil/" },
  ],
  shareLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=Un%20article%20%C3%A0%20lire&body=" },
  ],
});
