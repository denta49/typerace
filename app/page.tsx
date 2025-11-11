// app/page.tsx
import { Suspense } from "react";

import ReactQueryProvider from "@/data/QueryProvider";
import Footer from "@/ui/Footer";
import Game from "@/ui/Game";
import Navbar from "@/ui/Navbar";

export const metadata = {
  title: "Tonik Typerace Challenge",
  description: "Coding challenge for Tonik",
};

export default function Home() {
  return (
    <ReactQueryProvider>
      <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
        <Navbar title="Tonik Typerace Challenge" />
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Suspense fallback={<div className="text-muted-foreground text-sm">Loading game…</div>}>
          <Game />
        </Suspense>
      </main>

      <Footer text="© 2025 Tonik Typerace Challenge" />
    </ReactQueryProvider>
  );
}
