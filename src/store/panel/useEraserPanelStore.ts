import { create } from "zustand";

type EraserPanel = {
  eraserSize: number;
  setEraserSize: (size: number) => void;
};

export const useEraserPanelStore = create<EraserPanel>((set) => ({
  eraserSize: 5,
  setEraserSize: (size) => set({ eraserSize: size }),
}));
