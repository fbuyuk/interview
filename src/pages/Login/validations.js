import * as yup from 'yup';

export default yup.object({
  username: yup.string().required('Kullanıcı adı alanı zorunludur.'),
  password: yup.string().min(3).required('Şifre alanı zorunludur.'),
});

