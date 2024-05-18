import { AxiosResponse } from 'axios';
import http from '../api';
import { LoginDto } from './dto.interface';
import { LoginResponse } from './responses.interface';

let authSingIn = async (
  loginDto: LoginDto,
): Promise<AxiosResponse<LoginResponse, any>> => {
  try {
    const response = http.post('/auth/login', loginDto);
    return response;
  } catch (error) {
    throw error;
  }
};

let authValidToken = () => {
  return http.get('/auth/token-validation');
};

export default {
  authSingIn,
  authValidToken,
};
