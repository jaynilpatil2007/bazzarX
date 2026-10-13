import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type Role = "ADMIN" | "SELLER" | "CUSTOMER";

export async function requireRole(allowedRoles: Role[]) {
  const { isAuthenticated, userId, sessionClaims } = await auth();

  if (!isAuthenticated || !userId) {
    redirect("/sign-in");
  }

  const role = sessionClaims?.metadata?.role;

  if (!role || !allowedRoles.includes(role)) {
    redirect("/unauthorized");
  }

  return {
    userId,
    role,
  };
}
