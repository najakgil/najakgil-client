import { Link } from "react-router-dom";
import styled from "styled-components";

type TabType = {
  id: string;
  name: PageType;
  title: string;
};

const navigationList: TabType[] = [
  {
    id: "1",
    name: "home",
    title: "홈",
  },
  {
    id: "2",
    name: "make",
    title: "만들기",
  },
  {
    id: "3",
    name: "mypage",
    title: "마이페이지",
  },
];

export type PageType = "home" | "make" | "mypage";

interface NavigationBarProps {
  page: PageType;
}

export default function NavigationBar({ page }: NavigationBarProps) {
  return (
    <StyledNavigationBar>
      {navigationList.map((tab: TabType) => (
        <Link to={tab.name} key={tab.id}>
          <NavigationTab>
            <img
              src={`/assets/icon/navigation/${tab.name}${
                tab.name === page ? "-f" : ""
              }.svg`}
              alt={tab.title}
              width={24}
              height={24}
            />
            <div style={{ color: tab.name === page ? "#2294FF" : "#AEAEAE" }}>
              {tab.title}
            </div>
          </NavigationTab>
        </Link>
      ))}
    </StyledNavigationBar>
  );
}

const StyledNavigationBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 360px;
  max-width: 450px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 12px;
`;

const NavigationTab = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #AEAEAE;
`;
