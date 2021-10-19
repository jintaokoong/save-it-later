import { auth } from 'config/firebase';
import { Link, Route, Switch } from 'react-router-dom';
import ArticlePage from 'pages/article';
import ArticleDetailPage from 'pages/article-detail';
import { Fragment } from 'react';

const MainPage = () => {
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
          <button
            className={
              'p-1 px-3 transition duration-500 ease-in-out bg-red-300 disabled:bg-red-50 disabled:cursor-not-allowed disabled:text-red-500 text-red-900 rounded hover:bg-red-200 active:bg-red-300'
            }
            type={'button'}
            onClick={() => auth.signOut()}
          >
            Logout
          </button>
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
