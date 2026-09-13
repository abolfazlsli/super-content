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
import Link from "next/link";

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
  {
    title: "گیت‌هاب",
    href: "#",
    icon: Github,
  },
  {
    title: "اینستاگرام",
    href: "#",
    icon: Instagram,
  },
  {
    title: "لینکدین",
    href: "#",
    icon: Linkedin,
  },
  {
    title: "تلگرام",
    href: "#",
    icon: Send,
  },
  {
    title: "یوتیوب",
    href: "#",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative mt-16 overflow-hidden bg-[#11152B] text-white select-none"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#0C89FE]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 left-[-120px] h-[500px] w-[500px] rounded-full bg-[#4A3BD0]/12 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-12 border-b border-white/8 py-14 lg:grid-cols-[1.1fr_2fr] lg:gap-20 lg:py-16">
          <div className="max-w-[360px]">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 select-none"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#0C89FE] to-[#4A3BD0] text-2xl font-black text-white shadow-lg shadow-[#0C89FE]/20 transition-transform duration-200 group-hover:-translate-y-0.5">
                ◖
              </span>

              <span className="text-xl font-black tracking-tight">
                محتوا پلاس
              </span>
            </Link>

            <p className="mt-5 text-sm leading-8 text-white/55">
              یک فضای ساده و کاربردی برای پیدا کردن دوره‌ها، منابع آموزشی و
              محتوای دیجیتال مورد نیاز برای یادگیری و رشد حرفه‌ای.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.title}
                    href={social.href}
                    aria-label={social.title}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-white/55 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0C89FE]/30 hover:bg-[#0C89FE]/10 hover:text-[#38D9F5]"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <Mail size={15} className="text-[#38D9F5]" />
                support@mohtavaplus.ir
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-[#38D9F5]" />
                ساخته شده برای یادگیری بهتر
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-sm font-bold text-white">
                  {column.title}
                </h3>

                <div className="flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="group flex items-center gap-1 text-xs leading-6 text-white/45 transition-colors hover:text-white"
                    >
                      <span>{link.title}</span>
                      <ArrowLeft
                        size={12}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/40">
            <span>© ۱۴۰۵ محتوا پلاس</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <Link
              href="/terms"
              className="transition-colors hover:text-white/75"
            >
              قوانین و مقررات
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/75"
            >
              حریم خصوصی
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white/35">
            <span>ساخته شده با</span>
            <span className="text-[#38D9F5]">♥</span>
            <span>برای یادگیری بهتر</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
