'use client';
import { useState } from 'react';
import { provinces, Province, STATUS_CONFIG } from './data/provinces';
import ProvinceSelector from './components/ProvinceSelector';
import WeatherCalendar from './components/WeatherCalendar';
import ReverseLookup from './components/ReverseLookup';

export default function Home() {
  const [selected, setSelected] = useState<Province | null>(null);
  const [view, setView] = useState<'browse' | 'lookup'>('browse');

  const handleSelectById = (id: string) => {
    const p = provinces.find(x => x.id === id);
    if (p) {
      setSelected(p);
      setView('browse');
      setTimeout(() => {
        document.getElementById('province-detail')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-md">
              🗺️
            </div>
            <div>
              <h1 className="font-extrabold text-gray-800 text-lg leading-tight">Khi Nào Đi Đẹp?</h1>
              <p className="text-xs text-teal-600">Lịch thời tiết du lịch 63 tỉnh thành Việt Nam</p>
            </div>
          </div>
          <span className="text-xs text-gray-400 hidden sm:block">chuongchudu.com</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Hero */}
        <div className="text-center py-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            Du lịch đúng mùa, <span className="text-teal-500">trời luôn đẹp</span> ☀️
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Tra cứu thời điểm lý tưởng để du lịch 63 tỉnh thành Việt Nam — thời tiết, lễ hội, nhiệt độ, mùa mưa bão theo từng tháng.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-white rounded-2xl p-1 border border-gray-100 shadow-sm max-w-xs mx-auto">
          <button
            onClick={() => setView('browse')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all ${view === 'browse' ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            🗺️ Chọn tỉnh
          </button>
          <button
            onClick={() => setView('lookup')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all ${view === 'lookup' ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            🗓️ Chọn tháng
          </button>
        </div>

        {/* Browse view */}
        {view === 'browse' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <span>📍</span> Chọn tỉnh thành để xem lịch thời tiết
            </h2>
            <ProvinceSelector selected={selected} onSelect={setSelected} />
          </div>
        )}

        {/* Reverse lookup view */}
        {view === 'lookup' && (
          <ReverseLookup onSelectProvince={handleSelectById} />
        )}

        {/* Province detail */}
        {selected && (
          <div id="province-detail" className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-extrabold text-2xl text-gray-800">{selected.name}</h2>
                  <span className="text-sm bg-teal-100 text-teal-700 rounded-full px-3 py-1 font-medium">{selected.region}</span>
                  {selected.isCoastal && (
                    <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-medium">🏖️ Ven biển</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-1">📌 {selected.highlight}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-300 hover:text-gray-500 text-2xl leading-none ml-4">×</button>
            </div>

            {/* Status summary */}
            <div className="flex flex-wrap gap-3 my-4">
              {Object.entries(STATUS_CONFIG).map(([key, cfg]) => {
                const count = selected.months.filter(m => m.status === key).length;
                return (
                  <div key={key} className={`flex items-center gap-2 ${cfg.bgLight} border ${cfg.border} rounded-xl px-3 py-2`}>
                    <span className={`w-3 h-3 rounded-full ${cfg.color} flex-shrink-0`} />
                    <span className={`text-xs font-semibold ${cfg.textColor}`}>{cfg.label}</span>
                    <span className="text-xs font-bold text-gray-700">{count} tháng</span>
                  </div>
                );
              })}
            </div>

            <WeatherCalendar province={selected} />
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-teal-500">63</div>
            <div className="text-sm text-gray-500 mt-1">Tỉnh thành Việt Nam</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-emerald-500">12</div>
            <div className="text-sm text-gray-500 mt-1">Tháng được phân tích</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl font-extrabold text-purple-500">756</div>
            <div className="text-sm text-gray-500 mt-1">Mốc thời tiết chi tiết</div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-6 text-white">
          <h3 className="font-bold text-lg mb-3">💡 Mẹo du lịch theo mùa</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white/20 rounded-xl p-3">🌸 <strong>Tháng 2–3:</strong> Hoa mận, hoa ban Tây Bắc đẹp nhất</div>
            <div className="bg-white/20 rounded-xl p-3">🌾 <strong>Tháng 9–10:</strong> Ruộng bậc thang vàng óng Mù Cang Chải</div>
            <div className="bg-white/20 rounded-xl p-3">🏖️ <strong>Tháng 3–7:</strong> Biển miền Trung mùa đẹp nhất</div>
            <div className="bg-white/20 rounded-xl p-3">🌺 <strong>Tháng 12–4:</strong> Miền Tây, Nha Trang, Mũi Né đẹp nhất</div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-gray-400">
        <p>Dữ liệu thời tiết dựa trên kinh nghiệm du lịch thực tế · Chuong Chudu © 2026</p>
      </footer>
    </div>
  );
}
