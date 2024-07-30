import { jwtDecode } from "jwt-decode";

export const userInfoDecode = (token: string) => {
  if (token) {
    const user = jwtDecode(token);
    return user;
  }
};
