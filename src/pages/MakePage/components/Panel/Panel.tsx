import * as S from './Panel.css';
import { useState } from 'react';
import { tabList } from './constants';
import { usePanelStore } from '../../../../store/useMakeStore';
import CharacterPanel from './CharacterPanel/CharacterPanel';
import DecorationPanel from './DecorationPanel/DecorationPanel';
import BackgroundPanel from './BackgroundPanel/BackgroundPanel';

interface TabType {
  id: number;
  title: string;
}

export default function Panel() {
  const [activeTab, setActiveTab] = useState(1);
  const setPanel = usePanelStore((state) => state.setActiveTab);

  return (
    <S.Wrapper>
      {/* 탭 */}
      <S.TabContainer>
        {tabList.map((tab: TabType) => (
          <S.Tab
            isActive={tab.id === activeTab}
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setPanel(tab.id);
            }}
          >
            {tab.title}
          </S.Tab>
        ))}
      </S.TabContainer>
      {activeTab === 1 && <CharacterPanel />}
      {activeTab === 2 && <DecorationPanel />}
      {activeTab === 3 && <BackgroundPanel />}
    </S.Wrapper>
  );
}
