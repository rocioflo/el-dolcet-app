"use client";

export async function getUsersTopArtist() {
  if (typeof sessionStorage !== "undefined") {
    const token = sessionStorage.getItem("token");

    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    // remember to delete the console logs before merging to main
    console.log(data);

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
    // remember to delete the console logs before merging to main
    console.log(data);

    return data;
  }
}
