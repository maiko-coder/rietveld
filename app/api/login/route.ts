import { NextResponse } from "next/server";

const VALID_USERNAME = "Admin";
const VALID_PASSWORD = "Rietveld1!";
const SESSION_COOKIE = "rv-session";
const SESSION_TOKEN = "rietveld-auth-2026-internal";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, SESSION_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  return NextResponse.json({ ok: false, error: "Onjuiste gebruikersnaam of wachtwoord" }, { status: 401 });
}
