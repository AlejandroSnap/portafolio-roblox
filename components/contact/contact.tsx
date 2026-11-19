import { socials } from "@/data/socials";
import { DISCORD_USERNAME } from "@/lib/constants";
import DiscordButton from "./discordButton";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`section ${styles.section}`}
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.layout}`}>
        <div>
          <p className="eyebrow">Let’s make it happen</p>
          <h2 id="contact-title" className={styles.title}>
            Have an idea?
            <br />
            <span>Let’s build it.</span>
          </h2>
          <p className={styles.description}>
            A full game, a custom system, or a feature that needs some care.
            Tell me what you have in mind.
          </p>
        </div>
        <div className={styles.contactPanel}>
          <p className={styles.panelTitle}>Start a conversation</p>
          <p className={styles.panelCopy}>
            Find me on Discord. Send a short overview of your idea, what you
            need help with, and your timeline.
          </p>
          <DiscordButton username={DISCORD_USERNAME} />
          <div className={styles.otherLinks}>
            <span>Find me elsewhere</span>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
