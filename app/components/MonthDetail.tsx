'use client';
import { Province, MONTH_NAMES, STATUS_CONFIG } from '../data/provinces';

interface Props {
  province: Province;
  monthIndex: number;
  onClose: () => void;
}

const RAINFALL_LABEL: Record<string, string> = { it: 'Ít mưa', vua: 'Vừa phải', nhieu: 'Mưa nhiều' };
const RAINFALL_COLOR: Record<string, string> = { it: 'text-emerald-600', vua: 'text-amber-600', nhieu: 'text-blue-600' };

export default function MonthDetail({ province, monthIndex, onClose }: Props) {
  const m = province.months[monthIndex];
  const cfg = STATUS_CONFIG[m.status];

  return (
    <div className={`mt-4 rounded-2xl border-2 ${cfg.border} ${cfg.bgLight} p-5 animate-fade-in`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-800">
            {MONTH_NAMES[monthIndex]} — {province.name}
          </h3>
          <span className={`inline-flex items-center gap-1 text-sm font-semibold ${cfg.textColor}`}>
            {cfg.emoji} {cfg.label}
          </span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl mb-1">🌡️</div>
          <div className="text-xs text-gray-500">Nhiệt độ</div>
          <div className="font-bold text-gray-800">{m.tempMin}° – {m.tempMax}°C</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl mb-1">🌧️</div>
          <div className="text-xs text-gray-500">Lượng mưa</div>
          <div className={`font-bold ${RAINFALL_COLOR[m.rainfall]}`}>{RAINFALL_LABEL[m.rainfall]}</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl mb-1">🌀</div>
          <div className="text-xs text-gray-500">Nguy cơ bão</div>
          <div className={`font-bold ${m.typhoon ? 'text-orange-600' : 'text-emerald-600'}`}>
            {m.typhoon ? 'Có thể có' : 'Không'}
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <div className="text-2xl mb-1">📍</div>
          <div className="text-xs text-gray-500">Điểm nổi bật</div>
          <div className="font-bold text-gray-700 text-xs leading-tight">{province.highlight.split(',')[0]}</div>
        </div>
      </div>

      {m.note && (
        <p className="text-sm text-gray-700 bg-white rounded-xl p-3 shadow-sm mb-3">
          💬 {m.note}
        </p>
      )}

      {m.festivals.length > 0 && (
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="text-xs font-semibold text-gray-500 mb-2">🎉 Lễ hội & Sự kiện</div>
          <div className="flex flex-wrap gap-2">
            {m.festivals.map((f, i) => (
              <span key={i} className="text-xs bg-purple-100 text-purple-700 rounded-full px-3 py-1 font-medium">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
