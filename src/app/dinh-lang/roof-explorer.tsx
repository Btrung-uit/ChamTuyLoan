"use client";

import { useState, type MouseEvent } from "react";
import { Photo, sitePath } from "../heritage";
import { mediaManifest } from "../media-manifest";

const details = [
  { id: "mai-dinh", label: "Dọc bờ nóc", description: "Các mảng sành sứ nhiều màu ghép dọc bờ nóc.", x: 49, y: 38 },
  { id: "goc-mai", label: "Góc mái", description: "Hoa văn và hình nổi ở góc mái, nhìn từ một góc khác.", x: 91, y: 50 },
  { id: "mai-dinh-toan", label: "Hàng ngói", description: "Các hàng ngói chạy song song, với đầu ngói tròn ở chân mái.", x: 42, y: 76 },
] as const;

export function RoofExplorer() {
  const [active, setActive] = useState(0);
  const detail = details[active];

  function choose(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setActive(index);
  }

  return (
    <div className="roof-explorer">
      <figure>
        <div className="roof-map">
          <Photo id="mai-dinh-toan" sizes="(min-width: 740px) 69vw, 100vw" />
          {details.map(({ id, label, x, y }, index) => (
            <a
              key={id}
              className="hotspot"
              href={sitePath(mediaManifest[id].path)}
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={`Điểm ${index + 1}. ${label}`}
              aria-current={index === active ? "true" : undefined}
              aria-controls="roof-detail"
              onClick={(event) => choose(event, index)}
            >
              {index + 1}
            </a>
          ))}
        </div>
        <figcaption>Chọn một điểm trên mái để xem chi tiết.</figcaption>
      </figure>
      <figure className="roof-detail" id="roof-detail">
        <div key={detail.id} className={active === 2 ? "roof-tile-crop" : undefined}>
          <Photo id={detail.id} sizes="(min-width: 740px) 30vw, 100vw" />
        </div>
        <figcaption aria-live="polite">
          <strong>{active + 1}. {detail.label}</strong>
          <span>{detail.description}</span>
        </figcaption>
      </figure>
    </div>
  );
}
