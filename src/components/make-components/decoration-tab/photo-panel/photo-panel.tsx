import { useState } from 'react';
import { css } from '@emotion/react';
import { SnackBar } from 'components/snack-bar';
import { usePhotoPanelStore } from 'store/panel/usePhotoPanelStore';


export default function PhotoPanel() {
  const {
    selectedPhotoId,
    setSelectedPhotoId,
    photoObjects,
    setPhotoObjects,
  } = usePhotoPanelStore();
  const [deleteSnackOpen, setDeleteSnackOpen] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target?.result as string;
        const newPhotoObject = {
          id: Date.now().toString(),
          imageUrl: imageDataURL,
          x: 10,
          y: 10,
          dragging: false,
          offsetX: 0,
          offsetY: 0,
        };
        setPhotoObjects([...photoObjects, newPhotoObject]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhotoItem = () => {
    const deletePhotoIndex = photoObjects.findIndex((photo) => photo.id === selectedPhotoId);
    if (deletePhotoIndex !== -1) {
      const updatedPhotoObjects = [
        ...photoObjects.slice(0, deletePhotoIndex),
        ...photoObjects.slice(deletePhotoIndex + 1),
      ];
      setDeleteSnackOpen(true);
      setTimeout(() => {
        setDeleteSnackOpen(false);
      }, 1000);
      setPhotoObjects(updatedPhotoObjects);
      setSelectedPhotoId('');
    }
  };

  return (
    <div css={wrapper}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <p
          style={{
            fontSize: '14px',
            color: selectedPhotoId ? '#2294FF' : '#D9D9D9',
            cursor: selectedPhotoId ? 'pointer' : 'initial',
            marginRight: '10px',
          }}
          onClick={handleDeletePhotoItem}
        >
          삭제
        </p>
      </div>
      <div css={contentBox}>
        <label css={title}>사진</label>
        <input
          type="file"
          id="photoImage"
          name="photoImage"
          accept="image/*"
          onChange={handleFileSelect}
          style={{
            padding: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            fontSize: '14px',
            backgroundColor: '#f9f9f9',
          }}
        />
      </div>
      <SnackBar
        open={deleteSnackOpen}
        message="사진이 삭제되었습니다."
        onClose={() => setDeleteSnackOpen(false)}
      />
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
