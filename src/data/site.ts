import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "thais pupio",
  title: "Thais Pupio — Architect of Living",
  description:
    "Architecture that bridges science and sensation. Thais Pupio designs spaces that promote meaningful experiences — grounded in neuroscience, sustainability, and an intuitive feel for how we inhabit the places we love.",
  url: "https://thaispupio.com",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Press", href: "/press" },
    { label: "Awards", href: "/awards" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@thaispupio.com",
    phone: "+61 2 6685 0000",
    location: "Byron Bay, NSW, Australia",
    formspreeId: "xpwzgkby",
  },
  social: [
    { platform: "Instagram", url: "https://instagram.com/thaispupiodesign" },
  ],
};

export const philosophy = {
  headline: "Spaces that promote meaningful experiences",
  body: "Building is creating scenarios for experiences that give meaning to life. Every project begins with understanding how people move, breathe, and feel within a space — then shaping architecture around those rhythms. Drawing on neuroscience, bioconstruction, and a deep sensitivity to place, each design bridges knowing and feeling, science and soul.",
};

export const bio = {
  name: "Thais Pupio",
  headline: "Architect of Living",
  intro:
    "Thais Pupio is a Brazilian-born architect and designer based in Byron Bay, Australia, with over 20 years of experience creating spaces that welcome the soul and promote health, clarity, and beauty.",
  body: [
    "Her work is guided by a singular belief: that a space can transform how we feel, think, and live. As an Architect of Living, Thais doesn\u2019t simply design buildings \u2014 she creates environments that hold and inspire the people within them, shaping daily life through light, material, and spatial intuition.",
    "At the heart of her practice is a sensory methodology built on four pillars: Behaviour \u2014 informed by neuroscience and environmental psychology; Sustainability \u2014 rooted in ecology and bioconstruction; Sensitivity \u2014 guided by intuition and deep listening; and Beauty \u2014 drawn from a rich cultural and aesthetic repertoire.",
    "Thais transforms deep knowledge into practical, liveable solutions. Her Brazilian heritage brings warmth, colour sensitivity, and a natural fluency in indoor-outdoor living, while her rigorous research into neuroscience and sustainable building ensures every design decision is grounded in both science and experience.",
    "Based in the Byron Bay hinterland, she works with homeowners who dream of spaces that reflect their identity \u2014 people seeking not just a house, but a home that promotes wellbeing, connection, and meaning.",
  ],
  methodology: [
    {
      pillar: "Behaviour",
      description:
        "Neuroscience and environmental psychology inform how spaces shape mood, focus, and connection.",
    },
    {
      pillar: "Sustainability",
      description:
        "Ecology and bioconstruction guide material choices that honour the land and endure with it.",
    },
    {
      pillar: "Sensitivity",
      description:
        "Intuition and deep listening reveal what a space truly needs to feel like home.",
    },
    {
      pillar: "Beauty",
      description:
        "A rich cultural and aesthetic repertoire ensures every space carries an intrinsic, quiet beauty.",
    },
  ],
  practiceDetails: [
    { label: "Founded", value: "2004" },
    { label: "Location", value: "Byron Bay, NSW" },
    { label: "Focus", value: "Residential & Boutique Commercial" },
    {
      label: "Approach",
      value: "Sensory Methodology — Behaviour, Sustainability, Sensitivity, Beauty",
    },
  ],
};
