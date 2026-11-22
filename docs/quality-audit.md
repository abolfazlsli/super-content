# ممیزی کیفیت، سرعت و SEO

این سند نتیجه بررسی کد و build پروژه در تاریخ ۱۴۰۵/۰۸/۲۴ است. هدف آن ثبت وضعیت فنی است؛ UI و قرارداد endpointهای backend جزو دامنه تغییرات این ممیزی نیستند.

## نتیجه تست‌های قابل اجرای محلی

| تست | نتیجه |
| --- | --- |
| `npm run typecheck` | موفق، بدون خطای TypeScript |
| `npm run build` | موفق؛ ۲۰ route تولید شد |
| routeهای `/`، `/contents`، `/about-us`، `/login`، `/dashboard` | HTTP 200 در سرور production محلی |
| `/robots.txt` | HTTP 200؛ مسیرهای خصوصی disallow شده‌اند |
| `/sitemap.xml` | با `NEXT_PUBLIC_SITE_URL` ساخته می‌شود؛ بدون این متغیر عمداً خالی می‌ماند تا URL جعلی منتشر نشود |
| API integration / Lighthouse / تست مرورگر واقعی | در این محیط قابل اثبات کامل نیست؛ نیازمند backend و مرورگر/دستگاه واقعی است |

## اصلاحات انجام‌شده

- HTML اولیه دیگر فقط spinner نیست؛ محتوای ثابت برای crawl و نمایش سریع‌تر server-render می‌شود و spinner اولیه به overlay موقت تبدیل شده تا ظاهر اولیه حفظ شود.
- sitemap عمومی، اتصال اختیاری robots به sitemap و `metadataBase` بر اساس `NEXT_PUBLIC_SITE_URL` اضافه شد.
- هدرهای پایه امنیتی، حذف `X-Powered-By` و فشرده‌سازی Next فعال شد.
- timeout پانزده‌ثانیه‌ای برای درخواست‌های API اضافه شد؛ تشخیص قطع اینترنت نیز از `error.status` نادرست به نبودن `error.response` اصلاح شد.
- خطاهای شبکه در production دیگر payload پاسخ را در console نشت نمی‌دهند.
- FormData مقدارهای null/undefined را امن‌تر مدیریت می‌کند و مقادیر primitive را به رشته تبدیل می‌کند.
- تصاویر خام دارای loading/decoding/sizes مناسب‌تر شدند؛ ظاهر و اندازه CSS آن‌ها تغییر نکرده است.
- Docker از خروجی standalone استفاده می‌کند و دیگر کل `node_modules` و `.next` را به image production کپی نمی‌کند.
- اسکریپت‌های `typecheck` و `verify` اضافه شدند و `npm start` مستقیماً از خروجی standalone اجرا می‌شود.

## baseline مهم build

بزرگ‌ترین First Load JS فعلی در routeهای عمومی حدود `312 kB` برای `/` و `294 kB` برای `/contents` است. داشبوردهای ادمین تا حدود `369 kB` می‌رسند. این اعداد خطای build نیستند، اما برای Core Web Vitals باید در CI budget داشته باشند.

## ریسک‌ها و کارهای باقی‌مانده

### اولویت خیلی بالا

- `NEXT_PUBLIC_SITE_URL` باید در محیط production تنظیم شود؛ در غیر این صورت sitemap خالی است و canonical قابل اعتماد نداریم.
- محتوای API محور صفحه فهرست و جزئیات بعد از mount در client دریافت می‌شود. برای SEO واقعی باید wrapper سروری و `generateMetadata` برای جزئیات ساخته شود؛ این کار به تست قرارداد backend و تصمیم درباره cache/auth نیاز دارد.
- backend باید با تست contract بررسی شود: پاسخ‌های 401/403/429/5xx، timeout، فایل‌های حجیم، token منقضی و قطع شبکه.
- Lighthouse روی موبایل و دسکتاپ production اجرا شود و LCP/INP/CLS/TBT/TTFB ثبت و baseline شود.

### اولویت بالا

- ESLint و تست‌های unit برای mapperها، query builder، `buildFormData` و stateهای فیلتر اضافه شوند. فعلاً پروژه test runner ندارد.
- برای APIها cancellation با `AbortController` در effectهای فهرست/جزئیات اضافه شود تا پاسخ قدیمی state جدید را overwrite نکند؛ guard فعلی جلوی setState را می‌گیرد ولی request را متوقف نمی‌کند.
- importهای `antd` و کلاینت‌های سنگین dashboard با بررسی bundle analyzer تفکیک شوند؛ refactor باید صفحه‌به‌صفحه و بدون تغییر UI انجام شود.
- تصاویر public بزرگ، مخصوصاً `logo.png`/`icon.png` حدود ۶۰۰KB، به asset مناسب favicon و فرمت مدرن تبدیل شوند؛ قبل از جایگزینی باید خروجی بصری تأیید شود.

### اولویت متوسط

- `any`های سرویس‌ها و فرم‌های داشبورد به typeهای domain تبدیل شوند.
- اتصال مستقیم `src/services` به type داخل `app/(dashboardzone)` به یک type مشترک زیر `src/types` منتقل شود.
- خطاهای UI برای failureهای API استاندارد شوند؛ message فعلی در لایه network به UI coupling دارد.
- لینک‌های placeholder مثل `href="#"` و routeهای عمداً در حال ساخت بازبینی شوند.
- برای صفحات عمومی JSON-LD، canonical اختصاصی هر route و metadata داینامیک محتوا اضافه شود.

## checklist تحویل production

- [ ] تنظیم `NEXT_PUBLIC_API_URL` واقعی و بدون trailing slash
- [ ] تنظیم `NEXT_PUBLIC_SITE_URL` واقعی با HTTPS
- [ ] اجرای `npm ci`
- [ ] اجرای `npm run verify`
- [ ] اجرای image build و health check کانتینر
- [ ] تست login/register/logout و expiry توکن
- [ ] تست list/filter/search/pagination و back/forward مرورگر
- [ ] تست فایل رایگان، فایل پولی، 401 و 403
- [ ] Lighthouse در موبایل و دسکتاپ
- [ ] تست keyboard، screen reader، focus، contrast و alt متن‌ها
- [ ] بررسی 404/500 و لاگ‌های production
- [ ] بررسی sitemap و robots در دامنه نهایی
- [ ] ثبت bundle budget و Web Vitals در CI/monitoring
