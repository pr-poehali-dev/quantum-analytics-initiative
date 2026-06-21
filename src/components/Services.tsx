import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

const services = [
  {
    icon: "Sparkle",
    title: "Классика 1D",
    desc: "Естественный эффект «свои, только лучше». Одна ресничка на одну натуральную.",
    price: "1 500 ₽",
    duration: "1.5–2 ч",
  },
  {
    icon: "Sparkles",
    title: "Объём 2D",
    desc: "Лёгкая пушистость и выразительность без тяжести. Универсальный выбор.",
    price: "1 800 ₽",
    duration: "2–2.5 ч",
  },
  {
    icon: "Star",
    title: "Объём 3D",
    desc: "Густой, насыщенный взгляд. Идеально для фото и особых событий.",
    price: "2 200 ₽",
    duration: "2.5–3 ч",
  },
  {
    icon: "Crown",
    title: "Голливуд / мега-объём",
    desc: "Максимальная драма и роскошь. Эффект распахнутого взгляда.",
    price: "2 800 ₽",
    duration: "3–3.5 ч",
  },
  {
    icon: "RefreshCw",
    title: "Снятие ресниц",
    desc: "Бережное снятие без вреда для натуральных ресниц.",
    price: "500 ₽",
    duration: "30 мин",
  },
  {
    icon: "Heart",
    title: "Ламинирование",
    desc: "Подкручивание и питание своих ресниц. Эффект до 6 недель.",
    price: "2 000 ₽",
    duration: "1–1.5 ч",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Услуги и цены</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Выберите свой объём
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                <Icon name={s.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-medium text-primary">{s.price}</span>
                <span className="text-xs text-foreground/50 flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  {s.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
