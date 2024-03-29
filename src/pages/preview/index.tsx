import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';
import { Button } from 'components/button';
import { Header } from 'components/header';
import { IconButton } from 'components/icon-button';
import { SnackBar } from 'components/snack-bar';
import { useRouter } from 'next/router';

const PreviewPage = () => {
  const router = useRouter();
  const cardRef = useRef(null);
  const [downloadSnackBarOpen, setDownloadSnackBarOpen] = useState(false);
  const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);

  const downloadImage = () => {
    const card = cardRef.current;
    if (card) {
      domtoimage.toBlob(card).then((blob) => {
        saveAs(blob, 'card.png');
        setDownloadSnackBarOpen(true);
        setTimeout(() => {
          setDownloadSnackBarOpen(false);
        }, 3000);
      });
    } else {
      console.error('오류 발생');
    }
  };

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopySnackBarOpen(true);
    setTimeout(() => {
      setCopySnackBarOpen(false);
    }, 3000);
  };

  return (
    <>
      <Header
        left={<IconButton imgSrc="/svg/back-arrow.svg" width={18} onClick={() => router.back()} />}
        title=""
        right=""
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15%',
          padding: '30px 0px',
        }}
      >
        <div
          ref={cardRef}
          style={{
            width: '360px',
            height: '360px',
            backgroundColor: 'yellow',
            borderRadius: '3px',
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '360px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Button variants="primary" onClick={downloadImage}>
            다운로드
          </Button>
          <Button variants="secondary" onClick={copyLink}>
            링크 복사하기
          </Button>
        </div>
      </div>
      <SnackBar
        message="링크가 복사되었습니다."
        open={copySnackBarOpen}
        onClose={() => setCopySnackBarOpen(false)}
      />
      <SnackBar
        message="다운로드가 완료되었습니다."
        open={downloadSnackBarOpen}
        onClose={() => setDownloadSnackBarOpen(false)}
      />
    </>
  );
};

export default PreviewPage;
