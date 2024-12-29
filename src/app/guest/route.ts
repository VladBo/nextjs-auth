import { signIn } from "@/auth";

export async function GET() {
  console.log("GET /guest redirect");
  return signIn("guest");
}
