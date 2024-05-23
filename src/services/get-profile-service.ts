import axios, { localAxios } from '@/lib/axios';
import { isEmail } from '@/lib/regex';
import { toast } from 'react-hot-toast';
import { getFromLocalStorage, setToLocalStorage } from '@/lib/helpers';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export const getProfileService = async () => {
  const token = getFromLocalStorage('access_token');
  return await localAxios.get('/api/getProfile', {
    headers: { 'x-access-token': token },
  });
};
