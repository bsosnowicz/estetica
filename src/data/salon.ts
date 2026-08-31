/**
 * Estetica — single source of truth for all page content.
 *
 * The actual content now lives in `src/content/salon.json` and is edited
 * through the CMS panel (`/admin`). This module is a thin loader: it
 * imports that JSON and re-exports it under the exact same names and
 * types the rest of the app already relies on.
 */
import data from "../content/salon.json";

export const business = data.business;

export const aboutParagraphs = data.aboutParagraphs;

export const stats = data.stats;

export const amenities = data.amenities;

export type ServiceItem = { name: string; price: string };
export type ServiceCategory = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  image: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = data.serviceCategories;

export type TeamMember = { name: string; role: string; image: string };

export const team: TeamMember[] = data.team;

export type Testimonial = { name: string; quote: string };

export const testimonials: Testimonial[] = data.testimonials;

export const gallery = data.gallery;

export const heroImage = data.heroImage;

/** Google Maps embed (bez klucza API) na adres salonu. */
export const mapsEmbedSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    `${business.address.street}, ${business.address.postal} ${business.address.city}`,
  ) +
  "&output=embed";

export const navLinks = data.navLinks;
