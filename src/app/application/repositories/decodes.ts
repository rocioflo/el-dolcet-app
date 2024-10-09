import { UserTopArtistsList } from "../domain/userData";
import { UsersTopArtistsDTO } from "./dtos";

export const decodeGetUsersTopArtistOK = (
  usersTopArtistsDTO: UsersTopArtistsDTO
): UserTopArtistsList => {
  const usersTopFiveArtists = usersTopArtistsDTO.items
    .slice(0, 5)
    .map((item) => {
      return {
        artistName: item.name,
      };
    });

  return usersTopFiveArtists;
};
