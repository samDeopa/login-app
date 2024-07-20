"use client";

import { useEffect, useState } from "react";
import { setToken, setUser, setUserDB } from "@/redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { log } from "console";

type User = {
  userId: string;
  username: string;
  password: string;
};

const Register = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (username === "" || password === "") {
      toast.error("Please enter all the details");
      return;
    }

    const userDetails: User = {
      username,
      password,
      userId: nanoid(),
    };
    dispatch(setUserDB(userDetails));
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-center">Register</h2>
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
            onClick={handleRegister}
            className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
