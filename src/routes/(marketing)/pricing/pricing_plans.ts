export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Perfekt für den Start und für erste, kleine Shootings.",
    price: "€0,-",
    priceIntervalName: " pro Monat",
    features: [
      "10 GB sicherer Cloud-Speicher",
      "Passwortgeschützte Smart Galleries",
      "Integrierter Webshop",
      "Standard-Verkaufsprovision",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Für Freelancer und ambitionierte Fotografen, die ihr Business professionalisieren.",
    price: "€19,-",
    priceIntervalName: " pro Monat",
    features: [
      "Alles aus dem Free-Plan",
      "2 TB Cloud-Speicher",
      "Eigenes Branding (Kein Wasserzeichen)",
      "Reduzierte Verkaufsprovision",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    description:
      "Die Komplettlösung für etablierte Fotostudios mit hohem Auftragsvolumen.",
    price: "€49,-",
    priceIntervalName: " pro Monat",
    features: [
      "Alles aus dem Pro-Plan",
      "Unlimitierter Performance Speicher",
      "Unlimitierte Galerien",
      "0% Verkaufsprovision im Shop",
    ],
  },
]
