import Image from "next/image";

import MartinElMastin from "../../../assets/martinelmastin.webp";

export const ProfileMenu = () => {
  return (
    <div className="flex flex-col justify-evenly rounded-sm border-2 p-5 h-[90%]">
      <div>
        <Image
          src={MartinElMastin}
          alt="User's profile picture"
          className="rounded-md"
          height={200}
          width={200}
        />
        <h1 className="mt-5 font-semibold">Martín el Mastín</h1>
        <h2 className="text-zinc-300">Rabasa</h2>
        <div className="flex gap-1 mt-5">
          <div className="flex flex-col gap-0.5 ">
            <span className="text-purple-500 font-semibold">12</span>
            <span className="text-zinc-300">Friends</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-purple-500 font-semibold">99</span>
            <span className="text-zinc-300">Likes</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-purple-500 font-semibold">6</span>
            <span className="text-zinc-300">Matches</span>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            Dating
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            Users
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            Messages
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            Activity
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            Profile
          </li>
        </ul>
      </nav>
      <div className="text-zinc-400">Settings</div>
    </div>
  );
};
