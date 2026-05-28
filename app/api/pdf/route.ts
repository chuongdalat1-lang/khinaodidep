import { NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { readFile } from 'fs/promises';
import path from 'path';
import { getTopProvincesByMonth, MONTH_NAMES } from '@/app/data/provinces';

const W = 595;
const H = 842;

function trunc(text: string, max: number) {
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
}

async function loadFont(filename: string) {
  try {
    return await readFile(path.join(process.cwd(), 'public', 'fonts', filename));
  } catch {
    // Fallback: fetch from Google Fonts CDN
    const urls: Record<string, string> = {
      'BeVietnamPro-Regular.woff': 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVPSTAyLFyeg_IDWvOJmVES_Hw4BXw.woff',
      'BeVietnamPro-Bold.woff': 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG86Rbs.woff',
    };
    const res = await fetch(urls[filename]);
    return Buffer.from(await res.arrayBuffer());
  }
}

export async function GET() {
  try {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    const [regularBytes, boldBytes] = await Promise.all([
      loadFont('BeVietnamPro-Regular.woff'),
      loadFont('BeVietnamPro-Bold.woff'),
    ]);

    const regular = await pdfDoc.embedFont(regularBytes);
    const bold = await pdfDoc.embedFont(boldBytes);

    const teal      = rgb(0.055, 0.576, 0.502);
    const tealDark  = rgb(0.027, 0.467, 0.404);
    const white     = rgb(1, 1, 1);
    const dark      = rgb(0.122, 0.161, 0.243);
    const gray      = rgb(0.45, 0.49, 0.56);
    const lightBg   = rgb(0.94, 0.99, 0.97);
    const altBg     = rgb(0.97, 0.99, 0.98);

    // ---- COVER PAGE ----
    const cover = pdfDoc.addPage([W, H]);
    cover.drawRectangle({ x: 0, y: 0, width: W, height: H, color: lightBg });
    cover.drawRectangle({ x: 0, y: H - 300, width: W, height: 300, color: teal });
    cover.drawCircle({ x: W + 20, y: H - 20, size: 140, color: tealDark });
    cover.drawCircle({ x: -30, y: 80, size: 110, color: rgb(0.87, 0.97, 0.94) });

    cover.drawText('CAM NANG DU LICH',   { x: 50, y: H - 95,  size: 11, font: regular, color: rgb(0.8, 1, 0.95) });
    cover.drawText('VIET NAM THEO MUA', { x: 50, y: H - 150, size: 30, font: bold, color: white });
    cover.drawText('63 tinh thanh  |  12 thang  |  Top diem dep nhat', {
      x: 50, y: H - 195, size: 11, font: regular, color: rgb(0.85, 1, 0.95),
    });

    cover.drawLine({ start: { x: 50, y: H - 325 }, end: { x: W - 50, y: H - 325 }, thickness: 1, color: rgb(0.75, 0.88, 0.84) });

    const descLines = [
      'Huong dan du lich thong minh - di dung mua, troi luon dep.',
      'Du lieu thoi tiet tu kinh nghiem thuc te cua dan du lich Viet Nam.',
      'Bao gom nhiet do, luong mua, le hoi noi bat theo tung thang.',
    ];
    // Vietnamese versions below
    const descLinesVi = [
      'Hướng dẫn du lịch thông minh — đi đúng mùa, trời luôn đẹp.',
      'Dữ liệu thời tiết từ kinh nghiệm thực tế của dân du lịch Việt Nam.',
      'Bao gồm nhiệt độ, lượng mưa, lễ hội nổi bật theo từng tháng.',
    ];
    descLinesVi.forEach((line, i) => {
      cover.drawText(line, { x: 50, y: H - 360 - i * 22, size: 11, font: regular, color: dark });
    });

    // Month preview blocks
    cover.drawText('Tổng quan 12 tháng:', { x: 50, y: H - 450, size: 12, font: bold, color: dark });
    MONTH_NAMES.forEach((name, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const bx = 50 + col * 124;
      const by = H - 510 - row * 42;
      const count = getTopProvincesByMonth(i, 10).length;
      cover.drawRectangle({ x: bx, y: by - 6, width: 112, height: 32, color: teal });
      cover.drawText(name, { x: bx + 8, y: by + 10, size: 10, font: bold, color: white });
      cover.drawText(`${count} diem dep`, { x: bx + 8, y: by - 2, size: 8, font: regular, color: rgb(0.85, 1, 0.95) });
    });

    cover.drawLine({ start: { x: 50, y: 58 }, end: { x: W - 50, y: 58 }, thickness: 0.5, color: rgb(0.78, 0.88, 0.85) });
    cover.drawText('chuongchudu.com  ·  Khi Nao Di Dep?', { x: 50, y: 36, size: 9, font: regular, color: gray });
    cover.drawText('© 2026 Chuong Chudu', { x: W - 150, y: 36, size: 9, font: regular, color: gray });

    // ---- MONTH PAGES ----
    for (let m = 0; m < 12; m++) {
      const page = pdfDoc.addPage([W, H]);
      const list = getTopProvincesByMonth(m, 8);

      // Header
      page.drawRectangle({ x: 0, y: H - 72, width: W, height: 72, color: teal });
      page.drawText(MONTH_NAMES[m].toUpperCase(), { x: 50, y: H - 36, size: 20, font: bold, color: white });
      page.drawText(`Top ${list.length} diem den dep nhat | Khi Nao Di Dep?`, {
        x: 50, y: H - 55, size: 9, font: regular, color: rgb(0.85, 1, 0.95),
      });
      page.drawText(`${m + 2} / 14`, { x: W - 72, y: H - 44, size: 9, font: regular, color: rgb(0.85, 1, 0.95) });

      if (list.length === 0) {
        page.drawText('Thang nay khong co diem den dac biet dep tai Viet Nam.', {
          x: 50, y: H - 140, size: 12, font: regular, color: gray,
        });
      } else {
        const RAINFALL: Record<string, string> = { it: 'It mua', vua: 'Vua phai', nhieu: 'Nhieu mua' };
        let y = H - 90;

        list.forEach((prov, idx) => {
          if (y < 90) return;
          const md = prov.months[m];
          const hasFestival = md.festivals.length > 0;
          const entryH = hasFestival ? 78 : 60;
          const bg = idx % 2 === 0 ? lightBg : altBg;

          page.drawRectangle({ x: 36, y: y - entryH + 6, width: W - 72, height: entryH, color: bg });
          // Index circle
          page.drawCircle({ x: 60, y: y - entryH / 2 + 6, size: 11, color: teal });
          page.drawText(`${idx + 1}`, { x: idx < 9 ? 56 : 54, y: y - entryH / 2 + 2, size: 9, font: bold, color: white });

          // Name & region
          page.drawText(prov.name, { x: 80, y: y - 14, size: 13, font: bold, color: dark });
          page.drawText(prov.region, { x: W - 170, y: y - 14, size: 9, font: regular, color: gray });

          // Weather
          const weather = `${md.tempMin}-${md.tempMax}°C  ·  ${RAINFALL[md.rainfall]}${md.typhoon ? '  ·  Nguy co bao' : ''}`;
          page.drawText(weather, { x: 80, y: y - 30, size: 9, font: regular, color: gray });

          // Note
          if (md.note) {
            page.drawText(trunc(md.note, 90), { x: 80, y: y - 45, size: 10, font: regular, color: dark });
          }

          // Festivals
          if (hasFestival) {
            const fText = trunc(md.festivals.join(' · '), 88);
            page.drawText(`Le hoi: ${fText}`, { x: 80, y: y - 62, size: 9, font: regular, color: teal });
          }

          y -= entryH + 6;
        });
      }

      // Footer
      page.drawLine({ start: { x: 36, y: 46 }, end: { x: W - 36, y: 46 }, thickness: 0.5, color: rgb(0.8, 0.9, 0.87) });
      page.drawText('chuongchudu.com  ·  Khi Nao Di Dep?', { x: 36, y: 26, size: 8, font: regular, color: gray });
      page.drawText('Du lieu tu kinh nghiem du lich thuc te', { x: W - 210, y: 26, size: 8, font: regular, color: gray });
    }

    // ---- TIPS PAGE ----
    const tips = pdfDoc.addPage([W, H]);
    tips.drawRectangle({ x: 0, y: H - 72, width: W, height: 72, color: teal });
    tips.drawText('MEO DU LICH THEO MUA', { x: 50, y: H - 36, size: 20, font: bold, color: white });
    tips.drawText('Tong hop kinh nghiem tu chuongchudu.com', { x: 50, y: H - 55, size: 9, font: regular, color: rgb(0.85, 1, 0.95) });
    tips.drawText('14 / 14', { x: W - 72, y: H - 44, size: 9, font: regular, color: rgb(0.85, 1, 0.95) });

    const tipItems = [
      { period: 'Tháng 2–3', text: 'Hoa mận, hoa đào, hoa ban Tây Bắc đẹp nhất năm. Không thể bỏ lỡ Hà Giang tháng 3.' },
      { period: 'Tháng 9–10', text: 'Ruộng bậc thang vàng Mù Cang Chải — đặt phòng trước 2–3 tháng để có chỗ tốt.' },
      { period: 'Tháng 3–7', text: 'Biển miền Trung đẹp nhất: Đà Nẵng, Hội An, Quy Nhơn. Tránh tháng 9–11 mùa bão.' },
      { period: 'Tháng 12–4', text: 'Miền Nam mùa khô: Mũi Né, Phú Quốc, Phan Rang hoàn hảo cho biển.' },
      { period: 'Tháng 10–11', text: 'Cao nguyên Đà Lạt, Mộc Châu mùa hoa dã quỳ và lá vàng — khí hậu tuyệt vời.' },
      { period: 'Tháng 1–2', text: 'Tết Nguyên Đán: Đường hoa Hà Nội, Sài Gòn. Đà Lạt và Sa Pa ít đông trong Tết.' },
      { period: 'Tháng 5–8', text: 'Miền Bắc mùa mưa. Ưu tiên Phú Quốc, Bình Thuận, Nha Trang đang vào mùa đẹp.' },
      { period: 'Tháng 6–7 & 9–10', text: 'Tây Bắc có 2 mùa đẹp: ruộng bậc thang mùa nước đổ (T6–7) và mùa vàng (T9–10).' },
    ];

    let ty = H - 95;
    tipItems.forEach((tip, i) => {
      const bg = i % 2 === 0 ? lightBg : altBg;
      tips.drawRectangle({ x: 36, y: ty - 50, width: W - 72, height: 56, color: bg });
      tips.drawText(tip.period, { x: 52, y: ty - 16, size: 11, font: bold, color: teal });
      tips.drawText(trunc(tip.text, 92), { x: 52, y: ty - 34, size: 10, font: regular, color: dark });
      ty -= 64;
    });

    tips.drawLine({ start: { x: 36, y: 46 }, end: { x: W - 36, y: 46 }, thickness: 0.5, color: rgb(0.8, 0.9, 0.87) });
    tips.drawText('chuongchudu.com  ·  Khi Nao Di Dep?  ·  © 2026 Chuong Chudu', { x: 36, y: 26, size: 8, font: regular, color: gray });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cam-nang-du-lich-viet-nam.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('PDF error:', err);
    return NextResponse.json({ error: 'Khong the tao PDF' }, { status: 500 });
  }
}
