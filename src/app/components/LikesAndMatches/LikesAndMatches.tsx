import Image from "next/image";
import Rabanito from "../../../assets/chalupin.jpg";
import Gabardina from "../../../assets/gabardina.jpg";

export const LikesAndMatches = () => {
  return (
    <div className="border-2 p-4 rounded-lg">
      <div className="flex justify-between pb-4">
        <h1 className="font-semibold">Likes & Matches</h1>
        <a className="text-purple-500 hover:text-purple-800">See all</a>
      </div>
      <div className="flex justify-center mb-4 bg-purple-100 rounded-md">
        <button className="py-1 px-5 focus:bg-purple-500 focus:text-white text-purple-500 rounded-md w-36">
          Likes
        </button>
        <button className="py-1 px-5 focus:bg-purple-500 focus:text-white text-purple-500 rounded-md w-36">
          Matches
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-3 h-16 border-2 rounded-md">
          <Image
            src={Rabanito}
            alt="Your friend"
            height={50}
            width={50}
            className="rounded-md row-span-3 self-center justify-self-center "
          />
          <h2 className="p-0">Rabanito Chalupa</h2>
          <p className="col-start-2 text-zinc-400">Liked you 3 minutes ago</p>
          <p className="col-start-2 row-start-3 text-zinc-400">
            He was listening to...
          </p>
          <span className="text-zinc-400">Ding!</span>
        </div>
        <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-3 h-16 border-2 rounded-md">
          <Image
            src={Gabardina}
            alt="Your friend"
            height={50}
            width={50}
            className="rounded-md row-span-3 self-center justify-self-center"
          />
          <h2 className="p-0">Ramiro Gabardina</h2>
          <p className="col-start-2 text-zinc-400">Liked you 5 minutes ago</p>
          <p className="col-start-2 row-start-3 text-zinc-400">
            He was listening to...
          </p>
          <span className="text-zinc-400">Ding!</span>
        </div>
      </div>
    </div>
  );
};
