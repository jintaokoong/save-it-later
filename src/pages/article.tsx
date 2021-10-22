import classNames from 'classnames';
import Input from 'components/form/input';
import PrimaryButton from 'components/form/primary-button';
import { useFormik } from 'formik';
import useArticles from 'hooks/api/use-articles';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { addArticleModalAtom } from 'store/add-article-modal';
import { classnames } from 'tailwindcss-classnames';
import AddUrlValidation from 'validations/add-url-validation';

const ArticlePage = () => {
  const history = useHistory();
  const { data } = useArticles();

  const formik = useFormik({
    initialValues: {
      url: '',
    },
    validationSchema: AddUrlValidation,
    onSubmit: (v, h) => {
      fetch(
        `${process.env.REACT_APP_BASEURL}/article?key=${process.env.REACT_APP_APIKEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(v),
        }
      )
        .then((res) => res.json())
        .then((_) => {
          setModalOpen(false);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          h.setSubmitting(false);
        });
    },
  });
  const [modalOpen, setModalOpen] = useRecoilState(addArticleModalAtom);

  return (
    <Fragment>
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {data?.map((a, index) => (
          <div
            className={
              'transition duration-200 p-4 rounded shadow-md hover:shadow-xl cursor-pointer'
            }
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
      <div
        className={classNames(
          {
            hidden: !modalOpen,
          },
          'transition duration-75 ease-in flex w-screen h-screen bg-black bg-opacity-30 absolute top-0 left-0'
        )}
        onClick={() => {
          formik.resetForm();
          setModalOpen(false);
        }}
      >
        <div
          className={
            'z-50 mx-auto self-start mt-10 p-5 rounded bg-white opacity-100'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={formik.handleSubmit}>
            <Input
              overrides={classnames('w-full')}
              name={'url'}
              placeholder={'URL'}
              value={formik.values.url}
              onChange={formik.handleChange}
            />
            <PrimaryButton
              loading={formik.isSubmitting}
              type={'submit'}
              classname={'w-full mt-2'}
            >
              Add Url
            </PrimaryButton>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ArticlePage;
