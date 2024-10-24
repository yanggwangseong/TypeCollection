/**
 * Number Range 타입
 * @name NumericRange
 * @example
 * type NumberLimit = NumericRange<1, 10>; // 1 - 10
 */
export type NumberRange<
  L extends number,
  H extends number,
  LAcc extends any[] = [],
  HAcc extends any[] = [],
  Acc extends number[] = []
> = L extends LAcc["length"]
  ? H extends HAcc["length"]
    ? Acc[number] | HAcc["length"]
    : NumberRange<L, H, LAcc, [...HAcc, L], [...Acc, HAcc["length"]]>
  : NumberRange<L, H, [...LAcc, L], [...LAcc, L], Acc>;
