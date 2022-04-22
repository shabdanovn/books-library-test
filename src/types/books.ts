import { string } from 'yup';
export type BookType = {
    id: string,
    title: string,
    author: string,
    category: string
}

export type CreateBookType = {
  id:string
  title: string;
  author: string;
  category: string;
};