export const EventType = {
    EVENT: 'EVENT',
    FOOD: 'FOOD',
    ROOM: 'ROOM'
}

export const AvailableEventTypes = [
    {title: 'EVENT', value: 'EVENT'},
    {title: 'FOOD', value: 'FOOD'},
    {title: 'ROOM', value: 'ROOM'}
]

export interface EventModal {
    id: string;
    title: string;
    images: ImageModal[];
    eventType: 'EVENT' | 'FOOD' | 'ROOM';
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