import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>fr-FR</language><atom:link href="${new URL("rss.xml", config.site.url).href}" rel="self" type="application/rss+xml" />`,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime),
      categories: data.tags,
    })),
  });
}
