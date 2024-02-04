import * as S from './palette.style';
import { useState } from 'react';
import { tabList, tagList, characterImageSrc } from './constants';
import { useSetRecoilState } from 'recoil';
import { characterChoiceAtom } from '../../../recoil/character-choice-atom';

interface TabType {
  id: number;
  title: string;
}

interface ChoiceType {
  id: number;
  src: string;
}

export default function Palette() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTag, setActiveTag] = useState<keyof typeof characterImageSrc>('winter');
  const [activeChoiceSrc, setActiveChoiceSrc] = useState<string | null>(null);
  const setCanvasImageSrc = useSetRecoilState(characterChoiceAtom);

  return (
    <S.Wrapper>
      {/* tab */}
      <S.TabContainer>
        {tabList.map((tab: TabType) => (
          <S.Tab isActive={tab.id === activeTab} key={tab.id} onClick={() => setActiveTab(tab.id)}>
            {tab.title}
          </S.Tab>
        ))}
      </S.TabContainer>
      {/* tag */}
      <S.TagContainer>
        {tagList.character.map((tag) => (
          <S.Tag
            isActive={tag.tag === activeTag}
            key={tag.id}
            onClick={() => setActiveTag(tag.tag)}
          >
            {tag.title}
          </S.Tag>
        ))}
      </S.TagContainer>
      {/* choice */}
      <S.ChoiceContainer>
        {characterImageSrc[activeTag].map((charater: ChoiceType) => (
          <S.Choice
            isActive={charater.src === activeChoiceSrc}
            key={charater.id}
            src={charater.src}
            onClick={() => {
              setActiveChoiceSrc(charater.src);
              setCanvasImageSrc(charater.src);
            }}
          />
        ))}
      </S.ChoiceContainer>
    </S.Wrapper>
  );
}
