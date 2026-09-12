export type FieldType =
  | "str"
  | "int"
  | "file"
  | "bool"
  | "select"
  | "multiselect";

export type Field = {
  id: number;
  name: string;
  type_of: FieldType;
  options?: string[];
};

export type EntryData = {
  field: Field;
  value: unknown;
  image?: string;
};

export type Entry = {
  id: number;
  instance: { name: string };
  data: EntryData[];
  price?: number | null;
  paid?: boolean;
};