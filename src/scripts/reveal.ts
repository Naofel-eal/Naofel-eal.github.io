/**
 * Apparition douce des éléments `.reveal` lorsqu'ils entrent dans l'écran.
 * Désactivé si l'utilisateur préfère réduire les animations.
 */
function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>(
    ".reveal:not(.is-visible)"
  );
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  items.forEach(el => io.observe(el));
}

document.addEventListener("astro:page-load", initReveal);
