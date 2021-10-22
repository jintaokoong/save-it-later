import { axiosInstance } from 'config/axios';
import { Article } from 'interfaces/api/article';
import { useCallback, useEffect, useState } from 'react';

const useArticle = (id: string) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Article | undefined>(undefined);

  const query = useCallback(() => {
    setLoading(true);
    return axiosInstance
      .get<Article>(`article/${id}`)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [id]);

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

export default useArticle;
