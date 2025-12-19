export type Category = {
  id?: string;
  name: string;
};

export type News = {
  id: string;
  title: string;
  description?: string;
  content?: string;
  thumbnail?: { url: string; height?: number; width?: number };
  category: {
    id?: string;
    name: string;
  };
  publishedAt?: string;
  createdAt?: string;
};
