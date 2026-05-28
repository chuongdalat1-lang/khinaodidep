'use client';
import { useState, useMemo } from 'react';
import { provinces, Province, REGIONS, STATUS_CONFIG } from '../data/provinces';

interface Props {
  selected: Province | null;
  onSelect: (p: Province) => void;
}

export default function ProvinceSelector({ selected, onSelect }: Props) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('Tất cả');

  const filtered = useMemo(() => {
    return provinces.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchRegion = region === 'Tất cả' || p.region === region;
      return matchSearch && matchRegion;
    });
  }, [search, region]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm tỉnh thành..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
        />
      </div>

      {/* Region filter */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {REGIONS.map(r => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all
              ${region === r ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Province list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-1">
        {filtered.map(p => {
          const isSelected = selected?.id === p.id;
          // Count dep months
          const depCount = p.months.filter(m => m.status === 'dep').length;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className={`text-left p-3 rounded-xl border-2 transition-all duration-150 hover:shadow-sm
                ${isSelected ? 'border-teal-500 bg-teal-50' : 'border-gray-100 bg-white hover:border-teal-200'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-sm text-gray-800">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.region}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {p.isCoastal && <span className="text-[10px] bg-blue-50 text-blue-500 rounded-full px-1.5 font-medium">Biển</span>}
                  <span className="text-[10px] text-emerald-600 font-medium">{depCount} tháng đẹp</span>
                </div>
              </div>
              {/* Mini strip */}
              <div className="flex gap-0.5 mt-2">
                {p.months.map((m, i) => (
                  <div key={i} className={`flex-1 h-1.5 rounded-sm ${STATUS_CONFIG[m.status].color}`} />
                ))}
              </div>
            </button>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-6 text-gray-400 text-sm">Không tìm thấy tỉnh thành nào</div>
      )}
    </div>
  );
}
