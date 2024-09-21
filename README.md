# TypeCollection

📕 타입 모음집

# PartialPick

- Partial 타입은 모든 프로퍼티를 옵셔널로 가져올때 사용하는데
- 특정 프로퍼티만 옵셔널로 하고 가져오고 싶을때 사용
- 일부 프로퍼티만 옵셔널로 타입을 정의하고 싶을 때 사용

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
type CreateMember = PartialPick<Member, "role">;

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

# TODO

# PartialPickOne

- 한개의 프로퍼티만 옵셔널로 가져오기
