import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY: string = (process.env.SECRET_KEY as string) || "secret";

export async function POST(req: Request) {
  const { userId, username, password } = await req.json();
  if (username === "" || password === "") {
    return new NextResponse(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    );
  }
  const token = jwt.sign({ userId, username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return NextResponse.json({ token });
}
