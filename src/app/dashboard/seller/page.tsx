import { requireRole } from "@/lib/auth";

export default async function SellerDashboard() {
  await requireRole(["SELLER"]);

  return (
    <main>
      <h1>Seller Dashboard</h1>
      <p>Manage your products and orders.</p>
    </main>
  );
}