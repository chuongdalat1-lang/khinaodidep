'use client';
import { useState } from 'react';
import { MONTH_NAMES, STATUS_CONFIG, getTopProvincesByMonth } from '../data/provinces';

interface Props {
  onSelectProvince: (id: string) => void;
}

export default function ReverseLookup({ onSelectProvince }: Props) {
  const [month, setMonth] = useState<number | null>(null);

  const results = month !== null ? getTopProvincesByMonth(month) : [];

  return (
    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-6 border border-teal-100">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🗓️</span>
        <div>
          <h2 className="font-bold text-gray-800 text-lg">Tôi muốn đi tháng...</h2>
          <p className="text-sm text-gray-500">Chọn tháng → xem top 10 điểm đến đẹp nhất</p>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 mb-5">
        {MONTH_NAMES.map((name, i) => (
          <button
            key={i}
            onClick={() => setMonth(month === i ? null : i)}
            className={`
              py-2 px-1 rounded-xl text-xs font-semibold transition-all duration-200
              ${month === i
                ? 'bg-teal-500 text-white shadow-md scale-105'
                : 'bg-white text-gray-600 hover:bg-teal-100 border border-gray-100'
              }
            `}
          >
            {name.replace('Tháng ', 'T')}
          </button>
        ))}
      </div>

      {month !== null && (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-gray-800">
              Top {results.length} điểm đến đẹp {MONTH_NAMES[month]}
            </span>
            {results.length === 0 && (
              <span className="text-sm text-gray-500">— không có điểm nào đạt "đẹp" tháng này</span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((p, idx) => {
              const m = p.months[month];
              const rainfallLabel: Record<string, string> = { it: '🌤️ Ít mưa', vua: '⛅ Vừa', nhieu: '🌧️ Nhiều' };
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectProvince(p.id)}
                  className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all text-left group"
                >
                  <div className={`w-8 h-8 rounded-full ${STATUS_CONFIG.dep.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-sm truncate">{p.name}</div>
                    <div className="text-xs text-gray-500 truncate">{p.region} · {p.isCoastal ? '🏖️ Biển' : '⛰️ Nội địa'}</div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs text-gray-600">🌡️ {m.tempMin}–{m.tempMax}°</span>
                      <span className="text-xs text-gray-600">{rainfallLabel[m.rainfall]}</span>
                    </div>
                  </div>
                  <span className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              );
            })}
          </div>
          {results.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-2">😅</div>
              <p>Tháng này hầu hết các tỉnh đều có thời tiết khó khăn.<br/>Thử chọn tháng khác nhé!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
