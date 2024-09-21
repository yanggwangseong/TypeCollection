/**
 * 모든 프로퍼티를 다 가져오는데 특정 프로퍼티만 옵셔널로 가져온다.
 */
export type PartialProps<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
} & {
  [P in K]?: T[P];
};
