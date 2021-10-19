import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ArticlePage = () => {
  const history = useHistory();
  const [articles, setArticles] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/article?key=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then((body) => setArticles(body));
  }, []);

  return (
    <Fragment>
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {articles.map((a, index) => (
          <div
            className={'p-4 rounded shadow cursor-pointer'}
            key={index}
            onClick={() => history.push(`/main/article/${a.id}`)}
          >
            <h3 className={'font-bold mb-1'}>{a.title}</h3>
            <div className={'mb-1'}>
              <a
                href={a.url}
                className={'text-sm text-blue-600'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(e.currentTarget.href);
                }}
              >
                {new URL(a.url).origin}
              </a>
            </div>
            <p className={'text-xs'}>
              {a.textContent
                ?.replaceAll('\n', '')
                ?.replace(/\s+/g, ' ')
                ?.substring(0, 250)}
              ...
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ArticlePage;
