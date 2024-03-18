import Tag from '../../../../../common/Tag/Tag';
import { useBackgroundPanelStore } from '../../../../../store/useMakeStore';
import { tagList } from '../constants';
import * as S from './BackgroundPanel.css';

export default function BackgroundPanel() {
  const { activeBackgroundTag, setActiveBackgroundTag } = useBackgroundPanelStore();
  return (
    <>
      {/* 배경 태그 */}
      <div className={S.backgroundContainer}>
        {tagList.background.map((tag) => (
          <Tag
            key={tag.id}
            isActive={tag.tag === activeBackgroundTag}
            onClick={() => setActiveBackgroundTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
    </>
  );
}
