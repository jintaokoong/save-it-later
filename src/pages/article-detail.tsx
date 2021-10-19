import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      console.log(
        `${process.env.REACT_APP_BASEURL}/article/${id}?key=${process.env.REACT_APP_APIKEY}`
      );
      fetch(
        `${process.env.REACT_APP_BASEURL}/article/${id}?key=${process.env.REACT_APP_APIKEY}`
      )
        .then((res) => res.json())
        .then((body) => setContent(body.content));
    }
  }, [id]);

  return (
    <Fragment>
      <div
        className={'max-w-2xl mx-auto p-5'}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Fragment>
  );
};

export default ArticleDetailPage;
