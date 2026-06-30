import { notFound } from "next/navigation";
import Link from "next/link";
import { work, workKindLabels } from "@/data/work";
import styles from "./workDetail.module.css";
import MediaBlock from "./MediaBlock";
import { SITE_BASE_PATH } from "@/lib/constants";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);

  if (!item) notFound();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href={`${SITE_BASE_PATH}/#work`} className={styles.back}>
          ← Back to work
        </Link>

        <div className={styles.layout}>
          {/* Left: media, does not cover the whole screen */}
          <div className={styles.mediaCol}>
            <MediaBlock item={item} />
          </div>

          {/* Right: info */}
          <div className={styles.infoCol}>
            <p className={styles.kind}>{workKindLabels[item.kind]}</p>
            <h1 className={styles.title}>{item.title}</h1>

            {item.date && <p className={styles.date}>{item.date}</p>}

            <p className={styles.description}>{item.longDescription}</p>

            <div className={styles.actions}>
              {item.robloxUrl && (
                <a
                  href={item.robloxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  View on Roblox
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  View source
                </a>
              )}
            </div>

            <div className={styles.techRow}>
              {item.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features, shown low-key as tags below */}
        {item.features.length > 0 && (
          <div className={styles.featuresRow}>
            <span className={styles.featuresLabel}>Features</span>
            <div className={styles.featureTags}>
              {item.features.map((feature) => (
                <span key={feature} className={styles.featureTag}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
