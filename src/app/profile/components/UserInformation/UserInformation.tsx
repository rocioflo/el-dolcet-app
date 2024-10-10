import Image from "next/image";
import MartinElMastin from "@/public/martinelmastin.webp";
import { useGetUserData } from "@/app/hooks/useGetUserData";

export const UserInformation = () => {
  const { userName, favoriteGenre } = useGetUserData();

  return (
    <>
      <Image
        src={MartinElMastin}
        alt="despite everything it's still you"
        className="row-span-3 h-full w-full"
      />
      <div>
        <h1 className="font-bold text-lg">{userName}</h1>
        <span>{favoriteGenre}</span>
      </div>
      <p>El otro día vi una ardilla.</p>
      <div>
        <div className="flex gap-2">
          <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
            # Food
          </button>
          <button className="bg-emerald-100 px-2 rounded-md text-emerald-600 hover:bg-emerald-200">
            # Rasquis
          </button>
          <button className="bg-emerald-100 px-2 rounded-md  border-[1px] text-emerald-600 hover:bg-emerald-200">
            # El pizzero
          </button>
        </div>
      </div>
    </>
  );
};
