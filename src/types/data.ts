// Global site data shared across multiple components
export interface GlobalData {
  name: string;
  logo: string;
  url: string;
}

// Header component data
export interface HeaderData {
  button: {
    text: string;
    link: string;
  };
}

// Hero component data
export interface HeroData {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  buttons: Array<{
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
  }>;
}

// Gallery component data
export interface GalleryData {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    size: 'small' | 'large';
  }>;
}

// Footer component data
export interface FooterData {
  social: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}
