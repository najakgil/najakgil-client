export interface APIResponse<T> {
  code: number;
  isSuccess: boolean;
  message: string;
  result: T;
}
export interface Page<T> {
  content: T;
  last: boolean;
  number: number;
}

export type Photo = {
  photo_id: number;
  imgUrl: string;
};

export type PhotoChart = {
  photo_id: number;
  imgUrl: string;
  likes: number;
};

export type Standard = "likes" | "createdAt";