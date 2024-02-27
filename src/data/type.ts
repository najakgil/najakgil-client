export interface APIResponse<T> {
  code: number;
  isSuccess: boolean;
  message: string;
  result: T;
}

// 카카오 로그인
export type Login = {
  jwt: string;
  userId: number;
  message: string;
};

// 홈 화면
export type Standard = 'likes' | 'latest';

export interface Chart<T> {
  contents: T;
  totalElements: number;
  nextCursor: number;
}

export type ChartPhoto = {
  photo_id: number;
  imgUrl: string;
  likes: number;
};
