import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://naofel-eal.github.io/",
    title: "Naofel El Alouani",
    description:
      "Naofel El Alouani, ingénieur logiciel senior freelance : IA agentique, agents de code autonomes, Domain-Driven Design et architecture hexagonale.",
    author: "Naofel El Alouani",
    profile: "https://naofel-eal.github.io/about/",
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
      url: "https://www.linkedin.com/in/naofel-el-alouani-83a947197/",
    },
    { name: "github", url: "https://github.com/Naofel-eal" },
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
