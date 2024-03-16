import * as S from './preview-canvas.style.ts';
import { useRecoilValue } from 'recoil';
import { characterChoiceAtom } from '../../../recoil/character-choice-atom.ts';

export default function PreviewCanvas() {
  const canvasImageSrc = useRecoilValue(characterChoiceAtom);
  return (
    <>
      <S.Wrapper src={canvasImageSrc} />
    </>
  );
}
