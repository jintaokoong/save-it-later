import { axiosInstance } from 'config/axios';
import { useMutation } from 'react-query';

const useAddArticle = () => {
  return useMutation(['add-article'], (url: string) =>
    axiosInstance.post('article', { url: url }).then((res) => res.data)
  );
};

export default useAddArticle;
