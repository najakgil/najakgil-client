import { atom } from 'recoil';

export const characterChoiceAtom = atom({
  key: 'character-state',
  default: '/assets/image/character/default.png',
});
