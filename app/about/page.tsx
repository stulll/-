'use client';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-amber-900 mb-12 text-center">О нас</h1>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Наша история</h2>
          <p className="text-lg text-gray-700 mb-4">
            BrewHaven была основана в 2015 году тремя друзьями, которые разделяли одну страсть - любовь к кофе. 
            То, что началось как небольшое кафе на углу улицы Кофейной, выросло в любимое место встреч для 
            сотен постоянных клиентов.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Мы верили, что отличный кофе должен быть доступен каждому. Это убеждение остаётся в сердце 
            нашего бизнеса и по сей день.
          </p>
          <p className="text-lg text-gray-700">
            За данные годы мы выиграли множество премий за качество кофе и обслуживание, но наша самая 
            важная награда - улыбки наших клиентов.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-9xl">📖</div>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Наши ценности</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Устойчивость</h3>
            <p className="text-gray-700">
              Мы работаем только с этичными поставщиками, которые справедливо оплачивают фермерам 
              и заботятся об окружающей среде.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Совершенство</h3>
            <p className="text-gray-700">
              Каждая чашка кофе приготавливается с заботой и вниманием к деталям. 
              Мы никогда не идём на компромиссы в качестве.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Сообщество</h3>
            <p className="text-gray-700">
              Мы создаём место, где люди могут встречаться, общаться и чувствовать себя как дома. 
              BrewHaven - это больше, чем кафе.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Philosophy */}
      <section className="bg-amber-50 p-12 rounded-lg border border-amber-100">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Наш подход к кофе</h2>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong>Выбор зёрен:</strong> Мы тщательно отбираем зёрна из лучших кофейных регионов мира. 
            Каждая партия тестируется нашими опытными Q-грейдерами.
          </p>
          <p>
            <strong>Обжарка:</strong> Обжарка кофе - это искусство. Наш мастер-обжарщик имеет более 15 лет опыта 
            и знает, как раскрыть лучшие вкусовые характеристики каждого зерна.
          </p>
          <p>
            <strong>Приготовление:</strong> Наши бариста прошли обучение международного уровня. 
            Они знают, как правильно молоть, взвешивать и готовить кофе для идеального результата.
          </p>
          <p>
            <strong>Свежесть:</strong> Мы жарим кофе несколько раз в неделю, чтобы гарантировать максимальную свежесть. 
            Кофе, который старше месяца, удаляется с меню.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Наша команда</h2>
        <div className="grid grid-cols-4 gap-8">
          {[
            { name: 'Алексей', role: 'Основатель & Master Barista', emoji: '☕' },
            { name: 'Мария', role: 'Head Coffee Roaster', emoji: '🔥' },
            { name: 'Иван', role: 'Pastry Chef', emoji: '🥐' },
            { name: 'Елена', role: 'Менеджер кафе', emoji: '👩‍💼' },
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center border border-amber-100">
              <div className="text-6xl mb-3">{member.emoji}</div>
              <h3 className="text-xl font-bold text-amber-900 mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
