"use client";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isAuth = path === "/login";

  return (
    <>
      {!isAuth && <SiteHeader />}
      <main>{children}</main>
      {!isAuth && <SiteFooter />}
    </>
  );
}
