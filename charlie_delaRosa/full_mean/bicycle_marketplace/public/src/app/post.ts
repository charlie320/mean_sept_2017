import { User } from './user';

export class Post {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  photo: string;
  user: User;
}
