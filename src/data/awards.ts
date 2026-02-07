export interface Award {
  project: string;
  organisation: string;
  category?: string;
  result: string;
  slug?: string;
  image?: string;
}

export const awards: Award[] = [
  {
    project: "The Earthen House",
    organisation: "Master Builders Association",
    result: "Winner",
    slug: "earthen-retreat",
    image: "/images/projects/earthen-retreat/exterior-front.jpg",
  },
  {
    project: "The Earthen House",
    organisation: "Housing Industry Australia",
    result: "Winner",
    slug: "earthen-retreat",
    image: "/images/projects/earthen-retreat/living-room.jpg",
  },
  {
    project: "Renovations & Additions Project of the Year",
    organisation: "Housing Industry Australia",
    result: "Winner",
    slug: "byron-bay-renovation",
    image: "/images/projects/byron-bay-renovation/living-room.jpg",
  },
  {
    project: "Erva Nail Spa",
    organisation: "Inside Gold Coast",
    category: "Best Commercial Interior",
    result: "Featured",
    slug: "erva-nail-spa",
  },
];
