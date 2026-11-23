import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChapterNav } from "../chapter-nav";
import { Footer, Header, Photo, SourceLink } from "../heritage";
import { Postcard } from "../postcard";
import { banhTrang as story, type Scene } from "../stories";

export const metadata: Metadata = {
  title: "Nghề bánh tráng | Chạm Túy Loan",
  description: story.intro,
};

const [rice, wash, mill, seasoning, spread, dry, handoff, grill, finish] = story.scenes;
const acts = [
  { id: "nguyen-lieu", label: "Gạo và bột", steps: [rice, wash, mill] },
  { id: "lam-banh", label: "Tráng và hong", steps: [seasoning, spread, dry] },
  { id: "lua-va-huong-vi", label: "Nướng và ăn", steps: [handoff, grill, finish] },
];
const navigation = acts.map(({ id, label }) => ({ id, label }));

function Step({ scene, className, children }: { scene: Scene; className?: string; children: ReactNode }) {
  const titleId = `${scene.file}-title`;
  return (
    <section id={scene.file} className={className} tabIndex={-1} aria-labelledby={titleId}>
      <div className="rice-step-copy">
        <h3 id={titleId}>{scene.title}</h3>
        <p>{scene.text}</p>
        <SourceLink source={scene.source} />
      </div>
      {children}
    </section>
  );
}

export default function BanhTrangPage() {
  return (
    <div className="rice">
      <Header current={story.href} />
      <main id="noi-dung" tabIndex={-1}>
        <section className="rice-hero" aria-labelledby="rice-title">
          <div className="rice-hero-copy wrap">
            <h1 id="rice-title">Theo dấu một tấm <em>bánh tráng</em></h1>
            <p>Ở Túy Loan, hạt gạo đi qua cối đá, khuôn vải và lồng tre. Đến khi lên vỉ, tấm bánh mới giòn.</p>
            <a className="button" href="#nguyen-lieu">Bắt đầu từ hạt gạo</a>
          </div>
          <figure className="rice-hero-photo">
            <Photo id="be-banh" priority artDirected sizes="(min-width: 740px) 58vw, 100vw" />
            <figcaption>{story.imageNote}</figcaption>
          </figure>
        </section>

        <ChapterNav entries={navigation} />
        <div className="rice-reference">
          <div className="wrap">
            <details id="cau-chuyen" className="rice-index" tabIndex={-1}>
              <summary id="muc-luc">Mục lục · 9 công đoạn</summary>
              <div className="rice-index-acts">
                {acts.map(({ id, label, steps }) => (
                  <div key={id}>
                    <a className="rice-index-act" href={`#${id}`}>{label}</a>
                    <ol start={story.scenes.indexOf(steps[0]) + 1}>
                      {steps.map(({ file, title }) => <li key={file}><a href={`#${file}`}>{title}</a></li>)}
                    </ol>
                  </div>
                ))}
              </div>
            </details>
            <details className="rice-index rice-recognition">
              <summary>Ghi danh di sản</summary>
              <p>{story.recognition.text}</p>
              <SourceLink source={story.recognition} />
            </details>
          </div>
        </div>

        <section id="nguyen-lieu" className="rice-prep" tabIndex={-1} aria-labelledby="rice-prep-title">
          <div className="wrap">
            <h2 id="rice-prep-title" className="rice-act-title">Từ hạt gạo <em>thành bột</em></h2>
            <div className="rice-prep-grid">
              <Step scene={rice}>
                <Photo id="gao-tay" sizes="(min-width: 740px) 30vw, 92vw" />
              </Step>
              <Step scene={wash}>
                <Photo id="vo-gao" sizes="(min-width: 740px) 30vw, 92vw" />
              </Step>
              <Step scene={mill}>
                <Photo id="xay-bot" sizes="(min-width: 740px) 30vw, 92vw" />
              </Step>
            </div>
          </div>
        </section>

        <section id="lam-banh" className="rice-workshop" tabIndex={-1} aria-labelledby="rice-workshop-title">
          <div className="wrap">
            <h2 id="rice-workshop-title" className="rice-act-title">Tấm bánh <em>thành hình</em></h2>
            <div className="rice-workbench">
              <Step scene={seasoning} className="rice-seasoning">
                <Photo id="gia-vi" sizes="(min-width: 740px) 27vw, 92vw" />
              </Step>
              <Step scene={spread} className="rice-spread">
                <Photo id="trang-banh" sizes="(min-width: 740px) 60vw, 92vw" />
              </Step>
            </div>
            <Step scene={dry} className="rice-drying">
              <Photo id="hong-banh" sizes="(min-width: 740px) 53vw, 92vw" />
            </Step>
          </div>
        </section>

        <section id="lua-va-huong-vi" className="rice-table" tabIndex={-1} aria-labelledby="rice-table-title">
          <div className="wrap">
            <h2 id="rice-table-title" className="rice-act-title">Từ gói bánh <em>đến tiếng rắc</em></h2>
            <div className="rice-table-pair">
              <Step scene={handoff}>
                <Photo id="trao-banh" sizes="(min-width: 740px) 34vw, 92vw" />
              </Step>
              <Step scene={grill}>
                <Photo id="nuong-banh" sizes="(min-width: 740px) 34vw, 92vw" />
              </Step>
            </div>
          </div>
          <Step scene={finish} className="rice-finale">
            <Photo id="thanh-pham" artDirected />
          </Step>
        </section>

        <Postcard theme="rice" branch={story.label} prompt={story.prompt} sample={story.sample} images={["mat-nuong", "thanh-pham", "vat-banh-goi"]} />
      </main>
      <Footer story={story} />
    </div>
  );
}
