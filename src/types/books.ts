export type BookType = {
    id: number|string,
    title: string,
    author: string,
    category: string
}

export type CreateBookType = {
  title: string;
  author: string;
  category: string;
};