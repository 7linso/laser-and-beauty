export type VideoPlayerProps = {
  link: string;
  className?: string;
};

export type GalleryProps = {
    images: { src: string; alt?: string; }[];
    intervalMs?: number;          
    pauseOnHover?: boolean;       
    showArrows?: boolean;        
    showDots?: boolean;           
    className?: string;
    aspectRatio?: string;         
};