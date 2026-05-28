'use client';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

export default function DownloadModal({ onClose }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Có lỗi xảy ra');
      }

      const link = document.createElement('a');
      link.href = '/api/pdf';
      link.download = 'cam-nang-du-lich-viet-nam.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-300 hover:text-gray-500 text-3xl leading-none"
        >
          ×
        </button>

        {done ? (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-extrabold text-xl text-gray-800 mb-2">Đang tải về!</h3>
            <p className="text-gray-500 text-sm mb-6">
              Cẩm nang du lịch theo mùa đã được tải về máy bạn. Chúc du lịch vui vẻ!
            </p>
            <button
              onClick={onClose}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl px-8 py-2 font-semibold transition-colors"
            >
              Đóng
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-md mx-auto mb-4">
                📖
              </div>
              <h3 className="font-extrabold text-xl text-gray-800 mb-1">Tải Cẩm Nang Du Lịch</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Miễn phí · 12 tháng · 63 tỉnh thành<br />
                Nhập email để tải file PDF ngay
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl py-3 font-semibold text-sm transition-all disabled:opacity-50 shadow-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Đang tạo PDF...
                  </span>
                ) : (
                  '📥 Tải về miễn phí'
                )}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              Không spam. Chỉ nhận nội dung du lịch hữu ích từ chuongchudu.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
