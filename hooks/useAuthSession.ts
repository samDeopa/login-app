import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: { username: string } = jwtDecode(token);
        dispatch(setUser({ username: decoded.username }));
      } catch (e) {
        console.log(e);
        toast.error("Invalid token. Please login again.");
        dispatch(clearAuth());
      }
    }
  }, [dispatch]);

  return user;
};

export default useAuthSession;
