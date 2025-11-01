"use client"
import { motion } from "framer-motion";

const mensajes = [
  {
    id: 1,
    fragment: "Y si, todo arrancó en la pastelería. 🍰 Yo solo iba por un Frap... pero terminé esperando verla a ella.",
    image: "/images/inicio.jpg", // imagen del lugar o algo cálido
  },
  {
    id: 2,
    fragment: "Recuerdo cuando se quitó su gorrito de trabajo y dejó caer su pelo... no sé por qué, pero en ese momento todo se detuvo.",
    image: "/images/picture10.jpeg", // algo simbólico: viento, cabello, movimiento
  },
  {
    id: 3,
    fragment: "Cuando me traía el pedido y se ponía nerviosa, entendí que quizás el destino también se sonroja a veces.",
    image: "/images/picture9.jpeg",
  },
  {
    id: 4,
    fragment: "No sé si la conozco del todo —a veces calla cosas—, pero hay algo en su silencio que me hace querer descubrirla sin prisa.",
    image: "/images/picture14.jpeg",
  },
  {
    id: 5,
    fragment: "Coincidencia? Destino?, que carajo importa, yo quiero todo con ella y eso es lo que vale.",
    image: "/images/picture12.jpeg",
  },
  {
    id: 6,
    fragment: "Y como me gustaría decirle que yo no juego, que voy enserio, tanto que me gustaría tener una pequeñita que se parezca a ella.",
    image: "/images/picture11.jpeg", // su foto de niña
  },
  {
    id: 7,
    fragment: "Hoy todo se siente más real. No busco perfección, solo que me siga eligiendo incluso cuando muestro mis muchos defectos.",
    image: "/images/picture16.jpeg",
  },
];

export default function MensajeEscondido() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {mensajes.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4, duration: 0.8 }}
            className="relative group"
          >
            <img
              src={m.image}
              alt="hidden-memory"
              className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:opacity-90 transition"
            />
            <p className="mt-4 text-lg text-gray-300 italic text-center">
              {m.fragment}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="mt-16 text-center text-sm text-gray-400 italic"
      >
        No sé si algún día lea esto... pero si lo hace, ojalá entienda que todo comenzó con un frap y un “Soy el chico de la empanada de chocolate”.
      </motion.p>
    </section>
  );
}
