'use client';
import { Province, STATUS_CONFIG, MONTH_SHORT } from '../data/provinces';

interface Props {
  province: Province;
  onClick: () => void;
  isSelected: boolean;
}

export default function ProvinceCard({ province, onClick, isSelected }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 hover:shadow-md
        ${isSelected
          ? 'border-teal-500 bg-teal-50 shadow-md'
          : 'border-gray-100 bg-white hover:border-teal-200'
        }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-gray-800 text-sm">{province.name}</h3>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-gray-500">{province.region}</span>
            {province.isCoastal && (
              <span className="text-[10px] bg-blue-100 text-blue-600 rounded-full px-1.5 py-0.5 font-medium">🏖️ Biển</span>
            )}
          </div>
        </div>
        {isSelected && <span className="text-teal-500 text-lg">✓</span>}
      </div>
      {/* Mini calendar strip */}
      <div className="flex gap-0.5 mt-2">
        {province.months.map((m, i) => (
          <div
            key={i}
            title={MONTH_SHORT[i]}
            className={`flex-1 h-2 rounded-sm ${STATUS_CONFIG[m.status].color} opacity-80`}
          />
        ))}
      </div>
    </button>
  );
}
