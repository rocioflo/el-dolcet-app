import Mastin1 from "@/public/mastin1.jpg";
import Mastin2 from "@/public/mastin2.jpg";
import Mastin3 from "@/public/mastin3.jpg";
import Mastin4 from "@/public/mastin4.webp";
import Mastin5 from "@/public/mastin5.jpg";

import Image from "next/image";

export const UserPictures = () => {
  return (
    <>
      <h4 className="mb-2">Your pictures</h4>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <Image
          src={Mastin1}
          alt="Me heheee"
          height={100}
          className="rounded-lg"
        />
        <Image
          src={Mastin2}
          alt="Me heheee"
          height={100}
          className="rounded-lg"
        />
        <Image
          src={Mastin3}
          alt="Me heheee"
          height={100}
          className="rounded-lg"
        />
        <Image
          src={Mastin4}
          alt="Me heheee"
          height={100}
          className="rounded-lg"
        />
        <Image
          src={Mastin5}
          alt="Me heheee"
          height={100}
          className="rounded-lg"
        />
      </div>
    </>
  );
};
