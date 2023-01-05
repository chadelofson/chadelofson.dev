import { json, LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function AdminPostsRoute() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}
