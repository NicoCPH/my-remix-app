import { LoaderFunction, json } from "@vercel/remix";
import test from "~/test.server";

export const loader: LoaderFunction = async ({ request }) => {

  return json(test());
};

export default function TestRouteViaDefineRoutes() {

  return <h1>Test route added via remix.config.js</h1>;
}
