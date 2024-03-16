import * as S from './canvas.style.ts';
import { useRecoilValue } from 'recoil';
import { characterChoiceAtom } from '../../../recoil/character-choice-atom.ts';

export default function Canvas() {
  const canvasImageSrc = useRecoilValue(characterChoiceAtom);
  return (
    <>
      <S.Wrapper src={canvasImageSrc} />
    </>
  );
}
