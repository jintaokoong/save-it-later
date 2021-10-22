import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(undefined);

  useEffect(() => {
    if (id) {
      fetch(
        `${process.env.REACT_APP_BASEURL}/article/${id}?key=${process.env.REACT_APP_APIKEY}`
      )
        .then((res) => res.json())
        .then((body) => setArticle(body));
    }
  }, [id]);

  return (
    <Fragment>
      <div className={'max-w-2xl mx-auto'}>
        <h2 className={'font-bold text-xl mb-5'}>{article?.title}</h2>
        <div
          className={'overflow-hidden'}
          dangerouslySetInnerHTML={{ __html: article?.content }}
        />
      </div>
    </Fragment>
  );
};

export default ArticleDetailPage;
