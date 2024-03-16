import Header from '../../common/Header/header';
import MoveButton from '../../common/MoveButton/MoveButton';
import Canvas from './components/canvas';
import CompleteButton from './components/complete-button';
import Palette from './components/palette/palette';
import { useNavigate } from 'react-router-dom';

const MakePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        left={
          <MoveButton
            imgSrc="/assets/svg/preview-back-arrow.svg"
            width={20}
            onClick={() => navigate('/home')}
          />
        }
        title="나작길 만들기"
        right=""
      />
      <Canvas />
      <Palette />
      <CompleteButton onClick={() => navigate('/preview')} />
    </>
  );
};

export default MakePage;
