import Header from '../common/header/header';
import Navigation from '../common/navigation/navigation';
import Canvas from './components/canvas';
import CompleteButton from './components/complete-button';
import Palette from './components/palette/palette';
import { useNavigate } from 'react-router-dom';

const Make = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Canvas />
      <Palette />
      <CompleteButton onClick={() => navigate('/preview')} />
      <Navigation page="make" />
    </>
  );
};

export default Make;
