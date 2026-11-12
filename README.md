# Blog de Naofel El Alouani

Site : https://naofel-eal.github.io/

Construit avec [Astro](https://astro.build/) et le thème [AstroPaper](https://github.com/satnaing/astro-paper), déployé automatiquement sur GitHub Pages à chaque push sur `main`.

## Écrire un article

1. Copie `src/content/posts/_modele-article.md` en `src/content/posts/mon-article.md`
   (le nom du fichier devient l'URL : `/posts/mon-article/`).
2. Remplis l'en-tête (`title`, `description`, `pubDatetime`) et passe `draft: false`.
3. Prévisualise en local, puis publie :

```bash
pnpm dev          # http://localhost:4321
git add . && git commit -m "Nouvel article : …" && git push
```

Le site est en ligne 1 à 2 minutes plus tard (onglet **Actions** du repo pour suivre).

## Images

Mets-les à côté de l'article (ex. `src/content/posts/mon-article/schema.png`) ou dans `src/assets/images/`, puis :

```md
![Description](@/assets/images/schema.png)
```

Chaque article reçoit automatiquement une image Open Graph (l'aperçu sur LinkedIn). Pour en imposer une : `ogImage: ./mon-image.png` dans l'en-tête.

## Configuration

- `astro-paper.config.ts` : titre, description, réseaux sociaux, boutons de partage
- `src/pages/index.astro` : texte de la page d'accueil
- `src/content/pages/about.md` : page « À propos »
- `src/i18n/lang/fr.ts` : textes de l'interface

## Commandes

| Commande       | Action                             |
| -------------- | ---------------------------------- |
| `pnpm install` | Installer les dépendances          |
| `pnpm dev`     | Serveur local sur `localhost:4321` |
| `pnpm build`   | Build de production dans `./dist`  |
| `pnpm preview` | Prévisualiser le build             |
