"use client";

import { useEffect, useState } from "react";

import CeoPage from "./_pages/CeoPage";

export default function HomePage() {
  const [view, setView] = useState<string | null>(null);

  useEffect(() => {
    setView(localStorage.getItem("view"));
  }, []);

  if (view === "ceo") {
    return <CeoPage />;
  }

  return <CeoPage />;
}
