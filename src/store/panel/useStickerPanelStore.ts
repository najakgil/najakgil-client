import { create } from "zustand";

type StickerPanel = {
  activeSticker: string;
  setActiveSticker: (activeSticker: string) => void;
};

export const useStickerPanelStore = create<StickerPanel>((set) => ({
  activeSticker: '/image/sticker/sticker-1.png',
  setActiveSticker: (activeSticker) => set({ activeSticker }),
}));
