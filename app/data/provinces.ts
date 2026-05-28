export type Status = 'dep' | 'binh_thuong' | 'tranh';
export type Rainfall = 'it' | 'vua' | 'nhieu';

export interface MonthData {
  status: Status;
  tempMin: number;
  tempMax: number;
  rainfall: Rainfall;
  typhoon: boolean;
  festivals: string[];
  note: string;
}

export interface Province {
  id: string;
  name: string;
  region: string;
  isCoastal: boolean;
  highlight: string;
  months: MonthData[];
}

const mk = (
  status: Status, tempMin: number, tempMax: number,
  rainfall: Rainfall, typhoon: boolean, festivals: string[], note: string
): MonthData => ({ status, tempMin, tempMax, rainfall, typhoon, festivals, note });

// ===== TÂY BẮC =====
const tayBacMonths = (): MonthData[] => [
  mk('binh_thuong', 8, 18, 'it', false, ['Tết Nguyên Đán', 'Hội Gầu Tào'], 'Lạnh, sương mù nhiều'),
  mk('dep', 10, 20, 'it', false, ['Hoa mận, hoa đào nở'], 'Hoa mận hoa đào đẹp nhất'),
  mk('dep', 14, 24, 'it', false, ['Hội xuân Tây Bắc'], 'Thời tiết dễ chịu, tam giác mạch'),
  mk('dep', 18, 28, 'vua', false, [], 'Xanh mướt, đẹp'),
  mk('dep', 20, 30, 'vua', false, [], 'Bắt đầu có mưa nhẹ'),
  mk('binh_thuong', 20, 30, 'nhieu', false, [], 'Mưa nhiều, đường trơn'),
  mk('binh_thuong', 20, 28, 'nhieu', false, [], 'Mưa lớn, lũ ống'),
  mk('dep', 20, 28, 'nhieu', false, ['Mùa lúa chín, ruộng bậc thang'], 'Ruộng bậc thang mùa nước đổ'),
  mk('dep', 18, 26, 'vua', false, ['Lễ hội thu hoạch'], 'Ruộng bậc thang đẹp nhất năm'),
  mk('dep', 15, 24, 'it', false, [], 'Trời trong xanh, khô ráo'),
  mk('binh_thuong', 10, 20, 'it', false, [], 'Trời lạnh dần'),
  mk('binh_thuong', 7, 16, 'it', false, ['Chợ tình Khâu Vai'], 'Lạnh, có thể có tuyết vùng cao'),
];

// ===== ĐÔNG BẮC =====
const dongBacMonths = (): MonthData[] => [
  mk('binh_thuong', 12, 18, 'it', false, ['Tết Nguyên Đán'], 'Lạnh, nhiều sương mù'),
  mk('binh_thuong', 14, 20, 'it', false, [], 'Lạnh kéo dài, mưa phùn'),
  mk('binh_thuong', 16, 24, 'vua', false, ['Hội Lồng Tồng'], 'Mưa phùn, nồm ẩm'),
  mk('dep', 20, 28, 'it', false, [], 'Thời tiết dễ chịu'),
  mk('dep', 24, 32, 'vua', false, [], 'Nóng dễ chịu, ít mưa'),
  mk('binh_thuong', 26, 34, 'nhieu', false, [], 'Nóng, mưa bắt đầu'),
  mk('binh_thuong', 26, 33, 'nhieu', true, [], 'Mưa nhiều, nguy cơ lũ'),
  mk('binh_thuong', 26, 32, 'nhieu', true, [], 'Mưa lớn, lũ lụt'),
  mk('dep', 24, 30, 'vua', false, [], 'Mưa giảm, trời đẹp hơn'),
  mk('dep', 20, 27, 'it', false, [], 'Mùa thu đẹp, lá vàng'),
  mk('dep', 16, 22, 'it', false, [], 'Trời mát, trong xanh'),
  mk('binh_thuong', 13, 18, 'it', false, [], 'Lạnh, sương mù sáng sớm'),
];

// ===== HÀ NỘI & ĐỒNG BẰNG BẮC =====
const hanoiMonths = (): MonthData[] => [
  mk('binh_thuong', 14, 20, 'it', false, ['Tết Nguyên Đán', 'Hội Chùa Hương'], 'Lạnh, hanh khô'),
  mk('binh_thuong', 15, 20, 'it', false, ['Hội Chùa Hương'], 'Mưa phùn, nồm ẩm'),
  mk('binh_thuong', 18, 24, 'vua', false, [], 'Mưa phùn, ẩm ướt'),
  mk('dep', 22, 28, 'vua', false, ['Lễ hội Hai Bà Trưng'], 'Ấm áp, hoa sưa nở'),
  mk('dep', 25, 32, 'vua', false, [], 'Nắng ấm dễ chịu'),
  mk('binh_thuong', 28, 36, 'nhieu', false, [], 'Nóng, oi bức'),
  mk('tranh', 29, 38, 'nhieu', true, [], 'Rất nóng, mưa bão'),
  mk('tranh', 28, 36, 'nhieu', true, [], 'Nóng ẩm, nhiều mưa to'),
  mk('binh_thuong', 26, 33, 'vua', true, [], 'Mưa bão, lũ lụt có thể'),
  mk('dep', 22, 28, 'it', false, ['Lễ hội Thăng Long'], 'Mùa thu Hà Nội đẹp nhất'),
  mk('dep', 18, 24, 'it', false, [], 'Mát mẻ, trong xanh'),
  mk('binh_thuong', 15, 20, 'it', false, [], 'Lạnh, hanh khô'),
];

// ===== BẮC TRUNG BỘ (Thanh Hóa, Nghệ An, Hà Tĩnh) =====
const bacTrungBoMonths = (): MonthData[] => [
  mk('binh_thuong', 14, 20, 'vua', false, ['Tết Nguyên Đán'], 'Lạnh, mưa phùn'),
  mk('binh_thuong', 16, 22, 'vua', false, [], 'Lạnh ẩm'),
  mk('binh_thuong', 18, 25, 'vua', false, [], 'Mưa phùn, ẩm'),
  mk('dep', 22, 30, 'it', false, [], 'Ấm áp, dễ chịu'),
  mk('dep', 26, 34, 'it', false, [], 'Nắng đẹp'),
  mk('tranh', 28, 38, 'it', false, [], 'Rất nóng - gió Lào'),
  mk('tranh', 28, 40, 'it', false, [], 'Gió Lào cực nóng'),
  mk('tranh', 28, 38, 'vua', true, [], 'Nóng rát, bắt đầu mưa bão'),
  mk('binh_thuong', 24, 32, 'nhieu', true, [], 'Mưa bão, lũ lụt'),
  mk('binh_thuong', 20, 28, 'nhieu', true, [], 'Mưa lớn, lũ lụt'),
  mk('dep', 18, 25, 'vua', false, [], 'Trời dịu mát'),
  mk('binh_thuong', 15, 21, 'vua', false, [], 'Lạnh, mưa nhẹ'),
];

// ===== QUẢNG BÌNH, QUẢNG TRỊ =====
const quangBinhMonths = (): MonthData[] => [
  mk('tranh', 16, 22, 'nhieu', false, ['Tết Nguyên Đán'], 'Lạnh, mưa nhiều'),
  mk('binh_thuong', 17, 23, 'vua', false, [], 'Lạnh ẩm, cải thiện dần'),
  mk('dep', 20, 26, 'it', false, [], 'Ấm hơn, ít mưa'),
  mk('dep', 24, 30, 'it', false, [], 'Đẹp, nắng ấm'),
  mk('dep', 27, 34, 'it', false, [], 'Nắng đẹp, biển đẹp'),
  mk('dep', 28, 36, 'it', false, [], 'Nắng nóng nhưng đẹp'),
  mk('dep', 28, 36, 'it', false, [], 'Khô nóng, biển trong'),
  mk('binh_thuong', 28, 34, 'vua', true, [], 'Bắt đầu mưa, coi chừng bão'),
  mk('tranh', 24, 30, 'nhieu', true, [], 'Mưa bão, lũ lụt'),
  mk('tranh', 20, 27, 'nhieu', true, [], 'Mưa lớn, ngập lụt'),
  mk('binh_thuong', 18, 24, 'nhieu', false, [], 'Mưa giảm dần'),
  mk('binh_thuong', 16, 22, 'nhieu', false, [], 'Lạnh, mưa rét'),
];

// ===== HUẾ =====
const hueMonths = (): MonthData[] => [
  mk('tranh', 16, 22, 'nhieu', false, ['Tết Nguyên Đán', 'Festival Huế (năm chẵn)'], 'Lạnh, mưa nhiều'),
  mk('binh_thuong', 17, 23, 'vua', false, [], 'Lạnh ẩm'),
  mk('dep', 20, 27, 'it', false, [], 'Ấm dần, dễ chịu'),
  mk('dep', 24, 31, 'it', false, ['Festival Huế'], 'Đẹp nhất trong năm'),
  mk('dep', 27, 35, 'it', false, [], 'Nắng đẹp'),
  mk('dep', 29, 36, 'it', false, [], 'Nóng nhưng khô ráo'),
  mk('dep', 29, 36, 'it', false, [], 'Khô ráo, biển đẹp'),
  mk('binh_thuong', 28, 34, 'vua', true, [], 'Bắt đầu mưa'),
  mk('tranh', 24, 30, 'nhieu', true, [], 'Mưa bão nhiều'),
  mk('tranh', 20, 26, 'nhieu', true, [], 'Ngập lụt, tránh đi'),
  mk('binh_thuong', 18, 24, 'nhieu', false, [], 'Mưa giảm'),
  mk('binh_thuong', 16, 21, 'nhieu', false, [], 'Lạnh mưa'),
];

// ===== ĐÀ NẴNG =====
const danangMonths = (): MonthData[] => [
  mk('binh_thuong', 18, 24, 'nhieu', false, ['Tết Nguyên Đán', 'Lễ hội pháo hoa'], 'Lạnh theo tiêu chuẩn miền Trung'),
  mk('dep', 19, 25, 'it', false, [], 'Ấm dần, nắng nhiều hơn'),
  mk('dep', 22, 28, 'it', false, [], 'Đẹp, ít mưa'),
  mk('dep', 25, 32, 'it', false, ['Lễ hội Quan Âm'], 'Thời tiết tuyệt vời'),
  mk('dep', 27, 34, 'it', false, ['Giải Marathon Đà Nẵng'], 'Đẹp, nắng đẹp'),
  mk('dep', 29, 36, 'it', false, [], 'Nóng, biển đẹp'),
  mk('dep', 29, 36, 'it', false, ['Lễ hội pháo hoa DIFF'], 'Mùa du lịch cao điểm'),
  mk('dep', 28, 35, 'it', false, [], 'Nóng, khô ráo'),
  mk('binh_thuong', 26, 32, 'vua', true, [], 'Bắt đầu mưa, bão'),
  mk('tranh', 22, 28, 'nhieu', true, [], 'Mưa bão, ngập lụt Hội An'),
  mk('tranh', 20, 26, 'nhieu', true, [], 'Mưa lớn, lũ lụt'),
  mk('binh_thuong', 18, 24, 'vua', false, [], 'Mưa giảm, lạnh hơn'),
];

// ===== QUẢNG NAM, QUẢNG NGÃI =====
const quangNamMonths = (): MonthData[] => [
  mk('binh_thuong', 17, 23, 'nhieu', false, ['Tết Nguyên Đán'], 'Mưa, lạnh'),
  mk('binh_thuong', 18, 25, 'vua', false, [], 'Cải thiện dần'),
  mk('dep', 21, 28, 'it', false, [], 'Nắng ấm, dễ chịu'),
  mk('dep', 25, 32, 'it', false, [], 'Thời tiết đẹp'),
  mk('dep', 27, 34, 'it', false, [], 'Nắng đẹp, biển xanh'),
  mk('dep', 29, 36, 'it', false, [], 'Nóng, khô'),
  mk('dep', 29, 36, 'it', false, [], 'Đẹp nhất, biển trong'),
  mk('binh_thuong', 28, 34, 'vua', true, [], 'Bắt đầu mưa bão'),
  mk('binh_thuong', 25, 30, 'nhieu', true, [], 'Mưa bão'),
  mk('tranh', 22, 27, 'nhieu', true, [], 'Mưa lũ, ngập lụt'),
  mk('tranh', 20, 25, 'nhieu', false, [], 'Mưa nhiều'),
  mk('binh_thuong', 18, 23, 'vua', false, [], 'Lạnh, mưa nhẹ'),
];

// ===== BÌNH ĐỊNH, PHÚ YÊN =====
const binhDinhMonths = (): MonthData[] => [
  mk('binh_thuong', 20, 26, 'nhieu', false, ['Tết Nguyên Đán'], 'Mưa, gió lạnh'),
  mk('dep', 21, 28, 'it', false, [], 'Cải thiện nhanh'),
  mk('dep', 23, 30, 'it', false, [], 'Nắng đẹp'),
  mk('dep', 26, 33, 'it', false, [], 'Đẹp nhất'),
  mk('dep', 28, 35, 'it', false, [], 'Nắng nóng, biển đẹp'),
  mk('dep', 29, 36, 'it', false, [], 'Biển đẹp, nắng nhiều'),
  mk('dep', 29, 36, 'it', false, [], 'Mùa cao điểm'),
  mk('binh_thuong', 28, 34, 'vua', true, [], 'Bắt đầu mưa bão'),
  mk('tranh', 25, 30, 'nhieu', true, [], 'Mưa bão mạnh'),
  mk('tranh', 22, 28, 'nhieu', true, [], 'Lũ lụt, tránh đi'),
  mk('binh_thuong', 21, 27, 'nhieu', false, [], 'Mưa giảm dần'),
  mk('binh_thuong', 20, 26, 'nhieu', false, [], 'Mưa, gió'),
];

// ===== NHA TRANG =====
const nhatrangMonths = (): MonthData[] => [
  mk('dep', 22, 28, 'it', false, ['Tết Nguyên Đán', 'Lễ hội Am Chúa'], 'Khô ráo, đẹp'),
  mk('dep', 23, 29, 'it', false, [], 'Đẹp, ít mưa'),
  mk('dep', 25, 31, 'it', false, [], 'Mùa đẹp nhất'),
  mk('dep', 27, 33, 'it', false, [], 'Nắng đẹp, biển xanh'),
  mk('dep', 29, 35, 'it', false, [], 'Nóng, biển trong'),
  mk('dep', 29, 35, 'it', false, [], 'Đẹp nhất trong năm'),
  mk('dep', 29, 35, 'it', false, [], 'Mùa cao điểm du lịch'),
  mk('binh_thuong', 28, 34, 'vua', false, [], 'Đẹp nhưng bắt đầu có mưa'),
  mk('binh_thuong', 26, 32, 'nhieu', true, [], 'Mưa nhiều hơn'),
  mk('tranh', 24, 29, 'nhieu', true, [], 'Mưa bão, biển động'),
  mk('tranh', 22, 28, 'nhieu', true, [], 'Mưa lớn, tránh đi'),
  mk('binh_thuong', 22, 28, 'vua', false, [], 'Mưa giảm, dần đẹp'),
];

// ===== NINH THUẬN, BÌNH THUẬN =====
const ninhThuanMonths = (): MonthData[] => [
  mk('dep', 23, 30, 'it', false, ['Tết Nguyên Đán', 'Lễ hội Katê'], 'Khô ráo, ít mưa nhất VN'),
  mk('dep', 24, 31, 'it', false, [], 'Tuyệt vời, gió mát'),
  mk('dep', 26, 33, 'it', false, [], 'Đẹp nhất, gió lướt ván'),
  mk('dep', 28, 35, 'it', false, [], 'Nắng nóng, resort đẹp'),
  mk('dep', 29, 36, 'it', false, [], 'Nóng, biển trong'),
  mk('binh_thuong', 28, 35, 'vua', false, [], 'Gió mùa, sóng nhỏ'),
  mk('binh_thuong', 27, 34, 'vua', false, [], 'Mưa nhẹ'),
  mk('binh_thuong', 27, 33, 'nhieu', false, [], 'Mưa nhiều hơn'),
  mk('binh_thuong', 26, 32, 'nhieu', false, [], 'Mưa mùa'),
  mk('binh_thuong', 25, 31, 'nhieu', false, [], 'Mưa, gió'),
  mk('dep', 24, 30, 'it', false, ['Lễ hội Katê'], 'Bắt đầu đẹp trở lại'),
  mk('dep', 23, 30, 'it', false, [], 'Khô ráo, gió tốt'),
];

// ===== ĐÀ LẠT =====
const dalatMonths = (): MonthData[] => [
  mk('dep', 13, 24, 'it', false, ['Tết Nguyên Đán', 'Festival Hoa Đà Lạt'], 'Mát lạnh, hoa nở đẹp'),
  mk('dep', 14, 25, 'it', false, ['Festival Hoa Đà Lạt'], 'Mùa hoa đẹp nhất'),
  mk('dep', 16, 26, 'it', false, [], 'Mát mẻ, dễ chịu'),
  mk('dep', 17, 27, 'vua', false, [], 'Đẹp, bắt đầu có mưa nhẹ'),
  mk('binh_thuong', 17, 26, 'nhieu', false, [], 'Mưa chiều thường xuyên'),
  mk('binh_thuong', 16, 24, 'nhieu', false, [], 'Mưa nhiều, lạnh'),
  mk('tranh', 16, 23, 'nhieu', false, [], 'Mưa lớn nhất trong năm'),
  mk('tranh', 16, 23, 'nhieu', false, [], 'Mưa liên tục'),
  mk('binh_thuong', 16, 24, 'nhieu', false, [], 'Mưa giảm dần'),
  mk('binh_thuong', 15, 24, 'vua', false, [], 'Mưa ít hơn'),
  mk('dep', 14, 24, 'it', false, [], 'Trời đẹp, khô ráo'),
  mk('dep', 13, 23, 'it', false, ['Festival Hoa Đà Lạt'], 'Mùa hoa, trời xanh'),
];

// ===== TÂY NGUYÊN =====
const tayNguyenMonths = (): MonthData[] => [
  mk('dep', 15, 28, 'it', false, ['Tết Nguyên Đán', 'Lễ hội Cà phê Buôn Ma Thuột'], 'Khô ráo, mát ban đêm'),
  mk('dep', 16, 30, 'it', false, ['Lễ hội Cà phê BMT'], 'Đẹp, nắng vàng'),
  mk('dep', 18, 32, 'it', false, [], 'Nóng dần, đẹp'),
  mk('dep', 20, 33, 'vua', false, [], 'Nóng, bắt đầu mưa nhẹ'),
  mk('binh_thuong', 20, 30, 'nhieu', false, [], 'Mưa mùa bắt đầu'),
  mk('binh_thuong', 19, 28, 'nhieu', false, [], 'Mưa nhiều, xanh tươi'),
  mk('tranh', 18, 27, 'nhieu', false, [], 'Mưa lớn nhất'),
  mk('tranh', 18, 27, 'nhieu', false, [], 'Mưa liên tục'),
  mk('binh_thuong', 19, 28, 'nhieu', false, [], 'Mưa giảm'),
  mk('binh_thuong', 17, 28, 'vua', false, [], 'Mưa ít hơn'),
  mk('dep', 16, 29, 'it', false, [], 'Khô ráo, mát mẻ'),
  mk('dep', 15, 28, 'it', false, [], 'Tuyệt vời, khô ráo'),
];

// ===== TP. HCM =====
const hcmMonths = (): MonthData[] => [
  mk('dep', 22, 33, 'it', false, ['Tết Nguyên Đán', 'Lễ hội Nguyên Tiêu'], 'Mùa khô đẹp nhất'),
  mk('dep', 23, 34, 'it', false, [], 'Nắng đẹp, khô'),
  mk('dep', 24, 35, 'it', false, [], 'Nóng nhưng khô ráo'),
  mk('binh_thuong', 24, 36, 'vua', false, [], 'Nóng nhất trong năm'),
  mk('tranh', 23, 34, 'nhieu', false, [], 'Mưa mùa bắt đầu'),
  mk('tranh', 22, 32, 'nhieu', false, [], 'Mưa nhiều, ngập'),
  mk('tranh', 22, 31, 'nhieu', false, [], 'Mưa lớn, kẹt xe ngập'),
  mk('tranh', 22, 31, 'nhieu', false, [], 'Mưa triều cường'),
  mk('tranh', 22, 31, 'nhieu', false, [], 'Ngập lụt, triều cường'),
  mk('binh_thuong', 22, 31, 'nhieu', false, ['Lễ hội Óc Om Bóc'], 'Mưa giảm dần'),
  mk('dep', 22, 32, 'it', false, [], 'Mùa khô bắt đầu'),
  mk('dep', 22, 32, 'it', false, ['Lễ hội ánh sáng'], 'Đẹp, khô ráo'),
];

// ===== MIỀN TÂY =====
const mekongMonths = (): MonthData[] => [
  mk('dep', 22, 32, 'it', false, ['Tết Nguyên Đán', 'Đua ghe Ngo Khmer'], 'Khô đẹp, trái cây ngon'),
  mk('dep', 23, 33, 'it', false, [], 'Nắng đẹp, hoa trái'),
  mk('dep', 24, 34, 'it', false, ['Lễ hội Bà Chúa Xứ'], 'Đẹp nhất miền Tây'),
  mk('binh_thuong', 24, 35, 'vua', false, [], 'Nóng, bắt đầu mưa nhẹ'),
  mk('tranh', 23, 33, 'nhieu', false, [], 'Mưa mùa bắt đầu'),
  mk('tranh', 22, 32, 'nhieu', false, [], 'Mưa nhiều'),
  mk('tranh', 22, 31, 'nhieu', false, [], 'Lũ từ thượng nguồn'),
  mk('tranh', 22, 31, 'nhieu', false, [], 'Mùa nước nổi cao điểm'),
  mk('binh_thuong', 22, 31, 'nhieu', false, ['Mùa nước nổi', 'Sen nở Đồng Tháp'], 'Nước nổi, có thể đi thuyền'),
  mk('binh_thuong', 22, 31, 'vua', false, ['Lễ hội Óc Om Bóc', 'Đua ghe'], 'Nước rút, lễ hội'),
  mk('dep', 22, 32, 'it', false, [], 'Bắt đầu khô, đẹp'),
  mk('dep', 22, 32, 'it', false, ['Hội hoa Tết'], 'Mùa khô, hoa trái'),
];

// ===== PHÚ QUỐC =====
const phuQuocMonths = (): MonthData[] => [
  mk('dep', 24, 32, 'it', false, ['Tết Nguyên Đán'], 'Biển đẹp, gió mát'),
  mk('dep', 25, 33, 'it', false, [], 'Đẹp nhất Phú Quốc'),
  mk('dep', 26, 33, 'it', false, [], 'Biển trong xanh tuyệt đẹp'),
  mk('dep', 27, 34, 'it', false, [], 'Nóng đẹp, lặn biển tốt'),
  mk('binh_thuong', 27, 33, 'vua', false, [], 'Bắt đầu có mưa'),
  mk('tranh', 25, 31, 'nhieu', false, [], 'Mùa mưa, sóng lớn'),
  mk('tranh', 24, 30, 'nhieu', false, [], 'Mưa nhiều, biển động'),
  mk('tranh', 24, 30, 'nhieu', false, [], 'Mưa lớn, tránh đi'),
  mk('tranh', 24, 30, 'nhieu', false, [], 'Mưa nhiều'),
  mk('binh_thuong', 25, 31, 'vua', false, [], 'Mưa giảm dần'),
  mk('dep', 25, 32, 'it', false, [], 'Bắt đầu đẹp trở lại'),
  mk('dep', 24, 32, 'it', false, [], 'Mùa đẹp, gió mát'),
];

// ===== HẠ LONG =====
const haLongMonths = (): MonthData[] => [
  mk('binh_thuong', 13, 18, 'it', false, ['Tết Nguyên Đán', 'Carnaval Hạ Long'], 'Lạnh, sương mù lãng mạn'),
  mk('binh_thuong', 14, 19, 'it', false, [], 'Lạnh, sương mù biển'),
  mk('binh_thuong', 17, 23, 'vua', false, [], 'Mưa phùn, ẩm'),
  mk('dep', 20, 27, 'it', false, ['Carnaval Hạ Long'], 'Đẹp, bắt đầu ấm'),
  mk('dep', 24, 31, 'it', false, [], 'Nắng đẹp, biển xanh'),
  mk('dep', 27, 33, 'vua', false, [], 'Nóng, đẹp'),
  mk('binh_thuong', 28, 34, 'nhieu', true, [], 'Nóng ẩm, mưa bão'),
  mk('binh_thuong', 27, 33, 'nhieu', true, [], 'Mưa nhiều, bão'),
  mk('dep', 26, 31, 'vua', true, [], 'Đẹp, đôi khi mưa bão'),
  mk('dep', 22, 27, 'it', false, [], 'Đẹp nhất - trời xanh'),
  mk('dep', 18, 23, 'it', false, [], 'Mát, đẹp'),
  mk('binh_thuong', 14, 19, 'it', false, [], 'Lạnh, sương mù'),
];

// ===== BIỂN BẮC (Sầm Sơn, Đồ Sơn) =====
const bienBacMonths = (): MonthData[] => [
  mk('binh_thuong', 14, 20, 'it', false, ['Tết Nguyên Đán'], 'Lạnh, tránh tắm biển'),
  mk('binh_thuong', 15, 20, 'vua', false, [], 'Lạnh ẩm'),
  mk('binh_thuong', 18, 24, 'vua', false, [], 'Mưa phùn'),
  mk('dep', 22, 28, 'it', false, [], 'Ấm lên, đẹp dần'),
  mk('dep', 25, 32, 'it', false, [], 'Bắt đầu mùa tắm biển'),
  mk('dep', 28, 34, 'vua', false, [], 'Mùa hè, đông du khách'),
  mk('binh_thuong', 28, 35, 'nhieu', true, [], 'Nóng, có bão'),
  mk('binh_thuong', 28, 34, 'nhieu', true, [], 'Mưa bão, sóng lớn'),
  mk('dep', 26, 31, 'vua', true, [], 'Đẹp dần, vắng khách'),
  mk('dep', 22, 27, 'it', false, [], 'Mát mẻ, dễ chịu'),
  mk('binh_thuong', 18, 23, 'it', false, [], 'Lạnh hơn'),
  mk('binh_thuong', 14, 19, 'it', false, [], 'Lạnh, hanh'),
];

// ===== VŨng TÀU =====
const vungTauMonths = (): MonthData[] => [
  mk('dep', 23, 32, 'it', false, ['Tết Nguyên Đán'], 'Mùa khô, biển đẹp'),
  mk('dep', 24, 33, 'it', false, [], 'Nắng đẹp'),
  mk('dep', 25, 34, 'it', false, [], 'Đẹp nhất, biển xanh'),
  mk('dep', 26, 35, 'it', false, [], 'Nóng, biển trong'),
  mk('binh_thuong', 25, 34, 'vua', false, [], 'Bắt đầu có mưa'),
  mk('binh_thuong', 24, 32, 'nhieu', false, [], 'Mưa mùa'),
  mk('tranh', 24, 31, 'nhieu', false, [], 'Mưa nhiều'),
  mk('tranh', 24, 31, 'nhieu', false, [], 'Mưa lớn'),
  mk('tranh', 24, 31, 'nhieu', false, [], 'Mưa nhiều'),
  mk('binh_thuong', 24, 31, 'vua', false, [], 'Mưa giảm'),
  mk('dep', 23, 32, 'it', false, [], 'Khô ráo trở lại'),
  mk('dep', 23, 32, 'it', false, [], 'Mùa khô đẹp'),
];

export const provinces: Province[] = [
  // TÂY BẮC
  { id: 'ha-giang', name: 'Hà Giang', region: 'Tây Bắc', isCoastal: false, highlight: 'Cao nguyên đá Đồng Văn, ruộng bậc thang', months: tayBacMonths() },
  { id: 'lao-cai', name: 'Lào Cai', region: 'Tây Bắc', isCoastal: false, highlight: 'Sa Pa, Fansipan, ruộng bậc thang Mù Cang Chải', months: tayBacMonths() },
  { id: 'yen-bai', name: 'Yên Bái', region: 'Tây Bắc', isCoastal: false, highlight: 'Ruộng bậc thang Mù Cang Chải vàng óng tháng 9', months: tayBacMonths() },
  { id: 'dien-bien', name: 'Điện Biên', region: 'Tây Bắc', isCoastal: false, highlight: 'Di tích Điện Biên Phủ, hoa ban tháng 2', months: tayBacMonths() },
  { id: 'lai-chau', name: 'Lai Châu', region: 'Tây Bắc', isCoastal: false, highlight: 'Thung lũng Mường So, cung đường đèo', months: tayBacMonths() },
  { id: 'son-la', name: 'Sơn La', region: 'Tây Bắc', isCoastal: false, highlight: 'Mộc Châu hoa mận, lòng hồ sông Đà', months: tayBacMonths() },
  { id: 'hoa-binh', name: 'Hòa Bình', region: 'Tây Bắc', isCoastal: false, highlight: 'Lòng hồ Hòa Bình, bản văn hóa Thái', months: tayBacMonths() },

  // ĐÔNG BẮC
  { id: 'cao-bang', name: 'Cao Bằng', region: 'Đông Bắc', isCoastal: false, highlight: 'Thác Bản Giốc, hang Pác Bó', months: dongBacMonths() },
  { id: 'bac-kan', name: 'Bắc Kạn', region: 'Đông Bắc', isCoastal: false, highlight: 'Hồ Ba Bể, rừng nguyên sinh', months: dongBacMonths() },
  { id: 'lang-son', name: 'Lạng Sơn', region: 'Đông Bắc', isCoastal: false, highlight: 'Cửa khẩu, ải Chi Lăng, chợ Đông Kinh', months: dongBacMonths() },
  { id: 'tuyen-quang', name: 'Tuyên Quang', region: 'Đông Bắc', isCoastal: false, highlight: 'Lễ hội Trung Thu lớn nhất VN', months: dongBacMonths() },
  { id: 'thai-nguyen', name: 'Thái Nguyên', region: 'Đông Bắc', isCoastal: false, highlight: 'Chè Thái Nguyên, ATK Định Hóa', months: dongBacMonths() },
  { id: 'phu-tho', name: 'Phú Thọ', region: 'Đông Bắc', isCoastal: false, highlight: 'Đền Hùng, Vườn quốc gia Xuân Sơn', months: dongBacMonths() },
  { id: 'bac-giang', name: 'Bắc Giang', region: 'Đông Bắc', isCoastal: false, highlight: 'Vải thiều Lục Ngạn, chùa Vĩnh Nghiêm', months: dongBacMonths() },
  { id: 'quang-ninh', name: 'Quảng Ninh', region: 'Đông Bắc', isCoastal: true, highlight: 'Vịnh Hạ Long, Bái Tử Long, Cô Tô', months: haLongMonths() },

  // ĐỒNG BẰNG SÔNG HỒNG
  { id: 'ha-noi', name: 'Hà Nội', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Thủ đô ngàn năm, hồ Hoàn Kiếm, mùa thu lá vàng', months: hanoiMonths() },
  { id: 'hai-phong', name: 'Hải Phòng', region: 'Đồng bằng Sông Hồng', isCoastal: true, highlight: 'Đảo Cát Bà, bãi biển Đồ Sơn', months: bienBacMonths() },
  { id: 'hai-duong', name: 'Hải Dương', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Bánh đậu xanh, Côn Sơn-Kiếp Bạc', months: hanoiMonths() },
  { id: 'hung-yen', name: 'Hưng Yên', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Nhãn lồng, phố Hiến cổ', months: hanoiMonths() },
  { id: 'nam-dinh', name: 'Nam Định', region: 'Đồng bằng Sông Hồng', isCoastal: true, highlight: 'Phủ Giầy, biển Hải Thịnh', months: bienBacMonths() },
  { id: 'thai-binh', name: 'Thái Bình', region: 'Đồng bằng Sông Hồng', isCoastal: true, highlight: 'Chùa Keo, biển Cồn Vành', months: bienBacMonths() },
  { id: 'ha-nam', name: 'Hà Nam', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Chùa Tam Chúc, Kẽm Trống', months: hanoiMonths() },
  { id: 'ninh-binh', name: 'Ninh Bình', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Tràng An, Tam Cốc, cố đô Hoa Lư', months: hanoiMonths() },
  { id: 'vinh-phuc', name: 'Vĩnh Phúc', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Tam Đảo, hồ Đại Lải', months: hanoiMonths() },
  { id: 'bac-ninh', name: 'Bắc Ninh', region: 'Đồng bằng Sông Hồng', isCoastal: false, highlight: 'Quan họ, chùa Phật Tích, làng tranh Đông Hồ', months: hanoiMonths() },

  // BẮC TRUNG BỘ
  { id: 'thanh-hoa', name: 'Thanh Hóa', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Biển Sầm Sơn, suối cá Cẩm Lương', months: bacTrungBoMonths() },
  { id: 'nghe-an', name: 'Nghệ An', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Quê Bác Hồ, biển Cửa Lò, VQG Pù Mát', months: bacTrungBoMonths() },
  { id: 'ha-tinh', name: 'Hà Tĩnh', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Chùa Hương Tích, biển Thiên Cầm', months: bacTrungBoMonths() },
  { id: 'quang-binh', name: 'Quảng Bình', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Hang Sơn Đoòng, Phong Nha-Kẻ Bàng', months: quangBinhMonths() },
  { id: 'quang-tri', name: 'Quảng Trị', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Đường mòn Hồ Chí Minh, cửa biển Cửa Việt', months: quangBinhMonths() },
  { id: 'thua-thien-hue', name: 'Thừa Thiên Huế', region: 'Bắc Trung Bộ', isCoastal: true, highlight: 'Cố đô Huế, phá Tam Giang, bãi biển Lăng Cô', months: hueMonths() },

  // NAM TRUNG BỘ
  { id: 'da-nang', name: 'Đà Nẵng', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Bãi biển Mỹ Khê, Bà Nà Hills, cầu Rồng', months: danangMonths() },
  { id: 'quang-nam', name: 'Quảng Nam', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Phố cổ Hội An, thánh địa Mỹ Sơn', months: quangNamMonths() },
  { id: 'quang-ngai', name: 'Quảng Ngãi', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Đảo Lý Sơn, Sa Huỳnh', months: quangNamMonths() },
  { id: 'binh-dinh', name: 'Bình Định', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Quy Nhơn, eo Gió, Kỳ Co', months: binhDinhMonths() },
  { id: 'phu-yen', name: 'Phú Yên', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Gành Đá Đĩa, vịnh Xuân Đài, đầm Ô Loan', months: binhDinhMonths() },
  { id: 'khanh-hoa', name: 'Khánh Hòa', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Nha Trang, Vinpearl, đảo Bình Ba, Ninh Vân Bay', months: nhatrangMonths() },
  { id: 'ninh-thuan', name: 'Ninh Thuận', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Mũi Dinh, đồng cừu, nho Ninh Thuận, làng Chăm', months: ninhThuanMonths() },
  { id: 'binh-thuan', name: 'Bình Thuận', region: 'Nam Trung Bộ', isCoastal: true, highlight: 'Mũi Né, đồi cát bay, Phan Thiết, resort 5 sao', months: ninhThuanMonths() },

  // TÂY NGUYÊN
  { id: 'kon-tum', name: 'Kon Tum', region: 'Tây Nguyên', isCoastal: false, highlight: 'Măng Đen, rừng thông, nhà rông Bắc Tây Nguyên', months: tayNguyenMonths() },
  { id: 'gia-lai', name: 'Gia Lai', region: 'Tây Nguyên', isCoastal: false, highlight: 'Biển Hồ, cánh đồng cỏ lau, Kon Chro', months: tayNguyenMonths() },
  { id: 'dak-lak', name: 'Đắk Lắk', region: 'Tây Nguyên', isCoastal: false, highlight: 'Buôn Ma Thuột, voi, hồ Lắk, cà phê', months: tayNguyenMonths() },
  { id: 'dak-nong', name: 'Đắk Nông', region: 'Tây Nguyên', isCoastal: false, highlight: 'Công viên địa chất, thác Trinh Nữ', months: tayNguyenMonths() },
  { id: 'lam-dong', name: 'Lâm Đồng', region: 'Tây Nguyên', isCoastal: false, highlight: 'Đà Lạt hoa đẹp, thác Datanla, cáp treo', months: dalatMonths() },

  // ĐÔNG NAM BỘ
  { id: 'tp-hcm', name: 'TP. Hồ Chí Minh', region: 'Đông Nam Bộ', isCoastal: false, highlight: 'Trung tâm kinh tế, địa đạo Củ Chi, ẩm thực', months: hcmMonths() },
  { id: 'binh-phuoc', name: 'Bình Phước', region: 'Đông Nam Bộ', isCoastal: false, highlight: 'VQG Bù Gia Mập, thác Mơ, điều Bình Phước', months: hcmMonths() },
  { id: 'tay-ninh', name: 'Tây Ninh', region: 'Đông Nam Bộ', isCoastal: false, highlight: 'Tòa Thánh Cao Đài, núi Bà Đen', months: hcmMonths() },
  { id: 'binh-duong', name: 'Bình Dương', region: 'Đông Nam Bộ', isCoastal: false, highlight: 'Thủ Dầu Một, chùa cổ, gốm sứ Lái Thiêu', months: hcmMonths() },
  { id: 'dong-nai', name: 'Đồng Nai', region: 'Đông Nam Bộ', isCoastal: false, highlight: 'VQG Cát Tiên, hồ Trị An', months: hcmMonths() },
  { id: 'ba-ria-vung-tau', name: 'Bà Rịa - Vũng Tàu', region: 'Đông Nam Bộ', isCoastal: true, highlight: 'Vũng Tàu, Côn Đảo, Long Hải', months: vungTauMonths() },

  // ĐBSCL
  { id: 'long-an', name: 'Long An', region: 'ĐBSCL', isCoastal: false, highlight: 'Đồng Tháp Mười, rừng tràm Tân Lập', months: mekongMonths() },
  { id: 'tien-giang', name: 'Tiền Giang', region: 'ĐBSCL', isCoastal: false, highlight: 'Cù Lao Thới Sơn, chợ nổi Cái Bè', months: mekongMonths() },
  { id: 'ben-tre', name: 'Bến Tre', region: 'ĐBSCL', isCoastal: true, highlight: 'Xứ dừa, homestay sông nước miệt vườn', months: mekongMonths() },
  { id: 'tra-vinh', name: 'Trà Vinh', region: 'ĐBSCL', isCoastal: true, highlight: 'Ao Bà Om, chùa Khmer, biển Ba Động', months: mekongMonths() },
  { id: 'vinh-long', name: 'Vĩnh Long', region: 'ĐBSCL', isCoastal: false, highlight: 'Cồn Phụng, homestay miệt vườn, làng hoa', months: mekongMonths() },
  { id: 'dong-thap', name: 'Đồng Tháp', region: 'ĐBSCL', isCoastal: false, highlight: 'Sen hồng tháng 7-8, sếu đầu đỏ Tràm Chim', months: mekongMonths() },
  { id: 'an-giang', name: 'An Giang', region: 'ĐBSCL', isCoastal: false, highlight: 'Núi Sam, Châu Đốc, Bà Chúa Xứ', months: mekongMonths() },
  { id: 'kien-giang', name: 'Kiên Giang', region: 'ĐBSCL', isCoastal: true, highlight: 'Phú Quốc, đảo Nam Du, hà tiên', months: phuQuocMonths() },
  { id: 'can-tho', name: 'Cần Thơ', region: 'ĐBSCL', isCoastal: false, highlight: 'Chợ nổi Cái Răng, thành phố miền Tây', months: mekongMonths() },
  { id: 'hau-giang', name: 'Hậu Giang', region: 'ĐBSCL', isCoastal: false, highlight: 'Khu DT Tầm Vu, khóm Cầu Đúc', months: mekongMonths() },
  { id: 'soc-trang', name: 'Sóc Trăng', region: 'ĐBSCL', isCoastal: true, highlight: 'Chùa Dơi, chùa Đất Sét, đua ghe Ngo', months: mekongMonths() },
  { id: 'bac-lieu', name: 'Bạc Liêu', region: 'ĐBSCL', isCoastal: true, highlight: 'Vườn chim, nhà công tử Bạc Liêu', months: mekongMonths() },
  { id: 'ca-mau', name: 'Cà Mau', region: 'ĐBSCL', isCoastal: true, highlight: 'Mũi Cà Mau cực Nam, rừng đước U Minh', months: mekongMonths() },
];

export const MONTH_NAMES = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
export const MONTH_SHORT = ['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'];

export const STATUS_CONFIG = {
  dep: { label: 'Đẹp', color: 'bg-emerald-500', textColor: 'text-emerald-700', bgLight: 'bg-emerald-50', border: 'border-emerald-200', emoji: '☀️' },
  binh_thuong: { label: 'Bình thường', color: 'bg-amber-400', textColor: 'text-amber-700', bgLight: 'bg-amber-50', border: 'border-amber-200', emoji: '⛅' },
  tranh: { label: 'Nên tránh', color: 'bg-rose-500', textColor: 'text-rose-700', bgLight: 'bg-rose-50', border: 'border-rose-200', emoji: '🌧️' },
};

export const REGIONS = ['Tất cả','Tây Bắc','Đông Bắc','Đồng bằng Sông Hồng','Bắc Trung Bộ','Nam Trung Bộ','Tây Nguyên','Đông Nam Bộ','ĐBSCL'];

export function getTopProvincesByMonth(monthIndex: number, limit = 10): Province[] {
  return provinces
    .filter(p => p.months[monthIndex].status === 'dep')
    .sort((a, b) => {
      const rainfallScore = { it: 20, vua: 10, nhieu: 0 };
      const scoreA = rainfallScore[a.months[monthIndex].rainfall] + (a.isCoastal ? 5 : 0);
      const scoreB = rainfallScore[b.months[monthIndex].rainfall] + (b.isCoastal ? 5 : 0);
      return scoreB - scoreA;
    })
    .slice(0, limit);
}
