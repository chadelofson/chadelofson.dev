import { Outlet } from "@remix-run/react";
import AdminLayout from "~/components/AdminLayout";

export default function AdminLayoutRoute() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
