import { create } from 'zustand';

// 꾸미기 탭 상태 관리
type DecorationTab = {
  activeDecorationTag: string;
  setActiveDecorationTag: (activeDecoration: string) => void;
};

export const useDecorationTabStore = create<DecorationTab>((set) => ({
  // 꾸미기 태그
  activeDecorationTag: 'text',
  setActiveDecorationTag: (activeDecorationTag) =>
    set({ activeDecorationTag: activeDecorationTag }),
}));
