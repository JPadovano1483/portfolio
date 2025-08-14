import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <NavBar/>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          James Padovano
        </h1>

        <ContactCard id="contact" />
      </main>
    </div>
  );
}
