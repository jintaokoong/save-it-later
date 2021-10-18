import { auth } from 'config/firebase';

const MainPage = () => {
  return (
    <div>
      <button type={'button'} onClick={() => auth.signOut()}>
        logout
      </button>
    </div>
  );
};

export default MainPage;
