import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { welcomeScript } from "./welcome-ascii";
export const app = new Hono();

export const server = (inputPort?: string) => {
  const usedPort = inputPort ?? 3000
  serve({
    fetch: app.fetch,
    port: Number(usedPort),
  }, (info) => {
    welcomeScript(info);
  })
}

