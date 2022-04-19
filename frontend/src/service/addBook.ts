import IFrontendBook from '../../../types/IFrontendBook';
import axiosClient from './axiosClient';

export interface IAddBookParam {
  title: string;
  desc: string;
  author: string;
  tags: string[];
  img: string;
}

const addBook = async (book: IAddBookParam) => {
  const res = await axiosClient.client.post<IFrontendBook>('/api/book', book);
  return res.data;
};

export default addBook;
