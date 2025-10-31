import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface SectionProps {
    title : string;
    text : string;
    text_image : string;
    image : string;
    reverse : any;
}

const Section: FC<SectionProps> = ({ title, text, text_image, image, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center w-full min-h-screen px-6 md:px-16 py-12 bg-zinc-900 text-white overflow-hidden`}
    >
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`flex flex-col z-10 max-w-md 
          ${
            reverse
              ? "md:pl-10 md:items-start md:text-left"
              : "md:pr-10 md:items-start md:text-left"
          } 
          ${
            reverse
              ? "items-end text-right self-end pr-4"
              : "items-start text-left self-start pl-4"
          }`}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-wide">
          {title}
        </h2>

        <p className="text-lg md:text-xl italic leading-relaxed text-zinc-300">
          {text}
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 h-[60vh] mt-10 md:mt-0 rounded-3xl overflow-hidden shadow-lg"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center brightness-75"
        />

        {/* Frase sobrepuesta */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base md:text-lg italic text-zinc-100 drop-shadow-md"
          >
            {text_image}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Section;
