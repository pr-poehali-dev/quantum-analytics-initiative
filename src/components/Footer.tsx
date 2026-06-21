import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">Lash Studio</h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Наращивание и ламинирование ресниц. Подчёркиваю вашу естественную красоту.
            </p>
          </div>
          <div>
            <h4 className="uppercase text-xs tracking-widest text-background/50 mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-background/60" />
                <a href="tel:+70000000000" className="hover:text-background/70 transition-colors">+7 (000) 000-00-00</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-background/60" />
                <span>г. Москва, ул. Примерная, 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-background/60" />
                <span>Ежедневно 9:00 — 21:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase text-xs tracking-widest text-background/50 mb-4">Я в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors">
                <Icon name="Send" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors">
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-background/40 text-xs">
          {new Date().getFullYear()} Lash Studio. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
