/**
 * Données structurées (schema.org) partagées par les pages.
 * Les entités sont reliées par leur `@id`, ce qui permet à Google de comprendre
 * que l'auteur des articles, la personne de la page À propos et l'éditeur du
 * site sont la même personne.
 */
import config from "@/config";

const SITE = config.site.url;

export const PERSON_ID = `${SITE}#person`;
export const WEBSITE_ID = `${SITE}#website`;

export const aboutUrl = new URL("about/", SITE).href;

export const sameAs = [
  ...config.socials.map(s => s.url),
  "https://www.malt.fr/profile/naofelelalouani",
].filter((url, i, all) => all.indexOf(url) === i);

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: config.site.author,
  url: aboutUrl,
  jobTitle: "Ingénieur logiciel senior freelance",
  description: config.site.description,
  knowsAbout: [
    "IA agentique",
    "Agents de code autonomes",
    "Orchestration d'agents IA",
    "Domain-Driven Design",
    "Architecture hexagonale",
    "Clean Architecture",
    "Behavior-Driven Development",
    "Test-Driven Development",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Angular",
    "Cybersécurité",
  ],
  knowsLanguage: ["fr", "en", "de"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Polytech Dijon" },
  award: [
    "Major de promotion, Polytech Dijon",
    "1re place au CTF TotalEnergies 2024",
    "1re place au CTF TotalEnergies 2025",
  ],
  areaServed: { "@type": "Country", name: "France" },
  sameAs,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE,
  name: config.site.title,
  description: config.site.description,
  inLanguage: "fr-FR",
  publisher: { "@id": PERSON_ID },
};

/** Sérialise un objet JSON-LD sans risque de fermer la balise <script>. */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
