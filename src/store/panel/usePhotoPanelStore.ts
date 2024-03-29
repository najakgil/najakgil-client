import { create } from 'zustand';

type PhotoPanel = {
  photoUrl: string;
  setPhotoUrl: (photoUrl: string) => void;
};

export const usePhotoPanelStore = create<PhotoPanel>((set) => ({
  photoUrl: '',
  setPhotoUrl: (photoUrl) => set({ photoUrl }),
}));
