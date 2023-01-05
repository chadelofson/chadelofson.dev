import { json } from "@remix-run/node";

export async function loader() {
  return json({});
}

export default function BlogListRoute() {
  return (
    <div>
      <h1>Blog List</h1>
    </div>
  );
}
