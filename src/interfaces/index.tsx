interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
  gender: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
  image: string;
}

export type { User, Post };
