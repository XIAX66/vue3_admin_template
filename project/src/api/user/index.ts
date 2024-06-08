//Unified management project user -related interface
import request from '@/utils/request';

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFOR_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data);
export const reqUserInfo = () => request.get<any, any>(API.USERINFOR_URL);
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
