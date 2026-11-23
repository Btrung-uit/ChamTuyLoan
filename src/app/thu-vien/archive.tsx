"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import type { Media } from "../media-manifest";

type ArchivePhoto = Pick<Media, "path" | "thumb" | "width" | "height" | "alt" | "caption" | "credit" | "story" | "scene">;

const filters = ["Tất cả", "Bánh tráng", "Toàn cảnh", "Mái đình", "Trang trí", "Nội thất", "Tư liệu"];

export function Archive({ photos }: { photos: ArchivePhoto[] }) {
  const [filter, setFilter] = useState("Tất cả");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const visible = photos.filter((photo) => filter === filters[0]
    || (filter === filters[1] ? photo.story === "rice" : photo.story === "dinh" && photo.scene === filter));
  const photo = visible[active];

  function openPhoto(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (!dialog.current || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger.current = event.currentTarget;
    setActive(index);
    setOpen(true);
    dialog.current.showModal();
  }

  function move(offset: number) {
    setActive((index) => (index + offset + visible.length) % visible.length);
  }

  function handleKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <>
      <div className="archive-controls">
        <div className="archive-filters" role="group" aria-label="Lọc ảnh theo chủ đề">
          {filters.map((label) => (
            <button key={label} type="button" aria-pressed={filter === label} onClick={() => { setFilter(label); setActive(0); }}>
              {label}
            </button>
          ))}
        </div>
        <p aria-live="polite">{visible.length} ảnh</p>
      </div>
      <ul className="contact-sheet">
        {visible.map(({ path, thumb, width, height, alt, caption, credit }, index) => (
          <li key={path}>
            <a className="archive-photo" href={path} onClick={(event) => openPhoto(event, index)}>
              <span className="archive-thumb"><img src={thumb ?? path} width={width} height={height} alt={alt} loading="lazy" decoding="async" /></span>
              <span className="archive-caption"><strong>{caption}</strong><small>{credit}</small></span>
            </a>
          </li>
        ))}
      </ul>
      <dialog
        className="lightbox"
        ref={dialog}
        aria-labelledby="lightbox-title"
        onKeyDown={handleKeys}
        onClose={() => { setOpen(false); trigger.current?.focus(); }}
      >
        <div className="lightbox-inner">
          <div className="lightbox-controls">
            <span aria-live="polite">{active + 1} / {visible.length}</span>
            <button type="button" autoFocus onClick={() => dialog.current?.close()}>Đóng</button>
          </div>
          <figure>
            {open && <img src={photo.path} width={photo.width} height={photo.height} alt={photo.alt} />}
            <figcaption>
              <h2 id="lightbox-title">{photo.caption}</h2>
              <p>{photo.credit}</p>
            </figcaption>
          </figure>
          {visible.length > 1 && (
            <div className="lightbox-controls">
              <button type="button" onClick={() => move(-1)}>Ảnh trước</button>
              <button type="button" onClick={() => move(1)}>Ảnh sau</button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
