import { localAxios } from '@/lib/axios';
import { isEmail } from '@/lib/regex';
import { toast } from 'react-hot-toast';
import { setToLocalStorage } from '@/lib/helpers';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export const loginService = async (
  email_or_username: string,
  password: string
) => {
  return await localAxios
    .post('/api/login', {
      email: isEmail(email_or_username) ? email_or_username : '',
      username: isEmail(email_or_username) ? '' : email_or_username,
      password: password,
    })
    .then((response) => {
      if (response.data.access_token) {
        toast.success('Login successful');
        setToLocalStorage('access_token', response.data.access_token);
        response.data.isSuccess = true;
      } else {
        toast.error(response.data.message);
        response.data.isSuccess = false;
      }
      return response;
    });
};