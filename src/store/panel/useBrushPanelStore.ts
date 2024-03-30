import { create } from "zustand";

type BrushObject = {
  id: string;
  x: number;
  y: number;
  dragging: boolean;
  offsetX: number;
  offsetY: number;
  path: Array<{ x: number; y: number }>;
}

type BrushPanel = {
  brushObjects: BrushObject[];
  setBrushObjects: (objects: BrushObject[]) => void;
  brushColor: string;
  setBrushColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
};

export const useBrushPanelStore = create<BrushPanel>((set) => ({
  brushObjects: [],
  setBrushObjects: (objects) => set({ brushObjects: objects }),
  brushColor: "#FFFFFF",
  setBrushColor: (color) => set({ brushColor: color }),
  brushSize: 10,
  setBrushSize: (size) => set({ brushSize: size }),
}));
