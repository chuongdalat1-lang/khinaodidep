'use client';
import { useState } from 'react';
import { Province, MONTH_SHORT, STATUS_CONFIG } from '../data/provinces';
import MonthDetail from './MonthDetail';

export default function WeatherCalendar({ province }: { province: Province }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
        {province.months.map((m, i) => {
          const cfg = STATUS_CONFIG[m.status];
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => setSelected(isSelected ? null : i)}
              className={`
                relative flex flex-col items-center p-2 rounded-xl border-2 transition-all duration-200
                hover:scale-105 hover:shadow-md cursor-pointer
                ${cfg.bgLight} ${isSelected ? `${cfg.border} border-2 shadow-lg scale-105` : 'border-transparent'}
              `}
            >
              <span className="text-xs font-semibold text-gray-500 mb-1">{MONTH_SHORT[i]}</span>
              <span className={`w-8 h-8 rounded-full ${cfg.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                {cfg.emoji}
              </span>
              <span className={`text-[10px] font-medium mt-1 ${cfg.textColor}`}>{cfg.label}</span>
              {m.typhoon && (
                <span className="absolute -top-1 -right-1 text-[10px] bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  🌀
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4">
        {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${cfg.color}`} />
            <span className="text-xs text-gray-600">{cfg.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="text-xs bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center">🌀</span>
          <span className="text-xs text-gray-600">Nguy cơ bão</span>
        </div>
      </div>

      {selected !== null && (
        <MonthDetail province={province} monthIndex={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
