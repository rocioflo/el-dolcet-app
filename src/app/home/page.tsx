import { LikesAndMatches } from "./components/LikesAndMatches/LikesAndMatches";
import { Matcher } from "./components/Matcher/Matcher";
import { Messages } from "./components/Messages/Messages";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";

export default function UserHome() {
  return (
    <main className="grid md:grid-rows-2 md:grid-cols-[1fr_4fr_2fr] gap-4 h-full mr-10">
      <div className="row-span-2">
        <ProfileMenu />
      </div>
      <div className="row-span-2 h-full">
        <Matcher />
      </div>
      <div className="col-start-2 md:col-start-3">
        <Messages />
      </div>
      <div className="col-start-2 md:col-start-3">
        <LikesAndMatches />
      </div>
    </main>
  );
}
