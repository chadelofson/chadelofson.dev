import { json, LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function AdminPostsListRoute() {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
