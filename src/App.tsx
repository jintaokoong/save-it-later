import React from 'react';
import { useFormik } from 'formik';

function App () {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (v) => {
      console.log(v);
    },
  });

  return (
    <div className='h-screen w-screen flex bg-gray-50'>
      <div className={'m-auto p-6 rounded shadow-xl'}>
        <h1
          className={'text-xl mb-4 text-gray-700 text-center font-bold'}>Login</h1>
        <form className={'flex flex-col'} onSubmit={formik.handleSubmit}>
          <input placeholder={'Email'}
                 name={'email'}
                 type={'email'}
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 className={'bg-gray-100 mb-3 focus:outline-none rounded py-2.5 px-3'} />
          <input placeholder={'Password'} type={'password'}
                 name={'password'}
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 className={'bg-gray-100 mb-3 focus:outline-none rounded py-2.5 px-3'} />
          <button type={'submit'}
                  className={'p-2 bg-blue-300 text-blue-900 rounded hover:bg-blue-200 active:bg-blue-300'}>Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
