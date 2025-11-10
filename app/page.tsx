import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";

export default function Home() {
  return (
    <>
      <header></header>
      <Navbar title={"Tonik Typerace Challenge"} />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            Welcome to the Tonik Typerace Challenge!
          </h1>
        </div>
      </main>
      <Footer text={"© 2024 Tonik Typerace Challenge"} />
    </>
  );
}
