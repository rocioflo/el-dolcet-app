/* eslint-disable @next/next/no-img-element */

type SmallCard = {
  name: string;
  image?: string;
};

export const SmallCard = ({ name, image }: SmallCard) => {
  return (
    <button className="flex gap-2 w-fit border-dotted border-2 border-black hover:bg-slate-300 py-1 px-2 rounded-lg">
      <h6>{name}</h6>
      <img src={image ?? ""} alt={""} width={20} height={30} />
    </button>
  );
};
