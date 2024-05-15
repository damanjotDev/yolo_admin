export interface PropertyModal {
    id: string;
    email: string;
    title: string;
    images: ImageModal[];
    description: string;
    coordinates : CoordinateModal;
    contactNo: number;
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

interface CoordinateModal {
  lat: number;
  lng: number;
  address: string;
}