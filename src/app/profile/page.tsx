"use client";

import { LikesAndMatches } from "../home/components/LikesAndMatches/LikesAndMatches";
import { Messages } from "../home/components/Messages/Messages";

import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { UserPictures } from "./components/UserPictures/UserPictures";
import { UserFavorites } from "./components/UserFavorites/UserFavorites";

export default function ProfilePage() {
  return (
    <main className="grid grid-cols-[1fr_4fr_2fr] grid-rows-3 gap-6">
      <div>
        <ProfileMenu />
      </div>

      <div className="rounded-xl border-2 grid grid-cols-[1fr_2fr] grid-rows-3 gap-3">
        <UserInformation />
      </div>
      <div className="col-start-2 border-2 rounded-lg p-5 font-bold">
        <UserPictures />
      </div>
      <div className="col-start-2 row-start-3 border-2 rounded-lg p-5 mb-6">
        <UserFavorites />
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
