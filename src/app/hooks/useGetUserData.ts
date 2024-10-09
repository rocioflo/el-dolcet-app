import { UserData, UserTopArtistsList } from "../application/domain/userData";

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
  const topTracks = [
    "Guilty as Sin",
    "Guiltless",
    "Red Wine Supernova",
    "The secret to life",
    "Coming Home song",
  ];

  return { userName, favoriteGenre, topArtists, topTracks };
};
