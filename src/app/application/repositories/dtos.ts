type ArtistsObject = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type UsersTopArtistsDTO = {
  href: string;
  items: ArtistsObject[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};
