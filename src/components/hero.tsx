"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-dvh flex flex-col items-center justify-end text-center overflow-hidden">
      <Image
        src="/images/picture4.jpeg"
        alt="Ella"
        fill
        priority
        className="object-cover object-top brightness-60"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Texto */}
      <div className="relative z-10 text-white px-6 pb-20">
        <h1 className="text-3xl font-normal mb-4 leading-snug drop-shadow-lg tracking-wider">
          ¿Y si ella no es el amor de mi vida, sino la vida disfrazada de amor?
        </h1>
        <p className="text-xl md:text-2xl italic leading-relaxed drop-shadow-md opacity-90">
          Porque desde que llegó, todo lo que era “vida” empezó a tener sentido.
        </p>
      </div>
    </section>
  );
}
