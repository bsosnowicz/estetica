import { useEffect, useRef, useState } from "react";
import {
  aboutParagraphs,
  amenities,
  business,
  gallery,
  heroImage,
  mapsEmbedSrc,
  navLinks,
  serviceCategories,
  team,
  testimonials,
} from "../data/salon";
import { useReveal } from "../lib/useReveal";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconClose,
  IconFacebook,
  IconGift,
  IconInstagram,
  IconLeaf,
  IconMenu,
  IconPhone,
  IconPin,
  IconStar,
  serviceIcons,
} from "../lib/icons";

const BOOK = business.links.booking;

/* ----------------------------------------------------------------
   V2 — "Sage Wellness"
   Cream base + deep forest/sage world. Cormorant Garamond display,
   Inter body. Big rounded panels, pill buttons, annotation callouts,
   sticky bottom booking bar. Softer, organic, wellness-brand feel.
---------------------------------------------------------------- */

function Pill({
  children = "Umów wizytę",
  variant = "solid",
  className = "",
  withArrow = true,
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "cream";
  className?: string;
  withArrow?: boolean;
}) {
  const styles = {
    solid: "bg-forest text-sage-mist hover:bg-pine",
    outline:
      "bg-transparent text-forest ring-1 ring-inset ring-forest/30 hover:ring-forest/60 hover:bg-forest/[0.04]",
    cream: "bg-sage-mist text-forest hover:bg-white",
  }[variant];
  return (
    <a
      href={BOOK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-medium transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      {withArrow && (
        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-moss uppercase">
      <span className="h-px w-7 bg-sage" aria-hidden />
      {children}
    </span>
  );
}

function Heading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "forest",
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "forest" | "cream";
}) {
  const titleColor = tone === "cream" ? "text-sage-mist" : "text-forest";
  const introColor = tone === "cream" ? "text-sage-mist/70" : "text-moss";
  return (
    <div
      className={`reveal flex max-w-2xl flex-col gap-5 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      }`}
    >
      <Kicker>{kicker}</Kicker>
      <h2
        className={`font-cormorant text-[2.6rem] leading-[1.02] font-medium sm:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-[16px] leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-full py-2.5 pr-2.5 pl-6 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 shadow-[0_10px_40px_-24px_rgba(44,53,42,0.5)] ring-1 ring-forest/10 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-cormorant text-[26px] leading-none font-semibold text-forest"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-sage-mist">
            <IconLeaf className="h-4 w-4" />
          </span>
          Estetica
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-pine/80 transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Pill withArrow={false} className="px-6 py-3 text-[13px]" />
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full text-forest ring-1 ring-inset ring-forest/15 lg:hidden"
            aria-label="Otwórz menu"
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-forest/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 flex h-full w-[82%] max-w-sm flex-col bg-cream px-7 py-6 shadow-2xl transition-transform duration-400 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-cormorant text-[26px] font-semibold text-forest">
              Estetica
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ring-forest/15"
              aria-label="Zamknij menu"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/10 py-4 font-cormorant text-3xl font-medium text-forest"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Pill className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Sticky bottom booking bar (V2 signature) ---------- */
function BottomBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight > document.body.scrollHeight - 260;
      setShow(y > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full bg-forest/95 py-2.5 pr-2.5 pl-6 shadow-[0_20px_50px_-20px_rgba(44,53,42,0.7)] backdrop-blur-md">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-sage-mist/15 text-sage-mist sm:grid">
            <IconStar className="h-4 w-4 text-sage-soft" />
          </span>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-cormorant text-lg text-sage-mist">
              Gotowa na wizytę w Estetice?
            </div>
            <div className="truncate text-[12px] text-sage-mist/60">
              {business.rating} ★ · {business.reviews} opinii · Katowice
            </div>
          </div>
        </div>
        <Pill variant="cream" className="shrink-0 px-6 py-3 text-[13px]" />
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="px-4 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div className="lg:pr-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-sage-pale px-3.5 py-1.5">
            <span className="flex text-moss">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            <span className="text-[12.5px] font-medium text-pine">
              {business.rating} · {business.reviews} opinii na Booksy
            </span>
          </div>

          <h1
            className="reveal mt-6 font-cormorant text-[clamp(3rem,7vw,5.4rem)] leading-[0.98] font-medium text-forest"
            style={{ ["--reveal-delay" as string]: "60ms" }}
          >
            Piękno, które
            <br />
            <span className="italic text-moss">pielęgnujesz</span> co dzień.
          </h1>

          <p
            className="reveal mt-7 max-w-md text-[16.5px] leading-relaxed text-moss"
            style={{ ["--reveal-delay" as string]: "130ms" }}
          >
            Salon kosmetyczny i SPA w Katowicach. Kosmetologia, medycyna
            estetyczna, masaże i sauna Infrared — na kosmetykach w 100%
            naturalnych, z dbałością o efekt i o Twój spokój.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-3"
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <Pill />
            <a
              href="#uslugi"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium text-forest ring-1 ring-inset ring-forest/25 transition-all duration-300 hover:bg-forest/[0.04] hover:ring-forest/50"
            >
              Zobacz ofertę
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="reveal mt-10 flex items-center gap-8"
            style={{ ["--reveal-delay" as string]: "260ms" }}
          >
            {[
              { v: `${business.years} lat`, l: "na rynku" },
              { v: "100%", l: "naturalne kosmetyki" },
              { v: "23", l: "kategorie zabiegów" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-cormorant text-3xl font-medium whitespace-nowrap text-forest">
                  {s.v}
                </div>
                <div className="text-[12.5px] text-moss">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image panel */}
        <div
          className="reveal relative"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <div className="relative rounded-[2.5rem] bg-sage-pale p-3">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={heroImage}
                alt="Salon Estetica — strefa piękna i relaksu w Katowicach"
                className="aspect-[4/5] w-full object-cover sm:aspect-square"
                fetchPriority="high"
              />
            </div>

            {/* floating chip */}
            <div className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl bg-forest px-4 py-3 text-sage-mist shadow-xl">
              <IconLeaf className="h-5 w-5 text-sage-soft" />
              <div className="text-[13px] leading-tight">
                <div className="font-medium">Kosmetyki naturalne</div>
                <div className="text-sage-mist/60">twarz &amp; ciało</div>
              </div>
            </div>
          </div>
          {/* soft decorative blob */}
          <div className="absolute -top-6 -right-4 -z-10 h-40 w-40 rounded-full bg-sage/25 blur-3xl drift" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefit strip ---------- */
function Benefits() {
  const items = [
    { icon: IconLeaf, t: "Kosmetyki naturalne", d: "Zabiegi na twarz i ciało w 100% na naturalnych produktach." },
    { icon: IconStar, t: "4,9 ★ na Booksy", d: "524 opinie klientek — zaufanie budowane od 2013 roku." },
    { icon: IconCheck, t: "Kosmetolog z dyplomem", d: "Właścicielka — mgr kosmetologii z 16-letnim stażem." },
    { icon: IconGift, t: "Vouchery i pakiety", d: "Karty podarunkowe, pakiety zabiegów i noc w SPA dla dwojga." },
  ];
  return (
    <section className="px-4 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-[1180px] rounded-[2.5rem] bg-forest px-6 py-12 sm:px-12 sm:py-14">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.t}
                className="reveal"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sage-mist/12 text-sage-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-cormorant text-2xl font-medium text-sage-mist">
                  {it.t}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-sage-mist/65">
                  {it.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- About + annotation callouts (Seed signature) ---------- */
function About() {
  const callouts = [
    { t: "Rytuały KOBIDO", d: "Bezinwazyjny japoński lifting twarzy." },
    { t: "Sauna Infrared", d: "Głęboki relaks i regeneracja ciała." },
    { t: "16 lat doświadczenia", d: "Pod okiem właścicielki-kosmetologa." },
  ];
  return (
    <section id="o-nas" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Heading
            kicker="O nas"
            title={
              <>
                Miejsce, w którym
                <br />
                pielęgnacja spotyka
                <br />
                <span className="italic text-moss">prawdziwy relaks.</span>
              </>
            }
          />
          <div className="reveal mt-7 space-y-5 text-[15.5px] leading-relaxed text-moss">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="reveal mt-8 flex items-center gap-4">
            <img
              src={team[0].image}
              alt={business.owner.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-sage-pale"
              loading="lazy"
            />
            <div className="leading-tight">
              <div className="font-cormorant text-xl font-medium text-forest">
                {business.owner.name}
              </div>
              <div className="text-[12.5px] text-moss">
                {business.owner.title}
              </div>
            </div>
          </div>
        </div>

        {/* callout panel */}
        <div className="reveal">
          <div className="relative rounded-[2.5rem] bg-sage-pale p-3">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={gallery[4].src}
                alt="Ceremonia SPA w salonie Estetica"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            {callouts.map((c) => (
              <li
                key={c.t}
                className="flex items-start gap-4 rounded-2xl bg-white/70 px-5 py-4 ring-1 ring-forest/8"
              >
                <span className="mt-1.5 h-px w-6 shrink-0 bg-sage" aria-hidden />
                <div>
                  <div className="font-cormorant text-xl font-medium text-forest">
                    {c.t}
                  </div>
                  <div className="text-[13px] text-moss">{c.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="uslugi" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-[1180px] rounded-[3rem] bg-sage-mist px-5 py-20 sm:px-12 sm:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <Heading
            kicker="Usługi"
            title={
              <>
                Zabiegi dopasowane
                <br />
                <span className="italic text-moss">do Twojej skóry.</span>
              </>
            }
            intro="Ponad 200 zabiegów w 23 kategoriach. Poniżej reprezentatywny wybór — pełny, aktualny cennik prowadzimy na Booksy."
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const featured = i === 3; // Medycyna estetyczna → green feature card
            return (
              <article
                key={cat.id}
                className={`reveal flex flex-col rounded-[1.75rem] p-7 transition-all duration-400 ${
                  featured
                    ? "bg-forest ring-1 ring-forest"
                    : "bg-cream ring-1 ring-forest/8 hover:ring-forest/20"
                }`}
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full ${
                      featured
                        ? "bg-sage-mist/12 text-sage-soft"
                        : "bg-sage-pale text-moss"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-[12px] font-semibold tracking-widest ${
                      featured ? "text-sage-mist/45" : "text-sage"
                    }`}
                  >
                    {cat.index}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-cormorant text-[28px] leading-tight font-medium ${
                    featured ? "text-sage-mist" : "text-forest"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`mt-2.5 text-[13.5px] leading-relaxed ${
                    featured ? "text-sage-mist/70" : "text-moss"
                  }`}
                >
                  {cat.blurb}
                </p>

                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
                    featured ? "border-sage-mist/15" : "border-forest/10"
                  }`}
                >
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span
                        className={`text-[13.5px] leading-snug ${
                          featured ? "text-sage-mist/85" : "text-pine/90"
                        }`}
                      >
                        {it.name}
                      </span>
                      <span
                        className={`shrink-0 text-[13px] font-medium tabular-nums ${
                          featured ? "text-sage-soft" : "text-moss"
                        }`}
                      >
                        {it.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-7 inline-flex items-center gap-2 text-[13px] font-medium transition-colors ${
                    featured
                      ? "text-sage-soft hover:text-sage-mist"
                      : "text-forest hover:text-moss"
                  }`}
                >
                  Pełny cennik
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery (bento) ---------- */
function Gallery() {
  return (
    <section id="realizacje" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <Heading
            kicker="Realizacje"
            title={
              <>
                Efekty, które <span className="italic text-moss">mówią same za siebie.</span>
              </>
            }
            align="center"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          <figure className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2rem] reveal">
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              loading="lazy"
              className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
            />
          </figure>
          {[gallery[1], gallery[3], gallery[2], gallery[5]].map((g, i) => (
            <figure
              key={g.src}
              className="group relative overflow-hidden rounded-[1.5rem] reveal"
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
function Team() {
  return (
    <section id="zespol" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-[1180px] rounded-[3rem] bg-sage-pale px-5 py-20 sm:px-12 sm:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <Heading
            kicker="Zespół"
            title={
              <>
                Specjalistki, którym <span className="italic text-moss">zaufasz.</span>
              </>
            }
            intro="Kosmetolodzy i stylistki z pasją — pod okiem właścicielki, mgr kosmetologii z 16-letnim stażem."
            align="center"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((m, i) => (
            <figure
              key={m.name}
              className="reveal group text-center"
              style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-cream">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                />
              </div>
              <figcaption className="mt-3">
                <div className="font-cormorant text-xl leading-tight font-medium text-forest">
                  {m.name}
                </div>
                <div className="mt-0.5 text-[12px] text-moss">{m.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section id="opinie" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <Heading
            kicker="Opinie"
            title={
              <>
                Pokochały nas <span className="italic text-moss">klientki.</span>
              </>
            }
            align="center"
          />
          <div className="reveal inline-flex items-center gap-3 rounded-full bg-sage-pale px-5 py-2.5">
            <span className="flex text-moss">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-[13px] font-medium text-pine">
              {business.rating} · {business.reviews} opinii · Booksy
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`reveal flex flex-col justify-between rounded-[1.75rem] p-8 ${
                i === 0
                  ? "bg-forest text-sage-mist sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "bg-cream ring-1 ring-forest/8"
              }`}
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <p
                className={`font-cormorant leading-snug font-medium ${
                  i === 0 ? "text-[30px] text-sage-mist" : "text-[24px] text-forest"
                }`}
              >
                „{t.quote}"
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full font-cormorant text-lg ${
                    i === 0
                      ? "bg-sage-mist/15 text-sage-soft"
                      : "bg-sage-pale text-moss"
                  }`}
                >
                  {t.name.charAt(0)}
                </span>
                <span
                  className={`text-[14px] font-medium ${
                    i === 0 ? "text-sage-mist" : "text-forest"
                  }`}
                >
                  {t.name}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Voucher / SPA feature panel ---------- */
function Voucher() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[3rem] bg-forest">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="order-2 p-8 sm:p-14 lg:order-1">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] text-sage-soft uppercase">
              <IconGift className="h-4 w-4" /> Vouchery &amp; SPA
            </span>
            <h2 className="mt-5 font-cormorant text-[2.6rem] leading-[1.02] font-medium text-sage-mist sm:text-5xl">
              Podaruj chwilę <span className="italic text-sage-soft">relaksu.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-sage-mist/70">
              Karty podarunkowe, pakiety zabiegów i noc w SPA dla dwojga — z sauną
              Infrared i ceremoniami na ciało. Elegancki prezent, który zapamiętają.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {amenities.map((a) => (
                <li key={a} className="flex items-center gap-3 text-[14px] text-sage-mist/85">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-mist/12 text-sage-soft">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Pill variant="cream">Zapytaj o voucher</Pill>
            </div>
          </div>
          <div className="order-1 min-h-[280px] lg:order-2">
            <img
              src={gallery[2].src}
              alt="Strefa relaksu i SPA w salonie Estetica"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const { address } = business;
  return (
    <section id="kontakt" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[3rem] bg-sage-mist">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-14">
            <Heading
              kicker="Kontakt"
              title={
                <>
                  Zapraszamy <span className="italic text-moss">do Estetiki.</span>
                </>
              }
            />
            <dl className="reveal mt-9 space-y-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-moss">
                  <IconPin className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[12px] font-semibold tracking-wide text-sage uppercase">
                    Adres
                  </dt>
                  <dd className="mt-1 text-[15px] text-forest">
                    {address.street}
                    <br />
                    {address.postal} {address.city}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-moss">
                  <IconClock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <dt className="text-[12px] font-semibold tracking-wide text-sage uppercase">
                    Godziny
                  </dt>
                  <dd className="mt-1 space-y-0.5 text-[15px] text-forest">
                    {business.hoursRows.map((h) => (
                      <div key={h.day} className="flex max-w-xs justify-between gap-6">
                        <span>{h.day}</span>
                        <span className="text-moss">{h.time}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-moss">
                  <IconPhone className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[12px] font-semibold tracking-wide text-sage uppercase">
                    Telefon
                  </dt>
                  <dd className="mt-1 text-[15px] text-forest">{business.phone}</dd>
                </div>
              </div>
            </dl>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <Pill />
              <div className="flex gap-2">
                <a
                  href={business.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-12 w-12 place-items-center rounded-full text-forest ring-1 ring-inset ring-forest/15 transition-colors hover:bg-forest hover:text-sage-mist"
                >
                  <IconInstagram className="h-5 w-5" />
                </a>
                <a
                  href={business.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-12 w-12 place-items-center rounded-full text-forest ring-1 ring-inset ring-forest/15 transition-colors hover:bg-forest hover:text-sage-mist"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="min-h-[320px] lg:min-h-full">
            <iframe
              title="Mapa dojazdu — Estetica Katowice"
              src={mapsEmbedSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest text-sage-mist">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-cormorant text-3xl font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-mist/12 text-sage-soft">
                <IconLeaf className="h-4 w-4" />
              </span>
              Estetica
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-sage-mist/60">
              {business.fullName}. Kosmetologia, medycyna estetyczna i SPA
              w sercu Katowic.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={business.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ring-sage-mist/20 transition-colors hover:bg-sage-mist hover:text-forest"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href={business.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ring-sage-mist/20 transition-colors hover:bg-sage-mist hover:text-forest"
              >
                <IconFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[12px] font-semibold tracking-wide text-sage-mist/40 uppercase">
              Nawigacja
            </div>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-sage-mist/70 transition-colors hover:text-sage-mist"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[12px] font-semibold tracking-wide text-sage-mist/40 uppercase">
              Kontakt
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-sage-mist/70">
              <li>
                {business.address.street}, {business.address.postal}{" "}
                {business.address.city}
              </li>
              <li>{business.hours}</li>
              <li>{business.phone}</li>
              <li>
                <a
                  href={business.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sage-mist"
                >
                  esteticakatowice.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-sage-mist/12 pt-6 text-[12px] text-sage-mist/45 sm:flex-row sm:items-center">
          <span>
            © {year} {business.fullName}. NIP: {business.nip}.
          </span>
          <span className="tracking-wide">Prototyp · dane demonstracyjne</span>
        </div>
      </div>
    </footer>
  );
}

export default function V2() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  return (
    <div ref={root} className="min-h-screen bg-cream font-sans text-forest antialiased">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Voucher />
        <Contact />
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
}
