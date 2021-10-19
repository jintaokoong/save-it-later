import { Link, Route, Switch } from 'react-router-dom';
import ArticlePage from 'pages/article';
import ArticleDetailPage from 'pages/article-detail';
import { Fragment, useRef, useState } from 'react';
import classNames from 'classnames';
import useOutside from 'hooks/use-outside';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutside(ref, open, () => {
    setOpen((o) => !o);
  });

  return (
    <Fragment>
      <nav className={'container mx-auto flex justify-between p-3'}>
        <div className={'branding font-bold inline-flex self-center'}>
          <Link to={'/'}>Save It Later</Link>
        </div>
        <div className={'flex items-center'}>
          {/*<div className={'hidden sm:block text-blue-900 mr-3'}>
            {auth.currentUser?.email}
          </div>*/}
          <button
            className={
              'font-bold py-1 px-3 mr-2 transition duration-500 ease-in-out bg-blue-300 disabled:bg-blue-50 disabled:cursor-not-allowed disabled:text-blue-500 text-blue-900 rounded-full hover:bg-blue-200 active:bg-blue-300'
            }
          >
            +
          </button>
          <div className='relative inline-flex self-center text-left'>
            <button
              type={'button'}
              className={'bg-gray-400 rounded-full w-8 h-8'}
              onClick={() => setOpen((o) => !o)}
            />
            <div
              ref={ref}
              className={classNames(
                { hidden: !open },
                'origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              )}
            >
              <div className={'py-1'}>
                <div
                  className={'text-gray-700 block px-4 py-2 text-sm'}
                  role={'menuitem'}
                >
                  Account settings
                </div>
                <div
                  className={'text-gray-700 block px-4 py-2 text-sm'}
                  role={'menuitem'}
                >
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={'container mx-auto p-5'}>
        <Switch>
          <Route exact path={'/main/article'} component={ArticlePage} />
          <Route
            exact
            path={'/main/article/:id'}
            component={ArticleDetailPage}
          />
        </Switch>
      </div>
    </Fragment>
  );
};

export default MainPage;
