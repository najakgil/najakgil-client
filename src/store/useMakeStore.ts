import { create } from 'zustand';
import { CharacterTagList } from '../pages/MakePage/components/Panel/type';

// 패널 상태 관리
type Panel = {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
};

export const usePanelStore = create<Panel>((set) => ({
  activeTab: 1,
  setActiveTab: (activeTab) => set({ activeTab }),
}));

// 캐릭터 패널 상태 관리
type CharacterPanel = {
  activeCharacterTag: CharacterTagList;
  setActiveCharacterTag: (activeTag: CharacterTagList) => void;
  activeCharacter: string;
  setActiveCharacter: (activeCharacter: string) => void;
};

export const useCharacterPanelStore = create<CharacterPanel>((set) => ({
  // 캐릭터 태그
  activeCharacterTag: 'winter',
  setActiveCharacterTag: (activeTag) => set({ activeCharacterTag: activeTag }),
  // 캐릭터 선택
  activeCharacter: '/assets/image/character/default.png',
  setActiveCharacter: (activeCharacter) => set({ activeCharacter }),
}));

// 꾸미기 패널 상태 관리
type DecorationPanel = {
  activeDecorationTag: string;
  setActiveDecorationTag: (activeDecoration: string) => void;
  activeSticker: string;
  setActiveSticker: (activeSticker: string) => void;
};

export const useDecorationPanelStore = create<DecorationPanel>((set) => ({
  // 꾸미기 태그
  activeDecorationTag: 'sticker',
  setActiveDecorationTag: (activeDecorationTag) =>
    set({ activeDecorationTag: activeDecorationTag }),
  // 스티커
  activeSticker: '/assets/image/sticker/sticker_1.png',
  setActiveSticker: (activeSticker) => set({ activeSticker }),
}));

// 배경화면 패널 상태 관리
type BackgroundPanel = {
  activeBackgroundTag: 'color' | 'image';
  setActiveBackgroundTag: (activeBackground: 'color' | 'image') => void;
  activeBackgroundColor: string;
  setActiveBackgroundColor: (activeBackground: string) => void;
  activeBackgroundImage: string;
  setActiveBackgroundImage: (activeBackground: string) => void;
};

export const useBackgroundPanelStore = create<BackgroundPanel>((set) => ({
  // 배경화면 태그
  activeBackgroundTag: 'color',
  setActiveBackgroundTag: (activeBackgroundTag) => set({ activeBackgroundTag }),
  // 배경화면 색상
  activeBackgroundColor: 'pink',
  setActiveBackgroundColor: (activeBackgroundColor) => set({ activeBackgroundColor }),
  // 배경화면 이미지
  activeBackgroundImage: '/assets/image/background/default.png',
  setActiveBackgroundImage: (activeBackgroundImage) => set({ activeBackgroundImage }),
}));

type Canvas = {
  canvas: fabric.Canvas | null;
  setCanvas: (canvas: fabric.Canvas) => void;
};

export const useCanvasStore = create<Canvas>((set) => ({
  canvas: null,
  setCanvas: (canvas) => set({ canvas }),
}));
