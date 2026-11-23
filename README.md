# Chạm Túy Loan

Website kể chuyện di sản làng cổ Túy Loan, Đà Nẵng qua hai nhánh Bánh tráng và Đình làng. Thư viện có bộ lọc, ảnh phóng to và ghi nguồn từng ảnh.

## Chạy local

Yêu cầu Node.js 24.

```bash
npm ci
npm run dev
```

Mở [localhost:3000](http://localhost:3000).

## Nội dung và hình ảnh

Sửa nội dung và liên kết nguồn ở `src/app/stories.ts`. Khi thêm ảnh đã có quyền công bố, đặt bản WebP tối ưu trong `public/di-san/` và đăng ký kích thước, alt text, caption, nguồn cùng ảnh thu nhỏ trong `src/app/media-manifest.ts`. Ghi rõ ảnh minh họa AI và ảnh thực địa trong manifest.

## Kiểm thử và triển khai

`npm run typecheck` kiểm tra TypeScript. `npm run build` xuất website tĩnh vào `out/`.

GitHub Actions cài đặt từ lockfile, kiểm tra TypeScript, build và kiểm tra HTML đầu ra khi push lên `main` hoặc mở pull request vào `main`. Sau khi kiểm tra thành công trên `main`, workflow triển khai bản xem thử lên GitHub Pages.

Tư liệu làm việc, ảnh chưa duyệt công bố và hồ sơ nội bộ được giữ ở máy local. Thư mục `public/` dành cho tài nguyên được phép công bố.
