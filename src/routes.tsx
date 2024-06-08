import { serveStatic } from '@hono/node-server/serve-static'
import { app } from "./server";
import { NotFoundPage } from './jsx/pages/NotFound';

app.get("/", (c) => {
  return c.render(<p>hi</p>, { title: 'Home', lang: 'en' });
});

// Serve static files
app.get(
  '/public/*',
  serveStatic({ root: './', })
)

// Catch all routes for 404
app.get('*', (c) => {
  return c.render(<NotFoundPage />, { title: 'Not Found', lang: 'en' });
})

