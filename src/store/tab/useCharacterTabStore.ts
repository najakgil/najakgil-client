import { CharacterTagList } from 'pages/make/_components/type';
import { create } from 'zustand';


// 캐릭터 탭 상태 관리
type CharacterTab = {
  activeCharacterTag: CharacterTagList;
  setActiveCharacterTag: (activeTag: CharacterTagList) => void;
  activeCharacter: string;
  setActiveCharacter: (activeCharacter: string) => void;
};

export const useCharacterTabStore = create<CharacterTab>((set) => ({
  // 캐릭터 태그
  activeCharacterTag: 'winter',
  setActiveCharacterTag: (activeTag) => set({ activeCharacterTag: activeTag }),
  // 캐릭터 선택
  activeCharacter: '/image/character/default.png',
  setActiveCharacter: (activeCharacter) => set({ activeCharacter }),
}));
