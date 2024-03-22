import { create } from 'zustand';

type TextPanel = {
  isTexting: boolean;
  setIsTexting: (isTexting: boolean) => void;
  textPosition: { x: number; y: number };
  setTextPosition: (textPosition: { x: number; y: number }) => void;
  textContent: string;
  setTextContent: (textContent: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  textSize: number;
  setTextSize: (textSize: number) => void;
  textWeight: number;
  setTextWeight: (textWeight: number) => void;
};

export const useTextPanelStore = create<TextPanel>((set) => ({
  // 텍스트 입력
  isTexting: false,
  setIsTexting: (isTexting: boolean) => set({ isTexting }),
  // 텍스트 위치
  textPosition: { x: 100, y: 100 },
  setTextPosition: (textPosition: { x: number; y: number }) => set({ textPosition }),
  // 텍스트 내용
  textContent: '총장님 사랑해요',
  setTextContent: (textContent: string) => set({ textContent }),
  // 텍스트 색상
  textColor: 'black',
  setTextColor: (textColor: string) => set({ textColor }),
  // 텍스트 크기
  textSize: 16,
  setTextSize: (textSize: number) => set({ textSize }),
  // 텍스트 굵기
  textWeight: 400,
  setTextWeight: (textWeight: number) => set({ textWeight }),
}));
