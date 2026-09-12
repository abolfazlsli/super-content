# Content Plus - Componentized version

ساختار:

```text
page.tsx
components/
  Header.tsx
  Hero.tsx
  MobileSearch.tsx
  FilterPanel.tsx
  ResultsHeader.tsx
  EntryCard.tsx
  BottomNav.tsx
  entries/
    DynamicEntryData.tsx   # existing file - keep it
    types.ts               # existing file - keep it
data/
  entries.ts
```

فایل‌های `components/entries/DynamicEntryData.tsx` و
`components/entries/types.ts` از پروژه فعلی هستند و در ZIP کپی نشده‌اند،
چون در فایل ارسالی فقط import آن‌ها وجود داشت و محتوای آن‌ها داخل این فایل نبود.

کافی است پوشه `components` و `data` را در مسیر صفحه قرار دهید و `page.tsx`
را جایگزین صفحه فعلی کنید.

منطق فیلتر، علاقه‌مندی، pagination و sort حفظ شده است.
