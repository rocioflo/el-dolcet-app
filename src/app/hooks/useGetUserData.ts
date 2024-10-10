import {
  UserData,
  UserTopArtistsList,
  UserTopTracksList,
} from "../application/domain/userData";

export const useGetUserData = (): UserData => {
  const userName = "Martín el Mastín";
  const favoriteGenre = "Rock and roll";
  const topArtists: UserTopArtistsList = [
    { artistName: "Taylor Swift" },
    { artistName: "Dodie" },
    { artistName: "Chappell Roan" },
    { artistName: "FIZZ" },
    { artistName: "Sammy Rae and the Friends" },
  ];
  const topTracks: UserTopTracksList = [
    { songName: "Guilty as Sin", artistName: "Taylor Swift" },
    { songName: "Guiltless", artistName: "Dodie" },
    { songName: "Red Wine Supernova", artistName: "Chappell Roan" },
    { songName: "The secret to life", artistName: "FIZZ" },
    { songName: "Coming Home song", artistName: "Sammy Rae and the Friends" },
  ];

  return { userName, favoriteGenre, topArtists, topTracks };
};
