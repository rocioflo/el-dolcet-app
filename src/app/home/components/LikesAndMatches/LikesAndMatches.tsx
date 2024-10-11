"use client";

import Image from "next/image";
import Rabanito from "@/public/chalupin.jpg";
import Gabardina from "@/public/gabardina.jpg";
import Heart from "@/public/heart_icon.svg";
import { useState } from "react";

enum LikesOrMatches {
  LIKES = "likes",
  MATCHES = "matches",
}

export const LikesAndMatches = () => {
  const [likesOrMatches, setLikesOrMatches] = useState<string>(
    LikesOrMatches.LIKES
  );

  const likesOrMatchesToggle = () => {
    setLikesOrMatches((prev) =>
      prev === LikesOrMatches.LIKES
        ? LikesOrMatches.MATCHES
        : LikesOrMatches.LIKES
    );
  };

  return (
    <div className="border-2 p-4 rounded-lg">
      <div className="flex justify-between pb-4">
        <h1 className="font-semibold">Likes & Matches</h1>
        <a className="text-purple-500 hover:text-purple-800">See all</a>
      </div>
      <div className="flex justify-center mb-4 bg-purple-100 rounded-md">
        <button
          className="py-1 px-5 focus:bg-purple-500 focus:text-white text-purple-500 rounded-md w-36"
          onClick={likesOrMatchesToggle}
        >
          Likes
        </button>
        <button
          className="py-1 px-5 focus:bg-purple-500 focus:text-white text-purple-500 rounded-md w-36"
          onClick={likesOrMatchesToggle}
        >
          Matches
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {likesOrMatches === LikesOrMatches.LIKES ? (
          <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-3 h-16 border-2 rounded-md">
            <Image
              src={Rabanito}
              alt="Your friend"
              height={50}
              width={50}
              className="rounded-md row-span-3 self-center justify-self-center "
            />
            <h2 className="p-0">Rabanito Chalupa</h2>
            <p className="col-start-2 text-zinc-400">Liked you 3 minutes ago</p>
            <p className="col-start-2 row-start-3 text-zinc-400">
              He was listening to...
            </p>
            <Image src={Heart} alt="Heart icon" height={17} />
          </div>
        ) : null}
        {likesOrMatches === LikesOrMatches.MATCHES ? (
          <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-3 h-16 border-2 rounded-md">
            <Image
              src={Gabardina}
              alt="Your friend"
              height={50}
              width={50}
              className="rounded-md row-span-3 self-center justify-self-center"
            />
            <h2 className="p-0">Ramiro Gabardina</h2>
            <p className="col-start-2 text-zinc-400">Liked you 5 minutes ago</p>
            <p className="col-start-2 row-start-3 text-zinc-400">
              He was listening to...
            </p>
            <Image src={Heart} alt="Heart icon" height={17} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
