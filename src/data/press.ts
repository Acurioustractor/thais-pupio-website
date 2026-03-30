export interface PressItem {
  publication: string;
  title: string;
  project: string;
  description?: string;
  image: string;
  logo?: string;
  url?: string;
}

export const pressItems: PressItem[] = [
  {
    publication: "Habitus Living",
    title: "The Earthen House — Byron Bay",
    project: "The Earthen House",
    description: "Magazine Issue 46",
    image: "/images/press/habitus-living.png",
    logo: "/images/press/logos/habitus-living.png",
    url: "https://www.habitusliving.com",
  },
  {
    publication: "The Local Project",
    title: "The Earthen House",
    project: "The Earthen House",
    image: "/images/press/local-project.png",
    logo: "/images/press/logos/the-local-project.png",
    url: "https://thelocalproject.com.au",
  },
  {
    publication: "Inside Gold Coast",
    title: "Erva Nail Spa",
    project: "Erva Nail Spa",
    image: "/images/press/inside-gold-coast.jpg",
    logo: "/images/press/logos/inside-gold-coast.png",
  },
  {
    publication: "Stir World",
    title: "The Earthen House",
    project: "The Earthen House",
    image: "/images/press/stir-world.jpg",
    logo: "/images/press/logos/stir-world.png",
    url: "https://www.stirworld.com",
  },
];
