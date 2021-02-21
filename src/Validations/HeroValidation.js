import * as yup from 'yup';

export const heroSchema = yup.object().shape({
  nickname: yup.string().min(1).max(32).required(),
  realName: yup.string().min(2).max(64).required(),
  origin: yup.string().min(5).max(64).required(),
  superpowers: yup.string().min(5).max(64).required(),
  catchPhrase: yup.string().min(5).max(64).required(),
});
