import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header/header';
import MoveButton from '../../common/MoveButton/MoveButton';
import PreviewCanvas from './components/preview-canvas';
import PreviewContent from './components/preview-content';


const PreviewPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        left={
          <MoveButton
            imgSrc="/assets/svg/preview-back-arrow.svg"
            width={20}
            onClick={() => navigate(-1)}
          />
        }
        title="나작길 미리보기"
        right=""
      />
      <PreviewCanvas />
      <PreviewContent />
    </>
  );
};

export default PreviewPage;
