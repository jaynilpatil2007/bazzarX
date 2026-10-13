export {};

type UserRole = "ADMIN" | "SELLER" | "CUSTOMER";

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: UserRole;
    };
  }
}
