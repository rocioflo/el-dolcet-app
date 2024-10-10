type UserTopTracks = {
  songName: string;
  artistName: string;
  artistPicture?: string;
};

type UserTopArtist = {
  artistName: string;
  artistPicture?: string;
};

export type UserTopArtistsList = UserTopArtist[];
export type UserTopTracksList = UserTopTracks[];

export type UserData = {
  userName: string;
  favoriteGenre: string;
  topArtists: UserTopArtistsList;
  topTracks: UserTopTracksList;
};
