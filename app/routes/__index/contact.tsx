import { ActionArgs, redirect } from "@remix-run/node";
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  return redirect(``);
}

export default function ContactRoute() {
  return (
    <div>
      <h1>Contact Me</h1>
    </div>
  );
}
