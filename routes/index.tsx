import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  // Redirects to the about page
  GET(req) {
    const url = new URL(req.url);
    return Response.redirect(`${url.protocol}//${url.host}/about`);
  },
};