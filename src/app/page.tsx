import { LikesAndMatches } from "./components/LikesAndMatches/LikesAndMatches";
import { Matcher } from "./components/Matcher/Matcher";
import { Messages } from "./components/Messages/Messages";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";

export default function Home() {
  // This is temporary, because a client component does not have access to env, but the test worked

  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
  }).then((data) => console.log(data));

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
      </main>
    </div>
  );
}
