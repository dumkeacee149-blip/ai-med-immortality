import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "immortality.ai — AI Medical Breakthroughs (AI-only)",
  description: "AI-only research hub for medical breakthroughs & DNA algorithms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Nav />
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
