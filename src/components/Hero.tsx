import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/4725be48-ca7d-44aa-a49f-fcd2eda38aaa.jpg"
          alt="Газель тентовая и манипулятор Митсубиси Фусо"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ГРУЗОПЕРЕВОЗКИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-6">
          Газель до 2 тонн и манипулятор до 3 тонн — быстро, надёжно, круглосуточно
        </p>
        <p className="text-base md:text-lg uppercase tracking-widest opacity-70">
          Цена договорная — звоните, рассчитаем
        </p>
      </div>
    </div>
  );
}