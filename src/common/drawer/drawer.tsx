import { AnimatePresence, motion } from 'framer-motion';
import * as S from './Drawer.css';
import { getCookie } from '../../util/cookie';
import { useNavigate } from 'react-router-dom';
import { BottomSheet } from '../BottomSheet/BotttomSheet';
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = {
  id: string;
  name: string;
  title: string;
};

const navigationList: TabType[] = [
  {
    id: '1',
    name: 'make',
    title: '나작길 만들기',
  },
  {
    id: '2',
    name: 'goods',
    title: '나작길 굿즈함',
  },
  {
    id: '3',
    name: 'storage',
    title: '나작길 수납함',
  },
  {
    id: '4',
    name: 'contact',
    title: '문의하기',
  },
];

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const jwtToken = getCookie('jwtToken');
  const navigate = useNavigate();

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={S.motion}
        >
          <div className={S.base}>
            <header className={S.header}>
              <img src="/assets/svg/close.svg" alt="close-button" onClick={onClose} />
            </header>
            {navigationList.map((tab) => (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  className={S.button}
                  onClick={() => {
                    onClose();
                    navigate(`/${tab.name}`);
                  }}
                >
                  <p>{tab.title}</p>
                </motion.div>
              </>
            ))}
            <div className={S.account}>
              {jwtToken ? (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                >
                  <div className={S.accountButtonBox}>
                    <BottomSheet.Root>
                      <BottomSheet.Trigger>
                        <p className={S.accountButton}>로그아웃</p>
                      </BottomSheet.Trigger>
                      <BottomSheet.Portal>
                        <BottomSheet.Content>
                          로그아웃 하시겠어요?
                          <BottomSheet.BottomCTA>
                            <BottomSheet.Close asChild>
                              <button>닫기</button>
                            </BottomSheet.Close>
                            <button>로그아웃</button>
                          </BottomSheet.BottomCTA>
                        </BottomSheet.Content>
                        <BottomSheet.Overlay />
                      </BottomSheet.Portal>
                    </BottomSheet.Root>
                    <BottomSheet.Root>
                      <BottomSheet.Trigger>
                        <button className={S.accountButton}>회원탈퇴</button>
                      </BottomSheet.Trigger>
                      <BottomSheet.Portal>
                        <BottomSheet.Content>
                          회원탈퇴 하시겠어요?
                          <BottomSheet.BottomCTA>
                            <BottomSheet.Close asChild>
                              <button>닫기</button>
                            </BottomSheet.Close>
                            <button>회원탙퇴</button>
                          </BottomSheet.BottomCTA>
                        </BottomSheet.Content>
                        <BottomSheet.Overlay />
                      </BottomSheet.Portal>
                    </BottomSheet.Root>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  className={S.accountButton}
                >
                  <p onClick={() => kakaoLogin()}>로그인</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
