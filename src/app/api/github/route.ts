import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function GET(_request: NextRequest) {
  const { getToken } = auth();

  const token = await getToken();

  console.log("token", token);

  return NextResponse.json({ token });
}
