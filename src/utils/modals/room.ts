import { ServiceModal, PropertyModal } from "./index";
export interface RoomModal {
    id: string;
    title: string;
    images: ImageModal[];
    price: number;
    adult: AdultModal;
    children: ChildrenModal;
    bookingNight: BookingNightModal;
    bedType : typeof RoomBedType[keyof typeof RoomBedType];
    roomArea: number;
    description: string;
    coordinates : CoordinateModal;
    services: ServiceModal[];
    property: PropertyModal;
    service_ids: number[];
    property_id: number;
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

interface AdultModal {
    min: number;
    max: number;
}

interface ChildrenModal {
    min: number;
    max: number;
}

interface BookingNightModal {
    min: number;
    max: number;
}

interface CoordinateModal {
  lat: number;
  lng: number;
  address: string;
}


export const RoomBedType = {
    SINGLE_BED:"Single Bed",
    TWINS_BED:"Twins Bed",
    KING_BED:"King Bed",
    Double:"Double"
}

export const AvailableRoomBedTypes = [
    { title:"Single Bed", value: 'Single Bed'},
    { title:"Twins Bed", value: 'Twins Bed'},
    { title:"King Bed", value: 'King Bed'},
    { title:"Double", value: 'Double'},
]