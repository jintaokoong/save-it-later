import { axiosInstance } from 'config/axios';
import { Article } from 'interfaces/api/article';
import { useCallback, useEffect, useState } from 'react';

type SArticle = Omit<Article, 'content'>;

const useArticles = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<SArticle[] | undefined>();

  const query = useCallback(() => {
    setLoading(true);
    return axiosInstance
      .get<SArticle[]>('article')
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    query();
  }, [query]);

  useEffect(() => {
    window.onfocus = () => {
      query();
    };
    return () => {
      window.onfocus = null;
    };
  }, [query]);

  return {
    data,
    isLoading,
  };
};

export default useArticles;
