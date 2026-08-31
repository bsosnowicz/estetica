import { Agentation } from "agentation";
import V3 from "./versions/V3";

/**
 * Estetica — single chosen direction: "Gold Wellness".
 * (The wellness layout lives in versions/V2.tsx; V3 renders it inside the
 * `.skin-gold` scope — see src/index.css.)
 */
export default function App() {
  return (
    <>
      <V3 />
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}
