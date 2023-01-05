import { json, LoaderArgs } from "@remix-run/node";
export async function loader() {
  return json({});
}

export default function ProjectDetailRoute() {
  return (
    <div>
      <h1>Project Detail Route</h1>
    </div>
  );
}
