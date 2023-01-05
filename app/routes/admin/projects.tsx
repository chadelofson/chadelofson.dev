import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader(args: LoaderArgs) {
  return json({});
}

export default function AdminProjectsRoute() {
  return (
    <div>
      <h1>Projects</h1>
      <Outlet />
    </div>
  );
}
