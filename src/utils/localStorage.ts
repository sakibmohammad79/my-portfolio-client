export const setToLocalStorage = (accessToken: string, key: string) => {
  if (!key && typeof window === "undefined") {
    return "";
  } else {
    return localStorage.setItem(key, accessToken);
  }
};
export const getToLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeToLocalStorage = (key: string) => {
  if (!key && typeof window === "undefined") {
    return "";
  } else {
    return localStorage.removeItem(key);
  }
};
