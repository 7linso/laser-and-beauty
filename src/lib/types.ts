export type VideoPlayerProps = {
  link: string;
  className?: string;
};

export type GalleryProps = {
  images: { src: string; alt?: string }[];
  intervalMs?: number;
  pauseOnHover?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  aspectRatio?: string;
};

export type HeroProps = {
  backgroundImage: string;
  title: string;
  subtitle: string[];
  showBook?: boolean;
};

export type ServicesPageTemplateProps = {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  benefits: string[];
  steps: string[];
  reasons: string[];
};

export type ServicesPageTemplateSmallProps = {
  title: string;
  desc1: string;
  desc2: string;
  benefits: string[];
};
