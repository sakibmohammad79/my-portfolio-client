import { authKey } from "@/constant";
import { userInfoDecode } from "@/utils/jwtDecode";
import {
  getToLocalStorage,
  removeToLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(accessToken, authKey);
};

export const getUserInfo = () => {
  const authToken = getToLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = userInfoDecode(authToken);

    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const removeUser = () => {
  return removeToLocalStorage(authKey);
};

export const isLoggedIn = () => {
  const authToken = getToLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
