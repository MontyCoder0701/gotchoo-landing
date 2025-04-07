"use client";

import { useEffect, useState } from "react";

import { CeoFriend, CeoPage } from "./_pages";

export default function HomePage() {
  const [view, setView] = useState<string | null>(null);

  useEffect(() => {
    setView(localStorage.getItem("view"));
  }, []);

  switch (view) {
    case "ceo":
      return <CeoPage />;
    case "ceo-friend":
      return <CeoFriend />;
    default:
      return <CeoPage />;
  }
}
