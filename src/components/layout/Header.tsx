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
import { memo, useEffect, useMemo, useState } from "react";
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
import {
  contentsHref,
  getCategoryCounts,
  useTaxonomy,
  type CategoryCounts,
} from "../../services/taxonomy";

type GradeMenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof PencilRuler;
  baseId: string;
  subjects: {
    id: string;
    title: string;
    icon: typeof BookOpen;
  }[];
};

const gradeIcons = [PencilRuler, BookOpen, Calculator, Lightbulb, Brain, FlaskConical, GraduationCap];

const subjectIcons: { match: string; icon: typeof BookOpen }[] = [
  { match: "ریاضی", icon: Calculator },
  { match: "علوم", icon: FlaskConical },
  { match: "زبان", icon: Languages },
  { match: "ادبیات", icon: BookOpen },
  { match: "فیزیک", icon: Brain },
  { match: "شیمی", icon: Microscope },
];

/* منوی پایه‌ها : مقطع (گروه) ← پایه (دسته‌بندی) ، درس‌ها از گروه‌های درسی */
const useGradeMenuItems = (): GradeMenuItem[] => {
  const { grades, subjects } = useTaxonomy();

  return useMemo(() => {
    const subjectItems = subjects.map((group) => ({
      id: group.id,
      title: group.name,
      icon:
        subjectIcons.find((item) => group.name.includes(item.match))?.icon ??
        BookOpen,
    }));

    let index = 0;
    return grades.flatMap((group) =>
      group.categories.map((category) => ({
        id: category.id,
        title: category.name,
        subtitle: group.name,
        baseId: group.id,
        icon: gradeIcons[index++ % gradeIcons.length],
        subjects: subjectItems,
      })),
    );
  }, [grades, subjects]);
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

const formatCount = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

/* مگامنو : مقطع‌ها ← پایه‌ها (راست) ، درس‌ها و نوع محتوای پایه انتخاب شده با تعداد واقعی (چپ) */
const CategoriesMegaMenu = memo(function CategoriesMegaMenu() {
  const { grades, subjects, types, loading } = useTaxonomy();
  const [activeGrade, setActiveGrade] = useState<string | null>(null);
  const [counts, setCounts] = useState<CategoryCounts>({});

  const gradeIds = useMemo(
    () => grades.flatMap((group) => group.categories.map((category) => category.id)),
    [grades],
  );

  useEffect(() => {
    const cols = [
      ...subjects.flatMap((group) => group.categories.map((category) => category.id)),
      ...types.map((type) => type.id),
    ];
    getCategoryCounts(gradeIds, cols).then(setCounts);
  }, [gradeIds, subjects, types]);

  // پیش‌فرض اولین پایه
  const activeId = activeGrade ?? gradeIds[0] ?? null;
  const activeGroup = grades.find((group) =>
    group.categories.some((category) => category.id === activeId),
  );
  const activeCategory = activeGroup?.categories.find(
    (category) => category.id === activeId,
  );
  const gradeCounts = (activeId && counts[activeId]) || {};

  if (loading) {
    return (
      <div className="w-[min(56rem,calc(100vw-2rem))] rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
        <div className="h-64 animate-pulse rounded-xl bg-slate-100" />
      </div>
    );
  }

  if (!grades.length) {
    return (
      <div className="w-[min(30rem,calc(100vw-2rem))] rounded-[1.5rem] border border-slate-200/80 bg-white p-6 text-center text-sm text-slate-500 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
        هنوز پایه تحصیلی ثبت نشده است
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="w-[min(56rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
    >
      <div className="flex h-[30rem]">
        <div className="cu-content-scroll w-[17rem] shrink-0 overflow-y-auto border-l border-slate-100 bg-slate-50/70 p-3">
          {grades.map((group) => (
            <div key={group.id} className="mb-3 last:mb-0">
              <Link
                href={contentsHref({ base: group.id })}
                className="mb-1 flex items-center justify-between px-3 py-1 text-[11px] font-bold text-slate-400 hover:text-(--primary)"
              >
                <span>{group.name}</span>
                {group.caption && (
                  <span className="text-[10px] font-medium">{group.caption}</span>
                )}
              </Link>

              <div className="space-y-1">
                {group.categories.map((category, index) => {
                  const isActive = activeId === category.id;
                  const Icon = gradeIcons[index % gradeIcons.length];
                  const total = counts[category.id]?.total ?? 0;

                  return (
                    <Link
                      key={category.id}
                      href={contentsHref({ base: group.id, level: category.id })}
                      onMouseEnter={() => setActiveGrade(category.id)}
                      className={`group flex! w-full! min-w-0! flex-nowrap! items-center! gap-2! rounded-xl px-3 py-2 text-right transition-all duration-200 ${
                        isActive
                          ? "bg-white text-(--primary) shadow-sm ring-1 ring-slate-200/80"
                          : "text-slate-600 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`flex! size-7! shrink-0! items-center! justify-center! rounded-lg transition-colors ${
                          isActive
                            ? "bg-(--primary)/10 text-(--primary)"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                        }`}
                      >
                        <Icon size={15} strokeWidth={1.8} />
                      </span>

                      <span className="truncate text-sm font-semibold">
                        {category.name}
                      </span>

                      <span className="mr-auto! shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                        {formatCount(total)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {activeGroup && activeCategory && (
          <div className="cu-content-scroll min-w-0 flex-1 overflow-y-auto bg-white p-5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                <h3 className="shrink-0 text-sm font-bold text-slate-900">
                  {activeCategory.name}
                </h3>
                <span className="truncate text-[10px] text-slate-400">
                  {activeGroup.name}
                </span>
              </div>

              <Link
                href={contentsHref({ base: activeGroup.id, level: activeCategory.id })}
                className="flex! shrink-0! items-center! gap-1! rounded-lg px-2 py-1.5 text-[11px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-(--primary)"
              >
                مشاهده همه
                <ChevronLeft size={13} />
              </Link>
            </div>

            {types.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-[11px] font-bold text-slate-400">نوع محتوا</p>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <Link
                      key={type.id}
                      href={contentsHref({ base: activeGroup.id, level: activeCategory.id, type: type.id })}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/60 px-2.5 py-1.5 text-[12px] font-semibold text-slate-600 transition-colors hover:border-(--primary)/20 hover:bg-(--primary)/5 hover:text-(--primary)"
                    >
                      {type.name}
                      <span className="text-[10px] text-slate-400">
                        {formatCount(gradeCounts[type.id] ?? 0)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 grid grid-cols-2 gap-3">
              {subjects.map((group) => {
                const Icon =
                  subjectIcons.find((item) => group.name.includes(item.match))?.icon ??
                  BookOpen;

                return (
                  <div
                    key={group.id}
                    className="rounded-xl border border-slate-100 bg-slate-50/40 p-3"
                  >
                    <Link
                      href={contentsHref({ base: activeGroup.id, level: activeCategory.id, subject: group.id })}
                      className="group flex items-center gap-2"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white text-slate-400 shadow-sm ring-1 ring-slate-100 transition-colors group-hover:text-(--primary)">
                        <Icon size={14} strokeWidth={1.8} />
                      </span>
                      <span className="text-[13px] font-bold text-slate-700 transition-colors group-hover:text-(--primary)">
                        {group.name}
                      </span>
                    </Link>

                    {group.categories.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.categories.map((category) => (
                          <Link
                            key={category.id}
                            href={contentsHref({ base: activeGroup.id, level: activeCategory.id, subject: category.id })}
                            className="rounded-md bg-white px-2 py-1 text-[11px] text-slate-500 ring-1 ring-slate-100 transition-colors hover:text-(--primary) hover:ring-(--primary)/20"
                          >
                            {category.name}
                            <span className="mr-1 text-[10px] text-slate-400">
                              {formatCount(gradeCounts[category.id] ?? 0)}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
  const gradeMenuItems = useGradeMenuItems();
  const [mobileActiveGrade, setMobileActiveGrade] = useState("");

  useEffect(() => {
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const activeMobileGrade =
    gradeMenuItems.find((grade) => grade.id === mobileActiveGrade) ??
    gradeMenuItems[0];

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
                          const isActive = activeMobileGrade?.id === grade.id;

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
                              href={contentsHref({ base: activeMobileGrade.baseId, level: activeMobileGrade.id })}
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
                                  key={subject.id}
                                  href={contentsHref({ base: activeMobileGrade.baseId, level: activeMobileGrade.id, subject: subject.id })}
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
