import { create } from 'zustand';

// 배경화면 탭 상태 관리
type BackgroundTab = {
  activeBackgroundTag: 'color' | 'image';
  setActiveBackgroundTag: (activeBackground: 'color' | 'image') => void;
  activeBackgroundColor: string;
  setActiveBackgroundColor: (activeBackground: string) => void;
  activeBackgroundImage: string;
  setActiveBackgroundImage: (activeBackground: string) => void;
};

export const useBackgroundTabStore = create<BackgroundTab>((set) => ({
  // 배경화면 태그
  activeBackgroundTag: 'color',
  setActiveBackgroundTag: (activeBackgroundTag) => set({ activeBackgroundTag }),
  // 배경화면 색상
  activeBackgroundColor: 'pink',
  setActiveBackgroundColor: (activeBackgroundColor) => set({ activeBackgroundColor }),
  // 배경화면 이미지
  activeBackgroundImage: '/image/background/default.png',
  setActiveBackgroundImage: (activeBackgroundImage) => set({ activeBackgroundImage }),
}));
