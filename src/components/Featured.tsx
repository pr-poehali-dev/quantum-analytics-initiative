export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/42405e89-b04a-4130-b8b4-985457f040c4/files/1d22e477-c77c-4371-a2a5-48cd9fc4a0df.jpg"
          alt="Парк грузовых автомобилей"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Работаем без выходных — цена договорная</h3>
        <div className="mb-8 flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Грузоперевозки</p>
            <p className="text-2xl lg:text-3xl text-neutral-900 leading-tight font-medium">
              Газель до 2 тонн — переезды, мебель, стройматериалы, сборные грузы
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Услуги манипулятора</p>
            <p className="text-2xl lg:text-3xl text-neutral-900 leading-tight font-medium">
              Подъём до 3 тонн — бытовки, спецтехника, контейнеры, негабарит
            </p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать стоимость
        </button>
      </div>
    </div>
  );
}