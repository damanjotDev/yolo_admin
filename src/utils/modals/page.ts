export interface PageModal {
    id: number;
    title: string;
    description: string;
    images: ImageModal[];
    createdAt: Date;
    updatedAt: Date;
  }

interface ImageModal {
  isCover: boolean;
  name: string,
  imageUrl: string,
  type: string,
  size: number
}