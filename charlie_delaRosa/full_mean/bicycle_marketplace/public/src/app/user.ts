import { Post } from './post';

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  post: Post[];
}
