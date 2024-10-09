import { decodeGetUsersTopArtistOK } from "./decodes";
import { UsersTopArtistsDTO } from "./dtos";

// TODO: Handle errors, don't be lazy

// TODO: TYPE

export async function getUsersTopArtists() {
  const token = sessionStorage.getItem("token");

  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data: UsersTopArtistsDTO = await response.json();

  const topArtists = decodeGetUsersTopArtistOK(data);

  return { topArtists };
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
