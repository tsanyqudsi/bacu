import { cors } from "hono/cors";
import { app } from "@/server";
import { limiters } from "./rate-limit";

app.use("/api/*", cors());
app.use(limiters);