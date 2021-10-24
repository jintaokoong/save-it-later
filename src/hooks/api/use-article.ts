import { axiosInstance } from 'config/axios';
import { Article } from 'interfaces/api/article';
import { useQuery } from 'react-query';

const useArticle = (id: string) =>
  useQuery(
    ['article', id],
    () => axiosInstance.get<Article>(`/article/${id}`).then((res) => res.data),
    {
      staleTime: 60000,
    }
  );

export default useArticle;
