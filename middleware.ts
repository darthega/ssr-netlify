import { NextRequest } from "next/server";
import { MiddlewareRequest } from "@netlify/next";
// import { renderToString } from "@suits/ss-design-system/hydrate";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(nextRequest: NextRequest) {
  if (
    nextRequest.nextUrl.pathname.startsWith("/_next") ||
    nextRequest.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(nextRequest.nextUrl.pathname)
  ) {
    return;
  }

  // const middlewareRequest = new MiddlewareRequest(nextRequest as any);
  // const response = await middlewareRequest.next();
  // const baseHtml = await response.text();
  // const hydratedHtml = (await renderToString(baseHtml)).html;

  // response.text = () => Promise.resolve(hydratedHtml);

  // return response;

  const request = new MiddlewareRequest(nextRequest as any)
  
  return request.next()
}
