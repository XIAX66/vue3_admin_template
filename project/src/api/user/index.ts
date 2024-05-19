//Unified management project user -related interface
import request from '@/utils/request';
import type { LoginForm, LoginResponse, userResponseData } from './type';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.LOGIN_URL, data);
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL);
