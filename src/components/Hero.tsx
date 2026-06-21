import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MANIPULATOR_URL = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/bucket/393d80e6-9f37-40c4-ad4e-f223e74ee20b.jpg";
const GAZELLE_URL = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/bucket/3fef2222-f691-4e8b-bba9-4a0b44bcdc44.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-950"
    >
      {/* Фоновый градиент */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      </motion.div>

      {/* Фото манипулятора — слева */}
      <motion.div
        style={{ y: yLeft }}
        className="absolute left-0 bottom-0 w-[55%] h-[75%] z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={MANIPULATOR_URL}
          alt="Манипулятор Митсубиси Фусо"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Фото газели — справа */}
      <motion.div
        style={{ y: yRight }}
        className="absolute right-0 bottom-0 w-[52%] h-[60%] z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <img
          src={GAZELLE_URL}
          alt="Газель тентовая"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Затемнение снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-20" />

      {/* Текст по центру вверху */}
      <div className="relative z-30 text-center text-white px-6 mb-32 md:mb-40">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          ГРУЗОПЕРЕВОЗКИ
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto opacity-80 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Газель до 2 тонн и манипулятор до 3 тонн — быстро, надёжно, круглосуточно
        </motion.p>
        <motion.p
          className="text-sm md:text-base uppercase tracking-widest opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Цена договорная — звоните, рассчитаем
        </motion.p>
      </div>
    </div>
  );
}
