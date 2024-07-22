"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useAuthSession from "@/hooks/useAuthSession";
import { clearAuth } from "@/redux/auth/auth.slice";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAuthSession();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(clearAuth());
    router.push("/");
    toast.success("Logout successful");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="max-w-md sm:m-4">
        <CardHeader>
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Welcome {user?.username}
          </h1>
          <CardDescription className="text-center">
            This is the home route which is protected.
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button
            className="w-full"
            onClick={logoutUser}
            variant={"destructive"}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
