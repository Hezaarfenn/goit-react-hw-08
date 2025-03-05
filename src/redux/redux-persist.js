import storage from "redux-persist/lib/storage";

export const persistToken = async (token) => {
  if (token) {
    await storage.setItem("authToken", token);
  } else {
    await storage.removeItem("authToken");
  }
};

export const getTokenFromStorage = async () => {
  const token = await storage.getItem("authToken");
  return token;
};
