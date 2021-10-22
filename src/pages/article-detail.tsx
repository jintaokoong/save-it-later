import useArticle from 'hooks/api/use-article';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useArticle(id);

  return (
    <Fragment>
      <div className={'max-w-2xl mx-auto'}>
        <h2 className={'font-bold text-xl mb-5'}>{data?.title}</h2>
        <div
          className={'overflow-hidden'}
          dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
        />
      </div>
    </Fragment>
  );
};

export default ArticleDetailPage;
