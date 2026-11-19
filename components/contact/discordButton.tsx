"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./discordButton.module.css";

export default function DiscordButton({ username }: { username: string }) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyUsername() {
    if (timer.current) clearTimeout(timer.current);
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(username);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>Discord username</span>
      <div className={styles.row}>
        <span className={styles.username}>@{username}</span>
        <button
          type="button"
          onClick={copyUsername}
          disabled={status === "copying"}
          className={styles.button}
          aria-label={`Copy Discord username ${username}`}
        >
          <svg
            viewBox="0 0 20 20"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="7" y="7" width="10" height="10" rx="2" />
            <path d="M12 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2" />
          </svg>
          {status === "copied"
            ? "Copied!"
            : status === "copying"
              ? "Copying…"
              : "Copy"}
        </button>
      </div>
      <p className={styles.feedback} role="status" aria-live="polite">
        {status === "copied"
          ? "Username copied. See you on Discord!"
          : status === "error"
            ? "Couldn’t copy automatically. Select and copy the username above."
            : "Copy my username and add me on Discord."}
      </p>
    </div>
  );
}
