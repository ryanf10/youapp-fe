import { localAxios } from '@/lib/axios';
import { isEmail } from '@/lib/regex';
import { toast } from 'react-hot-toast';
import { setToLocalStorage } from '@/lib/helpers';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export const registerService = async (
  email: string,
  username: string,
  password: string
) => {
  return await localAxios
    .post('/api/register', {
      email: email,
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.message == 'User has been created successfully') {
        toast.success('Register successful');
        response.data.isSuccess = true;
      } else {
        toast.error(response.data.message);
        response.data.isSuccess = false;
      }
      return response;
    })
    .catch((err) => {
      toast.error(
        Array.isArray(err.response.data.message)
          ? err.response.data.message[0]
          : err.response.data.message
      );
      err.response.data.isSuccess = false;
      return err.response;
    });
};
