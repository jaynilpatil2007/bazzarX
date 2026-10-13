import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export type Role = "ADMIN" | "SELLER" | "CUSTOMER";

export async function requireRole(allowedRoles: Role[]) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user || !allowedRoles.includes(user.role)) {
    redirect("/unauthorized");
  }

  return user;
}
