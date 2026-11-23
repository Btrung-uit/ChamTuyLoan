"use client";

import { useState } from "react";
import { Photo } from "./heritage";
import { mediaManifest, type MediaId } from "./media-manifest";

export function Postcard({
  theme, branch, prompt, sample, images,
}: {
  theme: "rice" | "dinh";
  branch: string;
  prompt: string;
  sample: string;
  images: MediaId[];
}) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(images[0]);
  const written = message.trim();

  return (
    <section id="loi-ke" className={`ending ending-${theme}`} tabIndex={-1} aria-labelledby="postcard-heading">
      <div className="wrap ending-inner">
        <div className="ending-copy">
          <p className="eyebrow">Bưu thiếp · {branch}</p>
          <h2 id="postcard-heading">Bạn sẽ kể gì về <em>Túy Loan?</em></h2>
          <p>{prompt}</p>
          <label htmlFor="loi-ke-input">Viết một câu cho bưu thiếp</label>
          <textarea
            id="loi-ke-input"
            maxLength={140}
            rows={3}
            placeholder="Mình nhớ nhất…"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-describedby="loi-ke-note loi-ke-length"
          />
          <div className="ending-input-note">
            <span id="loi-ke-note">Câu hiện trên bưu thiếp xem trước và sẽ mất khi tải lại trang.</span>
            <span id="loi-ke-length">{message.length} / 140 ký tự</span>
          </div>
          {images.length > 1 && (
            <fieldset className="postcard-options">
              <legend>Hình bưu thiếp</legend>
              {images.map((id) => (
                <label key={id}>
                  <input type="radio" name="postcard-image" checked={id === image} onChange={() => setImage(id)} />
                  <span><Photo id={id} mode="thumb" decorative />{mediaManifest[id].caption}</span>
                </label>
              ))}
            </fieldset>
          )}
        </div>
        <div className="postcard-preview">
          <p className="postcard-preview-label">{written ? "Xem trước bưu thiếp" : "Bưu thiếp minh họa"}</p>
          <figure className="postcard">
            <figcaption>
              <p className="postcard-place">Chạm Túy Loan · Đà Nẵng</p>
              <p className="postcard-message">{written || sample}</p>
            </figcaption>
            <div className={`postcard-photo${mediaManifest[image].alpha ? " postcard-cutout" : ""}`}>
              <Photo id={image} sizes="(min-width: 740px) 42vw, 90vw" />
              {theme === "rice" && !mediaManifest[image].alpha && (
                <div className="postcard-motif" aria-hidden="true"><Photo id="vat-banh-nuong" decorative /></div>
              )}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
