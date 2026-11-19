# Chạm Túy Loan

Website giới thiệu di sản văn hóa làng cổ Túy Loan, Đà Nẵng. Bản hiện tại có một trang kiểm thử triển khai.

## Chạy local

Yêu cầu Node.js 24.

```bash
npm ci
npm run dev
```

Mở [localhost:3000](http://localhost:3000).

## Kiểm thử và triển khai

`npm run typecheck` kiểm tra TypeScript. `npm run build` xuất website tĩnh vào `out/`.

GitHub Actions cài đặt từ lockfile, kiểm tra TypeScript, build và kiểm tra HTML đầu ra khi push lên `main` hoặc mở pull request vào `main`. Sau khi kiểm tra thành công trên `main`, workflow triển khai bản xem thử lên GitHub Pages.

Tư liệu làm việc, ảnh chưa duyệt công bố và hồ sơ nội bộ được giữ ở máy local. Thư mục `public/` dành cho tài nguyên được phép công bố.
