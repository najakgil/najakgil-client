import {create} from 'zustand';

// 브러쉬 패널 상태 관리
type BrushPanel = {
    isDrawing: boolean;
    setIsDrawing: (isDrawing: boolean) => void;
    brushPosition: {x: number, y: number};
    setBrushPosition: (brushPosition: {x: number, y: number}) => void;
    brushColor: string;
    setBrushColor: (brushColor: string) => void;
    brushSize: number;
    setBrushSize: (brushSize: number) => void;
}

export const useBrushPanelStore = create<BrushPanel>((set) => ({
    // 브러쉬 그리기
    isDrawing: true,
    setIsDrawing: (isDrawing: boolean) => set({isDrawing}),
    // 브러쉬 위치
    brushPosition: {x: 0, y: 0},
    setBrushPosition: (brushPosition: {x: number, y: number}) => set({brushPosition}),
    // 브러쉬 색상
    brushColor: '#ff0000',
    setBrushColor: (brushColor: string) => set({brushColor}),
    // 브러쉬 굵기
    brushSize: 2,
    setBrushSize: (brushSize: number) => set({brushSize}),
}))