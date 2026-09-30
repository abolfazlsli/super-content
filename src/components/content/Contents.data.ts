export type ContentsItem = {
  id: number;
  title: string;
  description: string;
  author: string;
  type: string;
  category: string;
  subject: string;
  grade: string;
  gradeKey: string;
  educationLevel: string;
  level: string;
  track?: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  pages: number;
  downloads: number;
  price: number;
  originalPrice: number;
  discount: number;
  format: string;
  size: string;
  updatedAt: string;
  includes: string[];
};

type SubjectConfig = {
  subject: string;
  track?: string;
};

type CategoryConfig = {
  key: string;
  label: string;
  prefix: string;
  image: string;
};

const categories: CategoryConfig[] = [
  {
    key: "question",
    label: "نمونه سؤال",
    prefix: "نمونه سؤال",
    image: "/images/content/questions.jpg",
  },
  {
    key: "question-bank",
    label: "گنجینه سؤال",
    prefix: "گنجینه سؤال",
    image: "/images/content/questions.jpg",
  },
  {
    key: "lesson",
    label: "درسنامه",
    prefix: "درسنامه",
    image: "/images/content/lesson.jpg",
  },
  {
    key: "course",
    label: "دوره آموزشی",
    prefix: "دوره آموزشی",
    image: "/images/content/video.jpg",
  },
  {
    key: "notes",
    label: "جزوه",
    prefix: "جزوه",
    image: "/images/content/notes.jpg",
  },
  {
    key: "exam",
    label: "آزمون",
    prefix: "آزمون",
    image: "/images/content/exam.jpg",
  },
  {
    key: "exercise",
    label: "تمرین",
    prefix: "مجموعه تمرین",
    image: "/images/content/exercise.jpg",
  },
  {
    key: "video",
    label: "ویدئو",
    prefix: "ویدئوی آموزشی",
    image: "/images/content/video.jpg",
  },
  {
    key: "qa",
    label: "پرسش و پاسخ",
    prefix: "پرسش و پاسخ",
    image: "/images/content/qa.jpg",
  },
];

const authors = [
  "گروه آموزشی بعثت محتوا",
  "تیم محتوای آموزشی",
  "آکادمی محتوا پلاس",
  "گروه دبیران تخصصی",
  "استادان منتخب محتوا",
  "مرکز محتوای آموزشی",
  "دپارتمان آموزش بعثت",
  "گروه تولید محتوای پلاس",
];

const primarySubjects: Record<string, string[]> = {
  پیش‌دبستانی: [
    "مهارت‌های زندگی",
    "آمادگی خواندن و نوشتن",
    "مفاهیم پایه",
    "هوش و خلاقیت",
  ],
  اول: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  دوم: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  سوم: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  چهارم: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  پنجم: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  ششم: ["فارسی", "ریاضی", "علوم تجربی", "هدیه‌های آسمان", "مطالعات اجتماعی"],
  هفتم: [
    "فارسی",
    "ریاضی",
    "علوم تجربی",
    "مطالعات اجتماعی",
    "پیام‌های آسمان",
    "عربی",
    "انگلیسی",
  ],
  هشتم: [
    "فارسی",
    "ریاضی",
    "علوم تجربی",
    "مطالعات اجتماعی",
    "پیام‌های آسمان",
    "عربی",
    "انگلیسی",
  ],
  نهم: [
    "فارسی",
    "ریاضی",
    "علوم تجربی",
    "مطالعات اجتماعی",
    "پیام‌های آسمان",
    "عربی",
    "انگلیسی",
  ],
};

const secondarySubjects: Record<string, SubjectConfig[]> = {
  دهم: [
    { subject: "فارسی", track: "ریاضی و فیزیک" },
    { subject: "نگارش", track: "ریاضی و فیزیک" },
    { subject: "دین و زندگی", track: "ریاضی و فیزیک" },
    { subject: "عربی", track: "ریاضی و فیزیک" },
    { subject: "زبان انگلیسی", track: "ریاضی و فیزیک" },
    { subject: "ریاضی", track: "ریاضی و فیزیک" },
    { subject: "هندسه", track: "ریاضی و فیزیک" },
    { subject: "فیزیک", track: "ریاضی و فیزیک" },
    { subject: "شیمی", track: "ریاضی و فیزیک" },
    { subject: "فارسی", track: "علوم تجربی" },
    { subject: "نگارش", track: "علوم تجربی" },
    { subject: "دین و زندگی", track: "علوم تجربی" },
    { subject: "عربی", track: "علوم تجربی" },
    { subject: "زبان انگلیسی", track: "علوم تجربی" },
    { subject: "ریاضی", track: "علوم تجربی" },
    { subject: "زیست‌شناسی", track: "علوم تجربی" },
    { subject: "فیزیک", track: "علوم تجربی" },
    { subject: "شیمی", track: "علوم تجربی" },
    { subject: "فارسی", track: "علوم انسانی" },
    { subject: "نگارش", track: "علوم انسانی" },
    { subject: "دین و زندگی", track: "علوم انسانی" },
    { subject: "عربی", track: "علوم انسانی" },
    { subject: "زبان انگلیسی", track: "علوم انسانی" },
    { subject: "ریاضی و آمار", track: "علوم انسانی" },
    { subject: "علوم و فنون ادبی", track: "علوم انسانی" },
    { subject: "جامعه‌شناسی", track: "علوم انسانی" },
    { subject: "اقتصاد", track: "علوم انسانی" },
    { subject: "منطق", track: "علوم انسانی" },
  ],
  یازدهم: [
    { subject: "فارسی", track: "ریاضی و فیزیک" },
    { subject: "نگارش", track: "ریاضی و فیزیک" },
    { subject: "دین و زندگی", track: "ریاضی و فیزیک" },
    { subject: "عربی", track: "ریاضی و فیزیک" },
    { subject: "زبان انگلیسی", track: "ریاضی و فیزیک" },
    { subject: "حسابان", track: "ریاضی و فیزیک" },
    { subject: "هندسه", track: "ریاضی و فیزیک" },
    { subject: "آمار و احتمال", track: "ریاضی و فیزیک" },
    { subject: "فیزیک", track: "ریاضی و فیزیک" },
    { subject: "شیمی", track: "ریاضی و فیزیک" },
    { subject: "فارسی", track: "علوم تجربی" },
    { subject: "نگارش", track: "علوم تجربی" },
    { subject: "دین و زندگی", track: "علوم تجربی" },
    { subject: "عربی", track: "علوم تجربی" },
    { subject: "زبان انگلیسی", track: "علوم تجربی" },
    { subject: "ریاضی", track: "علوم تجربی" },
    { subject: "زیست‌شناسی", track: "علوم تجربی" },
    { subject: "فیزیک", track: "علوم تجربی" },
    { subject: "شیمی", track: "علوم تجربی" },
    { subject: "فارسی", track: "علوم انسانی" },
    { subject: "نگارش", track: "علوم انسانی" },
    { subject: "دین و زندگی", track: "علوم انسانی" },
    { subject: "عربی", track: "علوم انسانی" },
    { subject: "زبان انگلیسی", track: "علوم انسانی" },
    { subject: "ریاضی و آمار", track: "علوم انسانی" },
    { subject: "علوم و فنون ادبی", track: "علوم انسانی" },
    { subject: "جامعه‌شناسی", track: "علوم انسانی" },
    { subject: "روان‌شناسی", track: "علوم انسانی" },
    { subject: "تاریخ", track: "علوم انسانی" },
    { subject: "فلسفه", track: "علوم انسانی" },
  ],
  دوازدهم: [
    { subject: "فارسی", track: "ریاضی و فیزیک" },
    { subject: "نگارش", track: "ریاضی و فیزیک" },
    { subject: "دین و زندگی", track: "ریاضی و فیزیک" },
    { subject: "عربی", track: "ریاضی و فیزیک" },
    { subject: "زبان انگلیسی", track: "ریاضی و فیزیک" },
    { subject: "حسابان", track: "ریاضی و فیزیک" },
    { subject: "هندسه", track: "ریاضی و فیزیک" },
    { subject: "گسسته", track: "ریاضی و فیزیک" },
    { subject: "فیزیک", track: "ریاضی و فیزیک" },
    { subject: "شیمی", track: "ریاضی و فیزیک" },
    { subject: "فارسی", track: "علوم تجربی" },
    { subject: "نگارش", track: "علوم تجربی" },
    { subject: "دین و زندگی", track: "علوم تجربی" },
    { subject: "عربی", track: "علوم تجربی" },
    { subject: "زبان انگلیسی", track: "علوم تجربی" },
    { subject: "ریاضی", track: "علوم تجربی" },
    { subject: "زیست‌شناسی", track: "علوم تجربی" },
    { subject: "فیزیک", track: "علوم تجربی" },
    { subject: "شیمی", track: "علوم تجربی" },
    { subject: "فارسی", track: "علوم انسانی" },
    { subject: "نگارش", track: "علوم انسانی" },
    { subject: "دین و زندگی", track: "علوم انسانی" },
    { subject: "عربی", track: "علوم انسانی" },
    { subject: "زبان انگلیسی", track: "علوم انسانی" },
    { subject: "ریاضی و آمار", track: "علوم انسانی" },
    { subject: "علوم و فنون ادبی", track: "علوم انسانی" },
    { subject: "جامعه‌شناسی", track: "علوم انسانی" },
    { subject: "روان‌شناسی", track: "علوم انسانی" },
    { subject: "تاریخ", track: "علوم انسانی" },
    { subject: "فلسفه", track: "علوم انسانی" },
  ],
};

const grades = [
  "پیش‌دبستانی",
  "اول",
  "دوم",
  "سوم",
  "چهارم",
  "پنجم",
  "ششم",
  "هفتم",
  "هشتم",
  "نهم",
  "دهم",
  "یازدهم",
  "دوازدهم",
];

const gradeKeys: Record<string, string> = {
  پیش‌دبستانی: "preschool",
  اول: "grade-1",
  دوم: "grade-2",
  سوم: "grade-3",
  چهارم: "grade-4",
  پنجم: "grade-5",
  ششم: "grade-6",
  هفتم: "grade-7",
  هشتم: "grade-8",
  نهم: "grade-9",
  دهم: "grade-10",
  یازدهم: "grade-11",
  دوازدهم: "grade-12",
};

const educationLevels: Record<string, string> = {
  پیش‌دبستانی: "preschool",
  اول: "elementary-first",
  دوم: "elementary-first",
  سوم: "elementary-first",
  چهارم: "elementary-second",
  پنجم: "elementary-second",
  ششم: "elementary-second",
  هفتم: "middle-first",
  هشتم: "middle-first",
  نهم: "middle-first",
  دهم: "middle-second",
  یازدهم: "middle-second",
  دوازدهم: "middle-second",
};

const levelValues: Record<string, string> = {
  پیش‌دبستانی: "preschool",
  اول: "1",
  دوم: "2",
  سوم: "3",
  چهارم: "4",
  پنجم: "5",
  ششم: "6",
  هفتم: "7",
  هشتم: "8",
  نهم: "9",
  دهم: "10",
  یازدهم: "11",
  دوازدهم: "12",
};

const badges = ["پرفروش", "جدید", "محبوب", "ویژه"];

const prices = [
  29000, 39000, 49000, 59000, 69000, 79000, 89000, 99000, 119000, 149000,
];

const variationLabels = [
  "جامع",
  "طلایی",
  "مکمل",
  "ویژه امتحانات",
  "مرور و جمع‌بندی",
  "پیشرفته",
  "استاندارد",
  "فشرده",
];

const includesByCategory: Record<string, string[]> = {
  question: [
    "نمونه سؤالات استاندارد",
    "پوشش مباحث اصلی کتاب",
    "سؤالات متنوع و طبقه‌بندی‌شده",
    "مناسب آمادگی آزمون",
  ],
  "question-bank": [
    "مجموعه سؤالات متنوع",
    "سؤالات طبقه‌بندی‌شده",
    "سؤالات منتخب امتحانی",
    "مناسب تمرین و مرور",
  ],
  lesson: [
    "درسنامه کامل و کاربردی",
    "توضیح مفاهیم اصلی",
    "نکات مهم امتحانی",
    "مثال‌های آموزشی",
  ],
  course: [
    "جلسات آموزشی مرحله‌به‌مرحله",
    "توضیح مفاهیم کلیدی",
    "مثال‌های کاربردی",
    "تمرین تکمیلی",
  ],
  notes: [
    "خلاصه نکات مهم",
    "جمع‌بندی مطالب",
    "نکات پرتکرار امتحانی",
    "مناسب مرور سریع",
  ],
  exam: [
    "آزمون استاندارد",
    "پوشش مباحث اصلی",
    "سطح‌بندی سؤالات",
    "مناسب سنجش آمادگی",
  ],
  exercise: [
    "تمرین‌های متنوع",
    "سؤالات طبقه‌بندی‌شده",
    "تمرین مفهومی",
    "مناسب تثبیت مطالب",
  ],
  video: [
    "آموزش مفهومی",
    "توضیح مرحله‌به‌مرحله",
    "حل مثال‌های کاربردی",
    "تمرین تکمیلی",
  ],
  qa: [
    "پرسش‌های پرتکرار",
    "پاسخ‌های تشریحی",
    "نکات مهم آموزشی",
    "مناسب رفع اشکال",
  ],
};

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const getCategory = (index: number) => {
  return categories[index % categories.length];
};

const getSubjects = (grade: string): SubjectConfig[] => {
  if (secondarySubjects[grade]) {
    return secondarySubjects[grade];
  }

  return (primarySubjects[grade] ?? []).map((subject) => ({
    subject,
  }));
};

const getRandomFromArray = <T>(items: T[], seed: number): T => {
  return items[Math.floor(seededRandom(seed) * items.length)];
};

const getUpdatedAt = (id: number) => {
  const day = 1 + Math.floor(seededRandom(id * 13) * 29);
  const month = getRandomFromArray(
    [
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
      "فروردین",
      "اردیبهشت",
      "خرداد",
    ],
    id * 17,
  );

  return `${day} ${month} ۱۴۰۵`;
};

const createItem = (
  id: number,
  grade: string,
  subjectConfig: SubjectConfig,
  categoryIndex: number,
  variation: number,
): ContentsItem => {
  const category = getCategory(categoryIndex);

  const priceIndex = Math.floor(
    seededRandom(id * 17 + variation * 31) * prices.length,
  );

  const originalPrice = prices[priceIndex];

  const discountOptions = [0, 10, 15, 20, 25, 30];

  const discount =
    discountOptions[
      Math.floor(
        seededRandom(id * 23 + variation * 47) * discountOptions.length,
      )
    ];

  const price =
    discount === 0
      ? originalPrice
      : Math.round((originalPrice * (100 - discount)) / 100 / 1000) * 1000;

  const rating = Number(
    (4 + seededRandom(id * 7 + variation * 13) * 1).toFixed(1),
  );

  const pagesOptions = [12, 20, 28, 36, 48, 64, 80, 96];

  const pages =
    pagesOptions[
      Math.floor(seededRandom(id * 11 + variation * 19) * pagesOptions.length)
    ];

  const reviews = 15 + Math.floor(seededRandom(id * 29 + variation * 7) * 900);

  const downloads =
    80 + Math.floor(seededRandom(id * 37 + variation * 11) * 12000);

  const trackSuffix = subjectConfig.track ? ` - ${subjectConfig.track}` : "";

  const variationLabel =
    variationLabels[
      Math.floor(
        seededRandom(id * 41 + variation * 53) * variationLabels.length,
      )
    ];

  const includes = includesByCategory[category.key] ?? [];

  const description =
    category.key === "question"
      ? `مجموعه‌ای از نمونه سؤالات استاندارد ${subjectConfig.subject} پایه ${grade} برای مرور مطالب، تمرین و آمادگی بهتر برای آزمون‌های مدرسه.`
      : category.key === "question-bank"
        ? `گنجینه‌ای متنوع از سؤالات ${subjectConfig.subject} پایه ${grade} با تمرکز بر تمرین، مرور و سنجش میزان یادگیری.`
        : category.key === "lesson"
          ? `درسنامه‌ای کامل و کاربردی برای یادگیری مفاهیم ${subjectConfig.subject} پایه ${grade} همراه با توضیحات آموزشی و نکات مهم.`
          : category.key === "course"
            ? `دوره آموزشی ${subjectConfig.subject} پایه ${grade} با محتوای مرحله‌به‌مرحله برای یادگیری بهتر و عمیق‌تر مطالب.`
            : category.key === "notes"
              ? `جزوه‌ای خلاصه و کاربردی از مهم‌ترین مطالب ${subjectConfig.subject} پایه ${grade} برای مرور سریع و جمع‌بندی.`
              : category.key === "exam"
                ? `آزمون جامع ${subjectConfig.subject} پایه ${grade} برای ارزیابی میزان آمادگی و سنجش یادگیری دانش‌آموز.`
                : category.key === "exercise"
                  ? `مجموعه‌ای از تمرین‌های متنوع ${subjectConfig.subject} پایه ${grade} برای تثبیت مفاهیم و تقویت مهارت حل مسئله.`
                  : category.key === "video"
                    ? `ویدئوی آموزشی ${subjectConfig.subject} پایه ${grade} با توضیحات مفهومی، مثال‌های کاربردی و آموزش مرحله‌به‌مرحله.`
                    : `مجموعه‌ای از پرسش‌ها و پاسخ‌های آموزشی ${subjectConfig.subject} پایه ${grade} برای رفع اشکال و مرور نکات مهم.`;

  return {
    id,
    title: `${category.prefix} ${subjectConfig.subject} پایه ${grade}${trackSuffix} - ${variationLabel}`,
    description,
    author: authors[id % authors.length],
    type: category.label,
    category: category.key,
    subject: subjectConfig.subject,
    grade,
    gradeKey: gradeKeys[grade],
    educationLevel: educationLevels[grade],
    level: levelValues[grade],
    ...(subjectConfig.track ? { track: subjectConfig.track } : {}),
    image: category.image,
    badge: badges[id % badges.length],
    rating,
    reviews,
    pages,
    downloads,
    price,
    originalPrice,
    discount,
    format:
      category.key === "video" || category.key === "course" ? "MP4" : "PDF",
    size:
      category.key === "video" || category.key === "course"
        ? `${20 + (id % 8) * 10} MB`
        : `${2 + (id % 8) * 3} MB`,
    updatedAt: getUpdatedAt(id),
    includes,
  };
};

const contents: ContentsItem[] = [];

let id = 1;

const requiredCombinations: Array<{
  grade: string;
  subject: SubjectConfig;
  categoryIndex: number;
  variation: number;
}> = [];

for (let gradeIndex = 0; gradeIndex < grades.length; gradeIndex++) {
  const grade = grades[gradeIndex];
  const subjects = getSubjects(grade);

  for (
    let categoryIndex = 0;
    categoryIndex < categories.length;
    categoryIndex++
  ) {
    const subjectIndex = Math.floor(
      seededRandom(gradeIndex * 101 + categoryIndex * 17 + 7) * subjects.length,
    );

    requiredCombinations.push({
      grade,
      subject: subjects[subjectIndex],
      categoryIndex,
      variation: categoryIndex,
    });
  }
}

for (let i = requiredCombinations.length - 1; i > 0; i--) {
  const randomIndex = Math.floor(seededRandom(i * 97 + 43) * (i + 1));

  const temp = requiredCombinations[i];
  requiredCombinations[i] = requiredCombinations[randomIndex];
  requiredCombinations[randomIndex] = temp;
}

for (const combination of requiredCombinations) {
  if (contents.length >= 400) {
    break;
  }

  contents.push(
    createItem(
      id,
      combination.grade,
      combination.subject,
      combination.categoryIndex,
      combination.variation,
    ),
  );

  id += 1;
}

while (contents.length < 400) {
  const index = contents.length;

  const gradeIndex = Math.floor(seededRandom(index * 73 + 11) * grades.length);

  const grade = grades[gradeIndex];
  const subjects = getSubjects(grade);

  const subjectIndex = Math.floor(
    seededRandom(index * 89 + 17) * subjects.length,
  );

  const categoryIndex = Math.floor(
    seededRandom(index * 103 + 23) * categories.length,
  );

  const variation = Math.floor(index / 40) + 1;

  contents.push(
    createItem(id, grade, subjects[subjectIndex], categoryIndex, variation),
  );

  id += 1;
}

export { contents };
