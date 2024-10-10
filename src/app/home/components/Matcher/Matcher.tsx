import Image from "next/image";
import Benita from "@/public/caruso.jpg";

export const Matcher = () => {
  return (
    <div className="rounded-lg border-2 flex flex-col items-center h-full">
      <Image
        src={Benita}
        alt="Your match!"
        height={500}
        className="object-contain"
      />

      <div className="grid grid-cols-[2fr_1fr] gap-2 p-3">
        <div>
          <h1 className="font-bold text-lg">Benita Caruso, 3</h1>
          <span className="text-zinc-400 col-start-1">3km from you</span>
        </div>
        <p className="col-start-1">
          I really like going on walks and running to pigeons to scare them into
          flying. But what I most enjoy is carisias en la pansa.
        </p>
        <div className="col-start-1">
          <h2 className="font-bold mb-2">Passions</h2>
          <div className="flex gap-2">
            <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
              # Food
            </button>
            <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
              # Rasquis
            </button>
            <button className="bg-stone-100 px-2 rounded-md  border-[1px] border-stone-300 hover:bg-stone-200">
              # El Titanic
            </button>
          </div>
        </div>
        <div className="col-start-2 row-start-1 flex gap-2 justify-end">
          <button className="rounded-2xl py-3 px-4 bg-stone-100 border-[1px] border-stone-300 hover:bg-stone-200">
            No
          </button>
          <button className="rounded-2xl py-3 px-4 text-emerald-600 bg-emerald-100 border-[1px] border-emerald-300 hover:bg-emerald-200">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
