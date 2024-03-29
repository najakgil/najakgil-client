import { css } from '@emotion/react';
import { Button } from 'components/button';
import { useTextPanelStore } from 'store/panel/useTextPanelStore';

interface TextPanelProps {
  handleEditTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editText: string;
  handleEditTextConfirm: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextButtonClick: () => void;
  inputText: string;
  selectedTextId: string | null;
}

export default function TextPanel({
  inputText,
  handleInputChange,
  handleTextButtonClick,
  selectedTextId,
  editText,
  handleEditTextChange,
  handleEditTextConfirm,
}: TextPanelProps) {
  const { textColor, setTextColor, textSize, setTextSize } = useTextPanelStore();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(parseInt(event.target.value));
  };

  return (
    <div css={wrapper}>
      <div>
        <div css={contentBox}>
          {selectedTextId ? (
            <>
              <label css={title}>텍스트 내용 수정</label>
              <input
                css={Input}
                type="text"
                value={editText}
                onChange={handleEditTextChange}
                placeholder="텍스트 내용을 수정해주세요."
              />
            </>
          ) : (
            <>
              <label css={title}>텍스트 내용</label>
              <input
                css={Input}
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="텍스트 내용을 입력해주세요."
              />
            </>
          )}
        </div>
        {/* <div>
          {selectedTextId && (
            <div>
              <input
                css={Input}
                type="text"
                value={editText}
                onChange={handleEditTextChange}
                placeholder="Edit text"
              />
              <button onClick={handleEditTextConfirm}>Confirm</button>
            </div>
          )}
        </div> */}
      </div>
      <div css={contentBox}>
        <label css={title}>텍스트 색상</label>
        <input
          type="color"
          id="textColor"
          name="textColor"
          value={textColor}
          onChange={handleColorChange}
        />
      </div>
      <div css={contentBox}>
        <label css={title}>텍스트 크기</label>
        <input
          type="range"
          id="textSize"
          name="textSize"
          min="1"
          max="30"
          value={textSize}
          onChange={handleSizeChange}
        />
      </div>
      {selectedTextId ? (
        <Button
          variants="primary"
          onClick={() => {
            handleEditTextConfirm();
            selectedTextId = null;
          }}
        >
          수정하기
        </Button>
      ) : (
        <Button variants="primary" onClick={handleTextButtonClick}>
          추가하기
        </Button>
      )}
    </div>
  );
}

export const wrapper = css({
  padding: '20px',
});

export const contentBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
  marginBottom: '20px',
});

export const title = css({
  fontSize: '14px',
  fontWeight: 'bold',
});

export const Input = css({
  padding: '10px',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  fontSize: '14px',
});
