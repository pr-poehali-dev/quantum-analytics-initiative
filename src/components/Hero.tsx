import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MANIPULATOR_URL = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/bucket/50a1f0a0-1492-4e8b-b340-8ce8f47b6550.jpg";
const GAZELLE_URL = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/bucket/50f7ad50-1789-4722-817c-2d010a2d4980.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0vh", "25vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-950"
    >
      {/* Фон с тонкой текстурой */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(80,80,80,0.12)_0%,transparent_70%)]" />
      </motion.div>

      {/* Горизонтальная разделительная линия-акцент */}
      <div className="absolute bottom-[38%] left-0 right-0 h-px bg-white/5 z-10" />

      {/* Манипулятор — слева, крупнее */}
      <motion.div
        style={{ y: yLeft }}
        className="absolute left-[-2%] bottom-0 w-[54%] h-[78%] z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      >
        {/* Убираем фон фото через mix-blend-mode */}
        <div className="relative w-full h-full">
          <img
            src={MANIPULATOR_URL}
            alt="Манипулятор Митсубиси Фусо"
            className="w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 30px rgba(0,0,0,0.8)) brightness(1.05) contrast(1.05)",
              mixBlendMode: "lighten",
            }}
          />
        </div>
        {/* Подпись */}
        <motion.div
          className="absolute bottom-4 left-6 text-white/60 text-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Манипулятор · до 5 тонн
        </motion.div>
      </motion.div>

      {/* Газель — справа */}
      <motion.div
        style={{ y: yRight }}
        className="absolute right-[-2%] bottom-0 w-[52%] h-[58%] z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
      >
        <div className="relative w-full h-full">
          <img
            src={GAZELLE_URL}
            alt="Газель тентовая"
            className="w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 30px rgba(0,0,0,0.8)) brightness(1.05) contrast(1.05)",
              mixBlendMode: "lighten",
            }}
          />
        </div>
        {/* Подпись */}
        <motion.div
          className="absolute bottom-4 right-6 text-white/60 text-xs uppercase tracking-widest text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Газель тентовая · до 2 тонн
        </motion.div>
      </motion.div>

      {/* Градиент-затухание снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-20 pointer-events-none" />

      {/* Текст */}
      <div className="relative z-30 text-center text-white px-6 pb-12 self-start pt-[18vh]">
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
