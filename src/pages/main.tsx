import { Link, Route, Switch } from 'react-router-dom';
import ArticlePage from 'pages/article';
import ArticleDetailPage from 'pages/article-detail';
import { Fragment, useRef, useState } from 'react';
import classNames from 'classnames';
import useOutside from 'hooks/use-outside';
import { auth } from 'config/firebase';
import { useSetRecoilState } from 'recoil';
import { addArticleModalAtom } from 'store/add-article-modal';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useOutside(ref, btnRef, open, () => {
    setOpen((o) => !o);
  });
  const setModalOpen = useSetRecoilState(addArticleModalAtom);

  return (
    <Fragment>
      <nav className={'container mx-auto flex justify-between py-3 px-5'}>
        <div className={'branding text-lg font-bold inline-flex self-center'}>
          <Link to={'/'}>Save It Later</Link>
        </div>
        <div className={'flex items-center'}>
          <button
            className={
              'font-bold py-1 px-3 mr-2 transition duration-500 ease-in-out bg-blue-300 disabled:bg-blue-50 disabled:cursor-not-allowed disabled:text-blue-500 text-blue-900 rounded-full hover:bg-blue-200 active:bg-blue-300'
            }
            onClick={() => setModalOpen(true)}
          >
            +
          </button>
          <div className='relative inline-flex self-center text-left'>
            <button
              ref={btnRef}
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
                  className={
                    'cursor-pointer transition duration-300 active:bg-gray-300 rounded-md hover:bg-gray-100 py-2 px-2 text-gray-900 block mx-2 my-1 text-sm'
                  }
                  role={'menuitem'}
                >
                  Account settings
                </div>
                <div
                  className={
                    'cursor-pointer transition duration-300 active:bg-gray-300 rounded-md hover:bg-gray-100 py-2 px-2 text-gray-900 block mx-2 my-1 text-sm'
                  }
                  role={'menuitem'}
                  onClick={() => auth.signOut()}
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
