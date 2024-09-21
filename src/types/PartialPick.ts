/**
 * 특정 프로퍼티만 옵셔널로 지정해서 다 가져온다.
 */
export type PartialPick<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
} & {
  [P in K]?: T[P];
};
