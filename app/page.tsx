'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">BrewHaven</h1>
            <h2 className="text-3xl text-amber-200 mb-6">Craft Coffee & More</h2>
            <p className="text-xl text-amber-100 mb-8">
              Погрузитесь в мир ароматного кофе, уютной атмосферы и превосходного обслуживания. 
              Каждая чашка - это история вкуса и качества.
            </p>
            <p className="text-lg text-amber-100 mb-8">
              Наша философия: лучший кофе должен быть доступным каждому. Мы работаем только с 
              премиальными зёрнами кофе от лучших производителей.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/menu" 
                className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-100 transition"
              >
                Посмотреть меню
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition"
              >
                Где нас найти
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-9xl">☕</div>
            <p className="text-amber-200 mt-4 text-lg">Свежесваренный каждый день</p>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Почему выбирают нас</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Качество</h3>
            <p className="text-gray-700">
              Мы используем только премиальные сорта кофе, отобранные нашими экспертами.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-5xl mb-4">👨‍☕</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Опытные Бариста</h3>
            <p className="text-gray-700">
              Наши специалисты знают, как приготовить идеальную чашку кофе именно для вас.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Уютная Атмосфера</h3>
            <p className="text-gray-700">
              Ваше личное убежище для работы, встреч или просто расслабления.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Не пропустите наше меню</h2>
          <p className="text-xl text-amber-900 mb-8">
            От классических эспрессо до авторских напитков - у нас есть что-то для каждого вкуса.
          </p>
          <Link 
            href="/menu" 
            className="inline-block bg-amber-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition"
          >
            Просмотреть полное меню
          </Link>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">📍 Наше месторасположение</h3>
            <p className="text-gray-700 mb-4">
              ул. Кофейная, 42<br/>
              Центр города<br/>
              Легко добраться на общественном транспорте
            </p>
            <Link href="/contact" className="text-amber-900 font-bold hover:underline">
              Подробнее →
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">🕐 Время работы</h3>
            <p className="text-gray-700 mb-2">Пн-Пт: 7:00 - 20:00</p>
            <p className="text-gray-700 mb-2">Сб-Вс: 9:00 - 21:00</p>
            <p className="text-gray-700">Праздничные дни - открыты</p>
          </div>
        </div>
      </section>
    </div>
  );
}
