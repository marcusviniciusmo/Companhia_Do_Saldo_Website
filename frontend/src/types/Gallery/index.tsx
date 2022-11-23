export interface GalleryItemProps {
  id: string;
};

export interface GalleryProps {
  text: string;
  images: {
    id: string;
    span: string;
  }[];
};