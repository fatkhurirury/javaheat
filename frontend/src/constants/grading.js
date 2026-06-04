import { TreePine, ScanLine, Droplets, Flame } from "lucide-react";

// Single source of truth for the JavaHeat Eco-Grading System criteria.
// Used by both Home.jsx and Products.jsx so the wording stays in sync.
export const GRADING_CRITERIA = [
    {
        slug: "sustainability",
        icon: TreePine,
        title: "Sustainability score",
        body: "Every batch is scored on traceability to a sustainably managed plantation or coconut-shell cooperative. Zero deforestation, audited at source.",
    },
    {
        slug: "density",
        icon: ScanLine,
        title: "Density & geometry",
        body: "Hand-sorted cubes are measured against a master sample so every piece in the box behaves the same on the grill.",
    },
    {
        slug: "moisture",
        icon: Droplets,
        title: "Moisture & ash",
        body: "Low-oxygen pyrolysis and kiln drying lock the moisture below 6% and ash below 3% — cleaner burn, less waste.",
    },
    {
        slug: "burn",
        icon: Flame,
        title: "Burn-profile audit",
        body: "Calorific value, burn time and smoke profile are tested per batch against the JavaHeat standard before export.",
    },
];
