import type { Entry } from "./types";

export function DynamicEntryData({
  entry,
  exclude = [],
}: {
  entry: Entry;
  exclude?: string[];
}) {
  return (
    <div className="dynamicData">
      {entry.data
        .filter((x) => !exclude.includes(x.field.name))
        .map((item) => (
          <div className="dynamicField" key={item.field.id}>
            <b>{item.field.name}</b>
            <span>{formatValue(item.value, item.field.type_of)}</span>
          </div>
        ))}
    </div>
  );
}

function formatValue(value: unknown, type: string) {
  if (type === "bool") return value ? "بله" : "خیر";
  if (type === "int") return Number(value ?? 0).toLocaleString("fa-IR");
  if (type === "multiselect")
    return Array.isArray(value) ? value.join("، ") : String(value ?? "—");
  return String(value ?? "—");
}