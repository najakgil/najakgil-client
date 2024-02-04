import * as S from './style';

interface TabType {
  id: string;
  icon: string;
  title: string;
}

export type PageType = 'home' | 'make' | 'mypage';

const navigationList = [
  {
    id: '1',
    icon: 'home',
    title: '홈',
  },
  {
    id: '2',
    icon: 'make',
    title: '만들기',
  },
  {
    id: '3',
    icon: 'mypage',
    title: '마이페이지',
  },
];

interface NavigationBarProps {
  page: PageType;
}

export default function Navigation({ page }: NavigationBarProps) {
  return (
    <S.Wrapper>
      {navigationList.map((item: TabType) => (
        <a href={`/${item.icon}`} key={item.id}>
          <S.Tab isActive={item.icon === page}>
            <img
              src={`assets/svg/navigation/${item.icon}${item.icon === page ? '-fill' : ''}.svg`}
              alt={item.title}
            />
            {item.title}
          </S.Tab>
        </a>
      ))}
    </S.Wrapper>
  );
}
