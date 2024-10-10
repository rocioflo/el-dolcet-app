import {
  decodeGetUsersTopArtistOK,
  decodeGetUsersTopTracksOK,
} from "./decodes";

// TODO: Handle errors, don't be lazy

export async function getUsersTopArtists() {
  const token = sessionStorage.getItem("token");

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  const topArtists = decodeGetUsersTopArtistOK(data);

  sessionStorage.setItem("topArtists", topArtists.toString());

  return topArtists;
}

export async function getUsersTopTracks() {
  const token = sessionStorage.getItem("token");

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  const topTracks = decodeGetUsersTopTracksOK(data);

  return { topTracks };
}

export async function getUsersLastTracks() {
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
