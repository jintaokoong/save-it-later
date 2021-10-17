import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { auth } from 'config/firebase';
import LoginValidation from 'validations/login-validation';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidation,
    onSubmit: (v, h) => {
      signInWithEmailAndPassword(auth, v.email, v.password)
        .then((value) => console.log(value))
        .catch((err) => {
          console.error(JSON.stringify(err));
        })
        .finally(() => {
          h.setSubmitting(false);
        });
    },
  });

  return (
    <div className='h-screen w-screen flex bg-gray-50'>
      <div className={'m-auto p-6 rounded shadow-xl'}>
        <h1 className={'text-xl mb-4 text-gray-700 text-center font-bold'}>
          Login
        </h1>
        <form className={'flex flex-col'} onSubmit={formik.handleSubmit}>
          <div className={'mb-3 flex flex-col'}>
            <input
              placeholder={'Email'}
              name={'email'}
              type={'email'}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`${
                formik.errors.email ? 'bg-red-100' : 'bg-gray-100'
              } focus:outline-none rounded py-2.5 px-3`}
            />
            {formik.errors.email && (
              <span className={'mt-1 text-xs text-red-700'}>
                {formik.errors.email}
              </span>
            )}
          </div>
          <div className={'mb-3 flex flex-col'}>
            <input
              placeholder={'Password'}
              type={'password'}
              name={'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`${
                formik.errors.password ? 'bg-red-100' : 'bg-gray-100'
              } focus:outline-none rounded py-2.5 px-3`}
            />
            {formik.errors.password && (
              <span className={'mt-1 text-xs text-red-700'}>
                {formik.errors.password}
              </span>
            )}
          </div>
          <button
            type={'submit'}
            disabled={!formik.isValid || formik.isSubmitting}
            className={
              'p-2 bg-blue-300 disabled:bg-blue-50 disabled:cursor-not-allowed disabled:text-blue-500 text-blue-900 rounded hover:bg-blue-200 active:bg-blue-300'
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
