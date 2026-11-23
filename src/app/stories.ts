import type { MediaId } from "./media-manifest";

type Source = { href: string; label: string };
export type Scene = {
  file: MediaId;
  title: string;
  text: string;
  milestones?: { year: string; text: string }[];
  source?: Source;
};

export type Story = {
  href: string;
  label: string;
  intro: string;
  imageNote?: string;
  recognition?: Source & { text: string };
  scenes: Scene[];
  prompt: string;
  sample: string;
  nextLabel: string;
  nextHref: string;
};

export const banhTrang = {
  href: "/banh-trang/",
  label: "Nghề bánh tráng",
  intro: "Từ hạt gạo đến tiếng rắc giòn tan, cùng xem người Túy Loan làm bánh tráng theo cách truyền thống.",
  imageNote: "Hình ảnh minh họa bằng AI.",
  recognition: {
    text: "Ngày 21/2/2024, nghề làm bánh tráng Túy Loan được đưa vào Danh mục di sản văn hóa phi vật thể quốc gia.",
    href: "https://bvhttdl.mediacdn.vn/document/2024/2/22/qd374-17085720709481373972064.pdf",
    label: "Quyết định 374/QĐ-BVHTTDL (PDF)",
  },
  scenes: [
    {
      file: "gao",
      title: "Chọn gạo",
      text: "Gạo 13/2 có mùi thơm và là một lựa chọn truyền thống ở Túy Loan.",
      source: {
        href: "https://baochinhphu.vn/thom-ngon-banh-trang-tuy-loan-102287309.htm",
        label: "Tư liệu về gạo 13/2",
      },
    },
    { file: "vo-gao", title: "Vo và ngâm gạo", text: "Gạo được vo sạch rồi ngâm cho mềm trước khi đưa đi xay." },
    { file: "xay-bot", title: "Xay và lọc bột", text: "Người làm xay gạo đã ngâm với nước, rây bột cho mịn rồi pha loãng để dễ dàn lên khuôn." },
    { file: "gia-vi", title: "Hòa gia vị", text: "Mè trắng tạo những đốm nhỏ trên mặt bánh, còn gừng và tỏi góp mùi thơm cho bột tráng." },
    { file: "trang-banh", title: "Tráng và hấp bánh", text: "Người làm dàn một vá bột trên mặt vải căng. Hơi nước từ nồi bên dưới làm chín tấm bánh mỏng." },
    {
      file: "hong-banh",
      title: "Hong khô bánh trên than hồng",
      text: "Bánh vừa rời khuôn còn mềm. Người làm trải bánh lên lồng tre để hơi nóng từ than hồng bên dưới làm bánh khô dần.",
      source: {
        href: "https://danangfantasticity.com/en/lang-nghe-banh-trang-tuy-loan",
        label: "Tư liệu về cách hong bánh",
      },
    },
    { file: "trao-banh", title: "Trao tay người mua", text: "Người làm xếp bánh khô và gói lại. Người mua mang về, khi ăn mới nướng." },
    { file: "nuong-banh", title: "Nướng cho giòn", text: "Trên vỉ nóng, mặt bánh phồng lên và dần ngả vàng." },
    { file: "thanh-pham", title: "Bánh tráng giòn tan", text: "Bẻ một miếng, nghe tiếng rắc. Tấm bánh giòn có thể ăn cùng mì Quảng." },
  ],
  prompt: "Nếu kể cho một người bạn, bạn sẽ chọn công đoạn nào?",
  sample: "Mình nhớ cách người Túy Loan dùng lồng tre và than hồng để hong khô bánh.",
  nextLabel: "Khám phá đình làng",
  nextHref: "/dinh-lang/",
} satisfies Story;

export const dinhLang: Story = {
  href: "/dinh-lang/",
  label: "Đình làng Túy Loan",
  intro: "Qua sân gạch, ngước nhìn mái ngói rồi tìm hiểu vì sao người làng Túy Loan tụ họp ở đình mỗi dịp đầu xuân.",
  scenes: [
    {
      file: "san-dinh",
      title: "Bước qua sân đình",
      text: "Qua cổng là khoảng sân lát gạch. Đứng lùi lại một chút để nhìn các nếp mái, hiên nhà và khoảng trống giữa các công trình. Khi bước vào gần hơn, những đường nét trên mái bắt đầu hiện rõ.",
    },
    {
      file: "mai-dinh-toan",
      title: "Nhìn gần mái đình",
      text: "Nhìn từ đường nóc xuống góc mái, bạn sẽ thấy những hình rồng uốn lượn ghép bằng sành sứ. Ở phần mặt đình còn có hình hổ đắp nổi trên nền đỏ.",
    },
    {
      file: "bang-di-tich",
      title: "Lần theo thời gian",
      text: "Từ tấm bia trong đình đến bảng ghi nhận di tích ngày nay, ba dấu mốc cho thấy ngôi đình gắn với lịch sử làng như thế nào.",
      milestones: [
        { year: "1889", text: "Tấm bia trong đình được lập vào năm đầu triều vua Thành Thái." },
        { year: "1945", text: "Tháng 8, người dân Túy Loan dùng đình làm nơi tập hợp và tổ chức hoạt động cách mạng." },
        { year: "1999", text: "Ngày 4/1, đình Túy Loan được công nhận là di tích lịch sử – văn hóa cấp quốc gia." },
      ],
      source: {
        href: "https://thangbinh.danang.gov.vn/vi/web/dng-old/w/l%E1%BB%85-h%E1%BB%99i-%C4%91%C3%ACnh-l%C3%A0ng-t%C3%BAy-loan",
        label: "Tư liệu lịch sử từ Cổng thông tin Đà Nẵng",
      },
    },
    {
      file: "cua-dinh",
      title: "Đình trong đời sống làng",
      text: "Đình là nơi người làng tưởng nhớ các bậc tiền hiền, hậu hiền. Ngày 25/2/2026, đoàn rước đưa sắc thần từ nhà thờ tộc Đặng Công phái Nhì về đình. Cũng trong ngày hội, sân đình có kéo co và nhảy bao bố tiếp sức.",
      source: {
        href: "https://danangfantasticity.com/en/le-hoi-dinh-lang-tuy-loan-2026",
        label: "Tư liệu về hội làng từ Trung tâm Xúc tiến Du lịch Đà Nẵng",
      },
    },
    {
      file: "cong-dinh",
      title: "Mang một câu chuyện về",
      text: "Trước khi rời cổng đình, thử chọn một điều bạn muốn kể lại. Đó có thể là một nét trên mái ngói, câu chuyện từ tấm bia hoặc cảnh người làng gặp nhau ở sân đình.",
    },
  ],
  prompt: "Nếu dẫn một người bạn đến đình, bạn sẽ chỉ cho họ xem gì đầu tiên?",
  sample: "Mình sẽ rủ bạn đứng ở sân rồi nhìn thật kỹ những nét trang trí trên mái đình.",
  nextLabel: "Khám phá nghề bánh tráng",
  nextHref: "/banh-trang/",
};
