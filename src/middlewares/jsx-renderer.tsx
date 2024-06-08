import { BaseLayout } from "@/jsx/layouts/base";
import { jsxRenderer } from "hono/jsx-renderer";

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props: { title: string, lang: string }): Response
  }
}

export const jsxRendererMiddleware = jsxRenderer((props) => {
  return (
    <BaseLayout title={props.title} lang={props.lang}>
      {props.children}
    </BaseLayout>
  )
})