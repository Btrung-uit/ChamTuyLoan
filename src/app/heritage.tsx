import { mediaManifest, type Media, type MediaId } from "./media-manifest";
import type { Story } from "./stories";

export function sitePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function Photo({
  id, priority = false, decorative = false, sizes = "100vw", mode = "responsive", artDirected = false,
}: {
  id: MediaId;
  priority?: boolean;
  decorative?: boolean;
  sizes?: string;
  mode?: "responsive" | "thumb";
  artDirected?: boolean;
}) {
  const photo: Media = mediaManifest[id];
  const thumb = photo.thumb && sitePath(photo.thumb);
  const url = sitePath(photo.path);

  return (
    <picture className="media">
      {artDirected && photo.mobile && (
        <source
          media="(max-width: 600px)"
          srcSet={sitePath(photo.mobile.path)}
          width={photo.mobile.width}
          height={photo.mobile.height}
        />
      )}
      <img
        src={mode === "thumb" && thumb ? thumb : url}
        srcSet={mode === "responsive" && thumb && photo.width > 540
          ? `${thumb} 540w, ${url} ${photo.width}w`
          : undefined}
        sizes={sizes}
        alt={decorative ? "" : photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "auto" : "async"}
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}

export function Figure({ id, sizes, className }: { id: MediaId; sizes?: string; className?: string }) {
  return (
    <figure className={className}>
      <Photo id={id} sizes={sizes} />
      <figcaption>{mediaManifest[id].caption}</figcaption>
    </figure>
  );
}

export function Header({ current }: { current?: string }) {
  const links = [
    { href: "/banh-trang/", label: "Bánh tráng" },
    { href: "/dinh-lang/", label: "Đình làng" },
    { href: "/thu-vien/", label: "Thư viện" },
  ];

  return (
    <>
      <a className="skip-link" href="#noi-dung">Đến nội dung chính</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href={sitePath("/")} className="wordmark" aria-label="Chạm Túy Loan, trang mở đầu">
            <span className="wordmark-mark" aria-hidden="true" />
            <span>Chạm <em>Túy Loan</em></span>
          </a>
          <nav aria-label="Điều hướng chính">
            {links.map(({ href, label }) => (
              <a key={href} href={sitePath(href)} aria-current={current === href ? "page" : undefined}>{label}</a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export function SourceLink({ source }: { source?: { href: string; label: string } }) {
  return source ? <a className="text-link source-link" href={source.href}>{source.label}</a> : null;
}

export function Footer({ story }: { story?: Story }) {
  const sources = story && [
    story.recognition,
    ...story.scenes.flatMap((scene) => scene.source ? [scene.source] : []),
  ].filter((source) => source !== undefined);

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <a className="footer-name" href={sitePath("/")}>Chạm <em>Túy Loan</em></a>
          <p>Làng cổ Túy Loan, Đà Nẵng</p>
        </div>
        {story && (
          <details className="footer-sources">
            <summary>Nguồn và ghi công</summary>
            <p>{story.imageNote || "Ảnh thực địa từ bộ ảnh Chạm Túy Loan."}</p>
            <ul>{sources?.map((source) => <li key={source.href}><SourceLink source={source} /></li>)}</ul>
          </details>
        )}
        <nav aria-label="Khám phá tiếp">
          <a href={sitePath("/thu-vien/")}>Thư viện ảnh</a>
          {story && <a href={sitePath(story.nextHref)}>{story.nextLabel}</a>}
          <a href="#noi-dung">Về đầu trang</a>
        </nav>
      </div>
    </footer>
  );
}
