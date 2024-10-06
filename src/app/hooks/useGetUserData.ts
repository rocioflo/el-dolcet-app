/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { UserData } from "../application/domain/userData";

export const useGetUserData = (): UserData => {
  const [userName, setUserName] = useState("Martín el Mastín");
  const [favoriteGenre, setFavoriteGenre] = useState("Rock and roll");
  const [topArtists, setTopArtists] = useState([
    "Taylor Swift",
    "Dodie",
    "Chappell Roan",
    "FIZZ",
    "Sammy Rae and The Friends",
  ]);
  const [topTracks, setTopTracks] = useState([
    "Guilty as Sin",
    "Guiltless",
    "Red Wine Supernova",
    "The secret to life",
    "Coming Home song",
  ]);

  return { userName, favoriteGenre, topArtists, topTracks };
};
