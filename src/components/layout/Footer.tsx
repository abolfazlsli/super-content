"use client";

import {
  ArrowLeft,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Youtube,
} from "lucide-react";

import { Button, Col, Divider, Grid, Row, Space, Typography } from "antd";

import Link from "next/link";

const { Text, Title } = Typography;

const footerColumns = [
  {
    title: "یادگیری",
    links: [
      { title: "دوره‌های آموزشی", href: "/courses" },
      { title: "دوره‌های پرطرفدار", href: "/courses?sort=popular" },
      { title: "جدیدترین دوره‌ها", href: "/courses?sort=newest" },
      { title: "دسته‌بندی‌ها", href: "/categories" },
      { title: "مسیرهای یادگیری", href: "/learning-paths" },
    ],
  },
  {
    title: "محتوا",
    links: [
      { title: "محتوای آموزشی", href: "/content" },
      { title: "وبلاگ", href: "/blog" },
      { title: "منابع رایگان", href: "/free" },
      { title: "پیشنهادهای ویژه", href: "/offers" },
      { title: "مدرسین", href: "/instructors" },
    ],
  },
  {
    title: "کاربران",
    links: [
      { title: "حساب کاربری", href: "/dashboard" },
      { title: "دوره‌های من", href: "/dashboard/courses" },
      { title: "علاقه‌مندی‌ها", href: "/dashboard/favorites" },
      { title: "پشتیبانی", href: "/support" },
      { title: "سؤالات متداول", href: "/faq" },
    ],
  },
  {
    title: "محتوا پلاس",
    links: [
      { title: "درباره ما", href: "/about" },
      { title: "تماس با ما", href: "/contact" },
      { title: "همکاری با ما", href: "/careers" },
      { title: "قوانین و مقررات", href: "/terms" },
      { title: "حریم خصوصی", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { title: "گیت‌هاب", href: "#", icon: Github },
  { title: "اینستاگرام", href: "#", icon: Instagram },
  { title: "لینکدین", href: "#", icon: Linkedin },
  { title: "تلگرام", href: "#", icon: Send },
  { title: "یوتیوب", href: "#", icon: Youtube },
];

export default function Footer() {
  const screens = Grid.useBreakpoint();

  return (
    <footer
      dir="rtl"
      className="relative mt-16 overflow-hidden bg-[#10152B] text-white"
    >
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#0C89FE]/12 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-[#4A3BD0]/12 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <Row
          gutter={[48, 48]}
          className="py-14 md:py-16 lg:py-20"
        >
          <Col xs={24} lg={8} xl={7}>
            <div className="max-w-[390px]">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 no-underline"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0C89FE] to-[#4A3BD0] text-2xl font-black text-white shadow-[0_10px_30px_rgba(12,137,254,0.2)] transition-transform duration-300 group-hover:-translate-y-1">
                  ◖
                </span>

                <Title
                  level={3}
                  className="!m-0 !text-[22px] !font-black !tracking-tight !text-white"
                >
                  محتوا پلاس
                </Title>
              </Link>

              <p className="mt-5 text-sm leading-8 text-white/65">
                یک فضای ساده و کاربردی برای پیدا کردن دوره‌ها، منابع آموزشی و
                محتوای دیجیتال مورد نیاز برای یادگیری و رشد حرفه‌ای.
              </p>

              <Space
                wrap
                size={8}
                className="!mt-7"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Button
                      key={social.title}
                      type="text"
                      aria-label={social.title}
                      href={social.href}
                      icon={<Icon size={17} strokeWidth={1.8} />}
                      className="!flex !h-10 !w-10 !items-center !justify-center !rounded-xl !border !border-white/10 !bg-white/[0.04] !p-0 !text-white/65 transition-all duration-300 hover:-translate-y-1 hover:!border-[#38D9F5]/40 hover:!bg-[#0C89FE]/15 hover:!text-[#38D9F5]"
                    />
                  );
                })}
              </Space>

              <Space
                direction="vertical"
                size={12}
                className="!mt-7"
              >
                <Text className="!flex !items-center !gap-2 !text-xs !text-white/55">
                  <Mail size={15} className="shrink-0 text-[#38D9F5]" />
                  support@mohtavaplus.ir
                </Text>

                <Text className="!flex !items-center !gap-2 !text-xs !text-white/55">
                  <MapPin size={15} className="shrink-0 text-[#38D9F5]" />
                  ساخته شده برای یادگیری بهتر
                </Text>
              </Space>
            </div>
          </Col>

          <Col xs={24} lg={16} xl={17}>
            <Row gutter={[32, 44]}>
              {footerColumns.map((column) => (
                <Col key={column.title} xs={12} sm={6}>
                  <div>
                    <Title
                      level={5}
                      className="!m-0 !mb-6 !text-[15px] !font-extrabold !text-white"
                    >
                      {column.title}
                    </Title>

                    <Space
                      direction="vertical"
                      size={15}
                      className="w-full"
                    >
                      {column.links.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="group flex w-fit items-center gap-1.5 text-[13px] leading-6 !text-white/60 no-underline transition-all duration-200 hover:translate-x-[-3px] hover:!text-[#38D9F5]"
                        >
                          <span>{link.title}</span>

                          <ArrowLeft
                            size={12}
                            className="opacity-0 transition-all duration-200 group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </Space>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Divider className="!my-0 !border-white/10" />

        <Row
          gutter={[16, 16]}
          justify="space-between"
          align={screens.sm ? "middle" : "top"}
          className="py-6"
        >
          <Col xs={24} sm={14}>
            <Space
              wrap
              size={screens.sm ? 20 : 14}
              split={
                screens.sm ? (
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                ) : undefined
              }
            >
              <Text className="!text-xs !font-medium !text-white/50">
                © ۱۴۰۵ محتوا پلاس
              </Text>

              <Link
                href="/terms"
                className="text-xs font-medium !text-white/50 no-underline transition-colors hover:!text-[#38D9F5]"
              >
                قوانین و مقررات
              </Link>

              <Link
                href="/privacy"
                className="text-xs font-medium !text-white/50 no-underline transition-colors hover:!text-[#38D9F5]"
              >
                حریم خصوصی
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={10}>
            <div
              className={`flex items-center gap-2 text-xs font-medium text-white/40 ${
                screens.sm ? "justify-end" : "justify-start"
              }`}
            >
              <span>ساخته شده با</span>
              <span className="text-[#38D9F5]">♥</span>
              <span>برای یادگیری بهتر</span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
