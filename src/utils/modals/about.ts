export interface AboutModal {
    id: string;
    email: string;
    title: string;
    images: ImageModal[];
    awards: ImageModal[];
    description: string;
    coordinates : CoordinateModal;
    contactNo: number;
    socialLinks: SocialLinkModal[];
    isCover: boolean;
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

interface SocialLinkModal {
    type: 'twitter' | 'facebook' | 'linkedin' | 'instagram';
    link : string;
}

interface CoordinateModal {
  lat: number;
  lng: number;
  address: string;
}

export const SocialTypes = {
  Twitter: 'twitter',
  Facebook: 'facebook',
  Linkedin: 'linkedin',
  Instagram: 'instagram'
}

export const AvailableSocialTypes = [
  { title: 'Twitter', value: 'twitter' },
  { title: 'Facebook', value: 'facebook' },
  { title: 'Linkedin', value: 'linkedin' },
  { title: 'Instagram', value: 'instagram' },
]