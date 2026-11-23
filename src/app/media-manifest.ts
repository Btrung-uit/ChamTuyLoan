export type Media = {
  path: string;
  width: number;
  height: number;
  alpha: boolean;
  story: "rice" | "dinh";
  scene: string;
  alt: string;
  caption: string;
  credit: string;
  origin: "field-photo" | "ai-illustration";
  sourceFilename: string;
  gallery: boolean;
  thumb?: string;
  mobile?: { path: string; width: number; height: number; sourceFilename: string };
};

export const mediaManifest = {
  "gao": {
    path: "/di-san/gao.webp", thumb: "/di-san/gao-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Rổ gạo cạnh mè, gừng và tỏi", caption: "Gạo và gia vị",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S01_01_ingredients_A_D_v01.png", gallery: true,
  },
  "gao-can": {
    path: "/di-san/gao-can.webp", thumb: "/di-san/gao-can-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Cận cảnh hạt gạo trắng trong rổ tre", caption: "Hạt gạo",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S01_02_selected-rice_A_D_v01.png", gallery: true,
  },
  "gao-tay": {
    path: "/di-san/gao-tay.webp", thumb: "/di-san/gao-tay-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Bàn tay nâng một vốc gạo trên rổ tre", caption: "Một vốc gạo",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S01_03_lift-rice_B_D_v01.png", gallery: true,
  },
  "gao-tren": {
    path: "/di-san/gao-tren.webp", thumb: "/di-san/gao-tren-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Gạo, mè, gừng và tỏi nhìn từ trên cao", caption: "Mâm nguyên liệu",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S01_04_ingredients-flat-lay_A_D_v01.png", gallery: true,
  },
  "gao-ngam": {
    path: "/di-san/gao-ngam.webp", thumb: "/di-san/gao-ngam-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Chậu gạo ngâm đặt trên mặt gỗ", caption: "Chậu ngâm gạo",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S02_01_soaking-rice_A_D_v01.png", gallery: true,
  },
  "vo-gao": {
    path: "/di-san/vo-gao.webp", thumb: "/di-san/vo-gao-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Hai bàn tay vo gạo trong chậu nước", caption: "Vo gạo",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S02_02_wash-rice_D_v01.png", gallery: true,
  },
  "gao-ngap": {
    path: "/di-san/gao-ngap.webp", thumb: "/di-san/gao-ngap-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Cận cảnh hạt gạo ngâm dưới mặt nước", caption: "Hạt gạo dưới nước",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S02_03_submerged-rice_A_D_v01.png", gallery: true,
  },
  "chau-gao": {
    path: "/di-san/chau-gao.webp", thumb: "/di-san/chau-gao-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Chậu gạo ngâm nhìn từ trên cao", caption: "Gạo ngâm nhìn từ trên",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S02_04_soaked-rice-basin_A_D_v01.png", gallery: true,
  },
  "coi-da": {
    path: "/di-san/coi-da.webp", thumb: "/di-san/coi-da-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Cối đá với bát hứng bột", caption: "Cối đá",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S03_01_stone-mill_A_D_v01.png", gallery: true,
  },
  "xay-bot": {
    path: "/di-san/xay-bot.webp", thumb: "/di-san/xay-bot-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Bột gạo chảy từ cối đá xuống bát", caption: "Xay bột",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S03_02_wet-grinding_A_D_v01.png", gallery: true,
  },
  "loc-bot": {
    path: "/di-san/loc-bot.webp", thumb: "/di-san/loc-bot-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Người làm rót bột qua rây tròn", caption: "Lọc bột",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S03_03_filtering-slurry_A_D_v02.png", gallery: true,
  },
  "chau-bot": {
    path: "/di-san/chau-bot.webp", thumb: "/di-san/chau-bot-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Nguyên liệu", alt: "Chậu bột đặt trên mặt gỗ nhìn từ trên cao", caption: "Chậu bột gạo",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S03_04_batter-basin-only_A_D_v01.png", gallery: true,
  },
  "gia-vi-chay": {
    path: "/di-san/gia-vi-chay.webp", thumb: "/di-san/gia-vi-chay-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Bàn tay cầm chày giã gừng và tỏi", caption: "Giã gừng và tỏi",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S04_01_crushing-ginger-garlic_A_D_v01.png", gallery: true,
  },
  "gia-vi": {
    path: "/di-san/gia-vi.webp", thumb: "/di-san/gia-vi-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Mè trắng rơi xuống chậu bột", caption: "Rắc mè",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S04_02_sprinkling-white-sesame_A_D_v01.png", gallery: true,
  },
  "gia-vi-tren": {
    path: "/di-san/gia-vi-tren.webp", thumb: "/di-san/gia-vi-tren-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Chậu bột đã hòa mè nhìn từ trên cao", caption: "Mè trong bột",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S04_03_seasoned-batter-basin_A_D_v03.png", gallery: true,
  },
  "trang-banh": {
    path: "/di-san/trang-banh.webp", thumb: "/di-san/trang-banh-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Tay dùng vá dàn bột trên mặt vải căng", caption: "Tráng bánh",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S05_01_spreading-batter_D_v02.png", gallery: true,
  },
  "mat-banh": {
    path: "/di-san/mat-banh.webp", thumb: "/di-san/mat-banh-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Cận cảnh vá và bột trên mặt vải", caption: "Mặt bánh trên khuôn",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S05_02_two-layer-sheet_D_v02.png", gallery: true,
  },
  "nhac-banh": {
    path: "/di-san/nhac-banh.webp", thumb: "/di-san/nhac-banh-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Tấm bánh vừa hấp được nâng lên bằng thanh tre", caption: "Nhấc bánh",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S05_03_lifted-rice-paper_D_v02.png", gallery: true,
  },
  "hong-banh": {
    path: "/di-san/hong-banh.webp", thumb: "/di-san/hong-banh-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Tay đặt tấm bánh lên lồng tre úp gần những tấm bánh khác", caption: "Hong khô trên lồng tre",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06_01_charcoal-drying_D_v02.png", gallery: true,
  },
  "long-tre": {
    path: "/di-san/long-tre.webp", thumb: "/di-san/long-tre-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Cận cảnh tấm bánh nằm trên nan lồng tre", caption: "Bánh và nan tre",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06_02_drying-detail_D_v01.png", gallery: true,
  },
  "banh-kho": {
    path: "/di-san/banh-kho.webp", thumb: "/di-san/banh-kho-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Tấm bánh đã hong khô khô trên mặt gỗ", caption: "Tấm bánh đã hong khô",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06_03_finished-dried-sheet_D_v02.png", gallery: true,
  },
  "xep-banh": {
    path: "/di-san/xep-banh.webp", thumb: "/di-san/xep-banh-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Hai tay xếp tấm bánh lên chồng bánh", caption: "Xếp bánh thành xấp",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06B_01_stacking-dried-sheets_D_v01.png", gallery: true,
  },
  "goi-banh": {
    path: "/di-san/goi-banh.webp", thumb: "/di-san/goi-banh-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Xấp bánh đặt trong giấy gói mở", caption: "Gói bánh",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06B_02_wrapped-stack_D_v02.png", gallery: true,
  },
  "trao-banh": {
    path: "/di-san/trao-banh.webp", thumb: "/di-san/trao-banh-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Làm bánh", alt: "Hai người trao tay nhau một gói bánh tráng", caption: "Trao bánh",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06B_03_handoff_D_v01.png", gallery: true,
  },
  "nuong-banh": {
    path: "/di-san/nuong-banh.webp", thumb: "/di-san/nuong-banh-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Tấm bánh trên vỉ phía trên than hồng", caption: "Bánh trên vỉ",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S07_01_placing-sheet-on-grate_D_v01.png", gallery: true,
  },
  "mat-nuong": {
    path: "/di-san/mat-nuong.webp", thumb: "/di-san/mat-nuong-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Cận cảnh bề mặt bánh và than hồng qua vỉ nướng", caption: "Mặt bánh trên than",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S07_02_roasting-detail_D_v01.png", gallery: true,
  },
  "banh-nuong": {
    path: "/di-san/banh-nuong.webp", thumb: "/di-san/banh-nuong-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Tấm bánh nướng vàng nhìn từ trên cao", caption: "Bánh vừa nướng",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S07_03_fully-roasted-sheet_D_v02.png", gallery: true,
  },
  "be-banh": {
    path: "/di-san/be-banh.webp", thumb: "/di-san/be-banh-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Hai bàn tay bẻ đôi một miếng bánh tráng nướng", caption: "Bẻ bánh",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S08_01_snap-crispy-sheet_D_v04.png", gallery: true, mobile: { path: "/di-san/be-banh-mobile.webp", width: 720, height: 1279, sourceFilename: "S08_01_snap-crispy-sheet_M_v01.png" },
  },
  "mep-gay": {
    path: "/di-san/mep-gay.webp", thumb: "/di-san/mep-gay-small.webp", width: 1560, height: 878, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Cận cảnh mép gãy và những mảnh vụn bánh", caption: "Mép bánh gãy",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S08_02_crisp-fracture-detail_D_v01.png", gallery: true,
  },
  "thanh-pham": {
    path: "/di-san/thanh-pham.webp", thumb: "/di-san/thanh-pham-small.webp", width: 1440, height: 811, alpha: false,
    story: "rice", scene: "Lửa & hương vị", alt: "Những mảnh bánh tráng nướng trên mặt gỗ", caption: "Bánh và mảnh vỡ",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S08_03_final-serving-composition_D_v01.png", gallery: true, mobile: { path: "/di-san/thanh-pham-mobile.webp", width: 660, height: 1173, sourceFilename: "S08_03_final-serving-composition_M_v01.png" },
  },
  "san-dinh": {
    path: "/di-san/san-dinh.webp", thumb: "/di-san/san-dinh-small.webp", width: 1680, height: 1120, alpha: false,
    story: "dinh", scene: "Toàn cảnh", alt: "Sân lát gạch nhìn về các công trình trong khuôn viên", caption: "Sân đình",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7067.JPG", gallery: true, mobile: {"path":"/di-san/san-dinh-mobile.webp","width":720,"height":1161,"sourceFilename":"IMG_7067.JPG"},
  },
  "mai-dinh-toan": {
    path: "/di-san/mai-dinh-toan.webp", thumb: "/di-san/mai-dinh-toan-small.webp", width: 1600, height: 1067, alpha: false,
    story: "dinh", scene: "Mái đình", alt: "Mái ngói và dải trang trí nhiều màu nhìn chính diện", caption: "Đường nóc nhìn từ sân",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7077.JPG", gallery: true,
  },
  "mai-dinh": {
    path: "/di-san/mai-dinh.webp", thumb: "/di-san/mai-dinh-small.webp", width: 1680, height: 1120, alpha: false,
    story: "dinh", scene: "Mái đình", alt: "Các mảng trang trí nhiều màu chạy dọc mái đình", caption: "Chi tiết dọc bờ nóc",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7089.JPG", gallery: true,
  },
  "goc-mai": {
    path: "/di-san/goc-mai.webp", thumb: "/di-san/goc-mai-small.webp", width: 1600, height: 1067, alpha: false,
    story: "dinh", scene: "Mái đình", alt: "Các tầng hoa văn và hình nổi ở góc mái", caption: "Hoa văn ở góc mái",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7091.JPG", gallery: true,
  },
  "cua-dinh": {
    path: "/di-san/cua-dinh.webp", thumb: "/di-san/cua-dinh-small.webp", width: 1680, height: 2520, alpha: false,
    story: "dinh", scene: "Nội thất", alt: "Hành lang cạnh cửa gỗ, nhìn về khung cửa có ánh sáng", caption: "Lối vào gian đình",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7093.JPG", gallery: true,
  },
  "tam-trang-tri": {
    path: "/di-san/tam-trang-tri.webp", thumb: "/di-san/tam-trang-tri-small.webp", width: 1600, height: 1067, alpha: false,
    story: "dinh", scene: "Trang trí", alt: "Hình con vật có vảy đắp nổi trên nền vàng", caption: "Hình nổi trên nền vàng",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7111.JPG", gallery: true,
  },
  "mat-dinh": {
    path: "/di-san/mat-dinh.webp", thumb: "/di-san/mat-dinh-small.webp", width: 1680, height: 1120, alpha: false,
    story: "dinh", scene: "Toàn cảnh", alt: "Mặt đình với bậc thềm, hàng cột và mái ngói", caption: "Mặt đình",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7128.JPG", gallery: true,
  },
  "hoa-tiet-ho": {
    path: "/di-san/hoa-tiet-ho.webp", thumb: "/di-san/hoa-tiet-ho-small.webp", width: 1067, height: 1600, alpha: false,
    story: "dinh", scene: "Trang trí", alt: "Hình hổ đắp nổi giữa các mảng hoa văn trên nền đỏ", caption: "Hình hổ trên nền đỏ",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7135.JPG", gallery: true,
  },
  "bang-di-tich": {
    path: "/di-san/bang-di-tich.webp", thumb: "/di-san/bang-di-tich-small.webp", width: 1680, height: 1120, alpha: false,
    story: "dinh", scene: "Tư liệu", alt: "Bảng di tích đình Túy Loan ghi ngày 4 tháng 1 năm 1999", caption: "Bảng di tích đình Túy Loan",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "IMG_7144.JPG", gallery: true,
  },
  "cong-dinh": {
    path: "/di-san/cong-dinh.webp", thumb: "/di-san/cong-dinh-small.webp", width: 1680, height: 1120, alpha: false,
    story: "dinh", scene: "Toàn cảnh", alt: "Cổng chính đình Túy Loan với cây xanh hai bên", caption: "Cổng đình",
    credit: "Ảnh thực địa · Bộ ảnh Chạm Túy Loan", origin: "field-photo", sourceFilename: "khoi-nguon--IMG_7143.JPG", gallery: true,
  },
  "vat-banh-goi": {
    path: "/di-san/vat-banh-goi.webp", width: 720, height: 546, alpha: true,
    story: "rice", scene: "Làm bánh", alt: "Xấp bánh trong giấy gói mở", caption: "Xấp bánh gói giấy",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S06B_CUTOUT_wrapped-rice-paper-stack_D_v01.png", gallery: false,
  },
  "vat-banh-nuong": {
    path: "/di-san/vat-banh-nuong.webp", width: 822, height: 765, alpha: true,
    story: "rice", scene: "Lửa & hương vị", alt: "Một tấm bánh nướng vàng", caption: "Bánh đã nướng",
    credit: "Minh họa AI · Chạm Túy Loan", origin: "ai-illustration", sourceFilename: "S07_CUTOUT_roasted-rice-paper_D_v01.png", gallery: false,
  },
} satisfies Record<string, Media>;

export type MediaId = keyof typeof mediaManifest;
