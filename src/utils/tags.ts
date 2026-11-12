import type { CollectionEntry } from "astro:content";

/** « Retour d'expérience » → « retour-d-experience » (sans accents, pour l'URL). */
export function tagSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type TagInfo = { slug: string; name: string; count: number };

/** Liste des tags des articles, du plus fréquent au moins fréquent. */
export function getAllTags(posts: CollectionEntry<"posts">[]): TagInfo[] {
  const map = new Map<string, TagInfo>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const tag = map.get(slug) ?? { slug, name, count: 0 };
      tag.count += 1;
      map.set(slug, tag);
    }
  }
  return [...map.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, "fr")
  );
}
