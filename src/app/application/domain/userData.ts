type topTracks = string[];

type UserTopArtist = {
  artistName: string;
};

export type UserTopArtistsList = UserTopArtist[];

export type UserData = {
  userName: string;
  favoriteGenre: string;
  topArtists: UserTopArtistsList;
  topTracks: topTracks;
};
