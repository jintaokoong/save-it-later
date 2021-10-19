import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { auth } from 'config/firebase';
import LoginValidation from 'validations/login-validation';

import Input from 'components/form/input';
import PrimaryButton from 'components/form/primary-button';
import { useHistory } from 'react-router-dom';

const SignInPage = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidation,
    onSubmit: (v, h) => {
      signInWithEmailAndPassword(auth, v.email, v.password)
        .then(() => {
          history.push('/main/article');
        })
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
        <h1
          className={
            'text-xl mb-4 text-gray-700 text-center font-bold branding'
          }
        >
          Login
        </h1>
        <form className={'flex flex-col'} onSubmit={formik.handleSubmit}>
          <div className={'mb-3 flex flex-col'}>
            <Input
              placeholder={'Email'}
              id={'email'}
              type={'email'}
              error={formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={'mb-3 flex flex-col'}>
            <Input
              placeholder={'Password'}
              type={'password'}
              name={'password'}
              error={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className={'h-3'} />
          <PrimaryButton
            type={'submit'}
            disabled={!formik.isValid || formik.isSubmitting}
            loading={formik.isSubmitting}
          >
            Login
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
