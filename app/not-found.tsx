"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SITE_BASE_PATH } from "@/lib/constants";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/`);
  }, [router]);

  return <p>Redirecting...</p>;
}