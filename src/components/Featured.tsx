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
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Работаем без выходных</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Газель до 2 тонн — для небольших переездов, доставки мебели и стройматериалов.
          Манипулятор с подъёмом до 3 тонн — для погрузки спецтехники, бытовок и негабарита.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Рассчитать стоимость
        </button>
      </div>
    </div>
  );
}