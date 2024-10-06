"use server";

import { redirect } from "next/navigation";

export async function authenticate() {
  let redirectionURL = "";

  try {
    const scope =
      "user-read-private user-read-email user-library-read user-read-recently-played user-top-read";

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url +=
      "&client_id=" + encodeURIComponent(process.env.SPOTIFY_CLIENT_ID ?? "");
    url += "&scope=" + encodeURIComponent(scope);
    url +=
      "&redirect_uri=" + encodeURIComponent(process.env.REDIRECT_URI ?? "");

    const data = await fetch(url);
    redirectionURL = data.url;
  } catch (error) {
    console.error(error, "error");
  }

  redirect(redirectionURL);
}
// Don't forget that redirect should not be called inside trycatch
