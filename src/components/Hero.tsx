import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const HERO_IMG = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/55f14fd6-431e-490a-9ddb-403d621e6e2c.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  return (
    <div
      id="hero"
      ref={container}
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img src={HERO_IMG} alt="Наращивание ресниц" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-5">Наращивание ресниц</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground mb-6">
            Взгляд, от которого невозможно оторваться
          </h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Классика, 2D, 3D и роскошные объёмы. Подберу идеальный изгиб и длину под форму ваших глаз — естественно и надолго.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Записаться
            </a>
            <a
              href="#portfolio"
              className="border border-primary/40 text-foreground px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-secondary transition-colors"
            >
              Смотреть работы
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
