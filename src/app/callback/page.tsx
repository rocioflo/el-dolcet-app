"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const trimToken = (token: string) => {
  return token.slice(token.indexOf("=") + 1, token.indexOf("&"));
};

export default function CallbackPage() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const accessToken = window.location.hash;

    sessionStorage.setItem("token", trimToken(accessToken));
  }

  useEffect(() => {
    router.push("/home");
  });

  return <h1>Redirecting</h1>;
}
