type Hero = {
  name: string;
  bio?: string;
  motto?: string;
};

export type Link = {
  title: string;
  icon: string;
  url: string;
};

export type Data = {
  hero: Hero;
  links: Link[];
};
