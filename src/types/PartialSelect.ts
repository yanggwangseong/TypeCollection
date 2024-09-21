/**
 * 특정 프로퍼티만 옵셔널로 가져온다.
 */
export type PartialSelect<T, K extends keyof T> = {
  [P in K]?: T[P];
};
