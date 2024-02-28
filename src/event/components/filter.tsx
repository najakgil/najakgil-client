import * as S from './filter.css';
import { useState } from 'react';

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState<'최신순' | '좋아요순'>('최신순');
  return (
    <div className={S.wrapper}>
      <button
        style={{ color: selectedFilter === '최신순' ? '#2294FF' : 'black', fontWeight: selectedFilter === '최신순' ? 'bold' : 'normal'}}
        onClick={() => setSelectedFilter('최신순')}
      >
        최신순
      </button>
      <button
        style={{ color: selectedFilter === '좋아요순' ? '#2294FF' : 'black', fontWeight: selectedFilter === '좋아요순' ? 'bold' : 'normal' }}
        onClick={() => setSelectedFilter('좋아요순')}
      >
        좋아요순
      </button>
    </div>
  );
}
