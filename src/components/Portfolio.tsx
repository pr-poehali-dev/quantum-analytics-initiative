import { motion } from "framer-motion";

const works = [
  {
    img: "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/c7b6d6b8-f2f9-494f-8ab0-04ee0d4561f1.jpg",
    title: "Классика",
  },
  {
    img: "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/baffdcd5-292f-49ee-8be4-51a58bc4bded.jpg",
    title: "Объём 3D",
  },
  {
    img: "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/55f14fd6-431e-490a-9ddb-403d621e6e2c.jpg",
    title: "Голливуд",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Портфолио</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Мои работы
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Каждая работа — индивидуальный подбор под форму глаз и пожелания клиента.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-serif text-2xl text-white">{w.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
