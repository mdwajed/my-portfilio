import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
export async function POST(req: Request) {
  const { email, passwprd } = await req.json();
  if (email === ADMIN_EMAIL && passwprd === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  }
  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
