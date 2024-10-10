import {
  UserTopArtistsList,
  UserTopTracksList,
} from "@/app/application/domain/userData";
import {
  getUsersTopTracks,
  getUsersTopArtists,
} from "@/app/application/repositories/getUsersData";
import { SmallCard } from "@/app/components/SmallCard/SmallCard";
import { useState } from "react";

export const UserFavorites = () => {
  const [topArtists, setTopArtists] = useState<UserTopArtistsList>([
    { artistName: "", artistPicture: "" },
  ]);

  const [topTracks, setTopTracks] = useState<UserTopTracksList>([
    { artistName: "", songName: "" },
  ]);

  const onClickTracks = async () => {
    const { topTracks: topTracksList } = await getUsersTopTracks();

    setTopTracks(topTracksList);
  };

  const onClickArtists = async () => {
    const { topArtists: topArtistsList } = await getUsersTopArtists();

    setTopArtists(topArtistsList);
  };

  return (
    <>
      <h4 className="font-bold mb-2">Favorites</h4>
      <div className="grid grid-cols-2 gap-2">
        <ol>
          {topArtists[0].artistName
            ? topArtists.map((artist) => {
                return (
                  <li
                    className="mb-2"
                    key={artist.artistName.replaceAll(" ", "")}
                  >
                    <SmallCard
                      name={artist.artistName}
                      image={artist.artistPicture}
                    />
                  </li>
                );
              })
            : null}
          <li>
            <button className="bg-red-200" onClick={onClickArtists}>
              Reveal favs
            </button>
          </li>
        </ol>

        <ol>
          {topTracks[0].songName
            ? topTracks.map((track) => {
                return (
                  <li className="mb-2" key={track.songName.replaceAll(" ", "")}>
                    <SmallCard
                      name={track.songName}
                      image={track.artistPicture}
                    />
                  </li>
                );
              })
            : null}
          <li>
            <button className="bg-red-200" onClick={onClickTracks}>
              Reveal favs
            </button>
          </li>
        </ol>
      </div>
    </>
  );
};
