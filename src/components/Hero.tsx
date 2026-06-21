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
          src="https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/c00c0041-55ff-44fd-a2fd-739884397c30.jpg"
          alt="Манипулятор поднимает груз"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ГРУЗОПЕРЕВОЗКИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Услуги манипулятора и доставка грузов любой сложности — быстро, надёжно, круглосуточно
        </p>
      </div>
    </div>
  );
}