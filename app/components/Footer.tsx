'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">☕</span> BrewHaven
            </h3>
            <p className="text-amber-200 text-sm">
              Ваше любимое место для качественного кофе и уютной атмосферы.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-amber-200 hover:text-white transition">
                  Меню
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <p className="text-amber-200 text-sm mb-2">📞 +7 (999) 123-45-67</p>
            <p className="text-amber-200 text-sm mb-2">📧 info@brewhaven.ru</p>
            <p className="text-amber-200 text-sm">📍 ул. Кофейная, 42</p>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2026 BrewHaven Coffee. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
