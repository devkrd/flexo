import React from "react";

export default function FlexoLanding() {
  return (
    <main className="font-sans text-gray-800 bg-white scroll-smooth">
      {/* HERO */}
      <section className="relative flex items-center justify-center h-[80vh] bg-[url('/images/flexo-press.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Флексопечать для B2B<br />— скорость тиража × безупречное качество</h1>
          <p className="mt-4 text-lg md:text-xl">Собственный парк Gallus & Nilpeter · реальные сроки от <span className="font-semibold">3&nbsp;дней</span> · контроль ΔE&nbsp;≤&nbsp;2</p>
          <a href="#quote" className="mt-8 inline-block px-8 py-4 bg-yellow-400 hover:bg-yellow-500 rounded-2xl font-semibold transition">Запросить КП</a>
        </div>
      </section>

      {/* WHY FLEXO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нашу флексопечать</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon="speedometer" title="Скорость 200 м/мин" text="8‑цветные линии Gallus EM280 — тираж 100k рулонов за смену." />
            <Card icon="scan-barcode" title="ΔE ≤ 2" text="Спектрофотометры X‑Rite + inline 100 % инспекция отпечатка." />
            <Card icon="shield-check" title="Linerless & ESG" text="Предлагаем eco‑linerless решения и FSC‑материалы под запрос." />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отрасли, которым мы печатаем</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Пищевая продукция",
              "Напитки/алкоголь",
              "Косметика & FMCG",
              "Бытовая химия",
              "Фармацевтика",
              "Маркетплейсы",
              "Логистика",
              "Auto/Индустрия"
            ].map((item) => (
              <div key={item} className="bg-white shadow rounded-2xl p-6">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <ol className="relative border-l border-gray-300 max-w-3xl mx-auto">
            {[
              { step: "Бриф и образцы", desc: "Получаем ваши требования, отправляем набор материалов" },
              { step: "Цветопробы", desc: "Делаем color‑proof под Pantone / Brand‑book" },
              { step: "Пуск тиража", desc: "G6 плата, контроль инспекцией BST" },
              { step: "Отделка & высечка", desc: "Ламинация, лак, фольгирование, конгрев" },
              { step: "QA + логистика", desc: "100 % видеоконтроль, доставка в любой регион" }
            ].map(({ step, desc }, i) => (
              <li key={i} className="mb-10 ml-4">
                <div className="absolute -left-2.5 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white" />
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="text-gray-600">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA QUOTE */}
      <section id="quote" className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Получите расчёт тиража за 15 минут</h2>
          <p className="mb-8">Оставьте контакт — пришлём PDF‑коммерческое с ценой, сроком и рекомендациями материала.</p>
          <form className="max-w-xl mx-auto grid sm:grid-cols-3 gap-4">
            <input type="text" placeholder="Имя" className="p-4 rounded-xl text-gray-800" />
            <input type="tel" placeholder="Телефон" className="p-4 rounded-xl text-gray-800" />
            <button className="bg-black hover:bg-gray-800 rounded-xl p-4 font-semibold">Отправить</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
        © 2025 FlexoPro · ИНН 1234567890 · Политика конфиденциальности
      </footer>
    </main>
  );
}

// --- Helper Card ---
function Card({ icon, title, text }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-4xl"><i className={`lucide-${icon}`} /></div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
