'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getMenuItemById } from '@/app/data/menu';

export default function DishPage() {
  const params = useParams();
  const dishId = params.id as string;
  const dish = getMenuItemById(dishId);

  if (!dish) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Блюдо не найдено</h1>
        <p className="text-xl text-gray-700 mb-8">
          К сожалению, мы не смогли найти блюдо с таким ID.
        </p>
        <Link 
          href="/menu" 
          className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition"
        >
          ← Вернуться в меню
        </Link>
      </div>
    );
  }

  // Get related items (same category, but different)
  const relatedItems = [
    { id: 'cappuccino', name: 'Капучино', category: 'coffee', price: 4.00, emoji: '🥛' },
    { id: 'espresso', name: 'Эспрессо', category: 'coffee', price: 2.50, emoji: '☕' },
    { id: 'latte', name: 'Латте', category: 'coffee', price: 4.25, emoji: '☕' },
  ].filter(item => item.id !== dishId).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link 
        href="/menu" 
        className="inline-flex items-center gap-2 text-amber-900 font-bold hover:text-amber-800 mb-8 transition"
      >
        ← Вернуться в меню
      </Link>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-12 mb-16 bg-white p-8 rounded-lg shadow-md border border-amber-100">
        {/* Image */}
        <div className="flex items-center justify-center bg-amber-50 rounded-lg h-96">
          <div className="text-9xl">{dish.image}</div>
        </div>

        {/* Details */}
        <div>
          <div className="mb-4">
            <span className="inline-block bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
              {
                {
                  'coffee': '☕ Кофе',
                  'tea': '🍵 Чай',
                  'food': '🥐 Закуска',
                  'dessert': '🍰 Десерт',
                }[dish.category]
              }
            </span>
          </div>

          <h1 className="text-5xl font-bold text-amber-900 mb-6">{dish.name}</h1>

          <p className="text-2xl text-gray-700 mb-8">
            {dish.description}
          </p>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-3">Полное описание</h3>
            <p className="text-gray-700 leading-relaxed">
              {dish.fullDescription}
            </p>
          </div>

          {/* Price and Action */}
          <div className="flex items-center gap-8 mb-12">
            <div>
              <p className="text-sm text-gray-700 mb-2">Цена</p>
              <p className="text-5xl font-bold text-green-600">
                ${dish.price.toFixed(2)}
              </p>
            </div>
            <button 
              onClick={() => alert(`Спасибо за заказ ${dish.name}! Приходите к нам в кафе.`)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition"
            >
              Заказать
            </button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-bold text-amber-900 mb-1">⏱️ Время приготовления</p>
              <p className="text-gray-700">3-5 минут</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-bold text-amber-900 mb-1">🔥 Калорийность</p>
              <p className="text-gray-700">~150-200 ккал</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-bold text-amber-900 mb-1">🌡️ Температура</p>
              <p className="text-gray-700">Горячее</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-bold text-amber-900 mb-1">🌱 Вариант</p>
              <p className="text-gray-700">Есть альтернативы</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Попробуйте также</h2>
        <div className="grid grid-cols-3 gap-8">
          {relatedItems.map(item => (
            <Link 
              key={item.id}
              href={`/dish/${item.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-amber-100"
            >
              <div className="bg-amber-50 h-32 flex items-center justify-center text-5xl rounded mb-4">
                {item.emoji}
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
              <p className="text-2xl font-bold text-green-600">${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы попробовать?</h2>
        <p className="text-lg mb-8">
          Посетите наше кафе и насладитесь чашкой качественного кофе!
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition"
        >
          Как нас найти →
        </Link>
      </section>
    </div>
  );
}
