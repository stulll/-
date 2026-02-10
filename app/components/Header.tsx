'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-3xl">☕</span>
            <div>
              <h1 className="text-2xl font-bold">BrewHaven</h1>
              <p className="text-xs text-amber-200">Craft Coffee & More</p>
            </div>
          </Link>

          <nav className="flex gap-8 items-center">
            <Link href="/" className="hover:text-amber-200 transition font-medium">
              Главная
            </Link>
            <Link href="/menu" className="hover:text-amber-200 transition font-medium">
              Меню
            </Link>
            <Link href="/about" className="hover:text-amber-200 transition font-medium">
              О нас
            </Link>
            <Link href="/contact" className="hover:text-amber-200 transition font-medium">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
