import { auth } from 'config/firebase';
import { Route, Switch } from 'react-router-dom';
import ArticlePage from 'pages/article';
import ArticleDetailPage from 'pages/article-detail';
import { Fragment } from 'react';

const MainPage = () => {
  return (
    <Fragment>
      <div>
        <button type={'button'} onClick={() => auth.signOut()}>
          logout
        </button>
      </div>
      <div className={'container mx-auto'}>
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
