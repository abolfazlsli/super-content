"use client";

import {
  BellOutlined,
  DashboardOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  CustomerServiceOutlined,
  WalletOutlined,
  WindowsOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Badge, Button, Col, Dropdown, Row, Space } from "antd";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  BookOpen,
  Brain,
  Calculator,
  ChevronLeft,
  CircleUserRound,
  FlaskConical,
  GraduationCap,
  Languages,
  Lightbulb,
  LogIn,
  Microscope,
  PencilRuler,
  School,
  UserRoundPlus,
} from "lucide-react";

import { userStor } from "../../store/user-store/userStore";
import { CuButton } from "../widgets/buttons";
import { Logout } from "../widgets/logout";
import { Logo } from "../widgets/logo";

type GradeMenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof School;
  subjects: {
    title: string;
    icon: typeof BookOpen;
  }[];
};

const gradeMenuItems: GradeMenuItem[] = [
  {
    id: "1",
    title: "پایه اول",
    subtitle: "دوره ابتدایی",
    icon: PencilRuler,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "2",
    title: "پایه دوم",
    subtitle: "دوره ابتدایی",
    icon: BookOpen,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "3",
    title: "پایه سوم",
    subtitle: "دوره ابتدایی",
    icon: Calculator,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "4",
    title: "پایه چهارم",
    subtitle: "دوره ابتدایی",
    icon: BookOpen,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "5",
    title: "پایه پنجم",
    subtitle: "دوره ابتدایی",
    icon: Lightbulb,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "6",
    title: "پایه ششم",
    subtitle: "دوره ابتدایی",
    icon: Brain,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "قرآن", icon: BookOpen },
      { title: "هدیه‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "7",
    title: "پایه هفتم",
    subtitle: "دوره متوسطه اول",
    icon: FlaskConical,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "انگلیسی", icon: Languages },
      { title: "پیام‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "8",
    title: "پایه هشتم",
    subtitle: "دوره متوسطه اول",
    icon: Brain,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "انگلیسی", icon: Languages },
      { title: "پیام‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "9",
    title: "پایه نهم",
    subtitle: "دوره متوسطه اول",
    icon: Calculator,
    subjects: [
      { title: "فارسی", icon: Languages },
      { title: "نگارش", icon: BookOpen },
      { title: "ریاضی", icon: Calculator },
      { title: "علوم تجربی", icon: FlaskConical },
      { title: "مطالعات اجتماعی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "انگلیسی", icon: Languages },
      { title: "پیام‌های آسمان", icon: BookOpen },
    ],
  },
  {
    id: "10",
    title: "پایه دهم",
    subtitle: "دوره متوسطه دوم",
    icon: BookOpen,
    subjects: [
      { title: "فارسی و نگارش", icon: Languages },
      { title: "دین و زندگی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "زبان انگلیسی", icon: Languages },
      { title: "ریاضی", icon: Calculator },
      { title: "فیزیک", icon: FlaskConical },
      { title: "شیمی", icon: Microscope },
      { title: "علوم و فنون ادبی", icon: BookOpen },
    ],
  },
  {
    id: "11",
    title: "پایه یازدهم",
    subtitle: "دوره متوسطه دوم",
    icon: Lightbulb,
    subjects: [
      { title: "فارسی و نگارش", icon: Languages },
      { title: "دین و زندگی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "زبان انگلیسی", icon: Languages },
      { title: "ریاضی", icon: Calculator },
      { title: "فیزیک", icon: FlaskConical },
      { title: "شیمی", icon: Microscope },
      { title: "علوم و فنون ادبی", icon: BookOpen },
    ],
  },
  {
    id: "12",
    title: "پایه دوازدهم",
    subtitle: "دوره متوسطه دوم",
    icon: GraduationCap,
    subjects: [
      { title: "فارسی و نگارش", icon: Languages },
      { title: "دین و زندگی", icon: BookOpen },
      { title: "عربی", icon: Languages },
      { title: "زبان انگلیسی", icon: Languages },
      { title: "ریاضی", icon: Calculator },
      { title: "فیزیک", icon: FlaskConical },
      { title: "شیمی", icon: Microscope },
      { title: "علوم و فنون ادبی", icon: BookOpen },
    ],
  },
];

const getBaseByGrade = (gradeId: string) => {
  const grade = Number(gradeId);

  if (grade <= 3) {
    return "elementary-first";
  }

  if (grade <= 6) {
    return "elementary-second";
  }

  if (grade <= 9) {
    return "middle-first";
  }

  return "middle-second";
};

export const MenuHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <Col className="w-full! rounded-b-xl bg-white! p-2 shadow-md">
      {children}
    </Col>
  );
};

export const RegisterMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href="/login" className="w-full cursor-pointer">
          <CuButton
            className="profileBtn mb-2! w-full!"
            icon={<LogIn size={19} strokeWidth={1.9} />}
          >
            <span className="text-[15px] font-medium">ورود</span>
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Link href="/register" className="w-full cursor-pointer">
          <CuButton
            className="profileBtn"
            icon={<UserRoundPlus size={19} strokeWidth={1.9} />}
          >
            <span className="text-[15px] font-medium">ثبت نام</span>
          </CuButton>
        </Link>
      </Row>
    </MenuHolder>
  );
};

export const DashboardMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href="/dashboard" className="w-full! cursor-pointer">
          <CuButton className="profileBtn w-full!" icon={<DashboardOutlined />}>
            داشبورد
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Link href="/register" className="w-full cursor-pointer">
          <CuButton className="profileBtn" icon={<WalletOutlined />}>
            کیف پول
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Logout />
      </Row>
    </MenuHolder>
  );
};

const mobileNavigation = [
  { label: "خانه", href: "/", icon: <HomeOutlined /> },
  { label: "دسته‌بندی‌ها", href: "#", icon: <WindowsOutlined /> },
  { label: "درباره ما", href: "about-us", icon: <FileTextOutlined /> },
  {
    label: "پشتیبانی",
    href: "#",
    icon: <CustomerServiceOutlined />,
  },
];

function CategoriesMegaMenu() {
  const [activeGrade, setActiveGrade] = useState<string | null>(null);

  const activeGradeData = gradeMenuItems.find(
    (grade) => grade.id === activeGrade,
  );

  const ActiveGradeIcon = activeGradeData?.icon;

  return (
    <div
      dir="rtl"
      onMouseLeave={() => setActiveGrade(null)}
      className="w-[min(52rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
    >
      <div className="flex min-h-[27rem]">
        <div className="w-[19rem] shrink-0 border-l border-slate-100 bg-slate-50/70 p-3">
          <div className="mb-3 px-3">
            <p className="text-xs font-semibold text-slate-400">انتخاب پایه</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              مقاطع تحصیلی
            </p>
          </div>

          <div className="space-y-1">
            {gradeMenuItems.map((grade) => {
              const Icon = grade.icon;
              const isActive = activeGrade === grade.id;

              return (
                <Link
                  key={grade.id}
                  href={`/contents?base=${getBaseByGrade(grade.id)}&level=${grade.id}`}
                  onMouseEnter={() => setActiveGrade(grade.id)}
                  className={`group flex! w-full! min-w-0! flex-nowrap! items-center! gap-2! overflow-hidden rounded-xl px-3 py-2.5 text-right transition-all duration-200 ${
                    isActive
                      ? "bg-white text-(--primary) shadow-sm ring-1 ring-slate-200/80"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex! size-8! shrink-0! items-center! justify-center! rounded-lg transition-colors ${
                      isActive
                        ? "bg-(--primary)/10 text-(--primary)"
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </span>

                  <span className="flex! min-w-max! shrink-0! flex-nowrap! items-center! gap-2! whitespace-nowrap!">
                    <span className="shrink-0! whitespace-nowrap! text-sm font-semibold">
                      {grade.title}
                    </span>
                    <span className="shrink-0! whitespace-nowrap! text-[10px] text-slate-400">
                      {grade.subtitle}
                    </span>
                  </span>

                  <ChevronLeft
                    size={15}
                    className={`mr-auto! shrink-0! ${
                      isActive
                        ? "-translate-x-0.5 text-(--primary)"
                        : "text-slate-300"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {activeGradeData && ActiveGradeIcon && (
          <div className="min-w-0 flex-1 bg-white p-5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <ActiveGradeIcon size={17} strokeWidth={1.8} />
                </span>

                <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                  <h3 className="shrink-0 text-sm font-bold text-slate-900">
                    {activeGradeData.title}
                  </h3>
                  <span className="truncate text-[10px] text-slate-400">
                    {activeGradeData.subtitle}
                  </span>
                </div>
              </div>

              <Link
                href={`/contents?base=${getBaseByGrade(activeGradeData.id)}&level=${activeGradeData.id}`}
                className="flex! shrink-0! flex-nowrap! items-center! gap-1! whitespace-nowrap! rounded-lg px-2 py-1.5 text-[11px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-(--primary)"
              >
                <span className="shrink-0! whitespace-nowrap!">مشاهده همه</span>
                <ChevronLeft size={13} className="shrink-0!" />
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {activeGradeData.subjects.map((subject) => {
                const Icon = subject.icon;

                return (
                  <Link
                    key={subject.title}
                    href={`/contents?base=${getBaseByGrade(activeGradeData.id)}&level=${activeGradeData.id}&subject=${encodeURIComponent(subject.title)}`}
                    className="group flex h-20 min-w-0 flex-nowrap items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 px-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--primary)/20 hover:bg-(--primary)/5 hover:shadow-sm"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white text-slate-400 shadow-sm ring-1 ring-slate-100 transition-colors group-hover:text-(--primary)">
                      <Icon size={15} strokeWidth={1.8} />
                    </span>

                    <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
                      <span className="text-[13px] font-semibold text-slate-700 transition-colors group-hover:text-(--primary)">
                        {subject.title}
                      </span>

                      <ChevronLeft
                        size={13}
                        strokeWidth={1.8}
                        className="shrink-0 text-slate-400 transition-colors group-hover:text-(--primary)"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <BookOpen size={15} className="shrink-0 text-slate-400" />
                <span className="truncate text-[11px] text-slate-500">
                  محتوای آموزشی، نمونه سؤال و جزوه‌های این پایه
                </span>
              </div>

              <Link
                href={`/contents?base=${getBaseByGrade(activeGradeData.id)}&level=${activeGradeData.id}`}
                className="shrink-0 text-[11px] font-semibold text-(--primary) hover:underline"
              >
                ورود به پایه
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const { userInfo } = userStor();
  const pathname = usePathname();

  const [loading, setLoading] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    setCategoriesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-99 w-full">
        <div className="absolute inset-0 rounded-b-[30%] backdrop-blur-2xl" />
        <div className="absolute inset-0 bottom-0 bg-linear-to-b from-white via-white/70 via-60% to-transparent" />

        <div className="relative z-10 flex min-h-[3.75rem] items-center justify-center px-[1.25rem] pt-[0.5rem] md:px-[2.5rem] md:pt-[1.25rem]">
          <header className="header w-full max-w-[87rem] rounded-3xl shadow-cu">
            <div className="headerInner max-[1199px]:flex! max-[1199px]:w-full! max-[1199px]:items-center! max-[1199px]:gap-3! max-md:gap-2!">
              <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                className="hidden! h-9! w-9! shrink-0! items-center! justify-center! p-0! max-[1199px]:flex!"
                onClick={() => setMobileMenuOpen((value) => !value)}
              />

              <Link
                href="/"
                className="logo cursor-pointer max-[1199px]:shrink-0!"
                aria-label="بعثت محتوا"
              >
                <Logo />
              </Link>

              <div className="relative mx-6 w-full max-w-md max-[1199px]:mx-0! max-[1199px]:min-w-0! max-[1199px]:flex-1! max-[1199px]:max-w-none!">
                <input
                  type="text"
                  placeholder="جستجو در محتوا..."
                  className="h-11 w-full rounded-full bg-gray-100 px-5 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200 max-md:text-[13px]"
                />
              </div>

              <nav className="nav flex! shrink-0! items-center! gap-6! max-[1199px]:hidden!">
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  className={`relative flex h-full shrink-0! items-center! whitespace-nowrap! border-b-2 transition-colors ${
                    pathname === "/"
                      ? "border-(--primary) text-(--primary)! font-bold"
                      : "border-transparent text-slate-800!"
                  }`}
                >
                  خانه
                </Link>
                <div
                  className="relative flex shrink-0! items-center!"
                  onMouseEnter={() => setCategoriesOpen(true)}
                  onMouseLeave={() => setCategoriesOpen(false)}
                >
                  <Link
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="shrink-0! whitespace-nowrap! text-[15px] font-medium text-slate-800"
                  >
                    دسته‌بندی‌ها
                  </Link>

                  {categoriesOpen && (
                    <div className="absolute right-1/2 top-full z-100 translate-x-1/2 pt-6">
                      <CategoriesMegaMenu />
                    </div>
                  )}
                </div>

                <Link
                  href="/about-us"
                  className="shrink-0! whitespace-nowrap! text-[15px] font-medium text-slate-800"
                >
                  درباره ما
                </Link>

                <Link
                  href="/under-construction"
                  className="shrink-0! whitespace-nowrap! text-[15px] font-medium text-slate-800"
                >
                  پشتیبانی
                </Link>
              </nav>

              <Space size={6} className="max-[1199px]:hidden!">
                <Button
                  type="text"
                  shape="circle"
                  className="cursor-pointer"
                  icon={<HeartOutlined style={{ fontSize: 19 }} />}
                />

                <Badge dot>
                  <Button
                    type="text"
                    shape="circle"
                    className="cursor-pointer"
                    icon={<BellOutlined style={{ fontSize: 19 }} />}
                  />
                </Badge>

                <Dropdown
                  trigger={["click"]}
                  popupRender={() =>
                    userInfo?.name ? <DashboardMenu /> : <RegisterMenu />
                  }
                >
                  <Button
                    className="profileBtn mt-0! max-w-[180px]! cursor-pointer overflow-hidden"
                    icon={<CircleUserRound size={21} strokeWidth={1.8} />}
                    loading={loading}
                  >
                    <span className="truncate">
                      {userInfo?.name ?? "ورود | ثبت نام"}
                    </span>
                  </Button>
                </Dropdown>
              </Space>

              <div className="hidden! shrink-0! items-center max-[1199px]:flex! max-md:hidden!">
                <Dropdown
                  trigger={["click"]}
                  popupRender={() =>
                    userInfo?.name ? <DashboardMenu /> : <RegisterMenu />
                  }
                >
                  <Button
                    className="profileBtn mt-0! h-10! max-w-[140px]! min-w-0! cursor-pointer overflow-hidden px-3! max-[900px]:max-w-[110px]!"
                    icon={<CircleUserRound size={20} strokeWidth={1.8} />}
                    loading={loading}
                  >
                    <span className="truncate text-sm">
                      {userInfo?.name ?? "ورود | ثبت نام"}
                    </span>
                  </Button>
                </Dropdown>
              </div>
            </div>

            <div
              dir="rtl"
              className={`absolute right-0 top-full z-100 mt-1 w-[220px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-[1199px]:block! min-[1200px]:hidden! ${
                mobileMenuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-3 scale-95 opacity-0"
              }`}
            >
              {mobileNavigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 45 + 80}ms`
                      : "0ms",
                  }}
                  className={`flex h-11 w-full items-center justify-start gap-3 rounded-xl px-4 text-right text-sm font-medium text-slate-800 transition-[opacity,transform,background-color,color] duration-300 ease-out hover:bg-(--primary)/6 hover:text-(--primary) ${
                    mobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <span className="flex w-5 shrink-0 items-center justify-center text-[16px] text-slate-500 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </header>
        </div>
      </div>

      <div className="h-20 w-full md:h-24" />
    </>
  );
}
