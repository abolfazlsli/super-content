import type { Entry } from "../../src/components/entries/types";

export const entries: Entry[] = [
  {
    id: 1,
    instance: { name: "مدرسه" },
    data: [
      {
        field: { id: 1, name: "نام مدرسه", type_of: "str" },
        value: "دبیرستان غیردولتی اندیشه نو",
      },
      {
        field: { id: 2, name: "توضیحات", type_of: "str" },
        value:
          "مدرسه‌ای با تمرکز بر آموزش علمی، مهارت‌های فردی و آماده‌سازی دانش‌آموزان برای کنکور.",
      },
      {
        field: { id: 3, name: "مقطع", type_of: "select" },
        value: "دبیرستان دوره دوم",
      },
      {
        field: { id: 4, name: "ظرفیت", type_of: "int" },
        value: 450,
      },
      {
        field: { id: 5, name: "نوع مدرسه", type_of: "select" },
        value: "غیردولتی",
      },
      {
        field: { id: 6, name: "منطقه", type_of: "select" },
        value: "منطقه ۱",
      },
    ],
    price: 0,
    paid: false,
  },

  {
    id: 2,
    instance: { name: "مدرسه" },
    data: [
      {
        field: { id: 7, name: "نام مدرسه", type_of: "str" },
        value: "دبستان پسرانه دانش",
      },
      {
        field: { id: 8, name: "توضیحات", type_of: "str" },
        value:
          "دبستان پسرانه با تمرکز بر آموزش پایه، فعالیت‌های فرهنگی و تقویت مهارت‌های اجتماعی.",
      },
      {
        field: { id: 9, name: "مقطع", type_of: "select" },
        value: "دبستان",
      },
      {
        field: { id: 10, name: "ظرفیت", type_of: "int" },
        value: 300,
      },
      {
        field: { id: 11, name: "نوع مدرسه", type_of: "select" },
        value: "غیردولتی",
      },
      {
        field: { id: 12, name: "منطقه", type_of: "select" },
        value: "منطقه ۳",
      },
    ],
    price: 0,
    paid: false,
  },

  {
    id: 3,
    instance: { name: "مدرسه" },
    data: [
      {
        field: { id: 13, name: "نام مدرسه", type_of: "str" },
        value: "مدرسه دخترانه فرزانگان",
      },
      {
        field: { id: 14, name: "توضیحات", type_of: "str" },
        value:
          "مدرسه دخترانه با تمرکز بر آموزش علوم پایه، پژوهش و فعالیت‌های علمی دانش‌آموزان.",
      },
      {
        field: { id: 15, name: "مقطع", type_of: "select" },
        value: "دبیرستان دوره اول",
      },
      {
        field: { id: 16, name: "ظرفیت", type_of: "int" },
        value: 360,
      },
      {
        field: { id: 17, name: "نوع مدرسه", type_of: "select" },
        value: "دولتی",
      },
      {
        field: { id: 18, name: "منطقه", type_of: "select" },
        value: "منطقه ۶",
      },
    ],
    price: 0,
    paid: false,
  },

  {
    id: 4,
    instance: { name: "هنرستان" },
    data: [
      {
        field: { id: 19, name: "نام هنرستان", type_of: "str" },
        value: "هنرستان فنی حرفه‌ای کارآفرین",
      },
      {
        field: { id: 20, name: "توضیحات", type_of: "str" },
        value:
          "هنرستان فنی و حرفه‌ای با رشته‌های کامپیوتر، گرافیک و حسابداری و امکانات کارگاهی.",
      },
      {
        field: { id: 21, name: "مقطع", type_of: "select" },
        value: "متوسطه دوم",
      },
      {
        field: { id: 22, name: "ظرفیت", type_of: "int" },
        value: 280,
      },
      {
        field: { id: 23, name: "نوع مدرسه", type_of: "select" },
        value: "غیردولتی",
      },
      {
        field: { id: 24, name: "رشته", type_of: "select" },
        value: "کامپیوتر",
      },
    ],
    price: 0,
    paid: false,
  },

  {
    id: 5,
    instance: { name: "مدرسه" },
    data: [
      {
        field: { id: 25, name: "نام مدرسه", type_of: "str" },
        value: "دبیرستان پسرانه فرهنگ",
      },
      {
        field: { id: 26, name: "توضیحات", type_of: "str" },
        value:
          "دبیرستان پسرانه با سابقه آموزشی بالا و برنامه‌های ویژه آمادگی کنکور.",
      },
      {
        field: { id: 27, name: "مقطع", type_of: "select" },
        value: "دبیرستان دوره دوم",
      },
      {
        field: { id: 28, name: "ظرفیت", type_of: "int" },
        value: 520,
      },
      {
        field: { id: 29, name: "نوع مدرسه", type_of: "select" },
        value: "دولتی",
      },
      {
        field: { id: 30, name: "منطقه", type_of: "select" },
        value: "منطقه ۲",
      },
    ],
    price: 0,
    paid: false,
  },

  {
    id: 6,
    instance: { name: "آموزشگاه" },
    data: [
      {
        field: { id: 31, name: "نام آموزشگاه", type_of: "str" },
        value: "آموزشگاه علمی دانش‌پژوه",
      },
      {
        field: { id: 32, name: "توضیحات", type_of: "str" },
        value:
          "آموزشگاه تخصصی برگزاری کلاس‌های تقویتی، کنکور و المپیاد برای دانش‌آموزان.",
      },
      {
        field: { id: 33, name: "مقطع", type_of: "select" },
        value: "متوسطه دوم",
      },
      {
        field: { id: 34, name: "ظرفیت", type_of: "int" },
        value: 180,
      },
      {
        field: { id: 35, name: "نوع خدمات", type_of: "select" },
        value: "کلاس تقویتی",
      },
      {
        field: { id: 36, name: "منطقه", type_of: "select" },
        value: "منطقه ۴",
      },
    ],
    price: 0,
    paid: false,
  },
];

export function valueOf(entry: Entry, field: string) {
  return entry.data.find((x) => x.field.name === field)?.value;
}