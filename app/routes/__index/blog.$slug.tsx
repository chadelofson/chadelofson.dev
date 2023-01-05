import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function BlogDetailRoute() {
  return (
    <div>
      <h1>Blog Detail</h1>
    </div>
  );
}
