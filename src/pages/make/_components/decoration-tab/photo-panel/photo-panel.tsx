import { useEffect } from 'react';
import { css } from '@emotion/react';
import { usePhotoPanelStore } from 'store/panel/usePhotoPanelStore';

interface PhotoPanelProps {
  handlePhotoClick: () => void;
}

export default function PhotoPanel({ handlePhotoClick }: PhotoPanelProps) {
  const { photoUrl, setPhotoUrl } = usePhotoPanelStore();

  useEffect(() => {
    if (photoUrl) {
      handlePhotoClick();
    }
  }, [photoUrl]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target?.result as string;
        setPhotoUrl(imageDataURL);
        handlePhotoClick();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div css={wrapper}>
      <div css={contentBox}>
        <label css={title}>사진</label>
          <input
            type="file"
            id="photoImage"
            name="photoImage"
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

export const Input = css({
  padding: '10px',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  fontSize: '14px',
});
