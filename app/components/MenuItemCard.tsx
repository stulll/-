'use client';

import Link from 'next/link';
import { MenuItem } from '@/app/data/menu';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Link href={`/dish/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden border border-amber-100">
        <div className="bg-amber-50 h-40 flex items-center justify-center text-6xl">
          {item.image}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-amber-900 mb-1">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">${item.price.toFixed(2)}</span>
            <span className="text-xs bg-amber-200 text-amber-900 px-2 py-1 rounded">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
