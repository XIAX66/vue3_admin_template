//the ts type that login interface need to carry
export interface LoginForm {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

export interface LoginResponse {
  code: number;
  data: dataType;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
interface user {
  checkUser: userInfo;
}
export interface userResponseData {
  code: number;
  data: user;
}
