import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { work, workKindLabels } from "@/data/work";
import { getWorkRole } from "@/lib/work";
import { SITE_NAME, SITE_BASE_PATH } from "@/lib/constants";
import styles from "./workDetail.module.css";
import MediaBlock from "./MediaBlock";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);
  if (!item) return { title: "Project not found" };
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} | ${SITE_NAME}`,
      description: item.description,
      type: "website",
      images: [{ url: item.image, alt: `${item.title} project preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.image],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const nextItem = work[(work.indexOf(item) + 1) % work.length];

  return (
    <article className={styles.page}>
      <div className="container">
        <a href={`${SITE_BASE_PATH}/#work`} className={styles.back}>
          Back to selected work
        </a>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span>
              {item.kind === "other"
                ? "Custom system"
                : workKindLabels[item.kind]}
            </span>
            {item.status && <span>{item.status}</span>}
            {item.date && <span>{item.date}</span>}
          </div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </header>
        <div className={styles.layout}>
          <div className={styles.main}>
            <MediaBlock key={item.slug} item={item} />
            <section
              className={styles.overview}
              aria-labelledby="overview-title"
            >
              <p className="eyebrow">Behind the build</p>
              <h2 id="overview-title">The idea, brought to life.</h2>
              <p>{item.longDescription}</p>
            </section>
            {item.features.length > 0 && (
              <section
                className={styles.features}
                aria-labelledby="features-title"
              >
                <p className="eyebrow">What’s inside</p>
                <h2 id="features-title">The systems behind the experience.</h2>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <aside className={styles.aside} aria-label="Project details">
            <p className={styles.asideLabel}>Project at a glance</p>
            <dl className={styles.facts}>
              <div>
                <dt>My role</dt>
                <dd>{getWorkRole(item)}</dd>
              </div>
              {item.scope && (
                <div>
                  <dt>My contribution</dt>
                  <dd>{item.scope}</dd>
                </div>
              )}
              <div>
                <dt>Tools & expertise</dt>
                <dd className={styles.technologies}>
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className={styles.actions}>
              {item.robloxUrl && (
                <a
                  href={item.robloxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Try it on Roblox
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  View source code
                </a>
              )}
              <a
                href={`${SITE_BASE_PATH}/#contact`}
                className="button button-secondary"
              >
                Have a similar idea?
              </a>
            </div>
            <p className={styles.asideNote}>
              Interested in a custom system or a full game? Let’s talk about
              your project.
            </p>
          </aside>
        </div>
        <div className={styles.nextProject}>
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2>There’s more to play.</h2>
            <Link href={`/work/${nextItem.slug}/`} className="text-link">
              Explore {nextItem.title}
            </Link>
          </div>
          <Link
            href={`/work/${nextItem.slug}/`}
            className={styles.nextImage}
            aria-label={`Explore ${nextItem.title}`}
          >
            <Image
              src={nextItem.image}
              alt=""
              fill
              sizes="(max-width: 520px) 90vw, 240px"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
