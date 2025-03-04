import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global", // API base URL
});

// Token işlemleri için helper fonksiyonlar
export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete instance.defaults.headers.common.Authorization;
};

// Auth işlemleri
export const authAPI = {
  async register(credentials) {
    try {
      const { data } = await instance.post("/users/signup", credentials);
      setAuthHeader(data.token); // Token'ı global header'a ekle
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Kayıt başarısız");
    }
  },

  async login(credentials) {
    try {
      const { data } = await instance.post("/users/login", credentials);
      setAuthHeader(data.token); // Token'ı global header'a ekle
      return data;
    } catch (error) {
      console.error("Login API Error:", error.response?.data);
      throw new Error("Email veya şifre hatalı");
    }
  },

  async logout() {
    try {
      await instance.post("/users/logout");
      clearAuthHeader(); // Token'ı temizle
    } catch (error) {
      throw new Error("Çıkış yapılırken hata oluştu", error.message);
    }
  },

  async refresh() {
    try {
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      throw new Error("Oturum yenilenemedi", error.message);
    }
  },
};
