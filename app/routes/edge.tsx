
import { LoaderFunction, json } from "@vercel/remix";
import test from "~/test.server";

export const loader: LoaderFunction = async ({ request }) => {

  return json(test());
};


export default function Edge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix@Edge</h1>
    </div>
  );
}
