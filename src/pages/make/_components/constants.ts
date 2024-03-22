import { BackgroundTagList, CharacterTagList, DecorationTagList } from './type';

export const tabList = [
  {
    id: 1,
    title: '캐릭터',
  },
  {
    id: 2,
    title: '꾸미기',
  },
  {
    id: 3,
    title: '배경',
  },
];

export const characterTagList = [
  'winter',
  'summer',
  'scrub',
  'suit',
  'graduationsuit',
  'fhanbok',
  'mhanbok',
] as const;

export const decorationTagList = ['text', 'sticker', 'photo', 'brush', 'eraser'] as const;

export const backgroundTagList = ['color', 'image'] as const;

export const tagList: {
  character: { id: number; tag: CharacterTagList; title: string }[];
  decoration: { id: number; tag: DecorationTagList; title: string }[];
  background: { id: number; tag: BackgroundTagList; title: string }[];
} = {
  character: [
    {
      id: 1,
      tag: 'winter',
      title: '겨울 외투',
    },
    {
      id: 2,
      tag: 'summer',
      title: '바캉스룩',
    },
    {
      id: 3,
      tag: 'scrub',
      title: '의사가운',
    },
    {
      id: 4,
      tag: 'suit',
      title: '정장',
    },
    {
      id: 5,
      tag: 'graduationsuit',
      title: '학위복',
    },
    {
      id: 6,
      tag: 'fhanbok',
      title: '여자 한복',
    },
    {
      id: 7,
      tag: 'mhanbok',
      title: '남자 한복',
    },
  ],
  decoration: [
    {
      id: 1,
      tag: 'text',
      title: '텍스트',
    },
    {
      id: 2,
      tag: 'sticker',
      title: '스티커',
    },
    {
      id: 3,
      tag: 'photo',
      title: '사진',
    },
    {
      id: 4,
      tag: 'brush',
      title: '펜',
    },
    {
      id: 5,
      tag: 'eraser',
      title: '지우개',
    },
  ],
  background: [
    {
      id: 1,
      tag: 'color',
      title: '색상',
    },
    {
      id: 2,
      tag: 'image',
      title: '이미지',
    },
  ],
} as const;

export const characterImageSrc = {
  winter: [
    {
      id: 1,
      src: '/image/character/winter-1.png',
    },
    {
      id: 2,
      src: '/image/character/winter-2.png',
    },
    {
      id: 3,
      src: '/image/character/winter-3.png',
    },
    {
      id: 4,
      src: '/image/character/winter-4.png',
    },
  ],
  summer: [
    {
      id: 1,
      src: '/image/character/summer-1.png',
    },
    {
      id: 2,
      src: '/image/character/summer-2.png',
    },
    {
      id: 3,
      src: '/image/character/summer-3.png',
    },
    {
      id: 4,
      src: '/image/character/summer-4.png',
    },
  ],
  scrub: [
    {
      id: 1,
      src: '/image/character/scrub-1.png',
    },
    {
      id: 2,
      src: '/image/character/scrub-2.png',
    },
    {
      id: 3,
      src: '/image/character/scrub-3.png',
    },
    {
      id: 4,
      src: '/image/character/scrub-4.png',
    },
  ],
  suit: [
    {
      id: 1,
      src: '/image/character/suit-1.png',
    },
    {
      id: 2,
      src: '/image/character/suit-2.png',
    },
    {
      id: 3,
      src: '/image/character/suit-3.png',
    },
    {
      id: 4,
      src: '/image/character/suit-4.png',
    },
  ],
  graduationsuit: [
    {
      id: 1,
      src: '/image/character/graduationsuit-1.png',
    },
    {
      id: 2,
      src: '/image/character/graduationsuit-2.png',
    },
    {
      id: 3,
      src: '/image/character/graduationsuit-3.png',
    },
    {
      id: 4,
      src: '/image/character/graduationsuit-4.png',
    },
  ],
  fhanbok: [
    {
      id: 1,
      src: '/image/character/fhanbok-1.png',
    },
    {
      id: 2,
      src: '/image/character/fhanbok-2.png',
    },
    {
      id: 3,
      src: '/image/character/fhanbok-3.png',
    },
    {
      id: 4,
      src: '/image/character/fhanbok-4.png',
    },
  ],
  mhanbok: [
    {
      id: 1,
      src: '/image/character/mhanbok-1.png',
    },
    {
      id: 2,
      src: '/image/character/mhanbok-2.png',
    },
    {
      id: 3,
      src: '/image/character/mhanbok-3.png',
    },
    {
      id: 4,
      src: '/image/character/mhanbok-4.png',
    },
  ],
};

export const stickerImageSrc = [
  { id: 1, src: '/image/sticker/sticker-1.png' },
  { id: 2, src: '/image/sticker/sticker-2.png' },
  { id: 3, src: '/image/sticker/sticker-3.png' },
  { id: 4, src: '/image/sticker/sticker-4.png' },
  { id: 5, src: '/image/sticker/sticker-5.png' },
  { id: 6, src: '/image/sticker/sticker-6.png' },
];
