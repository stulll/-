'use client';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-amber-900 mb-12 text-center">Где нас найти</h1>

      <div className="grid grid-cols-2 gap-12 mb-16">
        {/* Contact Info */}
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Контактная информация</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">📍 Адрес</h3>
              <p className="text-lg text-gray-700">
                ул. Кофейная, 42<br/>
                Центр города<br/>
                Россия
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">📞 Телефон</h3>
              <p className="text-lg text-gray-700">
                <a href="tel:+79991234567" className="hover:text-amber-900 transition">
                  +7 (999) 123-45-67
                </a>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">📧 Email</h3>
              <p className="text-lg text-gray-700">
                <a href="mailto:info@brewhaven.ru" className="hover:text-amber-900 transition">
                  info@brewhaven.ru
                </a>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">🕐 Часы работы</h3>
              <p className="text-gray-700">
                <strong>Понедельник - Пятница:</strong> 7:00 - 20:00<br/>
                <strong>Суббота - Воскресенье:</strong> 9:00 - 21:00<br/>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                *В праздничные дни работаем по сокращённому графику
              </p>
            </div>

            <div className="bg-amber-100 p-4 rounded-lg">
              <p className="text-amber-900 font-bold">💡 Совет:</p>
              <p className="text-gray-700">
                Заказывайте кофе заранее, и мы подготовим его для вас! 
                Напишите нам в WhatsApp или позвоните.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Соцсети</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 bg-amber-50 rounded hover:bg-amber-100 transition">
                <span className="text-2xl">📱</span>
                <span className="font-bold text-amber-900">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-amber-50 rounded hover:bg-amber-100 transition">
                <span className="text-2xl">🧵</span>
                <span className="font-bold text-amber-900">Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-amber-50 rounded hover:bg-amber-100 transition">
                <span className="text-2xl">💬</span>
                <span className="font-bold text-amber-900">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-md border border-amber-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Google Maps</h3>
              <p className="text-amber-900">
                Интерактивная карта<br/>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline font-bold"
                >
                  Открыть маршрут →
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">🚗 Как добраться</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span>🚇</span>
                <span><strong>Метро:</strong> 5 минут от станции "Центральная"</span>
              </li>
              <li className="flex gap-3">
                <span>🚌</span>
                <span><strong>Автобус:</strong> Маршруты 5, 12, 23 (остановка "Кофейная")</span>
              </li>
              <li className="flex gap-3">
                <span>🚕</span>
                <span><strong>Такси:</strong> Легко заказать через Uber/Яндекс.Такси</span>
              </li>
              <li className="flex gap-3">
                <span>🅿️</span>
                <span><strong>Парковка:</strong> Платная парковка рядом с кафе</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <section className="bg-amber-50 p-12 rounded-lg border border-amber-100">
        <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Особенности кафе</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-3">📶</div>
            <p className="font-bold text-amber-900">Бесплатный Wi-Fi</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">💺</div>
            <p className="font-bold text-amber-900">Удобные места</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">♿</div>
            <p className="font-bold text-amber-900">Доступный вход</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">🐕</div>
            <p className="font-bold text-amber-900">Дружелюбны к питомцам</p>
          </div>
        </div>
      </section>
    </div>
  );
}
