/**
 * Observes every `.reveal` element and adds `is-visible` when it scrolls
 * into view (one-shot). Honors prefers-reduced-motion by revealing
 * everything immediately without an observer.
 *
 * Ported from the old React `useReveal` hook — same behaviour, no framework.
 * Add `class="reveal"` (optionally a `--reveal-delay` inline var for stagger)
 * to any element.
 */
function initReveal() {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(".reveal"),
  );
  if (nodes.length === 0) return;

  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  nodes.forEach((n) => io.observe(n));
}

initReveal();
