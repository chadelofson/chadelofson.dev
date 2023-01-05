import { json, LoaderArgs } from "@remix-run/node";
export async function loader(args: LoaderArgs) {
  return json({});
}

export default function ResumeListRoute() {
  return (
    <div>
      <h1>Resume List Route</h1>
    </div>
  );
}
