import { create } from "zustand";

type BrushPanel = {
  brushColor: string;
  setBrushColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
};

export const useBrushPanelStore = create<BrushPanel>((set) => ({
  brushColor: "pink",
  setBrushColor: (color) => set({ brushColor: color }),
  brushSize: 5,
  setBrushSize: (size) => set({ brushSize: size }),
}));
