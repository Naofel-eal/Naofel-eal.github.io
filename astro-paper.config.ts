import { defineAstroPaperConfig } from "./src/types/config";

// URL publique du site : à changer ici le jour où un nom de domaine est ajouté
const SITE_URL = "https://naofel-eal.github.io/";

export default defineAstroPaperConfig({
  site: {
    url: SITE_URL,
    title: "Naofel El Alouani",
    description:
      "Naofel El Alouani, ingénieur logiciel senior freelance : IA agentique, agents de code autonomes, Domain-Driven Design et architecture hexagonale.",
    author: "Naofel El Alouani",
    profile: new URL("about/", SITE_URL).href,
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 50, // tout sur une page, pour que le filtre par tag porte sur tous les articles
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
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/naofel-el-alouani/",
    },
    { name: "github", url: "https://github.com/Naofel-eal" },
    { name: "malt", url: "https://www.malt.fr/profile/naofelelalouani" },
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
