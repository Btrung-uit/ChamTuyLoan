import type { Metadata } from "next";
import { Footer, Header, sitePath } from "../heritage";
import { mediaManifest, type Media } from "../media-manifest";
import { Archive } from "./archive";

export const metadata: Metadata = {
  title: "Thư viện ảnh | Chạm Túy Loan",
  description: "Ảnh thực địa đình làng và hình minh họa nghề bánh tráng Túy Loan.",
};

const photos = Object.values<Media>(mediaManifest)
  .filter(({ gallery }) => gallery)
  .map(({ path, thumb, width, height, alt, caption, credit, story, scene }) => ({
    path: sitePath(path),
    thumb: thumb && sitePath(thumb),
    width, height, alt, caption, credit, story, scene,
  }));

export default function ArchivePage() {
  return (
    <>
      <Header current="/thu-vien/" />
      <main id="noi-dung" className="wrap archive section-space" tabIndex={-1}>
        <header className="section-heading">
          <h1>Thư viện <em>ảnh</em></h1>
          <p>Ảnh thực địa đình làng và hình minh họa AI về nghề bánh tráng Túy Loan.</p>
        </header>
        <Archive photos={photos} />
      </main>
      <Footer />
    </>
  );
}
