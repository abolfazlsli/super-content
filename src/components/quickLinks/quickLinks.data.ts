import {
  LibraryBig,
  BookOpen,
  Building2,
  FileQuestion,
  GraduationCap,
  Library,
  MessageCircleQuestion,
  NotebookTabs,
  School,
  Users,
} from "lucide-react";

export const quickLinks = [
  {
    id: "questions",
    title: "نمونه سوال",
    href: "/questions",
    icon: FileQuestion,
  },
  {
    id: "exams",
    title: "آزمون آنلاین",
    href: "/exams",
    icon: NotebookTabs,
  },
  {
    id: "files",
    title: "فایل آموزشی",
    href: "/files",
    icon: Library,
  },
  {
    id: "qa",
    title: "پرسش و پاسخ",
    href: "/questions-and-answers",
    icon: MessageCircleQuestion,
  },
  {
    id: "tutorials",
    title: "درسنامه",
    href: "/tutorials",
    icon: BookOpen,
  },
  {
    id: "question-bank",
    title: "گنجینه سوال",
    href: "/question-bank",
    icon: LibraryBig,
  },
  {
    id: "courses",
    title: "دوره آموزشی",
    href: "/courses",
    icon: GraduationCap,
  },
  {
    id: "teachers",
    title: "باشگاه معلمان",
    href: "/teachers",
    icon: Users,
  },
  {
    id: "schools",
    title: "مدرسه یاب",
    href: "/schools",
    icon: School,
  },
  {
    id: "more",
    title: "بیشتر",
    href: "/categories",
    icon: Building2,
  },
];
