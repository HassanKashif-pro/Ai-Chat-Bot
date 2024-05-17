import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/user/login", { email, password });
    return res.data;
  } catch (error) {
    throw new Error("Unable to login");
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await axios.post("/user/auth-status");
    return res.data;
  } catch (error) {
    throw new Error("Unable to authenticate");
  }
};
