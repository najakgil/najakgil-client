// import Button from './button';
import * as S from './preview-content.style';
import { previewComment } from './constant';
import Button from '../../../common/Button/Button';


export default function PreviewContent() {
  return (<S.Wrapper>
    <S.CommentContainer>
        <S.Title>{previewComment.title}</S.Title>
        <S.Subtitle>{previewComment.subtitle}</S.Subtitle>
    </S.CommentContainer>
    <S.ButtonContainer>
        <Button variants='primary'>자랑하기</Button>
        <Button variants='primary'>공유하기</Button>
    </S.ButtonContainer>
    </S.Wrapper>);
}
