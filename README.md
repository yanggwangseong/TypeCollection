# TypeCollection

📕 타입 모음집

# PartialProps

- Partial 타입은 모든 프로퍼티를 옵셔널로 가져올때 사용하는데
- 모든 프로퍼티를 가져오는데 특정 프로퍼티는 옵셔널로 가져오고 싶을때 사용

```ts
export interface Member {
  memberId: string;
  groupId: string;
  invitationAccepted: boolean;
  role: "user" | "admin";
}

/**
 * {
 *  memberId: string;
 *  groupId: string;
 *  invitationAccepted: boolean;
 *  role?: "user" | "admin";
 * }
 */
type CreateMember = PartialProps<Member, "role">;

const createMember: CreateMember = {
  memberId: "123",
  groupId: "123",
  invitationAccepted: true,
}; // ✅

const createMember2: CreateMember = {
  memberId: "123",
  groupId: "123",
  invitationAccepted: true,
  role: "user",
}; // ✅

const createMember3: CreateMember = {
  memberId: "123",
  groupId: "123",
}; // ❌

const createMember4: CreateMember = {
  memberId: "123",
  groupId: "123",
  role: "user",
}; // ❌
```

# PartialSelect

- 한개의 프로퍼티만 옵셔널로 가져오기

```ts
export interface Member {
  memberId: string;
  groupId: string;
  invitationAccepted: boolean;
  role: "user" | "admin";
}

/**
 * {
 *  groupId?: string | undefined;
 *  role?: "user" | "admin" | undefined;
 * }
 */
type CreateMember = PartialSelect<Member, "role" | "groupId">;

const createMember: CreateMember = {}; // ✅
const createMember2: CreateMember = {
  role: "user",
}; // ✅
const createMember3: CreateMember = {
  role: "user",
  groupId: "123",
}; // ✅
const createMember4: CreateMember = {
  role: "user",
  groupId: "123",
  invitationAccepted: true,
}; // ❌
```

# NumberRange

- 숫자 범위를 지정해서 number 타입보다 더 좁은 타입을 통해 타입 안정성을 높일 수 있습니다.

```ts
type NumberRange<
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

/*
 * 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
 */
export type FeedPaginateLimit = NumberRange<1, 10>;
const limit1: FeedPaginateLimit = 10; // ✅
const limit2: FeedPaginateLimit = 1; // ✅
const limit3: FeedPaginateLimit = 3; // ✅
const limit4: FeedPaginateLimit = 11; // ❌
const limit5: FeedPaginateLimit = 100; // ❌
```
