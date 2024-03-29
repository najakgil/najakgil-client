import { css } from '@emotion/react';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';

export default function BackgroundImagePanel() {
  const { setActiveBackgroundImage } = useBackgroundTabStore();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target?.result as string;
        setActiveBackgroundImage(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div css={wrapper}>
      <div css={contentBox}>
        <label css={title}>배경 이미지</label>
        <input
          type="file"
          id="backgroundImage"
          name="backgroundImage"
          accept="image/*"
          onChange={handleFileSelect}
          style = {{
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            fontSize: '14px',
            backgroundColor: '#f9f9f9',
          }}
        />
      </div>
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
