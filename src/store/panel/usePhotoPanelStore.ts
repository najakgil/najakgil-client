import { create } from 'zustand';

type PhotoObjcet = {
  id: string;
  imageUrl: string;
  x: number;
  y: number;
  dragging: boolean;
  offsetX: number;
  offsetY: number;
};

type PhotoPanel = {
  photoObjects: PhotoObjcet[];
  setPhotoObjects: (objects: PhotoObjcet[]) => void;
  selectedPhotoId: string;
  setSelectedPhotoId: (id: string) => void;
  photoUrl: string;
  setPhotoUrl: (photoUrl: string) => void;
};

export const usePhotoPanelStore = create<PhotoPanel>((set) => ({
  photoObjects: [],
  setPhotoObjects: (objects) => set({ photoObjects: objects }),
  selectedPhotoId: '',
  setSelectedPhotoId: (id) => set({ selectedPhotoId: id }),
  photoUrl: '',
  setPhotoUrl: (photoUrl) => set({ photoUrl }),
}));
