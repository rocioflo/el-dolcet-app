"use client";

import { LikesAndMatches } from "./components/LikesAndMatches/LikesAndMatches";
import { Matcher } from "./components/Matcher/Matcher";
import { Messages } from "./components/Messages/Messages";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";

import { authenticate } from "./server-actions/authenticate";

export default function Home() {
  return (
    <main className="grid grid-rows-2 grid-cols-[1fr_4fr_2fr] gap-4 h-full">
      <div className="row-span-2">
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
  );
}

// Features: your coolest playlist, add song to your match queue?
