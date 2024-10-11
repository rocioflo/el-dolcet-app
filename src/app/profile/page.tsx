"use client";

import { LikesAndMatches } from "../home/components/LikesAndMatches/LikesAndMatches";
import { Messages } from "../home/components/Messages/Messages";

import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { UserPictures } from "./components/UserPictures/UserPictures";
import { UserFavorites } from "./components/UserFavorites/UserFavorites";

export default function ProfilePage() {
  return (
    <main className="grid md:grid-cols-[1fr_4fr_2fr] grid-rows-2 gap-6 mr-10">
      <div>
        <ProfileMenu />
      </div>

      <div className="rounded-xl border-2 grid md:grid-cols-[1fr_2fr] grid-rows-3 gap-3">
        <UserInformation />
      </div>
      <div className="col-start-2 border-2 rounded-lg p-5 font-bold">
        <UserPictures />
      </div>
      <div className="col-start-2 row-start-3 border-2 rounded-lg p-5 mb-6">
        <UserFavorites />
      </div>
      <div className="col-start-2 md:col-start-3 md:row-start-1">
        <Messages />
      </div>
      <div className="col-start-2 md:col-start-3 md:row-start-2">
        <LikesAndMatches />
      </div>
    </main>
  );
}
