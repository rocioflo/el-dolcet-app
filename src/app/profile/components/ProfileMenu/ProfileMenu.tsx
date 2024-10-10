import Link from "next/link";
import Image from "next/image";
import Heart from "@/public/heart_icon.svg";
import Users from "@/public/users_icon.svg";
import Message from "@/public/message_icon.svg";
import TwoHearts from "@/public/two_hearts_icon.svg";

export const ProfileMenu = () => {
  return (
    <nav className="p-5">
      <ul>
        <li className="mt-1 text-zinc-400 hover:text-zinc-900 hover:bg-purple-100 rounded-md py-2">
          <Link href={"/home"} className="flex gap-1">
            <Image src={Heart} alt="Heart icon" height={17} />
            Dating
          </Link>
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
      </ul>
    </nav>
  );
};
