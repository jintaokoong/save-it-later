import { axiosInstance } from 'config/axios';
import { Article } from 'interfaces/api/article';
import { useQuery } from 'react-query';

type SArticle = Omit<Article, 'content'>;

const useArticles = () =>
  useQuery(['articles'], () =>
    axiosInstance.get<SArticle[]>('/article').then((res) => res.data)
  );

export default useArticles;
