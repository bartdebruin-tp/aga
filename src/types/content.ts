export interface SiteContent {
  global: {
    site: {
      name: string;
      logo: string;
      url: string;
    };
  };
  components: {
    HeaderComponent: {
      button: {
        text: string;
        link: string;
      };
    };
    HeroComponent: {
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
    };
    GalleryComponent: {
      title: string;
      description: string;
      images: Array<{
        src: string;
        alt: string;
        size: 'small' | 'large';
      }>;
    };
    FooterComponent: {
      social: Array<{
        name: string;
        url: string;
        icon: string;
      }>;
    };
  };
}
