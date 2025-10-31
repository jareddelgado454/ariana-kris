
import Description from "@/components/description";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-900 font-sans ">
      <Hero />
      <Description />
    </div>
  );
}
