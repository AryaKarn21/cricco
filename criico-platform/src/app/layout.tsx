import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CRIICO | Nepal's Cricket Community",
  description: "CRIICO connects Nepal's cricket community through matches, tournaments, news, players and grassroots cricket."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
