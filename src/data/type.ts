export interface APIResponse<T> {
  code: number;
  isSuccess: boolean;
  message: string;
  result: T;
}

export type Login = {
    jwt: string;
    userId: number;
    message: string;
};
