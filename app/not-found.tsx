import { SITE_BASE_PATH } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1 className="section-title">Looks like a wrong turn.</h1>
        <p className="section-description" style={{ marginBlock: "24px" }}>
          This page isn’t here, but there’s plenty of work to explore.
        </p>
        <a href={`${SITE_BASE_PATH}/#work`} className="button">
          Explore my work
        </a>
      </div>
    </section>
  );
}
