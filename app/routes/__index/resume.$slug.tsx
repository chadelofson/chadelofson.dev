import { json, LoaderArgs } from "@remix-run/node";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function ResumeDetailRoute() {
  return (
    <div>
      <h1>Resume Detail Route</h1>
    </div>
  );
}
