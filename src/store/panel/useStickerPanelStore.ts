import { create } from 'zustand';

type StickerObject = {
  id: string;
  imageUrl: string;
  x: number;
  y: number;
  dragging: boolean;
  offsetX: number;
  offsetY: number;
};

type StickerPanel = {
  stickerObjects: StickerObject[];
  setStickerObjects: (objects: StickerObject[]) => void;
  selectedStickerId: string;
  setSelectedStickerId: (id: string) => void;
  activeSticker: string;
  setActiveSticker: (activeSticker: string) => void;
};

export const useStickerPanelStore = create<StickerPanel>((set) => ({
  stickerObjects: [],
  setStickerObjects: (objects) => set({ stickerObjects: objects }),
  selectedStickerId: '',
  setSelectedStickerId: (id) => set({ selectedStickerId: id }),
  activeSticker: '',
  setActiveSticker: (activeSticker) => set({ activeSticker }),
}));
