import * as yup from 'yup';

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export default LoginValidation;
