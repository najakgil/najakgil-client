import Tag from '../../../../../common/Tag/Tag';
import { useDecorationPanelStore } from '../../../../../store/useMakeStore';
import { tagList } from '../constants';
import * as S from './DecorationPanel.css';
import StickerPanel from './components/StickerPanel/StickerPanel';

export default function DecorationPanel() {
  const { activeDecorationTag, setActiveDecorationTag } = useDecorationPanelStore();
  return (
    <>
      {/* 꾸미기 태그 */}
      <div className={S.tagContainer}>
        {tagList.decoration.map((tag) => (
          <Tag
            key={tag.id}
            isActive={tag.tag === activeDecorationTag}
            onClick={() => setActiveDecorationTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
      {activeDecorationTag === 'sticker' && <StickerPanel />}
    </>
  );
}
