
"use client"
import ConversacionInterna from "@/components/conversacionInterna";
import Description from "@/components/description";
import Hero from "@/components/hero";
import MensajeEscondido from "@/components/mensajeEscondido";
import { Quote } from "lucide-react"; 
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-900 font-sans ">
      <Hero />
      <Description />
      <section className="relative w-full pt-20 pb-4 px-8 flex flex-col items-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Quote className="w-10 h-10 text-gray-400 mb-4" />
          <h2 className="text-2xl md:text-3xl text-gray-200 italic max-w-2xl leading-relaxed">
            “No sé si tenga sentido lo que pienso, pero no creo que todo tenga que tener sentido. Pero si me pongo a pensar más en mi...”
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: 0.4 }}
          className="w-16 h-[1px] bg-gray-600 rounded-full mt-8"
        />
      </section>
      <ConversacionInterna />
      <section className="relative w-full pt-24 pb-8 px-8 flex flex-col items-center text-center space-y-6 bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Quote className="w-10 h-10 text-gray-500 mb-4" />
          <h2 className="text-2xl md:text-3xl text-gray-300 italic max-w-2xl leading-relaxed">
            “A veces la jodo mucho…  
            esque, la manera en la que nos conocimos es rara  
            <br />Pero que tiene de malo ser raro?, si yo lo soy y yo soy todo lo que está bien.”
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: 0.4 }}
          className="w-16 h-[1px] bg-gray-700 rounded-full mt-8"
        />
      </section>
      <MensajeEscondido />
    </div>
  );
}
