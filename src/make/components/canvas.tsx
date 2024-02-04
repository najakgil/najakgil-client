import * as S from './canvas.style.ts';
import { useRecoilValue } from 'recoil';
import { characterChoiceAtom } from '../../recoil/character-choice-atom';

export default function Palette() {
  const canvasImageSrc = useRecoilValue(characterChoiceAtom);
  return (
    <>
      <S.Wrapper src={canvasImageSrc} />
    </>
  );
}
