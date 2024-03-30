import { characterTagList, decorationTagList, backgroundTagList } from './constants';

export type CharacterTag = (typeof characterTagList)[number];

export type DecorationTag = (typeof decorationTagList)[number];

export type BackgroundTag = (typeof backgroundTagList)[number];

export type Tag<T extends CharacterTag | DecorationTag | BackgroundTag> = {
  id: number;
  tag: T;
  title: string;
};
