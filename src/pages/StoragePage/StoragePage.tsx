import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header/header';
import MoveButton from '../../common/MoveButton/MoveButton';

const StoragePage = () => {
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
        title="나작길 수납함"
        right=""
      />
    </>
  );
};

export default StoragePage;
