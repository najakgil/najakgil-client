import { css } from '@emotion/react';
import { ItemBox } from 'components/item-box';
import { useCharacterTabStore } from 'store/tab/useCharacterTabStore';
import { characterImageSrc, tagList } from '../constants';
import { Tag } from '../tag';

const tagContainerStyle = css({
  width: '100%',
  height: '40px',
  padding: '20px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderBottom: '5px solid #e0e0e0',
});

const characterContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '9px 10px',
  gridGap: '10px',
  backgroundColor: 'white',
});

export default function CharacterTab() {
  const { activeCharacterTag, setActiveCharacterTag, setActiveCharacter } = useCharacterTabStore();
  const handleCharacterClick = (src: string) => {
    setActiveCharacter(src);
  };
  return (
    <>
      {/* 태그 */}
      <div css={tagContainerStyle}>
        {tagList.character.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.title}
            isActiveTag={activeCharacterTag === tag.tag}
            onClick={() => setActiveCharacterTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
      <div css={characterContainerStyle}>
        {/* 캐릭터 */}
        {characterImageSrc[activeCharacterTag].map((character) => (
          <ItemBox
            key={character.id}
            imgSrc={character.src}
            onClick={() => handleCharacterClick(character.src)}
          />
        ))}
      </div>
    </>
  );
}
