interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="font-serif text-2xl tracking-wide text-foreground">
          Lash<span className="text-primary"> Studio</span>
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-sm text-foreground/70 hover:text-primary transition-colors">Услуги</a>
          <a href="#portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">Портфолио</a>
          <a href="#booking" className="text-sm text-foreground/70 hover:text-primary transition-colors">Запись</a>
        </nav>
        <a
          href="#booking"
          className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Записаться
        </a>
      </div>
    </header>
  );
}
