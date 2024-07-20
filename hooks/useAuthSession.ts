import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";
import { jwtDecode } from "jwt-decode";

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log("decoded", decoded);
      //@ts-ignore
      dispatch(setUser({ username: decoded?.username }));
    }
  }, [dispatch]);
  return user;
};

export default useAuthSession;
