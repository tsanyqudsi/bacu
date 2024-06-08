import { cors } from "hono/cors";
import { csrf } from 'hono/csrf'
import { prettyJSON } from 'hono/pretty-json'
import { app } from "@/server";
import { limiters } from "./rate-limit";
import { jsxRendererMiddleware } from "./jsx-renderer";

app.use("*", cors());
app.use("*", jsxRendererMiddleware)
app.use(limiters);
app.use(csrf());
app.use(prettyJSON())