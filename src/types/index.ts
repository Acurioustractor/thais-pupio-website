export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectSection {
  type: "hero" | "text" | "image" | "image-pair" | "credits";
  heading?: string;
  body?: string;
  image?: ProjectImage;
  images?: ProjectImage[];
  credits?: { role: string; name: string }[];
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  thumbnail: ProjectImage;
  sections: ProjectSection[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  nav: { label: string; href: string }[];
  contact: {
    email: string;
    phone: string;
    location: string;
    formspreeId: string;
  };
  social: { platform: string; url: string }[];
}
