import { rateLimiter } from "hono-rate-limiter";

// const limits = [
//   { timeFrame: 10 * 60, max: 100, messageTime: "10 minutes" },
//   { timeFrame: 60 * 60, max: 250, messageTime: "1 hour" },
//   { timeFrame: 12 * 60 * 60, max: 500, messageTime: "12 hours" },
// ];

export const limiters = rateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  keyGenerator: (c) => "<unique_key>",
})
