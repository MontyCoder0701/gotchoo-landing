"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function EntryRedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    searchParams.forEach((value, key) => {
      localStorage.setItem(key, value);
    });
    router.replace("/");
  }, [router, searchParams]);

  return null;
}
