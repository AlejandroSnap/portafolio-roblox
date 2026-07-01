import styles from "./contact.module.css";
import { socials } from "@/data/socials";
import { DISCORD_USERNAME } from "@/lib/constants";
import DiscordButton from "./discordButton";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Contact</p>
        <h2 className={styles.title}>Let&apos;s talk</h2>

        <p className={styles.description}>
          Got a project, a commission, or just want to say hi? Reach out
          through any of the options below.
        </p>

        <div className={styles.actions}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={styles.button}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              {social.name}
            </a>
          ))}

          <DiscordButton username={DISCORD_USERNAME} />
        </div>
      </div>
    </section>
  );
}