import V2 from "./V2";

/**
 * V3 — "Wellness Gold": the exact V2 (Sage Wellness) layout, recolored
 * into the Editorial Gold palette via the `.skin-gold` scope (see
 * index.css). Same structure and typography (Cormorant), warm gold world
 * instead of sage/forest. The wrapper is a plain block — no transform —
 * so V2's fixed/sticky nav and bottom bar keep working normally.
 */
export default function V3() {
  return (
    <div className="skin-gold">
      <V2 />
    </div>
  );
}
