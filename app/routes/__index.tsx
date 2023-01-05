import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function AppLayoutRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
