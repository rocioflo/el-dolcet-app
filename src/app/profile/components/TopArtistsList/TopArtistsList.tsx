import { UserTopArtistsList } from "@/app/application/domain/userData";
import { getUsersTopArtists } from "@/app/application/repositories/getUsersData";
import { SmallCard } from "@/app/components/SmallCard/SmallCard";

export default async function TopArtistsList() {
  const topArtistsList: UserTopArtistsList = await getUsersTopArtists();

  return (
    <ol>
      {topArtistsList.map((artist) => {
        return (
          <li className="mb-2" key={artist.artistName.replaceAll(" ", "")}>
            <SmallCard name={artist.artistName} image={artist.artistPicture} />
          </li>
        );
      })}
    </ol>
  );
}
