import { UserTopArtistsList, UserTopTracksList } from "../domain/userData";
import { ArtistObject, SpotifyUserInformationDTO, TrackObject } from "./dtos";

export const decodeGetUsersTopArtistOK = (
  usersTopArtistsDTO: SpotifyUserInformationDTO<ArtistObject>
): UserTopArtistsList => {
  const usersTopArtists = usersTopArtistsDTO.items.map((item) => {
    return {
      artistName: item.name,
      artistPicture: item.images[0].url,
    };
  });

  return usersTopArtists;
};

export const decodeGetUsersTopTracksOK = (
  usersTopTracksDTO: SpotifyUserInformationDTO<TrackObject>
): UserTopTracksList => {
  const usersTopTracks = usersTopTracksDTO.items.map((item) => {
    return {
      artistName: item.artists[0].name,
      songName: item.name,
      artistPicture: item.album.images[0].url,
    };
  });

  return usersTopTracks;
};
