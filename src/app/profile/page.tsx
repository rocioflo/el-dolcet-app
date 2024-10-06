"use client";

import Image from "next/image";
import { LikesAndMatches } from "../components/LikesAndMatches/LikesAndMatches";
import { Messages } from "../components/Messages/Messages";
import MartinElMastin from "../../assets/martinelmastin.webp";
import Mastin1 from "../../assets/mastin1.jpg";
import Mastin2 from "../../assets/mastin2.jpg";
import Mastin3 from "../../assets/mastin3.jpg";
import Mastin4 from "../../assets/mastin4.webp";
import Mastin5 from "../../assets/mastin5.jpg";

export default function ProfilePage() {
  return (
    <main className="grid grid-cols-[1fr_4fr_2fr] grid-rows-3 gap-6">
      <div>Profile Nav Bar</div>

      <div className="rounded-xl border-2 grid grid-cols-[1fr_2fr] grid-rows-3 gap-3">
        <Image
          src={MartinElMastin}
          alt="despite everything it's still you"
          className="row-span-3"
        />
        <div>
          <h1 className="font-bold text-lg">Martín el Mastín</h1>
          <span>Rabasa</span>
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
        <div className="grid grid-cols-2 gap-2 h-full">
          <ol>
            <li>Taylor Swift</li>
            <li>Dodie</li>
            <li>Chappell Roan</li>
            <li>Sammy Rae & The Friends</li>
            <li>Molotov Jukebox</li>
          </ol>
          <ol>
            <li>Guilty as sin</li>
            <li>Guiltless</li>
            <li>Red Wine Supernova</li>
            <li>Coming Home Song</li>
            <li>Pinapple Girl</li>
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
