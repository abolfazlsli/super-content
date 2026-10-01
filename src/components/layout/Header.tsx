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
import { memo, useEffect, useState } from "react";
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
  icon: typeof PencilRuler;
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
  {
    label: "خانه",
    href: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "دسته‌بندی‌ها",
    href: "#",
    icon: <WindowsOutlined />,
  },
  {
    label: "درباره ما",
    href: "/about-us",
    icon: <FileTextOutlined />,
  },
  {
    label: "پشتیبانی",
    href: "/under-construction",
    icon: <CustomerServiceOutlined />,
  },
];

const CategoriesMegaMenu = memo(function CategoriesMegaMenu() {
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
});

export default function Header() {
  const { userInfo } = userStor();
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileActiveGrade, setMobileActiveGrade] = useState("1");

  useEffect(() => {
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const activeMobileGrade = gradeMenuItems.find(
    (grade) => grade.id === mobileActiveGrade,
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[99] w-full">
        <div className="absolute inset-0 rounded-b-[30%] backdrop-blur-2xl" />
        <div className="absolute inset-0 bottom-0 bg-linear-to-b from-white via-white/70 via-60% to-transparent" />

        <div className="relative z-10 flex min-h-[3.75rem] w-full items-center justify-center px-3 pt-2 sm:px-4 md:px-10 md:pt-5">
          <header className="relative w-full max-w-[87rem] rounded-3xl bg-white/96 shadow-cu">
            <div className="flex min-h-[4.5rem] w-full min-w-0 items-center gap-3 px-4 sm:px-5 md:px-6 max-[1199px]:gap-3 max-md:min-h-[3.875rem] max-md:gap-2 max-md:px-3">
              <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                className="flex! h-9! w-9! shrink-0! items-center! justify-center! p-0! min-[1200px]:hidden!"
                onClick={() => {
                  setMobileMenuOpen((value) => !value);
                  setMobileCategoriesOpen(false);
                }}
              />

              <Link
                href="/"
                className="flex! shrink-0! items-center!"
                aria-label="بعثت محتوا"
              >
                <Logo />
              </Link>

              <div className="relative min-w-0 flex-1 max-w-md min-[1200px]:mx-6! min-[1200px]:ml-auto!">
                <input
                  type="text"
                  placeholder="جستجو در محتوا..."
                  className="h-11 w-full rounded-full bg-gray-100 px-5 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200 max-md:h-9 max-md:px-4 max-md:text-[12px]"
                />
              </div>

              <nav className="flex shrink-0 items-center gap-6 max-[1199px]:hidden!">
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  className={`relative flex h-full shrink-0 items-center whitespace-nowrap border-b-2 text-[15px] transition-colors ${
                    pathname === "/"
                      ? "border-(--primary) font-bold text-(--primary)!"
                      : "border-transparent text-slate-800!"
                  }`}
                >
                  خانه
                </Link>

                <div
                  className="relative flex shrink-0 items-center"
                  onMouseEnter={() => setCategoriesOpen(true)}
                  onMouseLeave={() => setCategoriesOpen(false)}
                >
                  <Link
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="shrink-0 whitespace-nowrap text-[15px] font-medium text-slate-800"
                  >
                    دسته‌بندی‌ها
                  </Link>

                  {categoriesOpen && (
                    <div className="absolute right-1/2 top-full z-[100] translate-x-1/2 pt-6">
                      <CategoriesMegaMenu />
                    </div>
                  )}
                </div>

                <Link
                  href="/about-us"
                  className="shrink-0 whitespace-nowrap text-[15px] font-medium text-slate-800"
                >
                  درباره ما
                </Link>

                <Link
                  href="/under-construction"
                  className="shrink-0 whitespace-nowrap text-[15px] font-medium text-slate-800"
                >
                  پشتیبانی
                </Link>
              </nav>

              <Space size={6} className="shrink-0 max-[1199px]:hidden!">
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
                    className="mt-0! flex! max-w-[180px]! cursor-pointer items-center! overflow-hidden bg-[#f5f7fb]! px-3! text-[#53617b]!"
                    icon={<CircleUserRound size={21} strokeWidth={1.8} />}
                    loading={loading}
                  >
                    <span className="truncate">
                      {userInfo?.name ?? "ورود | ثبت نام"}
                    </span>
                  </Button>
                </Dropdown>
              </Space>

              <div className="hidden shrink-0 items-center min-[768px]:flex! min-[1200px]:hidden!">
                <Dropdown
                  trigger={["click"]}
                  popupRender={() =>
                    userInfo?.name ? <DashboardMenu /> : <RegisterMenu />
                  }
                >
                  <Button
                    className="mt-0! h-10! max-w-[140px]! min-w-0! cursor-pointer! overflow-hidden bg-[#f5f7fb]! px-3! text-[#53617b]! max-[900px]:max-w-[110px]!"
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
              className={`absolute inset-x-0 top-full z-[100] mt-1 box-border w-full max-w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1200px]:hidden! ${
                mobileMenuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-3 scale-95 opacity-0"
              }`}
            >
              {!mobileCategoriesOpen ? (
                <div className="w-full p-1.5">
                  {mobileNavigation.map((item, index) =>
                    item.label === "دسته‌بندی‌ها" ? (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setMobileActiveGrade("1");
                          setMobileCategoriesOpen(true);
                        }}
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
                        <span className="flex w-5 shrink-0 items-center justify-center text-[16px] text-slate-500">
                          {item.icon}
                        </span>

                        <span className="min-w-0 truncate">{item.label}</span>

                        <ChevronLeft
                          size={15}
                          className="mr-auto shrink-0 text-slate-400"
                        />
                      </button>
                    ) : (
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
                        <span className="flex w-5 shrink-0 items-center justify-center text-[16px] text-slate-500">
                          {item.icon}
                        </span>

                        <span className="min-w-0 truncate">{item.label}</span>
                      </Link>
                    ),
                  )}
                </div>
              ) : (
                <div className="w-full min-w-0 overflow-hidden overscroll-contain">
                  <div className="flex h-12 min-w-0 items-center gap-2 border-b border-slate-100 px-3">
                    <button
                      type="button"
                      onClick={() => setMobileCategoriesOpen(false)}
                      aria-label="بازگشت به منوی اصلی"
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-(--primary)"
                    >
                      <ChevronLeft size={19} />
                    </button>

                    <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-800">
                      دسته‌بندی محتوا
                    </span>
                  </div>

                  <div className="grid min-w-0 grid-cols-[minmax(6.5rem,34%)_minmax(0,1fr)]">
                    <div className="min-w-0 border-l border-slate-100 bg-slate-50/70 p-1.5">
                      <p className="mb-2 px-2 pt-2 text-[11px] font-semibold text-slate-400">
                        انتخاب پایه
                      </p>

                      <div className="space-y-0.5">
                        {gradeMenuItems.map((grade) => {
                          const Icon = grade.icon;
                          const isActive = mobileActiveGrade === grade.id;

                          return (
                            <button
                              key={grade.id}
                              type="button"
                              onClick={() => setMobileActiveGrade(grade.id)}
                              className={`flex min-h-9 w-full min-w-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-right transition-colors ${
                                isActive
                                  ? "bg-white text-(--primary) shadow-sm ring-1 ring-slate-200/80"
                                  : "text-slate-600 hover:bg-white"
                              }`}
                            >
                              <Icon
                                size={14}
                                className={`shrink-0 ${
                                  isActive
                                    ? "text-(--primary)"
                                    : "text-slate-400"
                                }`}
                              />

                              <span className="min-w-0 flex-1 truncate text-[11px] font-semibold">
                                {grade.title}
                              </span>

                              {isActive && (
                                <ChevronLeft
                                  size={12}
                                  className="shrink-0 text-(--primary)"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="min-w-0 bg-white p-2.5">
                      {activeMobileGrade && (
                        <>
                          <div className="mb-3 flex min-w-0 items-center justify-between gap-2 border-b border-slate-100 pb-3">
                            <span className="min-w-0 flex-1 truncate text-xs font-bold text-slate-800">
                              {activeMobileGrade.title}
                            </span>

                            <Link
                              href={`/contents?base=${getBaseByGrade(activeMobileGrade.id)}&level=${activeMobileGrade.id}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="shrink-0 whitespace-nowrap text-[11px] font-semibold text-(--primary)"
                            >
                              مشاهده همه
                            </Link>
                          </div>

                          <div className="space-y-1.5">
                            {activeMobileGrade.subjects.map((subject) => {
                              const Icon = subject.icon;

                              return (
                                <Link
                                  key={subject.title}
                                  href={`/contents?base=${getBaseByGrade(activeMobileGrade.id)}&level=${activeMobileGrade.id}&subject=${encodeURIComponent(subject.title)}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="group flex min-h-10 w-full min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/50 px-2.5 py-2 transition-colors hover:border-(--primary)/20 hover:bg-(--primary)/5"
                                >
                                  <Icon
                                    size={15}
                                    className="shrink-0 text-slate-400 transition-colors group-hover:text-(--primary)"
                                  />

                                  <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-slate-700 group-hover:text-(--primary)">
                                    {subject.title}
                                  </span>

                                  <ChevronLeft
                                    size={12}
                                    className="shrink-0 text-slate-300 group-hover:text-(--primary)"
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>
        </div>
      </div>

      <div className="h-20 w-full md:h-24" />
    </>
  );
}
