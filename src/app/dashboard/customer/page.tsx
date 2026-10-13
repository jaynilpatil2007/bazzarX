import { requireRole } from "@/lib/auth";

export default async function CustomerDashboard() {
  await requireRole(["CUSTOMER"]);

  return (
    <main>
      <h1>Customer Dashboard</h1>
      <p>Browse products and manage your orders.</p>
    </main>
  );
}