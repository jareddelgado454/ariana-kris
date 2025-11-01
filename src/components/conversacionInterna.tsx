"use client";
import { motion } from "framer-motion";

const pensamientos = [
  {
    id: 1,
    text: "Quizás escribo esto solo para no olvidarme de lo que siento.",
  },
  {
    id: 2,
    text: "No lo hago para que ella lo lea... pero si algún día lo encuentra, sabrá quién fue siempre para mí.",
  },
  {
    id: 3,
    text: "Ella fue el lugar donde por fin entendí que no necesito ser otra persona para agradar.",
  },
  {
    id: 4,
    text: "Y aunque el mundo no lo sepa, no tengo miedo de que sepan que es ella —mi mujer, mi destino, la vida que quiero construir.",
  },
  {
    id: 5,
    text: "A veces me imagino a nuestros hijos...(Lautaro xd) y deseo que uno de ellos tenga su sonrisa, o esa forma suya de mirar como si entendiera todo sin decir nada.",
  },
];

export default function ConversacionInterna() {
  return (
    <section className="relative min-h-screen text-gray-100 py-24 px-6 flex flex-col justify-center items-center overflow-hidden">
      {/* Fondo con tu reflejo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.80 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/images/reflection.jpeg')] bg-cover bg-center brightness-[0.3] blur-sm"
      />

      {/* Capa de degradado oscuro para mantener contraste */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" /> */}

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl space-y-10 text-center">
        {pensamientos.map((p, index) => (
          <motion.p
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl italic leading-relaxed text-gray-300"
          >
            {p.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
