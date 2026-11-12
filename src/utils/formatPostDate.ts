import config from "@/config";
import { resolveTimezone } from "./resolveTimezone";

/** Formate une date d'article à la française : « 12 novembre 2026 ». */
export function formatPostDate(date: Date, timezone?: string): string {
  return new Intl.DateTimeFormat(config.site.lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: resolveTimezone(timezone ?? config.site.timezone),
  }).format(date);
}
