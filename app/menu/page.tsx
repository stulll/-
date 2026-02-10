'use client';

import { useState } from 'react';
import { menuItems, MenuItem } from '@/app/data/menu';
import MenuItemCard from '@/app/components/MenuItemCard';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'all'>('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'Все', emoji: '📋' },
    { id: 'coffee', name: 'Кофе', emoji: '☕' },
    { id: 'tea', name: 'Чай', emoji: '🍵' },
    { id: 'food', name: 'Еда', emoji: '🥐' },
    { id: 'dessert', name: 'Десерты', emoji: '🍰' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-amber-900 mb-4 text-center">Наше меню</h1>
      <p className="text-xl text-gray-700 text-center mb-12">
        Выбирайте из широкого ассортимента кофе, чая, закусок и десертов
      </p>

      {/* Category Filter */}
      <div className="flex gap-4 justify-center mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              selectedCategory === cat.id
                ? 'bg-amber-900 text-white'
                : 'bg-white text-amber-900 border-2 border-amber-900 hover:bg-amber-50'
            }`}
          >
            <span className="text-xl mr-2">{cat.emoji}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-600">Блюда не найдены</p>
        </div>
      )}
    </div>
  );
}
