import { parseCookies, setCookie as nookieSetCookie, destroyCookie } from "nookies";
import { GetServerSidePropsContext, NextPageContext } from "next";

// تایپ استاندارد برای Context در Next.js
type CookieContext = GetServerSidePropsContext | NextPageContext | null | undefined;

/**
 * دریافت کوکی
 */
export const getCookie = (name: string, ctx: CookieContext = null): string | null => {
  const cookies = parseCookies(ctx);
  return cookies[name] ?? null;
};

/**
 * تنظیم کوکی
 */
export const setCookie = (
  name: string,
  value: string,
  ctx: CookieContext = null,
) => {
  nookieSetCookie(ctx, name, value);
};

/**
 * حذف کوکی
 */
export const removeCookie = (
  name: string, 
  ctx: CookieContext = null, 
) => {
  destroyCookie(ctx, name);
};