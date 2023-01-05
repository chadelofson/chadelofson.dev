import { json, LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function AdminProjectsListRoute() {
  return (
    <div>
      <h1>Jobs</h1>
    </div>
  );
}
