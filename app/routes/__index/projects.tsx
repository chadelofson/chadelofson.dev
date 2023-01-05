import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  return json({});
}

export default function ProjectListRoute() {
  return (
    <div>
      <h1>Project Listings</h1>
    </div>
  );
}
