import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Factory, TrendingUp, Timer, ShieldCheck } from "lucide-react";

export default function FlexoLanding() {
  return (
    <main className="font-sans text-gray-800 bg-white scroll-smooth leading-relaxed">
      {/* HERO */}
      <section id="hero" className="relative flex items-center justify-center h-[90vh] bg-[url('/images/flexo-press.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Флексопечать для B2B<br />— скорость тиража × безупречное качество
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Собственный парк Gallus & Nilpeter · реальные сроки от <span className="font-semibold">3 дней</span> · контроль ΔE ≤ 2
          </p>
          <a href="#quote" className="mt-8 inline-block"><Button size="lg">Запросить КП</Button></a>
        </div>
      </section>

      {/* WHY FLEXO */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нашу флексопечать</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="py-6 px-4 flex flex-col items-center text-center shadow hover:shadow-lg transition">
              <CheckCircle className="w-10 h-10 text-yellow-500" />
              <CardContent>
                <h3 className="font-semibold mt-4">Скорость 200 м/мин</h3>
                <p className="mt-2 text-sm">8‑цветные линии Gallus EM280 — тираж 100k рулонов за смену.</p>
              </CardContent>
            </Card>
            <Card className="py-6 px-4 flex flex-col items-center text-center shadow hover:shadow-lg transition">
              <ShieldCheck className="w-10 h-10 text-yellow-500" />
              <CardContent>
                <h3 className="font-semibold mt-4">ΔE ≤ 2</h3>
                <p className="mt-2 text-sm">Спектрофотометры X‑Rite + inline 100 % инспекция отпечатка.</p>
              </CardContent>
            </Card>
            <Card className="py-6 px-4 flex flex-col items-center text-center shadow hover:shadow-lg transition">
              <TrendingUp className="w-10 h-10 text-yellow-500" />
              <CardContent>
                <h3 className="font-semibold mt-4">Linerless & ESG</h3>
                <p className="mt-2 text-sm">Предлагаем eco‑linerless решения и FSC‑материалы под запрос.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отрасли, которым мы печатаем</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center text-sm font-medium">
            {[
              "Пищевая продукция",
              "Напитки / алкоголь",
              "Косметика",
              "Бытовая химия",
              "Фармацевтика",
              "Табачная продукция",
              "Автохимия",
              "E‑commerce / Маркетплейсы",
            ].map((item) => (
              <div key={item} className="px-4 py-6 border rounded-2xl shadow-sm hover:shadow-md transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Timer className="w-8 h-8 mx-auto text-yellow-500" />, title: "Бриф &\nТЗ", text: "Собираем требования, подбираем материалы." },
              { icon: <Factory className="w-8 h-8 mx-auto text-yellow-500" />, title: "Пробный прогон", text: "Даем color‑proof и согласовываем макет." },
              { icon: <CheckCircle className="w-8 h-8 mx-auto text-yellow-500" />, title: "Серийный тираж", text: "Печать, высечка, постобработка, инспекция." },
              { icon: <ShieldCheck className="w-8 h-8 mx-auto text-yellow-500" />, title: "Логистика", text: "Отгрузка по РФ и ЕАЭС, страхуем грузы." },
            ].map(({ icon, title, text }) => (
              <Card key={title} className="py-6 px-4 shadow-none border hover:shadow-lg transition">
                {icon}
                <CardContent>
                  <h3 className="font-semibold mt-4 whitespace-pre-line">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Запросить коммерческое предложение</h2>
          <form className="grid gap-6">
            <Input placeholder="Компания" required />
            <Input type="email" placeholder="E‑mail" required />
            <Input placeholder="Телефон" />
            <Textarea rows={4} placeholder="Опишите тираж, материал, послепечатную обработку…" />
            <Button size="lg" className="w-full md:w-auto mx-auto">Отправить запрос</Button>
          </form>
          <p className="mt-4 text-center text-xs text-gray-500">Мы свяжемся с вами в течение рабочего дня</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-gray-900 text-gray-400 text-sm">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p>© {new Date().getFullYear()} FlexoPro — флексопечать полного цикла</p>
          <p>ОГРН 123456789 · Санкт‑Петербург, ул. Печатников 10</p>
        </div>
      </footer>
    </main>
  );
}
