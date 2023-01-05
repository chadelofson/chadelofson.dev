import { json, LoaderArgs } from "@remix-run/node";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function AdminProjectsDetailRoute() {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
