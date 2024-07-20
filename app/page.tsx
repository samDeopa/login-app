"use client";

import { useEffect, useState } from "react";
import { setToken, setUser } from "@/redux/auth/auth.slice";
import useAuthSession from "../hooks/useAuthSession";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toast } from "sonner";
import axios from "axios";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type User = {
  userId: string;
  username: string;
  password: string;
};

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAuthSession();
  const authToken = useAppSelector((state) => state.auth.token);
  const router = useRouter();
  const userDB = useAppSelector((state) => state.auth.userDB);

  useEffect(() => {
    if (authToken) {
      console.log("authToken", authToken);
    }
  }, [authToken]);

  const handleLogin = async () => {
    // Implement the logic to authenticate the user
    if (username === "" || password === "") {
      toast.error("Please enter all the details");
      return;
    }
    let userFound: boolean = false;
    userDB.forEach((obj) => {
      console.log(obj);

      if (obj.username === username && obj.password === password) {
        userFound = true;
      }
    });
    if (!userFound) {
      toast.error("Invalid Username or Password!");
      return;
    }
    const userDetails: User = {
      username,
      password,
      userId: nanoid(),
    };

    try {
      setLoading(true);
      const userInfo = await axios.post("/api/login", userDetails);
      const token = userInfo.data.token;
      dispatch(setToken(token));
      localStorage.setItem("token", token);
      setLoading(false);
      toast.success("Login successful");
      router.push("/home");
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {user ? (
          <div>
            <h2 className="text-xl font-bold">Welcome, {user.username}</h2>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 mt-4 border rounded-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-4 border rounded-md"
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <p className="text-center ">
              Not a user?{" "}
              <a href="/register" className="text-blue-500">
                Register
              </a>
            </p>
          </div>
        )}
        {/* <div className="mt-6 p-4 border rounded-md text-black bg-gray-50">
          <h3 className="text-lg font-semibold">
            The hook should be usable like this:{" "}
          </h3>
          <pre className="mt-2 p-2 text-gray-500 bg-gray-100 rounded-md">
            <code>
              {`const { user } = useAuthSession();
if (user) {
  console.log('User:', user.username);
}`}
            </code>
          </pre>
        </div> */}
        <div>
          {user && (
            <button
              onClick={() => router.push("/home")}
              className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md"
            >
              Continue to Homepage
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
