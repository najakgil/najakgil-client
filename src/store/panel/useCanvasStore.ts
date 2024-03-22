import { create } from 'zustand';

interface TextObject {
  id: string;
  text: string;
  x: number;
  y: number;
  color: string;
  font: string;
  dragging: boolean;
  offsetX: number;
  offsetY: number;
}

interface CanvasState {
  textObjects: TextObject[];
  setTextObjects: (textObjects: TextObject[]) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  textObjects: [],
  setTextObjects: (textObjects) => set({ textObjects }),
}));
