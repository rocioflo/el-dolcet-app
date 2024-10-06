import Image from "next/image";

import MartinElMastin from "../../../assets/martinelmastin.webp";
import Heart from "../../../assets/heart_icon.svg";
import Users from "../../../assets/users_icon.svg";
import Message from "../../../assets/message_icon.svg";
import TwoHearts from "../../../assets/two_hearts_icon.svg";
import Profile from "../../../assets/profile_icon.svg";
import Settings from "../../../assets/settings_icon.svg";
import Link from "next/link";

export const ProfileMenu = () => {
  return (
    <div className="flex flex-col justify-evenly rounded-md border-2 p-5 h-full">
      <div>
        <Image
          src={MartinElMastin}
          alt="User's profile picture"
          className="rounded-md"
          height={200}
          width={200}
        />
        <h1 className="mt-5 font-semibold">Martín el Mastín</h1>
        <h2 className="text-zinc-300">Rock and roll</h2>
        <div className="flex gap-3 mt-5">
          <div className="flex flex-col">
            <span className="text-purple-500 font-semibold">12</span>
            <span className="text-zinc-300">Friends</span>
          </div>
          <div className="flex flex-col">
            <span className="text-purple-500 font-semibold">99</span>
            <span className="text-zinc-300">Likes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-purple-500 font-semibold">6</span>
            <span className="text-zinc-300">Matches</span>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            <a className="flex gap-1">
              <Image src={Heart} alt="Heart icon" height={17} />
              Dating
            </a>
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            <a className="flex gap-1">
              <Image src={Users} alt="Users icon" height={17} />
              Users
            </a>
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            <a className="flex gap-1">
              <Image src={Message} alt="Messages icon" height={17} />
              Messages
            </a>
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            <a className="flex gap-1">
              <Image src={TwoHearts} alt="Activity icon" height={17} />
              Activity
            </a>
          </li>
          <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
            <Link href="/profile" className="flex gap-1">
              <Image src={Profile} alt="Profile icon" height={17} />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-zinc-400 border-t-2">
        <a className="flex gap-1 mt-2 hover:bg-zinc-100 rounded-md">
          <Image src={Settings} alt="Settings icon" height={17} />
          Settings
        </a>
      </div>
    </div>
  );
};
