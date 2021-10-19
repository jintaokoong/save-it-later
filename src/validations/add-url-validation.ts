import * as yup from 'yup';

const AddUrlValidation = yup.object().shape({
  url: yup.string().required(),
});

export default AddUrlValidation;
