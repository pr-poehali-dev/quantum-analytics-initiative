import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-950"
    >
      {/* Фоновое изображение с параллаксом */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/542622b9-821f-41cc-9678-e1a94c1df3fe.jpg"
          alt="Фон грузоперевозки"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* Градиент-затухание снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-20 pointer-events-none" />

      {/* Текст */}
      <div className="relative z-30 text-center text-white px-6">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Надёжно · Быстро · Круглосуточно
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5 leading-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          ГРУЗОПЕРЕВОЗКИ
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-lg mx-auto text-white/60 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Газель до 2 тонн и манипулятор до 5 тонн
        </motion.p>
        <motion.p
          className="text-sm uppercase tracking-widest text-white/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Цена договорная — звоните, рассчитаем
        </motion.p>
      </div>
    </div>
  );
}
