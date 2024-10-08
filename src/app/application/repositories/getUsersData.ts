"use client";

// Using session instead of cookies so that it is safer to use

export async function getUsersTopArtist() {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("token");

    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  }
}

export async function getUsersTopTracks() {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("token");

    const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  }
}

export async function getUsersLastTracks() {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("token");

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    return data;
  }
}
