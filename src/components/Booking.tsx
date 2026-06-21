import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const STUDIO_IMG = "https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/ce145618-824d-41a1-969f-3f0ac0598d19.jpg";

const serviceOptions = [
  "Классика 1D",
  "Объём 2D",
  "Объём 3D",
  "Голливуд / мега-объём",
  "Ламинирование",
  "Снятие ресниц",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: serviceOptions[0], date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            className="relative rounded-3xl overflow-hidden min-h-[400px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={STUDIO_IMG} alt="Кабинет мастера" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-serif text-3xl mb-3">Уютная атмосфера</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Приходите отдохнуть и преобразиться. Стерильные инструменты, комфортная зона и индивидуальный подход.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Онлайн-запись</p>
            <h2 className="font-serif text-4xl text-foreground mb-6">Запишитесь на процедуру</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-5">
                  <Icon name="Check" size={30} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Заявка принята!</h3>
                <p className="text-foreground/60">Я свяжусь с вами для подтверждения времени.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Ваше имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Телефон</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Услуга</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-1.5">Желаемая дата</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
