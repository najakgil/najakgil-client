import Button from './button';
import * as S from './preview-content.style';
import { previewComment } from './constant';

export default function PreviewContent() {
  return (<S.Wrapper>
    <S.CommentContainer>
        <S.Title>{previewComment.title}</S.Title>
        <S.Subtitle>{previewComment.subtitle}</S.Subtitle>
    </S.CommentContainer>
    <S.ButtonContainer>
        <Button>자랑하기</Button>
        <Button>저장하기</Button>
    </S.ButtonContainer>
    </S.Wrapper>);
}
