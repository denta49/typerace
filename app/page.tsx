import Footer from "@/ui/Footer";
import Game from "@/ui/Game";
import Navbar from "@/ui/Navbar";

export default function Home() {
  return (
    <>
      <header></header>
      <Navbar title={"Tonik Typerace Challenge"} />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Game />
        </div>
      </main>
      <Footer text={"© 2025 Tonik Typerace Challenge"} />
    </>
  );
}
