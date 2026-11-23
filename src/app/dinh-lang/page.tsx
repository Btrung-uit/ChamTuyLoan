import type { Metadata } from "next";
import { ChapterNav } from "../chapter-nav";
import { Figure, Footer, Header, Photo, sitePath, SourceLink } from "../heritage";
import { Postcard } from "../postcard";
import { dinhLang as story } from "../stories";
import { RoofExplorer } from "./roof-explorer";

export const metadata: Metadata = {
  title: "Đình làng | Chạm Túy Loan",
  description: story.intro,
};

const [courtyard, roof, timeline, interior, closing] = story.scenes;
const chapters = ["Sân đình", "Mái đình", "Lịch sử", "Đời sống", "Tiếp nối"];
const entries = story.scenes.map(({ file }, index) => ({ id: file, label: chapters[index] }));

export default function DinhLangPage() {
  return (
    <div className="dinh">
      <Header current={story.href} />
      <main id="noi-dung" tabIndex={-1}>
        <section className="dinh-hero" aria-labelledby="dinh-title">
          <Photo id="san-dinh" priority artDirected />
          <div className="wrap dinh-hero-inner">
            <div className="dinh-hero-copy hero-entrance">
              <p className="eyebrow">Di sản kiến trúc · Đà Nẵng</p>
              <h1 id="dinh-title">Đình làng <em>Túy Loan</em></h1>
              <p>{story.intro}</p>
              <a className="button button-paper" href="#san-dinh">Bước vào sân đình</a>
            </div>
            <a className="dinh-hero-inset" href="#mai-dinh-toan">
              <Photo id="mai-dinh" mode="thumb" decorative />
              <span>Nhìn gần mái đình</span>
            </a>
          </div>
        </section>
        <div id="cau-chuyen" tabIndex={-1}><span id="muc-luc" className="sr-only">Mục lục đình làng</span></div>
        <ChapterNav entries={entries} showIndex={false} />
        <section id={courtyard.file} className="courtyard wrap section-space" tabIndex={-1}>
          <header className="section-heading">
            <p className="eyebrow">Chương 01 · Sân đình</p>
            <h2>{courtyard.title}</h2>
            <p>{courtyard.text}</p>
          </header>
          <Figure id={courtyard.file} className="courtyard-panorama" sizes="(min-width: 740px) 82vw, 100vw" />
          <div className="courtyard-pair">
            <Figure id="cong-dinh" sizes="(min-width: 740px) 32vw, 72vw" />
            <Figure id="mat-dinh" sizes="(min-width: 740px) 50vw, 90vw" />
          </div>
        </section>
        <section id={roof.file} className="roof-section section-space" tabIndex={-1}>
          <div className="wrap">
            <header className="section-heading">
              <p className="eyebrow">Chương 02 · Kiến trúc</p>
              <h2>{roof.title}</h2>
              <p>{roof.text}</p>
            </header>
            <RoofExplorer />
            <div className="ornaments">
              <h3>Trang trí ở mặt đình</h3>
              <Figure id="tam-trang-tri" sizes="(min-width: 740px) 42vw, 85vw" />
              <Figure id="hoa-tiet-ho" sizes="(min-width: 740px) 25vw, 63vw" />
            </div>
          </div>
        </section>
        <section id={timeline.file} className="history-section section-space" tabIndex={-1}>
          <div className="wrap history-grid">
            <header className="section-heading">
              <p className="eyebrow">Chương 03 · Tư liệu</p>
              <h2>{timeline.title}</h2>
              <p>{timeline.text}</p>
            </header>
            <ol className="timeline">
              {timeline.milestones?.map(({ year, text }) => (
                <li key={year}>
                  <time dateTime={year}>{year}</time>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <div className="history-document">
              <Figure id={timeline.file} sizes="(min-width: 740px) 33vw, 100vw" />
              <SourceLink source={timeline.source} />
            </div>
          </div>
        </section>
        <section id={interior.file} className="interior-section section-space" tabIndex={-1}>
          <div className="wrap interior-grid">
            <Figure id={interior.file} className="interior-photo" sizes="(min-width: 740px) 43vw, 100vw" />
            <div className="interior-copy">
              <header className="section-heading">
                <p className="eyebrow">Chương 04 · Di sản sống</p>
                <h2>{interior.title}</h2>
                <p>{interior.text}</p>
                <SourceLink source={interior.source} />
              </header>
              <Figure id="mat-dinh" className="interior-inset" sizes="(min-width: 740px) 25vw, 70vw" />
            </div>
          </div>
        </section>
        <section id={closing.file} className="closing section-space wrap" tabIndex={-1}>
          <header className="section-heading">
            <p className="eyebrow">Chương 05 · Tiếp nối</p>
            <h2>{closing.title}</h2>
            <p>{closing.text}</p>
            <div className="closing-links">
              <a className="text-link" href={sitePath("/thu-vien/")}>Xem thư viện ảnh</a>
              <a className="text-link" href="#loi-ke">Viết bưu thiếp</a>
            </div>
          </header>
          <Figure id={closing.file} sizes="(min-width: 740px) 84vw, 100vw" />
        </section>
        <Postcard theme="dinh" branch={story.label} prompt={story.prompt} sample={story.sample} images={["mat-dinh"]} />
      </main>
      <Footer story={story} />
    </div>
  );
}
