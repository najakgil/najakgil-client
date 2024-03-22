import { characterTagList, decorationTagList, backgroundTagList } from './constants';

export type CharacterTagList = (typeof characterTagList)[number];

export type DecorationTagList = (typeof decorationTagList)[number];

export type BackgroundTagList = (typeof backgroundTagList)[number];
