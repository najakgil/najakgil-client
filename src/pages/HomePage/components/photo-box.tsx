import { useState, useEffect } from 'react';
import { Standard } from '../../../data/type';
import * as S from './photo-box.css';
import { useMutation } from '@tanstack/react-query';
import { getPhotoChart } from '../../../api/getPhotoChart';
import PhotoItem from './photo-item';

export default function PhotoBox() {
  const [filter, setFilter] = useState<FilterType>({
    type: 'likes',
    name: '인기순',
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    chartPhotoData.mutate();
  }, []);

  // 차트 사진 가져오기
  const chartPhotoData = useMutation({
    mutationKey: ['getPhotoChart'],
    mutationFn: async () => {
      return getPhotoChart(filter.type, 10, 21);
    },
  });

  // 필터
  type FilterType = {
    type: Standard;
    name: string;
  };

  const filterList: { [key in Standard]: FilterType } = {
    likes: {
      type: 'likes',
      name: '인기순',
    },
    latest: {
      type: 'latest',
      name: '최신순',
    },
  };

  return (
    <div className={S.wrapper}>
      <header className={S.header}>
        <div>
          <p style={{ fontWeight: '500', fontSize: '16px', marginBottom: '4px' }}>
            인기 나작길을 만나봐요!
          </p>
          <p style={{ fontSize: '12px' }}>유저들이 만든 나작길을 구경해봐요</p>
        </div>
        {/* 필터 */}
        <div className={S.filterButtonContainer}>
          <button className={S.filterButton} onClick={() => setIsFilterOpen(!isFilterOpen)}>
            {filter.name}
            <img src="public/assets/svg/filter-button.svg" alt="filter-button" />
          </button>
          {isFilterOpen && (
            <div className={S.filterList}>
              <button
                onClick={() => {
                  setFilter(filterList.likes);
                  setIsFilterOpen(!isFilterOpen);
                  chartPhotoData.mutate();
                }}
              >
                인기순
              </button>
              <button
                onClick={() => {
                  setFilter(filterList.latest);
                  setIsFilterOpen(!isFilterOpen);
                  chartPhotoData.mutate();
                }}
              >
                최신순
              </button>
            </div>
          )}
        </div>
      </header>
      <div className={S.photoBox}>
        {chartPhotoData.data?.contents.map((item) => (
          <PhotoItem key={item.photo_id} imgUrl={item.imgUrl} likes={item.likes} />
        ))}
      </div>
    </div>
  );
}
