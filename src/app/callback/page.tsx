"use client";

import { useRouter } from "next/navigation";

const trimToken = (token: string) => {
  return token.slice(token.indexOf("=") + 1, token.indexOf("&"));
};

export default function CallbackPage() {
  const router = useRouter();

  // Change the # for ?
  // console.log(useSearchParams().get("access_token"));

  if (typeof window !== "undefined") {
    const accessToken = window.location.hash;

    sessionStorage.setItem("token", trimToken(accessToken));

    router.push("/");
  }

  return <h1>Redirecting</h1>;
}
