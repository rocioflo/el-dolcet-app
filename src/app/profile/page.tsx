"use client";

import Image from "next/image";
import { LikesAndMatches } from "../components/LikesAndMatches/LikesAndMatches";
import { Messages } from "../components/Messages/Messages";
import MartinElMastin from "../../public/martinelmastin.webp";
import Mastin1 from "../../public/mastin1.jpg";
import Mastin2 from "../../public/mastin2.jpg";
import Mastin3 from "../../public/mastin3.jpg";
import Mastin4 from "../../public/mastin4.webp";
import Mastin5 from "../../public/mastin5.jpg";
import Heart from "../../public/heart_icon.svg";
import Users from "../../public/users_icon.svg";
import Message from "../../public/message_icon.svg";
import TwoHearts from "../../public/two_hearts_icon.svg";
import { useGetUserData } from "../hooks/useGetUserData";
import {
  getUsersTopArtists,
  getUsersTopTracks,
} from "../application/repositories/getUsersData";
import {
  UserTopArtistsList,
  UserTopTracksList,
} from "../application/domain/userData";
import { useState } from "react";
import { SmallCard } from "../components/SmallCard/SmallCard";
import Link from "next/link";

export default function ProfilePage() {
  const { userName, favoriteGenre } = useGetUserData();

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
    <main className="grid grid-cols-[1fr_4fr_2fr] grid-rows-3 gap-6">
      <div>
        <nav className="p-5">
          <ul>
            <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
              <Link href={"/home"} className="flex gap-1">
                <Image src={Heart} alt="Heart icon" height={17} />
                Dating
              </Link>
            </li>
            <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
              <a className="flex gap-1">
                <Image src={Users} alt="Users icon" height={17} />
                Users
              </a>
            </li>
            <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
              <a className="flex gap-1">
                <Image src={Message} alt="Messages icon" height={17} />
                Messages
              </a>
            </li>
            <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
              <a className="flex gap-1">
                <Image src={TwoHearts} alt="Activity icon" height={17} />
                Activity
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="rounded-xl border-2 grid grid-cols-[1fr_2fr] grid-rows-3 gap-3">
        <Image
          src={MartinElMastin}
          alt="despite everything it's still you"
          className="row-span-3"
        />
        <div>
          <h1 className="font-bold text-lg">{userName}</h1>
          <span>{favoriteGenre}</span>
        </div>
        <p>El otro día vi una ardilla.</p>
        <div>
          <div className="flex gap-2">
            <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
              # Food
            </button>
            <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
              # Rasquis
            </button>
            <button className="bg-emerald-100 px-2 rounded-md  border-[1px] text-emerald-600 hover:bg-emerald-200">
              # El pizzero
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-2 border-2 rounded-lg p-5 font-bold">
        <h4 className="mb-2">Photos</h4>
        <div className="flex gap-3 flex-wrap">
          <Image
            src={Mastin1}
            alt="Me heheee"
            height={100}
            className="rounded-lg"
          />
          <Image
            src={Mastin2}
            alt="Me heheee"
            height={100}
            className="rounded-lg"
          />
          <Image
            src={Mastin3}
            alt="Me heheee"
            height={100}
            className="rounded-lg"
          />
          <Image
            src={Mastin4}
            alt="Me heheee"
            height={100}
            className="rounded-lg"
          />
          <Image
            src={Mastin5}
            alt="Me heheee"
            height={100}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="col-start-2 row-start-3 border-2 rounded-lg p-5 mb-6">
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
                    <li
                      className="mb-2"
                      key={track.songName.replaceAll(" ", "")}
                    >
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
      </div>
      <div className="col-start-3 row-start-1 mr-10">
        <Messages />
      </div>
      <div className="col-start-3 row-start-2 mr-10">
        <LikesAndMatches />
      </div>
    </main>
  );
}
