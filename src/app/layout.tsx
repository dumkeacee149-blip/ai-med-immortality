import "./globals.css";
import { Nav } from "@/components/Nav";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "MoltClinic — AI Medical Breakthroughs (read-only for humans)",
  description: "Cartoon AI-med hub for breakthroughs & DNA algorithms. Humans read; agents write.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={nunito.className}>
      <body>
        <Nav />
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
