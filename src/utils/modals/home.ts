
export interface HomeModal {
    id: number;
    title: string;
    description: string;
    image: ImageModal;
    createdAt: Date;
    updatedAt: Date;
  }

interface ImageModal {
  name: string,
  imageUrl: string,
  type: string,
  size: number
}