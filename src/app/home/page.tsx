import { LikesAndMatches } from "./components/LikesAndMatches/LikesAndMatches";
import { Matcher } from "./components/Matcher/Matcher";
import { Messages } from "./components/Messages/Messages";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";

export default function UserHome() {
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
    </main>
  );
}
