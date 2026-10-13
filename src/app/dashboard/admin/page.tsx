import { requireRole } from "@/lib/auth";

export default async function AdminDashboard() {
  await requireRole(["ADMIN"]);

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Review products, manage users, and monitor orders.</p>
    </main>
  );
}