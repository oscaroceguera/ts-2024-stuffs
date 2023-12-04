interface StringId {
  id: string;
}

interface NumberId {
  id: number;
}

type Id<T> = T extends string ? StringId : NumberId;

let idOne: Id<string>;
let idTwo: Id<number>;
