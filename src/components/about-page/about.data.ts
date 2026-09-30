import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileQuestion,
  Lightbulb,
  MessageCircle,
  PencilLine,
  PlayCircle,
  Target,
  Trophy,
  Users,
  Video,
} from "lucide-react";

export const ecosystemItems = [
  {
    icon: FileQuestion,
    title: "نمونه سؤال",
    description: "تمرین، مرور و آمادگی برای آزمون",
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    tag: "کشف و تمرین",
  },
  {
    icon: BookOpen,
    title: "درسنامه و جزوه",
    description: "یادگیری عمیق و جمع‌بندی مطالب",
    background: "#d9d1fb",
    iconClass: "text-violet-700",
    tag: "فهمیدن",
  },
  {
    icon: Video,
    title: "ویدئوی آموزشی",
    description: "یادگیری تصویری و مرحله‌به‌مرحله",
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    tag: "یادگیری",
  },
  {
    icon: ClipboardList,
    title: "آزمون و تمرین",
    description: "سنجش آموخته‌ها و پیدا کردن نقاط ضعف",
    background: "#f8eac9",
    iconClass: "text-amber-700",
    tag: "سنجش",
  },
];

export const values = [
  {
    icon: Lightbulb,
    title: "سادگی در یادگیری",
    description:
      "تجربه‌ای طراحی می‌کنیم که پیدا کردن محتوای مناسب، ساده و بدون سردرگمی باشد.",
    background: "#f8eac9",
    iconClass: "text-amber-700",
    size: "lg:col-span-5",
  },
  {
    icon: CheckCircle2,
    title: "محتوای کاربردی",
    description:
      "محتوا باید برای مطالعه، تمرین و آمادگی آزمون واقعاً قابل استفاده باشد.",
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    size: "lg:col-span-3",
  },
  {
    icon: Users,
    title: "رشد در کنار هم",
    description:
      "یادگیری وقتی ارزش بیشتری پیدا می‌کند که دانش‌آموز، مدرس و محتوا در یک مسیر باشند.",
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    size: "lg:col-span-4",
  },
];

export const mapStops = [
  {
    id: "۰۱",
    title: "شروع",
    kicker: "ایستگاه اول",
    description: "نیازت را مشخص کن و نقطه شروع مناسب را پیدا کن.",
    icon: Target,
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    x: 1060,
    y: 126,
    region: "کشف",
    desktopPosition: "right-[4%] top-[10%]",
    mobilePosition: "right-[2%] top-[4%]",
  },
  {
    id: "۰۲",
    title: "یادگیری",
    kicker: "ایستگاه دوم",
    description: "محتوایی را انتخاب کن که به سطح و هدفت نزدیک‌تر است.",
    icon: BookOpen,
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    x: 758,
    y: 258,
    region: "یادگیری",
    desktopPosition: "left-[23%] top-[39%]",
    mobilePosition: "left-[2%] top-[28%]",
  },
  {
    id: "۰۳",
    title: "تمرین",
    kicker: "ایستگاه سوم",
    description: "با حل سؤال و تمرین، دانستن را به توانستن تبدیل کن.",
    icon: PencilLine,
    background: "#f8eac9",
    iconClass: "text-amber-700",
    x: 458,
    y: 352,
    region: "تمرین",
    desktopPosition: "left-[35%] top-[8%]",
    mobilePosition: "right-[2%] top-[53%]",
  },
  {
    id: "۰۴",
    title: "رشد",
    kicker: "ایستگاه چهارم",
    description: "قدم بعدی را انتخاب کن و مسیر را ادامه بده.",
    icon: Trophy,
    background: "#dfe5fb",
    iconClass: "text-indigo-700",
    x: 110,
    y: 468,
    region: "رشد",
    desktopPosition: "left-[3%] bottom-[8%]",
    mobilePosition: "left-[2%] top-[77%]",
  },
];

export const aboutIntroCards = [
  {
    icon: MessageCircle,
    title: "از یک سؤال شروع می‌شود",
    description:
      "گاهی تنها چیزی که لازم داریم، یک توضیح درست، یک تمرین مناسب یا یک نمونه‌سؤال خوب است.",
    background: "#d0f0fe",
    iconClass: "text-sky-700",
  },
  {
    icon: PlayCircle,
    title: "هرکس مسیر خودش را دارد",
    description:
      "قرار نیست همه یک شکل یاد بگیرند؛ تجربه یادگیری باید با نیاز، پایه و هدف هر فرد هماهنگ شود.",
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
  },
];

export const aboutIntroTags = [
  ["یادگیری ساده", "#d0f0fe"],
  ["محتوای کاربردی", "#d1ecdd"],
  ["تجربه یکپارچه", "#f8eac9"],
];

export const aboutCtaItems = ["کشف", "یادگیری", "تمرین", "رشد"];

export const aboutCtaColors = ["#d0f0fe", "#d1ecdd", "#f8eac9", "#dfe5fb"];
