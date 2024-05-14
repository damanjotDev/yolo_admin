export interface ServiceModal {
    id: string;
    title: string;
    images: ImageModal[];
    icons: ImageModal[];
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }

interface ImageModal {
  name: string,
  imageUrl: string,
  type: string,
  size: number
}