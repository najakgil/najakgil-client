import { tagList, characterImageSrc } from '../constants';
import * as S from './CharacterPanel.css';
import Tag from '../../../../../common/Tag/Tag';
import DecorationItem from '../../../../../common/DecorationItem/DecorationItem';
import { useCharacterPanelStore } from '../../../../../store/useMakeStore';

export default function CharacterPanel() {
  const { activeCharacterTag, setActiveCharacterTag, activeCharacter, setActiveCharacter } =
    useCharacterPanelStore();

  return (
    <div>
      {/* 캐릭터 태그 */}
      <div className={S.tagContainer}>
        {tagList.character.map((tag) => (
          <Tag
            key={tag.id}
            isActive={tag.tag === activeCharacterTag}
            onClick={() => setActiveCharacterTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
      {/* 캐릭터 선택 화면 */}
      <div className={S.choiceContainer}>
        {characterImageSrc[activeCharacterTag].map((charater) => (
          <DecorationItem
            key={charater.id}
            imgSrc={charater.src}
            isActive={charater.src === activeCharacter}
            onClick={() => setActiveCharacter(charater.src)}
          />
        ))}
      </div>
    </div>
  );
}
