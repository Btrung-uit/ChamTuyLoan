import { Footer, Header, Photo, sitePath } from "./heritage";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="noi-dung" tabIndex={-1} className="home">
        <div className="wrap home-grid">
          <header className="home-intro">
            <p className="eyebrow">Làng cổ Túy Loan · Đà Nẵng</p>
            <h1 className="home-lead">Từ hạt gạo<br />đến mái đình.</h1>
            <p>Khám phá hai câu chuyện về nghề làm bánh tráng và ngôi đình làng qua hình ảnh.</p>
            <a className="text-link" href={sitePath("/thu-vien/")}>Xem thư viện ảnh</a>
          </header>
          <div className="home-entries">
            <a className="home-entry home-entry-rice" href={sitePath("/banh-trang/")}>
              <Photo id="be-banh" priority decorative sizes="(min-width: 740px) 52vw, 100vw" />
              <div className="entry-label">
                <span className="eyebrow">9 công đoạn · Minh họa AI</span>
                <h2>Nghề bánh tráng</h2>
              </div>
            </a>
            <a className="home-entry home-entry-dinh" href={sitePath("/dinh-lang/")}>
              <Photo id="mat-dinh" decorative sizes="(min-width: 740px) 44vw, 100vw" />
              <div className="entry-label">
                <span className="eyebrow">5 chương · Ảnh thực địa</span>
                <h2>Đình làng</h2>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
