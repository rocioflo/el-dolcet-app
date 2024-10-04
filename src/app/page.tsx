import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";

export default function Home() {
  return (
    <div className="h-screen">
      <header className="h-12">
        <h1>El dolcet</h1>
      </header>
      <main className="grid grid-rows-2 grid-cols-[1fr_4fr_2fr] gap-4 h-full">
        <div className="row-span-2">
          <ProfileMenu />
        </div>
        <div className="row-span-2">Matcher</div>
        <div>Messages</div>
        <div className="col-start-3">Likes & Matches</div>
      </main>
    </div>
  );
}
