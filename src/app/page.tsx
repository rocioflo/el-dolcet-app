"use client";

import { LikesAndMatches } from "./components/LikesAndMatches/LikesAndMatches";
import { Matcher } from "./components/Matcher/Matcher";
import { Messages } from "./components/Messages/Messages";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";
import { getUsersTopArtist } from "./server-actions/getUsersData";

import { authenticate } from "./server-actions/authenticate";

export default function Home() {
  getUsersTopArtist();

  return (
    <div className="">
      <header className="h-12">
        <h1>El dolcet</h1>
      </header>
      <main className="grid grid-rows-2 grid-cols-[1fr_4fr_2fr] gap-4 h-full">
        <div className="row-span-2 ">
          <ProfileMenu />
        </div>
        <div className="row-span-2 h-full">
          <Matcher />
        </div>
        <div className="mr-10">
          <Messages />
        </div>
        <div className="col-start-3 mr-10">
          <LikesAndMatches />
        </div>
        <button onClick={() => authenticate()}>Get Auth</button>
      </main>
    </div>
  );
}
